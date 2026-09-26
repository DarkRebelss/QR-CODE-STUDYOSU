/**
 * QR Code Generator Engine - Data encoding, Canvas rendering, SVG building
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    // QR DATA ENCODING BUILDER
    function getFormattedQRData() {
        switch (app.activeQRType) {
            case 'url': {
                let val = (els.urlInput?.value || '').trim();
                if (!val) return null;
                if (!/^https?:\/\//i.test(val)) {
                    val = 'https://' + val;
                }
                return val;
            }
            case 'text': {
                const text = (els.textInput?.value || '').trim();
                return text || null;
            }
            case 'wifi': {
                const ssid = (els.wifiSsid?.value || '').trim();
                const pass = (els.wifiPassword?.value || '').trim();
                const enc = els.wifiEncryption?.value || 'WPA';
                const hidden = els.wifiHidden?.checked ? 'true' : 'false';
                if (!ssid) return null;
                return `WIFI:S:${ssid};T:${enc};P:${pass};H:${hidden};;`;
            }
            case 'whatsapp': {
                const country = (els.waCountry?.value || '+90').trim().replace('+', '');
                let phone = (els.waPhone?.value || '').trim().replace(/[^0-9]/g, '');
                const msg = encodeURIComponent((els.waMessage?.value || '').trim());
                if (!phone) return null;
                if (phone.startsWith('0')) phone = phone.substring(1);
                const fullPhone = phone.startsWith(country) ? phone : country + phone;
                return `https://wa.me/${fullPhone}${msg ? `?text=${msg}` : ''}`;
            }
            case 'email': {
                const to = (els.emailTo?.value || '').trim();
                const subject = encodeURIComponent((els.emailSubject?.value || '').trim());
                const body = encodeURIComponent((els.emailBody?.value || '').trim());
                if (!to) return null;
                return `mailto:${to}?subject=${subject}&body=${body}`;
            }
            case 'vcard': {
                const fn = (els.vcardFname?.value || '').trim();
                const ln = (els.vcardLname?.value || '').trim();
                const phone = (els.vcardPhone?.value || '').trim();
                const email = (els.vcardEmail?.value || '').trim();
                const comp = (els.vcardCompany?.value || '').trim();
                const title = (els.vcardTitle?.value || '').trim();
                const web = (els.vcardWebsite?.value || '').trim();
                if (!fn && !ln && !phone && !email) return null;
                return [
                    'BEGIN:VCARD',
                    'VERSION:3.0',
                    `N:${ln};${fn};;;`,
                    `FN:${fn} ${ln}`.trim(),
                    comp ? `ORG:${comp}` : '',
                    title ? `TITLE:${title}` : '',
                    phone ? `TEL:${phone}` : '',
                    email ? `EMAIL:${email}` : '',
                    web ? `URL:${web}` : '',
                    'END:VCARD'
                ].filter(Boolean).join('\n');
            }
            case 'phone': {
                const p = (els.phoneNumber?.value || '').trim();
                if (!p) return null;
                if (els.phoneAction?.value === 'sms') {
                    const sms = (els.smsBody?.value || '').trim();
                    return `smsto:${p}:${sms}`;
                }
                return `tel:${p}`;
            }
            default:
                return null;
        }
    }

    // PRESET SVG ICONS GENERATOR
    function getPresetIconImage(preset) {
        return new Promise((resolve) => {
            const svgIcons = {
                web: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
                whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.39 1.3-1.92 1.38-.49.07-1.12.1-3.27-.79-2.75-1.14-4.52-3.95-4.66-4.13-.13-.18-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.29.25-.28.55-.35.74-.35.19 0 .37 0 .53.01.17.01.39-.06.61.47.23.55.79 1.93.86 2.07.07.14.12.3.02.48-.09.19-.14.3-.28.46-.14.17-.3.37-.43.5-.14.13-.28.28-.12.56.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.88.27.14.45.2.52.31.06.13.06.74-.18 1.42z"/></svg>`,
                wifi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
                instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
                youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
                mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
                star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
            };

            const rawSvg = svgIcons[preset];
            if (!rawSvg) return resolve(null);

            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(rawSvg);
        });
    }

    // ADVANCED QR ENGINE (Custom Canvas + Vector SVG)
    async function generateCustomQRCode() {
        if (app.isGenerating) return;

        if (typeof QRCode === 'undefined') {
            showToast('QR Kod motoru yükleniyor, lütfen bekleyin...', 'warning');
            return;
        }

        const data = getFormattedQRData();
        if (!data) {
            showToast('Lütfen geçerli içerik bilgisi giriniz', 'warning', 'Eksik Bilgi');
            return;
        }

        app.isGenerating = true;
        els.qrCodeContainer.classList.add('generating');

        try {
            const colorPreset = document.querySelector('input[name="qr-color"]:checked')?.value || 'default';
            const size = parseInt(els.qrSizeSelect?.value || '512', 10);
            const margin = parseInt(els.qrMarginSelect?.value || '2', 10);
            const errLevelKey = els.qrErrorLevelSelect?.value || 'H';
            const errorLevel = QRCode.CorrectLevel[errLevelKey] || QRCode.CorrectLevel.H;
            const isTransparent = els.transparentBgCheckbox?.checked || false;

            // 1. Generate matrix model
            const tempDiv = document.createElement('div');
            const qrInstance = new QRCode(tempDiv, {
                text: data,
                width: 200,
                height: 200,
                correctLevel: errorLevel
            });

            const qrModel = qrInstance._oQRCode;
            if (!qrModel) {
                throw new Error('QR Matrix modeli oluşturulamadı.');
            }

            const moduleCount = qrModel.getModuleCount();
            const totalModules = moduleCount + margin * 2;
            const moduleSize = size / totalModules;

            // 2. Prepare Logo
            let activeLogo = app.customLogoImg;
            if (!activeLogo && els.presetIconSelect && els.presetIconSelect.value !== 'none') {
                activeLogo = await getPresetIconImage(els.presetIconSelect.value);
            }

            const centerIdx = Math.floor(moduleCount / 2);
            let logoRadiusModules = 0;
            if (activeLogo) {
                logoRadiusModules = Math.max(2, Math.floor(moduleCount * 0.12));
            }

            const isInLogoCutout = (r, c) => {
                if (!activeLogo || logoRadiusModules === 0) return false;
                return (
                    r >= centerIdx - logoRadiusModules &&
                    r <= centerIdx + logoRadiusModules &&
                    c >= centerIdx - logoRadiusModules &&
                    c <= centerIdx + logoRadiusModules
                );
            };

            // 3. Create High-Resolution Target Canvas
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            // Background
            let bgColor = '#ffffff';
            if (colorPreset === 'custom') {
                bgColor = els.customBgHex?.value || '#FFFFFF';
            }
            if (!isTransparent) {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, size, size);
            } else {
                ctx.clearRect(0, 0, size, size);
            }

            // Foreground Fill / Gradient Setup
            let fgFill = '#0f172a';
            let gradientDef = null;

            if (colorPreset === 'custom') {
                const isGrad = els.customGradientToggle ? els.customGradientToggle.checked : true;
                const c1 = els.customFgHex?.value || '#4F46E5';
                const c2 = els.customFg2Hex?.value || '#EC4899';
                if (isGrad) {
                    const grad = ctx.createLinearGradient(0, 0, size, size);
                    grad.addColorStop(0, c1);
                    grad.addColorStop(1, c2);
                    fgFill = grad;
                    gradientDef = { id: 'qrCustomGrad', c1, c2 };
                } else {
                    fgFill = c1;
                }
            } else if (colorPreset === 'indigo') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#5da8ff');
                grad.addColorStop(1, '#605dff');
                fgFill = grad;
                gradientDef = { id: 'qrIndigoGrad', c1: '#5da8ff', c2: '#605dff' };
            } else if (colorPreset === 'purple') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#605dff');
                grad.addColorStop(1, '#ad63f6');
                fgFill = grad;
                gradientDef = { id: 'qrPurpleGrad', c1: '#605dff', c2: '#ad63f6' };
            } else if (colorPreset === 'sunset') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#f97316');
                grad.addColorStop(1, '#ec4899');
                fgFill = grad;
                gradientDef = { id: 'qrSunsetGrad', c1: '#f97316', c2: '#ec4899' };
            } else if (colorPreset === 'emerald') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#10b981');
                grad.addColorStop(1, '#06b6d4');
                fgFill = grad;
                gradientDef = { id: 'qrEmeraldGrad', c1: '#10b981', c2: '#06b6d4' };
            } else if (colorPreset === 'gold') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#eab308');
                grad.addColorStop(1, '#ef4444');
                fgFill = grad;
                gradientDef = { id: 'qrGoldGrad', c1: '#eab308', c2: '#ef4444' };
            } else if (colorPreset === 'maroon') {
                const grad = ctx.createLinearGradient(0, 0, size, size);
                grad.addColorStop(0, '#b42e55');
                grad.addColorStop(1, '#7b1e3a');
                fgFill = grad;
                gradientDef = { id: 'qrMaroonGrad', c1: '#b42e55', c2: '#7b1e3a' };
            }

            ctx.fillStyle = fgFill;

            // Finder Patterns
            const isFinderPattern = (r, c) => {
                if (r < 7 && c < 7) return true;
                if (r < 7 && c >= moduleCount - 7) return true;
                if (r >= moduleCount - 7 && c < 7) return true;
                return false;
            };

            // Draw Modules
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount; col++) {
                    if (qrModel.isDark(row, col)) {
                        if (isInLogoCutout(row, col)) continue;

                        const x = (col + margin) * moduleSize;
                        const y = (row + margin) * moduleSize;

                        if (app.activeShape === 'rounded' && !isFinderPattern(row, col)) {
                            const radius = moduleSize * 0.42;
                            ctx.beginPath();
                            ctx.arc(x + moduleSize / 2, y + moduleSize / 2, radius, 0, Math.PI * 2);
                            ctx.fill();
                        } else {
                            ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(moduleSize), Math.ceil(moduleSize));
                        }
                    }
                }
            }

            // 4. Render Center Logo
            if (activeLogo) {
                const logoCutoutSize = (logoRadiusModules * 2 + 1) * moduleSize;
                const logoCenterPixelX = (centerIdx + margin + 0.5) * moduleSize;
                const logoCenterPixelY = (centerIdx + margin + 0.5) * moduleSize;

                const badgeRadius = logoCutoutSize * 0.55;
                ctx.save();
                ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(logoCenterPixelX, logoCenterPixelY, badgeRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(logoCenterPixelX, logoCenterPixelY, badgeRadius, 0, Math.PI * 2);
                ctx.stroke();

                const logoDrawSize = badgeRadius * 1.35;
                ctx.drawImage(
                    activeLogo,
                    logoCenterPixelX - logoDrawSize / 2,
                    logoCenterPixelY - logoDrawSize / 2,
                    logoDrawSize,
                    logoDrawSize
                );
            }

            // 5. Build Lossless Vector SVG String
            app.currentSVGString = buildVectorSVG({
                qrModel, moduleCount, margin, size,
                bgColor: isTransparent ? null : bgColor,
                fgFill: typeof fgFill === 'string' ? fgFill : '#605dff',
                gradientDef, activeShape: app.activeShape, activeLogo, centerIdx, logoRadiusModules
            });

            // 6. Update UI
            app.currentQRCanvas = canvas;
            els.qrCodeContainer.replaceChildren(canvas);
            els.qrCodeContainer.classList.remove('generating');
            els.downloadOptions.classList.remove('hidden');

            if (els.previewInfoBadge) {
                els.previewInfoBadge.textContent = `${size}×${size} px • PNG & SVG`;
            }

            app.currentQRData = {
                type: app.activeQRType,
                title: getHistoryTitle(app.activeQRType, data),
                data: data,
                thumbnail: canvas.toDataURL('image/png')
            };

            showToast('QR Kod başarıyla oluşturuldu!', 'success', 'Hazır');

        } catch (error) {
            console.error('QR Generation Error:', error);
            showToast('QR kod oluşturulurken bir hata meydana geldi: ' + error.message, 'error', 'Hata');
        } finally {
            app.isGenerating = false;
            els.qrCodeContainer.classList.remove('generating');
        }
    }
    app.generateCustomQRCode = generateCustomQRCode;

    // Build Vector SVG helper
    function buildVectorSVG({ qrModel, moduleCount, margin, size, bgColor, fgFill, gradientDef, activeShape, activeLogo, centerIdx, logoRadiusModules }) {
        const totalModules = moduleCount + margin * 2;
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalModules} ${totalModules}" width="${size}" height="${size}" shape-rendering="geometricPrecision">\n`;

        if (gradientDef) {
            svg += `  <defs>\n`;
            svg += `    <linearGradient id="${gradientDef.id}" x1="0%" y1="0%" x2="100%" y2="100%">\n`;
            svg += `      <stop offset="0%" stop-color="${gradientDef.c1}" />\n`;
            svg += `      <stop offset="100%" stop-color="${gradientDef.c2}" />\n`;
            svg += `    </linearGradient>\n`;
            svg += `  </defs>\n`;
        }
        
        if (bgColor) {
            svg += `  <rect width="${totalModules}" height="${totalModules}" fill="${bgColor}" />\n`;
        }

        const fillAttr = gradientDef ? `url(#${gradientDef.id})` : (typeof fgFill === 'string' ? fgFill : '#0f172a');
        svg += `  <g fill="${fillAttr}">\n`;

        for (let r = 0; r < moduleCount; r++) {
            for (let c = 0; c < moduleCount; c++) {
                if (qrModel.isDark(r, c)) {
                    if (activeLogo && logoRadiusModules > 0) {
                        if (
                            r >= centerIdx - logoRadiusModules &&
                            r <= centerIdx + logoRadiusModules &&
                            c >= centerIdx - logoRadiusModules &&
                            c <= centerIdx + logoRadiusModules
                        ) {
                            continue;
                        }
                    }
                    const x = c + margin;
                    const y = r + margin;
                    if (activeShape === 'rounded') {
                        svg += `    <circle cx="${x + 0.5}" cy="${y + 0.5}" r="0.42" />\n`;
                    } else {
                        svg += `    <rect x="${x}" y="${y}" width="1" height="1" />\n`;
                    }
                }
            }
        }
        svg += `  </g>\n`;

        if (activeLogo) {
            const cx = centerIdx + margin + 0.5;
            const cy = centerIdx + margin + 0.5;
            const badgeR = (logoRadiusModules * 2 + 1) * 0.55;
            svg += `  <circle cx="${cx}" cy="${cy}" r="${badgeR}" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.1" />\n`;
            if (activeLogo.src && activeLogo.src.startsWith('data:')) {
                const imgSize = badgeR * 1.35;
                svg += `  <image href="${activeLogo.src}" x="${cx - imgSize/2}" y="${cy - imgSize/2}" width="${imgSize}" height="${imgSize}" />\n`;
            }
        }

        svg += `</svg>`;
        return svg;
    }

    function getHistoryTitle(type, data) {
        switch (type) {
            case 'url': return data.replace(/^https?:\/\//i, '').split('/')[0];
            case 'wifi': return 'Wi-Fi: ' + (els.wifiSsid?.value || 'Ağ');
            case 'whatsapp': return 'WhatsApp: ' + (els.waPhone?.value || '');
            case 'email': return 'E-Posta: ' + (els.emailTo?.value || '');
            case 'vcard': return 'vCard: ' + (els.vcardFname?.value || '') + ' ' + (els.vcardLname?.value || '');
            case 'phone': return 'Telefon: ' + (els.phoneNumber?.value || '');
            default: return data.length > 25 ? data.substring(0, 25) + '...' : data;
        }
    }

    if (els.generateBtn) {
        els.generateBtn.addEventListener('click', generateCustomQRCode);
    }
});
