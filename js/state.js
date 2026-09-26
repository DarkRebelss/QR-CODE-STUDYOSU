/**
 * QR Kod Stüdyosu & Tarayıcı - Global State & DOM References
 * All shared state variables and element references.
 */
window.QRApp = {
    // Runtime state
    currentQRCanvas: null,
    currentSVGString: null,
    currentQRData: null,
    customLogoImg: null,
    activeQRType: 'url',
    activeShape: 'square',
    isGenerating: false,
    videoStream: null,
    scanAnimFrame: null,

    // DOM References (populated on DOMContentLoaded)
    els: {}
};

document.addEventListener('DOMContentLoaded', () => {
    const $ = (id) => document.getElementById(id);
    const app = window.QRApp;

    app.els = {
        // Mode Switcher
        tabModeGenerator: $('tabModeGenerator'),
        tabModeScanner: $('tabModeScanner'),
        tabModeHistory: $('tabModeHistory'),
        generatorSection: $('generatorSection'),
        scannerSection: $('scannerSection'),
        historySection: $('historySection'),

        // Generator
        qrTypeButtons: document.querySelectorAll('.qr-type-btn'),
        generateBtn: $('generate-btn'),
        qrCodeContainer: $('qr-code-container'),
        downloadOptions: $('download-options'),
        previewInfoBadge: $('preview-info-badge'),

        // Download & Action Buttons
        downloadPngBtn: $('download-png'),
        downloadSvgBtn: $('download-svg'),
        downloadJpegBtn: $('download-jpeg'),
        copyQrBtn: $('copy-qr-btn'),
        printQrBtn: $('print-qr-btn'),

        // Custom Color & Settings
        colorRadios: document.querySelectorAll('input[name="qr-color"]'),
        customColorControls: $('custom-color-controls'),
        customFgColor: $('custom-fg-color'),
        customFgHex: $('custom-fg-hex'),
        customFg2Color: $('custom-fg2-color'),
        customFg2Hex: $('custom-fg2-hex'),
        customFg2Container: $('custom-fg2-container'),
        customGradientToggle: $('custom-gradient-toggle'),
        customBgColor: $('custom-bg-color'),
        customBgHex: $('custom-bg-hex'),
        customBgContainer: $('custom-bg-container'),
        customGradientPreviewBar: $('custom-gradient-preview-bar'),
        labelFg1: $('label-fg1'),
        transparentBgCheckbox: $('transparent-bg'),

        // Shape & Logo
        shapeSquareBtn: $('shape-square-btn'),
        shapeRoundedBtn: $('shape-rounded-btn'),
        logoUpload: $('logo-upload'),
        removeLogoBtn: $('remove-logo-btn'),
        presetIconSelect: $('preset-icon-select'),

        // Size & Error
        qrSizeSelect: $('qr-size-select'),
        qrMarginSelect: $('qr-margin-select'),
        qrErrorLevelSelect: $('qr-error-level'),

        // Form Inputs
        urlInput: $('url-input'),
        pasteUrlBtn: $('paste-url-btn'),
        clearUrlBtn: $('clear-url-btn'),
        textInput: $('text-input'),
        textCharCount: $('text-char-count'),
        wifiSsid: $('wifi-ssid'),
        wifiPassword: $('wifi-password'),
        wifiEncryption: $('wifi-encryption'),
        wifiHidden: $('wifi-hidden'),
        wifiTogglePass: $('wifi-toggle-pass'),
        waCountry: $('wa-country'),
        waPhone: $('wa-phone'),
        waMessage: $('wa-message'),
        emailTo: $('email-to'),
        emailSubject: $('email-subject'),
        emailBody: $('email-body'),
        vcardFname: $('vcard-fname'),
        vcardLname: $('vcard-lname'),
        vcardPhone: $('vcard-phone'),
        vcardEmail: $('vcard-email'),
        vcardCompany: $('vcard-company'),
        vcardTitle: $('vcard-title'),
        vcardWebsite: $('vcard-website'),
        phoneNumber: $('phone-number'),
        phoneAction: $('phone-action'),
        smsTextContainer: $('sms-text-container'),
        smsBody: $('sms-body'),

        // Scanner
        scanTabUpload: $('scanTabUpload'),
        scanTabCamera: $('scanTabCamera'),
        scannerUploadView: $('scannerUploadView'),
        scannerCameraView: $('scannerCameraView'),
        scannerDropzone: $('scannerDropzone'),
        scannerFileInput: $('scannerFileInput'),
        scannerVideo: $('scannerVideo'),
        startCameraBtn: $('startCameraBtn'),
        stopCameraBtn: $('stopCameraBtn'),
        scannerResultCard: $('scannerResultCard'),
        scanResultType: $('scanResultType'),
        scanResultText: $('scanResultText'),
        scanResultOpenLink: $('scanResultOpenLink'),
        scanResultCopyBtn: $('scanResultCopyBtn'),
        scanResultEditBtn: $('scanResultEditBtn'),

        // History
        historyGrid: $('historyGrid'),
        historyEmptyState: $('historyEmptyState'),
        clearHistoryBtn: $('clearHistoryBtn'),
        historyBadgeCount: $('historyBadgeCount'),

        // Toast
        toastContainer: $('toast-container')
    };
});
