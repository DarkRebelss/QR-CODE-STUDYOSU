/**
 * Export & Download Handlers - PNG, SVG, JPEG, Copy, Print
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    if (els.downloadPngBtn) {
        els.downloadPngBtn.addEventListener('click', () => {
            if (!app.currentQRCanvas) {
                showToast('Lütfen önce bir QR kod oluşturun', 'warning');
                return;
            }
            const link = document.createElement('a');
            link.download = `qr-kod-${Date.now()}.png`;
            link.href = app.currentQRCanvas.toDataURL('image/png');
            link.click();
            showToast('PNG formatında başarıyla indirildi', 'success');

            if (app.currentQRData && typeof app.saveToHistory === 'function') {
                app.saveToHistory(app.currentQRData);
            }
        });
    }

    if (els.downloadSvgBtn) {
        els.downloadSvgBtn.addEventListener('click', () => {
            if (!app.currentSVGString) {
                showToast('Lütfen önce bir QR kod oluşturun', 'warning');
                return;
            }
            const blob = new Blob([app.currentSVGString], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `qr-kod-vektor-${Date.now()}.svg`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
            showToast('Vektörel SVG formatında başarıyla indirildi', 'success');

            if (app.currentQRData && typeof app.saveToHistory === 'function') {
                app.saveToHistory(app.currentQRData);
            }
        });
    }

    if (els.downloadJpegBtn) {
        els.downloadJpegBtn.addEventListener('click', () => {
            if (!app.currentQRCanvas) {
                showToast('Lütfen önce bir QR kod oluşturun', 'warning');
                return;
            }
            const jpgCanvas = document.createElement('canvas');
            jpgCanvas.width = app.currentQRCanvas.width;
            jpgCanvas.height = app.currentQRCanvas.height;
            const jCtx = jpgCanvas.getContext('2d');
            jCtx.fillStyle = '#ffffff';
            jCtx.fillRect(0, 0, jpgCanvas.width, jpgCanvas.height);
            jCtx.drawImage(app.currentQRCanvas, 0, 0);

            const link = document.createElement('a');
            link.download = `qr-kod-${Date.now()}.jpg`;
            link.href = jpgCanvas.toDataURL('image/jpeg', 0.95);
            link.click();
            showToast('JPEG formatında başarıyla indirildi', 'success');

            if (app.currentQRData && typeof app.saveToHistory === 'function') {
                app.saveToHistory(app.currentQRData);
            }
        });
    }

    if (els.copyQrBtn) {
        els.copyQrBtn.addEventListener('click', async () => {
            if (!app.currentQRCanvas) {
                showToast('Lütfen önce bir QR kod oluşturun', 'warning');
                return;
            }
            try {
                app.currentQRCanvas.toBlob(async (blob) => {
                    if (!blob) throw new Error('Blob oluşturulamadı');
                    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                    showToast('QR Kod panoya resim olarak kopyalandı! (Ctrl+V ile yapıştırabilirsiniz)', 'success', 'Kopyalandı');
                });
            } catch (err) {
                console.error(err);
                showToast('Tarayıcınız panoya resim kopyalamayı desteklemiyor veya izin verilmedi', 'error', 'Hata');
            }
        });
    }

    if (els.printQrBtn) {
        els.printQrBtn.addEventListener('click', () => {
            if (!app.currentQRCanvas) {
                showToast('Lütfen önce bir QR kod oluşturun', 'warning');
                return;
            }
            window.print();
        });
    }
});
