/**
 * History Management - LocalStorage based QR history
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = window.QRApp;
    const els = app.els;
    const HISTORY_KEY = 'qr_studio_history_v1';

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        } catch (_) {
            return [];
        }
    }

    function saveToHistory(item) {
        if (!item || !item.data) return;
        const history = getHistory();

        const existingIdx = history.findIndex(h => h.data === item.data && h.type === item.type);
        if (existingIdx !== -1) {
            history.splice(existingIdx, 1);
        }

        const newItem = {
            id: Date.now(),
            ...item,
            date: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
        };
        history.unshift(newItem);
        if (history.length > 12) history.pop();
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        updateHistoryBadge();

        if (els.historySection && !els.historySection.classList.contains('hidden')) {
            renderHistory();
        }
    }
    app.saveToHistory = saveToHistory;

    function updateHistoryBadge() {
        const history = getHistory();
        if (els.historyBadgeCount) {
            els.historyBadgeCount.textContent = history.length;
        }
    }

    function renderHistory() {
        const history = getHistory();
        updateHistoryBadge();

        if (!els.historyGrid || !els.historyEmptyState) return;

        if (history.length === 0) {
            els.historyGrid.innerHTML = '';
            els.historyEmptyState.classList.remove('hidden');
            return;
        }

        els.historyEmptyState.classList.add('hidden');
        els.historyGrid.innerHTML = history.map(item => `
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
                <div>
                    <div class="w-full h-36 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center p-2 mb-3 overflow-hidden">
                        <img src="${item.thumbnail}" alt="QR Kod" class="max-h-full max-w-full object-contain rounded">
                    </div>
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">${item.type}</span>
                        <span class="text-xs font-mono text-slate-400">${item.date}</span>
                    </div>
                    <p class="text-sm font-bold text-slate-800 dark:text-slate-100 truncate mb-1" title="${item.title}">${item.title}</p>
                    <p class="text-xs text-slate-500 font-mono truncate mb-3" title="${item.data}">${item.data}</p>
                </div>
                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button type="button" class="history-download-btn flex-1 py-1.5 px-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-100 transition flex items-center justify-center gap-1" data-thumb="${item.thumbnail}">
                        <i data-feather="download" class="w-3.5 h-3.5"></i> İndir
                    </button>
                    <button type="button" class="history-delete-btn p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 transition" data-id="${item.id}" title="Sil">
                        <i data-feather="trash" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>
        `).join('');

        // Listeners for history cards
        els.historyGrid.querySelectorAll('.history-download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const thumb = btn.getAttribute('data-thumb');
                const link = document.createElement('a');
                link.download = `qr-kod-gecmis-${Date.now()}.png`;
                link.href = thumb;
                link.click();
            });
        });

        els.historyGrid.querySelectorAll('.history-delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = Number(btn.getAttribute('data-id'));
                let history = getHistory();
                history = history.filter(h => h.id !== id);
                localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
                renderHistory();
                showToast('Öğe geçmişten silindi', 'info');
            });
        });

        if (window.feather) feather.replace();
    }
    app.renderHistory = renderHistory;

    if (els.clearHistoryBtn) {
        els.clearHistoryBtn.addEventListener('click', () => {
            if (confirm('Tüm QR kod geçmişinizi silmek istediğinize emin misiniz?')) {
                localStorage.removeItem(HISTORY_KEY);
                renderHistory();
                showToast('Geçmiş başarıyla temizlendi', 'info');
            }
        });
    }

    updateHistoryBadge();
});
