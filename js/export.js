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

            const dataUrl = app.currentQRCanvas.toDataURL('image/png');
            const qrTitle = (app.currentQRData && app.currentQRData.title) ? app.currentQRData.title : 'QR Kod';
            const qrData = (app.currentQRData && app.currentQRData.data) ? app.currentQRData.data : '';

            // Clean, isolated hidden iframe to print ONLY the QR code
            let printFrame = document.getElementById('qr-isolated-print-frame');
            if (printFrame) {
                printFrame.remove();
            }

            printFrame = document.createElement('iframe');
            printFrame.id = 'qr-isolated-print-frame';
            printFrame.style.position = 'fixed';
            printFrame.style.right = '0';
            printFrame.style.bottom = '0';
            printFrame.style.width = '0';
            printFrame.style.height = '0';
            printFrame.style.border = 'none';
            printFrame.style.zIndex = '-1000';
            document.body.appendChild(printFrame);

            const doc = printFrame.contentWindow.document;
            doc.open();
            doc.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>${qrTitle}</title>
                    <style>
                        @page {
                            size: auto;
                            margin: 15mm;
                        }
                        * {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                        }
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                            background: #ffffff;
                            color: #0f172a;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 90vh;
                        }
                        .print-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            text-align: center;
                            padding: 24px;
                            border: 1px dashed #cbd5e1;
                            border-radius: 16px;
                            max-width: 400px;
                            margin: 0 auto;
                        }
                        .qr-image {
                            width: 280px;
                            height: 280px;
                            object-fit: contain;
                            image-rendering: -webkit-optimize-contrast;
                            image-rendering: crisp-edges;
                            display: block;
                        }
                        .qr-heading {
                            margin-top: 16px;
                            font-size: 15px;
                            font-weight: 700;
                            color: #1e293b;
                            word-break: break-word;
                        }
                        .qr-caption {
                            margin-top: 4px;
                            font-size: 11px;
                            color: #64748b;
                            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                            max-width: 320px;
                            word-break: break-all;
                        }
                        .qr-footer {
                            margin-top: 12px;
                            font-size: 10px;
                            color: #94a3b8;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                        }
                    </style>
                </head>
                <body>
                    <div class="print-container">
                        <img class="qr-image" src="${dataUrl}" alt="QR Kod" />
                        <div class="qr-heading">${qrTitle}</div>
                        ${qrData ? `<div class="qr-caption">${qrData}</div>` : ''}
                        <div class="qr-footer">QR Kod Stüdyosu</div>
                    </div>
                </body>
                </html>
            `);
            doc.close();

            setTimeout(() => {
                printFrame.contentWindow.focus();
                printFrame.contentWindow.print();
            }, 250);
        });
    }
});
