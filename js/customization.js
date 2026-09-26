/**
 * Customization Controls - Colors, Shapes, Logos, Sub-tabs
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    // Sub-tabs switcher (Renkler / Logo / Şekil & Boyut)
    document.querySelectorAll('.setting-subtab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.setting-subtab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.getAttribute('data-subtab');
            document.querySelectorAll('.setting-panel').forEach(p => p.classList.add('hidden'));
            const targetPanel = document.getElementById(`subtab-panel-${tab}`);
            if (targetPanel) targetPanel.classList.remove('hidden');
        });
    });

    // Circular Color Swatches click
    document.querySelectorAll('.color-swatch-btn').forEach(swatch => {
        swatch.addEventListener('click', () => {
            document.querySelectorAll('.color-swatch-btn').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            const colorVal = swatch.getAttribute('data-color-val');
            const radio = document.querySelector(`input[name="qr-color"][value="${colorVal}"]`);
            if (radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    });

    // Update custom gradient & swatch preview bar
    function updateCustomColorPreview() {
        const isGrad = els.customGradientToggle ? els.customGradientToggle.checked : true;
        const c1 = els.customFgColor?.value || '#4F46E5';
        const c2 = els.customFg2Color?.value || '#EC4899';

        if (els.customGradientPreviewBar) {
            els.customGradientPreviewBar.style.background = isGrad
                ? `linear-gradient(135deg, ${c1}, ${c2})`
                : c1;
        }

        if (els.customFg2Container) {
            els.customFg2Container.classList.toggle('hidden', !isGrad);
        }

        if (els.labelFg1) {
            els.labelFg1.textContent = isGrad ? 'Ön Plan Başlangıç' : 'Ön Plan Rengi';
        }

        // Dynamically update the swatch on the "Özel Renk" radio card
        const customSwatch = document.querySelector('label[for="color-custom"] .swatch');
        if (customSwatch) {
            customSwatch.style.setProperty('--swatch-bg', isGrad ? `linear-gradient(135deg, ${c1}, ${c2})` : c1);
        }
    }
    app.updateCustomColorPreview = updateCustomColorPreview;

    els.colorRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            els.customColorControls.classList.toggle('hidden', radio.value !== 'custom');
            if (radio.value === 'custom') {
                updateCustomColorPreview();
            }
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    });

    // Custom Color 1 (Start Color) Hex Sync
    if (els.customFgColor && els.customFgHex) {
        els.customFgColor.addEventListener('input', () => {
            els.customFgHex.value = els.customFgColor.value.toUpperCase();
            updateCustomColorPreview();
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
        els.customFgHex.addEventListener('input', () => {
            if (/^#[0-9A-F]{6}$/i.test(els.customFgHex.value)) {
                els.customFgColor.value = els.customFgHex.value;
                updateCustomColorPreview();
                if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
            }
        });
    }

    // Custom Color 2 (End Color / Gradient) Hex Sync
    if (els.customFg2Color && els.customFg2Hex) {
        els.customFg2Color.addEventListener('input', () => {
            els.customFg2Hex.value = els.customFg2Color.value.toUpperCase();
            updateCustomColorPreview();
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
        els.customFg2Hex.addEventListener('input', () => {
            if (/^#[0-9A-F]{6}$/i.test(els.customFg2Hex.value)) {
                els.customFg2Color.value = els.customFg2Hex.value;
                updateCustomColorPreview();
                if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
            }
        });
    }

    // Gradient Mode Toggle
    if (els.customGradientToggle) {
        els.customGradientToggle.addEventListener('change', () => {
            updateCustomColorPreview();
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    }

    // Custom Background Color Hex Sync
    if (els.customBgColor && els.customBgHex) {
        els.customBgColor.addEventListener('input', () => {
            els.customBgHex.value = els.customBgColor.value.toUpperCase();
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
        els.customBgHex.addEventListener('input', () => {
            if (/^#[0-9A-F]{6}$/i.test(els.customBgHex.value)) {
                els.customBgColor.value = els.customBgHex.value;
                if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
            }
        });
    }

    if (els.transparentBgCheckbox) {
        els.transparentBgCheckbox.addEventListener('change', () => {
            if (els.customBgContainer) {
                els.customBgContainer.classList.toggle('opacity-30', els.transparentBgCheckbox.checked);
                els.customBgContainer.classList.toggle('pointer-events-none', els.transparentBgCheckbox.checked);
            }
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    }
    if (els.qrSizeSelect) {
        els.qrSizeSelect.addEventListener('change', () => { if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode(); });
    }
    if (els.qrMarginSelect) {
        els.qrMarginSelect.addEventListener('change', () => { if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode(); });
    }

    // Shape toggles
    if (els.shapeSquareBtn && els.shapeRoundedBtn) {
        els.shapeSquareBtn.addEventListener('click', () => {
            app.activeShape = 'square';
            els.shapeSquareBtn.classList.add('active', 'border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-600');
            els.shapeSquareBtn.classList.remove('border-slate-200', 'dark:border-slate-700', 'text-slate-600');
            els.shapeRoundedBtn.classList.remove('active', 'border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-600');
            els.shapeRoundedBtn.classList.add('border-slate-200', 'dark:border-slate-700', 'text-slate-600');
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
        els.shapeRoundedBtn.addEventListener('click', () => {
            app.activeShape = 'rounded';
            els.shapeRoundedBtn.classList.add('active', 'border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-600');
            els.shapeRoundedBtn.classList.remove('border-slate-200', 'dark:border-slate-700', 'text-slate-600');
            els.shapeSquareBtn.classList.remove('active', 'border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-950/60', 'text-indigo-600');
            els.shapeSquareBtn.classList.add('border-slate-200', 'dark:border-slate-700', 'text-slate-600');
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    }

    // Custom Logo File Upload
    if (els.logoUpload) {
        els.logoUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) {
                showToast('Lütfen geçerli bir görsel dosyası seçiniz', 'error');
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    app.customLogoImg = img;
                    els.presetIconSelect.value = 'none';
                    els.removeLogoBtn.classList.remove('hidden');
                    showToast('Özel logo başarıyla yüklendi', 'success');
                    if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    if (els.removeLogoBtn) {
        els.removeLogoBtn.addEventListener('click', () => {
            app.customLogoImg = null;
            els.logoUpload.value = '';
            els.removeLogoBtn.classList.add('hidden');
            els.presetIconSelect.value = 'none';
            showToast('Logo kaldırıldı', 'info');
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    }

    if (els.presetIconSelect) {
        els.presetIconSelect.addEventListener('change', () => {
            if (els.presetIconSelect.value !== 'none') {
                app.customLogoImg = null;
                els.logoUpload.value = '';
                els.removeLogoBtn.classList.remove('hidden');
            } else if (!app.customLogoImg) {
                els.removeLogoBtn.classList.add('hidden');
            }
            if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
        });
    }
});
