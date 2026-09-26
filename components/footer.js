class CustomFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="mt-16 border-t border-slate-800/90 bg-slate-950 text-slate-300 relative">
        <!-- Luminous accent top border -->
        <div class="h-[2px] w-full"
             style="background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); box-shadow: 0 0 12px rgba(99, 102, 241, 0.35);"></div>

        <div class="container mx-auto max-w-5xl px-4 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Left Column (Logo & Description) -->
          <div class="md:col-span-2">
            <div class="footer-logo flex items-center mb-4">
              <a href="index.html" class="inline-block transition-transform hover:scale-105" title="QR Kod Stüdyosu">
                <img src="assets/images/Logo.png?v=2" alt="QR Kod Stüdyosu Logo" class="h-14 sm:h-16 w-auto" style="object-fit: contain;">
              </a>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed max-w-md">
              URL, Wi-Fi, vCard, WhatsApp ve metinleriniz için yüksek kaliteli QR kodları oluşturun veya mevcut kodları kameranızla okuyun. %100 tarayıcı tabanlı, güvenli ve gizlilik odaklı.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold mb-4 text-slate-300 text-xs uppercase tracking-wider">Hızlı Gezinti</h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a href="#generator" class="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors py-0.5">
                  <i data-feather="zap" class="w-4 h-4 text-indigo-400"></i>
                  <span>QR Oluşturucu</span>
                </a>
              </li>
              <li>
                <a href="#features" class="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors py-0.5">
                  <i data-feather="star" class="w-4 h-4 text-indigo-400"></i>
                  <span>Özellikler</span>
                </a>
              </li>
              <li>
                <a href="#how" class="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors py-0.5">
                  <i data-feather="play-circle" class="w-4 h-4 text-indigo-400"></i>
                  <span>Nasıl Çalışır?</span>
                </a>
              </li>
              <li>
                <a href="#faq" class="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors py-0.5">
                  <i data-feather="help-circle" class="w-4 h-4 text-indigo-400"></i>
                  <span>SSS</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Support & Legal -->
          <div>
            <h4 class="font-bold mb-4 text-slate-300 text-xs uppercase tracking-wider">Destek & Bilgi</h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <button type="button" class="open-legal-modal text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors text-left py-0.5" data-modal="privacy">
                  <i data-feather="shield" class="w-4 h-4 text-indigo-400"></i>
                  <span>Gizlilik & KVKK</span>
                </button>
              </li>
              <li>
                <button type="button" class="open-legal-modal text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors text-left py-0.5" data-modal="terms">
                  <i data-feather="file-text" class="w-4 h-4 text-indigo-400"></i>
                  <span>Kullanım Şartları</span>
                </button>
              </li>
              <li>
                <a href="https://github.com/DarkRebelss" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors text-left py-0.5" title="DarkRebelss GitHub">
                  <i data-feather="github" class="w-4 h-4 text-indigo-400"></i>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright Bar -->
        <div class="border-t border-slate-900 text-slate-400 bg-slate-950/80">
          <div class="container mx-auto max-w-5xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-500">
              © ${year} QR Code Stüdyosu. Tüm hakları saklıdır.
            </p>
            <div class="flex items-center gap-4 text-xs">
              <button type="button" class="open-legal-modal text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition" data-modal="privacy">
                <i data-feather="shield" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>KVKK</span>
              </button>
              <span class="text-slate-700">•</span>
              <button type="button" class="open-legal-modal text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition" data-modal="terms">
                <i data-feather="file-text" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>Şartlar</span>
              </button>
              <span class="text-slate-700">•</span>
              <a href="https://github.com/DarkRebelss" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition" title="DarkRebelss GitHub">
                <i data-feather="github" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;

    // Modal listeners
    this.querySelectorAll('.open-legal-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalType = btn.getAttribute('data-modal');
        if (window.openLegalModal) {
          window.openLegalModal(modalType);
        }
      });
    });

    // Smooth scroll & mode switch for QR generator link
    const genLink = this.querySelector('a[href="#generator"]');
    if (genLink) {
      genLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof window.switchTopMode === 'function') {
          window.switchTopMode('generator');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try {
          history.pushState(null, '', '#generator');
        } catch (_) { }
      });
    }

    // Feather icons
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace();
    }
  }
}
customElements.define('custom-footer', CustomFooter);