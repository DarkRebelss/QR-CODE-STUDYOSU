/**
 * Legal & Contact Modals
 */
document.addEventListener('DOMContentLoaded', () => {
    window.openLegalModal = function (modalName) {
        const modal = document.getElementById(`modal-${modalName}`);
        if (modal) {
            modal.classList.add('is-open');
            if (window.feather && typeof window.feather.replace === 'function') {
                window.feather.replace();
            }
        }
    };

    function closeAllModals() {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('is-open'));
    }

    document.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeAllModals();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeAllModals();
            showToast('Mesajınız başarıyla iletildi. Teşekkür ederiz!', 'success', 'Geri Bildirim Alındı');
            contactForm.reset();
        });
    }
});
