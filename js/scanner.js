/**
 * QR Scanner & Reader - Camera, file upload, jsQR
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    if (els.scanTabUpload && els.scanTabCamera) {
        els.scanTabUpload.addEventListener('click', () => {
            els.scanTabUpload.classList.add('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
            els.scanTabUpload.classList.remove('text-slate-600', 'dark:text-slate-400');
            els.scanTabCamera.classList.remove('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
            els.scanTabCamera.classList.add('text-slate-600', 'dark:text-slate-400');

            els.scannerUploadView.classList.remove('hidden');
            els.scannerCameraView.classList.add('hidden');
            stopCamera();
        });

        els.scanTabCamera.addEventListener('click', () => {
            els.scanTabCamera.classList.add('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
            els.scanTabCamera.classList.remove('text-slate-600', 'dark:text-slate-400');
            els.scanTabUpload.classList.remove('bg-white', 'dark:bg-slate-800', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-sm');
            els.scanTabUpload.classList.add('text-slate-600', 'dark:text-slate-400');

            els.scannerCameraView.classList.remove('hidden');
            els.scannerUploadView.classList.add('hidden');
        });
    }

    // Image Upload / Drag & Drop Scan
    if (els.scannerDropzone && els.scannerFileInput) {
        els.scannerDropzone.addEventListener('click', () => els.scannerFileInput.click());

        els.scannerDropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            els.scannerDropzone.classList.add('drag-active');
        });

        els.scannerDropzone.addEventListener('dragleave', () => {
            els.scannerDropzone.classList.remove('drag-active');
        });

        els.scannerDropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            els.scannerDropzone.classList.remove('drag-active');
            const file = e.dataTransfer.files[0];
            if (file) decodeQRImageFile(file);
        });

        els.scannerFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) decodeQRImageFile(file);
        });
    }

    // Paste screenshot anywhere to scan
    window.addEventListener('paste', (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        for (const item of items) {
            if (item.type.startsWith('image/')) {
                const file = item.getAsFile();
                if (file) {
                    decodeQRImageFile(file);
                    showToast('Panodan yapıştırılan görsel taranıyor...', 'info');
                }
            }
        }
    });

    function decodeQRImageFile(file) {
        if (typeof jsQR === 'undefined') {
            showToast('QR Tarayıcı kütüphanesi yüklenemedi', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const scanCanvas = document.createElement('canvas');
                scanCanvas.width = img.width;
                scanCanvas.height = img.height;
                const sCtx = scanCanvas.getContext('2d');
                sCtx.drawImage(img, 0, 0);
                const imageData = sCtx.getImageData(0, 0, img.width, img.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: 'dontInvert'
                });

                if (code && code.data) {
                    displayScanResult(code.data);
                    showToast('QR Kod başarıyla çözüldü!', 'success');
                } else {
                    showToast('Görselde okunabilir bir QR kod tespit edilemedi', 'warning');
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // Camera Scan Handling
    if (els.startCameraBtn) els.startCameraBtn.addEventListener('click', startCamera);
    if (els.stopCameraBtn) els.stopCameraBtn.addEventListener('click', stopCamera);

    async function startCamera() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showToast('Tarayıcınız kamera erişimini desteklemiyor', 'error');
            return;
        }

        try {
            app.videoStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
            });
            els.scannerVideo.srcObject = app.videoStream;
            els.scannerVideo.setAttribute('playsinline', true);
            await els.scannerVideo.play();

            els.startCameraBtn.classList.add('hidden');
            els.stopCameraBtn.classList.remove('hidden');

            scanVideoFrameLoop();
        } catch (err) {
            console.error('Kamera Hatası:', err);
            showToast('Kameraya erişilemedi. Lütfen kamera izni verin.', 'error', 'Kamera İzni');
        }
    }

    function stopCamera() {
        if (app.scanAnimFrame) {
            cancelAnimationFrame(app.scanAnimFrame);
            app.scanAnimFrame = null;
        }
        if (app.videoStream) {
            app.videoStream.getTracks().forEach(track => track.stop());
            app.videoStream = null;
        }
        if (els.scannerVideo) {
            els.scannerVideo.srcObject = null;
        }
        if (els.startCameraBtn) els.startCameraBtn.classList.remove('hidden');
        if (els.stopCameraBtn) els.stopCameraBtn.classList.add('hidden');
    }
    app.stopCamera = stopCamera;

    function scanVideoFrameLoop() {
        if (!els.scannerVideo || els.scannerVideo.readyState !== els.scannerVideo.HAVE_ENOUGH_DATA) {
            app.scanAnimFrame = requestAnimationFrame(scanVideoFrameLoop);
            return;
        }

        const vCanvas = document.createElement('canvas');
        vCanvas.width = els.scannerVideo.videoWidth;
        vCanvas.height = els.scannerVideo.videoHeight;
        const vCtx = vCanvas.getContext('2d');
        vCtx.drawImage(els.scannerVideo, 0, 0, vCanvas.width, vCanvas.height);

        const vData = vCtx.getImageData(0, 0, vCanvas.width, vCanvas.height);
        const code = (typeof jsQR !== 'undefined') ? jsQR(vData.data, vData.width, vData.height) : null;

        if (code && code.data) {
            displayScanResult(code.data);
            stopCamera();
            showToast('QR Kod kameradan başarıyla okundu!', 'success');
            return;
        }

        app.scanAnimFrame = requestAnimationFrame(scanVideoFrameLoop);
    }

    function displayScanResult(text) {
        if (!els.scannerResultCard || !els.scanResultText) return;

        els.scannerResultCard.classList.remove('hidden');
        els.scanResultText.textContent = text;

        const isUrl = /^https?:\/\//i.test(text);
        const isWifi = /^WIFI:/i.test(text);
        const isVcard = /^BEGIN:VCARD/i.test(text);

        if (isUrl) {
            els.scanResultType.textContent = 'Bağlantı (URL) Tespit Edildi';
            els.scanResultOpenLink.href = text;
            els.scanResultOpenLink.classList.remove('hidden');
        } else {
            els.scanResultOpenLink.classList.add('hidden');
            if (isWifi) {
                els.scanResultType.textContent = 'Wi-Fi Ağ Bilgisi';
            } else if (isVcard) {
                els.scanResultType.textContent = 'Dijital Kartvizit (vCard)';
            } else {
                els.scanResultType.textContent = 'Metin / Veri';
            }
        }

        if (els.scanResultCopyBtn) {
            els.scanResultCopyBtn.onclick = () => {
                navigator.clipboard.writeText(text);
                showToast('Metin panoya kopyalandı', 'success');
            };
        }

        if (els.scanResultEditBtn) {
            els.scanResultEditBtn.onclick = () => {
                switchTopMode('generator');
                if (isUrl) {
                    document.querySelector('[data-qr-type="url"]')?.click();
                    if (els.urlInput) els.urlInput.value = text;
                } else {
                    document.querySelector('[data-qr-type="text"]')?.click();
                    if (els.textInput) els.textInput.value = text;
                }
                if (typeof app.generateCustomQRCode === 'function') app.generateCustomQRCode();
                showToast('QR içerik oluşturucuya yüklendi', 'info');
            };
        }

        if (window.feather) feather.replace();
    }
});
