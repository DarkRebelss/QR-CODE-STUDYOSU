/**
 * FAQ Accordion Handlers
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentItem = btn.closest('.faq-item');
            if (!currentItem) return;
            const isOpen = currentItem.classList.contains('is-open');

            // Close other open FAQ items
            document.querySelectorAll('.faq-item.is-open').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('is-open');
                }
            });

            // Toggle current FAQ item
            if (isOpen) {
                currentItem.classList.remove('is-open');
            } else {
                currentItem.classList.add('is-open');
            }
        });
    });
});
