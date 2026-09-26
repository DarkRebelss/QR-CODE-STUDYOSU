/**
 * App Entry Point - Initialization, dark mode, initial QR generation
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;

    // Set default URL
    if (els.urlInput && !els.urlInput.value) {
        els.urlInput.value = 'https://google.com';
    }

    // Initialize custom color preview
    if (typeof app.updateCustomColorPreview === 'function') {
        app.updateCustomColorPreview();
    }

    // Initial QR generation
    setTimeout(() => {
        if (typeof app.generateCustomQRCode === 'function') {
            app.generateCustomQRCode();
        }
    }, 300);

    // Ensure permanent dark mode
    document.documentElement.classList.add('dark');
    try {
        localStorage.removeItem('qr_theme');
    } catch (e) {}

    // Initialize Feather Icons
    if (window.feather) {
        feather.replace();
    }
});
