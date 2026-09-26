/**
 * Navigation - Mode switching, hash routing, tab management
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    function switchTopMode(mode) {
        [els.tabModeGenerator, els.tabModeScanner, els.tabModeHistory].forEach(btn => {
            btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
            btn.classList.add('text-slate-600', 'dark:text-slate-400');
        });

        els.generatorSection.classList.add('hidden');
        els.scannerSection.classList.add('hidden');
        els.historySection.classList.add('hidden');

        if (mode !== 'scanner' && typeof window.QRApp.stopCamera === 'function') {
            window.QRApp.stopCamera();
        }

        if (mode === 'generator') {
            els.tabModeGenerator.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
            els.tabModeGenerator.classList.remove('text-slate-600', 'dark:text-slate-400');
            els.generatorSection.classList.remove('hidden');
        } else if (mode === 'scanner') {
            els.tabModeScanner.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
            els.tabModeScanner.classList.remove('text-slate-600', 'dark:text-slate-400');
            els.scannerSection.classList.remove('hidden');
        } else if (mode === 'history') {
            els.tabModeHistory.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
            els.tabModeHistory.classList.remove('text-slate-600', 'dark:text-slate-400');
            els.historySection.classList.remove('hidden');
            if (typeof window.QRApp.renderHistory === 'function') {
                window.QRApp.renderHistory();
            }
        }

        if (window.feather) feather.replace();
    }

    window.switchTopMode = switchTopMode;

    els.tabModeGenerator.addEventListener('click', () => switchTopMode('generator'));
    els.tabModeScanner.addEventListener('click', () => switchTopMode('scanner'));
    els.tabModeHistory.addEventListener('click', () => switchTopMode('history'));

    // Hash navigation routing
    function handleHashNavigation() {
        const hash = window.location.hash.toLowerCase();
        if (hash === '#scanner') {
            switchTopMode('scanner');
        } else if (hash === '#history') {
            switchTopMode('history');
        } else if (hash === '#generator' || hash === '#generatorsection' || hash === '') {
            switchTopMode('generator');
            if (hash !== '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
    window.addEventListener('hashchange', handleHashNavigation);

    // Global listener for any QR generator navigation links
    document.querySelectorAll('a[href="#generator"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            switchTopMode('generator');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            try {
                history.pushState(null, '', '#generator');
            } catch (_) {}
        });
    });

    // Content Type Switching & Form Inputs
    els.qrTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            els.qrTypeButtons.forEach(b => {
                b.classList.remove('active', 'bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
                b.classList.add('text-slate-600', 'dark:text-slate-400');
            });
            btn.classList.add('active', 'bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
            btn.classList.remove('text-slate-600', 'dark:text-slate-400');

            app.activeQRType = btn.getAttribute('data-qr-type');

            document.querySelectorAll('.qr-input-form').forEach(f => f.classList.add('hidden'));
            const targetForm = document.getElementById(`form-type-${app.activeQRType}`);
            if (targetForm) targetForm.classList.remove('hidden');

            if (window.feather) feather.replace();
        });
    });

    // URL input helpers
    if (els.urlInput) {
        els.urlInput.addEventListener('input', () => {
            els.clearUrlBtn.classList.toggle('hidden', !els.urlInput.value);
        });
    }

    if (els.clearUrlBtn) {
        els.clearUrlBtn.addEventListener('click', () => {
            els.urlInput.value = '';
            els.clearUrlBtn.classList.add('hidden');
            els.urlInput.focus();
        });
    }

    if (els.pasteUrlBtn) {
        els.pasteUrlBtn.addEventListener('click', async () => {
            try {
                const text = await navigator.clipboard.readText();
                if (text && text.trim()) {
                    els.urlInput.value = text.trim();
                    els.clearUrlBtn.classList.remove('hidden');
                    showToast('URL panodan yapıştırıldı', 'success');
                } else {
                    showToast('Panoda geçerli metin bulunamadı', 'warning');
                }
            } catch (err) {
                showToast('Panoya erişim izni verilmedi', 'error', 'İzin Hatası');
            }
        });
    }

    // Text char count
    if (els.textInput) {
        els.textInput.addEventListener('input', () => {
            els.textCharCount.textContent = `${els.textInput.value.length} karakter`;
        });
    }

    // Wi-Fi password toggle
    if (els.wifiTogglePass) {
        els.wifiTogglePass.addEventListener('click', () => {
            const isPass = els.wifiPassword.type === 'password';
            els.wifiPassword.type = isPass ? 'text' : 'password';
            els.wifiTogglePass.innerHTML = isPass ? '<i data-feather="eye-off" class="w-4 h-4"></i>' : '<i data-feather="eye" class="w-4 h-4"></i>';
            if (window.feather) feather.replace();
        });
    }

    // Phone / SMS toggle
    if (els.phoneAction) {
        els.phoneAction.addEventListener('change', () => {
            els.smsTextContainer.classList.toggle('hidden', els.phoneAction.value !== 'sms');
        });
    }

    // Live Debounced Auto-Update on Input
    let debounceTimer = null;
    const triggerLiveUpdate = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (typeof window.QRApp.generateCustomQRCode === 'function') {
                window.QRApp.generateCustomQRCode();
            }
        }, 450);
    };

    [els.urlInput, els.textInput, els.wifiSsid, els.wifiPassword, els.wifiEncryption, els.wifiHidden, els.waCountry, els.waPhone, els.waMessage, els.emailTo, els.emailSubject, els.emailBody, els.vcardFname, els.vcardLname, els.vcardPhone, els.vcardEmail, els.vcardCompany, els.vcardTitle, els.vcardWebsite, els.phoneNumber, els.phoneAction, els.smsBody].forEach(el => {
        if (el) {
            el.addEventListener('input', triggerLiveUpdate);
            el.addEventListener('change', triggerLiveUpdate);
        }
    });
});
