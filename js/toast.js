/**
 * Toast Notification System
 */
window.showToast = function (message, type = 'info', title = '', duration = 3200) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const icons = {
        success: '✓',
        error: '✕',
        warning: '!',
        info: 'i'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || 'i'}</div>
        <div class="toast-content">
            ${title ? `<div class="toast-title">${title}</div>` : ''}
            <div class="toast-message">${message}</div>
        </div>
        <button type="button" class="toast-close" aria-label="Kapat">&times;</button>
        <div class="toast-progress"></div>
    `;

    toastContainer.appendChild(toast);

    // Slide in
    requestAnimationFrame(() => toast.classList.add('show'));

    const closeBtn = toast.querySelector('.toast-close');
    const removeToast = () => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentElement) toast.remove();
        }, 350);
    };

    closeBtn.addEventListener('click', removeToast);

    const timer = setTimeout(removeToast, duration);
    toast.addEventListener('mouseenter', () => clearTimeout(timer));
};
