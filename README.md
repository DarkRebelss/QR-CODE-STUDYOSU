<div id="top">

<div align="center">
<h1>QR KOD STÜDYOSU & TARAYICI</h1>
<p><em>Profesyonel, Özelleştirilebilir ve Gizlilik Odaklı Vektörel QR Kod Oluşturucu & Kamera Tarayıcı</em></p>

<!-- Language Switcher Bar -->
<p>
  <b>🌍 Dil Seçeneği / Language:</b>
  <a href="#turkish-docs"><b>🇹🇷 Türkçe</b></a> •
  <a href="#english-docs"><b>🇬🇧 English</b></a>
</p>

<img alt="version" src="https://img.shields.io/badge/version-2.0.0-0080ff.svg?style=flat&logo=git&logoColor=white" style="margin: 0px 2px;">
<img alt="platform" src="https://img.shields.io/badge/platform-Web_/_Browser-blueviolet.svg?style=flat" style="margin: 0px 2px;">
<img alt="status" src="https://img.shields.io/badge/status-active-success.svg?style=flat" style="margin: 0px 2px;">
<img alt="privacy" src="https://img.shields.io/badge/privacy-100%25_Client_Side-success.svg?style=flat" style="margin: 0px 2px;">
<img alt="license" src="https://img.shields.io/badge/license-MIT-green.svg?style=flat" style="margin: 0px 2px;">

<p><em>Geliştirilen araçlar ve teknolojiler / Built with tools & technologies:</em></p>
<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" style="margin: 0px 2px;">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&logo=CSS3&logoColor=white" style="margin: 0px 2px;">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript_ES6+-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" style="margin: 0px 2px;">
<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=flat&logo=Tailwind-CSS&logoColor=white" style="margin: 0px 2px;">
<img alt="Feather Icons" src="https://img.shields.io/badge/Feather_Icons-24292e.svg?style=flat&logo=Feather&logoColor=white" style="margin: 0px 2px;">
<img alt="jsQR" src="https://img.shields.io/badge/jsQR-Engine-ff69b4.svg?style=flat" style="margin: 0px 2px;">
</div>

<br>
<hr>

<a id="turkish-docs" name="turkish-docs"></a>
# 🇹🇷 Türkçe Dokümantasyon

<p align="right">
  <a href="#english-docs">🇬🇧 Switch to English Documentation</a> •
  <a href="#top">⬆ Başa Dön</a>
</p>

## İçindekiler
- [Genel Bakış](#tr-genel-bakis)
  - [Neden QR Kod Stüdyosu?](#tr-neden-qr-kod-studyosu)
  - [Temel Yetenekler ve Özellikler](#tr-ozellikler)
- [Desteklenen İçerik Türleri](#tr-icerik-turleri)
- [Sistem Mimarisi ve Çalışma Mantığı](#tr-mimari)
- [Proje Dizin Yapısı](#tr-dizin)
- [Kurulum ve Çalıştırma Adımları](#tr-kurulum)
  - [1. Ön Gereksinimler](#tr-gereksinimler)
  - [2. Depoyu İndirme](#tr-depo-indirme)
  - [3. Çalıştırma Yöntemleri (XAMPP / VS Code / Python)](#tr-calistirma)
- [Kullanım Rehberi](#tr-kullanim)
  - [A) QR Kod Oluşturma ve Canlı Önizleme](#tr-olusturma)
  - [B) Logo, Renk ve Şekil Özelleştirmeleri](#tr-ozellestirme)
  - [C) Vektörel SVG ve Yüksek Çözünürlüklü Dışa Aktarma](#tr-disa-aktarma)
  - [D) Kamera ve Dosyadan QR Tarayıcı](#tr-tarayici)
- [Teknik Detaylar & Güvenlik Mimarisi](#tr-teknik-detaylar)
- [Sık Karşılaşılan Sorunlar ve Çözümleri](#tr-sorunlar)
- [Katkıda Bulunanlar](#tr-katkida-bulunanlar)
- [Lisans ve Teşekkür](#tr-lisans)

---

<a id="tr-genel-bakis" name="tr-genel-bakis"></a>
## 📖 Genel Bakış

**QR Kod Stüdyosu & Tarayıcı**, modern web teknolojileri ile geliştirilmiş, tamamen tarayıcı üzerinde (%100 istemci taraflı) çalışan, üst düzey görsel özelleştirme ve kamera tabanlı tarama yeteneklerine sahip **yeni nesil QR kod yönetim platformudur**.

Geleneksel, statik ve sade QR kod oluşturucuların aksine; kullanıcılarına canlı önizleme, gradyan renk geçişleri, şeffaf arka plan, kurumsal logo entegrasyonu, hata düzeltme seviyesi denetimi ve **kayıpsız vektörel SVG** formatında çıktı alma imkânı sunar.

---

<a id="tr-neden-qr-kod-studyosu" name="tr-neden-qr-kod-studyosu"></a>
### 🌟 Neden QR Kod Stüdyosu?

Piyasadaki birçok QR oluşturucu verilerinizi harici sunuculara gönderir, üçüncü taraf yönlendirme linkleri (dinamik redirect) ekleyerek gizliliğinizi riske atar veya yüksek çözünürlüklü indirmeler için ücret talep eder. **QR Kod Stüdyosu** bu problemleri ortadan kaldırır:

* 🔒 **%100 Gizlilik ve Sıfır Veri Sızıntısı:** Girdiğiniz parolalar, Wi-Fi şifreleri, vCard rehber bilgileri veya URL'ler hiçbir sunucuya iletilmez. Tüm kodlama ve çözme işlemleri doğrudan tarayıcınızın JavaScript motorunda gerçekleşir.
* 📐 **Kayıpsız Vektörel (SVG) Dışa Aktarma:** Billboard, afiş, broşür, kartvizit ve matbaa baskıları için sonsuz ölçeklenebilir saf vektörel SVG dosyaları üretir.
* 🎨 **Gelişmiş Görsel Özelleştirme:** Özel gradyan paletleri, nokta desenleri (kare, yumuşatılmış, yuvarlak), köşe göz tasarımları ve merkez logo yükleme seçenekleri.
* 📷 **Dahili Çok Yönlü Tarayıcı:** Web kamerası veya cep telefonu kamerasıyla anlık tarama yapabilir, görsel dosyalarını sürükleyip bırakabilir ya da panodan (Ctrl+V) görsel yapıştırabilirsiniz.
* 💾 **İstemci Taraflı Geçmiş (LocalStorage):** Oluşturduğunuz son tasarımlar tarayıcınızın yerel hafızasında saklanır; tek tıkla eski kodlarınızı yeniden yükleyebilirsiniz.

---

<a id="tr-ozellikler" name="tr-ozellikler"></a>
### 📊 Temel Yetenekler ve Özellikler

| Özellik | Açıklama |
|---|---|
| **Çalışma Modeli** | %100 İstemci Taraflı (Client-Side), Sıfır Sunucu Bağımlılığı |
| **Dışa Aktarma Formatları** | Vektörel SVG, Yüksek Çözünürlüklü PNG, Optimize JPEG |
| **Kamera & Dosya Tarayıcı** | Canlı web kamerası akışı, dosya seçimi, drag & drop, pano yapıştırma |
| **Özelleştirme Seçenekleri** | Renk gradyanları, şeffaf arka plan, nokta şekli, köşe göz stili, merkez logo |
| **Hata Düzeltme Seviyeleri** | L (%7), M (%15), Q (%25), H (%30 - Logolu baskılar için ideal) |
| **Tasarım Mimarisi** | Ultra modern karanlık tema (Dark Mode), cam efektleri (Glassmorphism), mikro animasyonlar |
| **Mobil Uyumluluk** | Masaüstü, tablet ve mobil cihazlarla tam uyumlu (Responsive) |

---

<a id="tr-icerik-turleri" name="tr-icerik-turleri"></a>
## 🎯 Desteklenen İçerik Türleri

Uygulama, her kullanım senaryosu için uluslararası standartlara (RFC formatları) uygun kodlama yapar:

1. 🌐 **Web Sitesi URL:** `https://...` bağlantıları için optimize edilmiş yönlendirme.
2. 📝 **Düz Metin:** Notlar, açıklamalar, seri numaraları ve özel metinler.
3. 📶 **Wi-Fi Ağı:** `WPA/WPA2/WPA3`, `WEP` veya şifresiz ağlar için tek dokunuşla otomatik bağlanma kodu (`WIFI:S:...;T:...;P:...;;`).
4. 👤 **vCard (Kişi Kartı):** İsim, soyisim, telefon, e-posta, unvan ve şirket bilgilerini doğrudan telefon rehberine ekler (`BEGIN:VCARD...`).
5. 💬 **WhatsApp:** Belirtilen telefon numarasına önceden tanımlanmış hazır mesajla sohbet başlatma linki (`https://wa.me/...`).
6. 📱 **SMS:** Numara ve mesaj metni içeren hazır SMS şablonu.
7. ✉️ **E-Posta:** Alıcı adresi, e-posta konusu ve gövde metnini içeren otomatik `mailto:` bağlantısı.
8. 📞 **Telefon:** Tek tıkla arama yapmayı sağlayan `tel:` protokolü.
9. 📅 **Etkinlik (Event):** Başlık, başlangıç/bitiş saati ve konum içeren takvim aktivitesi (`BEGIN:VEVENT...`).

---

<a id="tr-mimari" name="tr-mimari"></a>
## 🏗️ Sistem Mimarisi ve Çalışma Mantığı

```
                     ┌───────────────────────────────────────────┐
                     │    Kullanıcı Girdisi / Form Parametreleri  │
                     └─────────────────────┬─────────────────────┘
                                           │
              ┌────────────────────────────┴────────────────────────────┐
              ▼                                                         ▼
  ┌────────────────────────┐                               ┌────────────────────────┐
  │  Formatlayıcı Motor    │                               │  Özelleştirme Motoru   │
  │  (URL, Wi-Fi, vCard..) │                               │  (Renk, Şekil, Logo..) │
  └───────────┬────────────┘                               └───────────┬────────────┘
              │                                                         │
              └────────────────────────────┬────────────────────────────┘
                                           │
                                           ▼
                     ┌───────────────────────────────────────────┐
                     │          QR Matris Hesaplama              │
                     │          Hata Düzeltme: L/M/Q/H           │
                     └─────────────────────┬─────────────────────┘
                                           │
                 ┌─────────────────────────┴─────────────────────────┐
                 ▼                                                   ▼
  ┌───────────────────────────────┐                 ┌───────────────────────────────┐
  │   Canvas Render Motoru        │                 │   Vektörel SVG İnşa Motoru    │
  │   - Dinamik Çözünürlük        │                 │   - Saf Vektörel Düğümler     │
  │   - Radyal/Doğrusal Gradyan   │                 │   - Matematiksel Şekillendirme│
  │   - Pikselsiz Logo Bindirme   │                 │   - Kusursuz Baskı Kalitesi   │
  └──────────────┬────────────────┘                 └───────────────┬───────────────┘
                 │                                                  │
                 ▼                                                  ▼
  ┌───────────────────────────────┐                 ┌───────────────────────────────┐
  │  Çıktı: PNG / JPEG / Pano     │                 │       Çıktı: Kayıpsız SVG     │
  └───────────────────────────────┘                 └───────────────────────────────┘
```

---

<a id="tr-dizin" name="tr-dizin"></a>
## 📂 Proje Dizin Yapısı

Modüler, bakımı kolay ve profesyonel endüstri standartlarına uygun mimari:

```bash
QR-CODE-STUDYOSU/
├── assets/                       # Statik medya ve grafik kaynakları
│   ├── favicon/                  # Çoklu çözünürlükte modern favicon setleri
│   │   ├── apple-touch-icon.png  # Apple iOS ana ekran ikonu (180x180)
│   │   ├── favicon-16x16.png     # Küçük tarayıcı sekme ikonu (16x16)
│   │   ├── favicon-32x32.png     # Standart sekme ikonu (32x32)
│   │   └── favicon.ico           # Çok katmanlı Windows/Tarayıcı ikonu
│   └── images/                   # Kurumsal marka görselleri
│       └── Logo.png              # QR Kod Stüdyosu şeffaf marka logosu
├── components/                   # Tekrar kullanılabilir Web Bileşenleri
│   └── footer.js                 # Lüks gradyan hatlı <custom-footer> bileşeni
├── css/                          # Modüler CSS stil katmanları
│   ├── animations.css            # Parlama, nabız ve geçiş animasyonları
│   ├── components.css            # Kartlar, girdi alanları ve buton stilleri
│   ├── main.css                  # Temel CSS değişkenleri ve zemin stilleri
│   ├── modal.css                 # Yasal metin ve iletişim modalları
│   ├── scanner.css               # Kamera vizörü ve tarayıcı efektleri
│   └── toast.css                 # Bildirim balonları sistemi
├── js/                           # Bağımsız ES6+ JavaScript modülleri
│   ├── app.js                    # Uygulama başlatıcı ve dark mode denetleyicisi
│   ├── customization.js          # Renk, gradyan, şekil ve logo kontrolleri
│   ├── export.js                 # PNG, JPEG, SVG indirme, kopyalama ve yazdırma
│   ├── faq.js                    # İnteraktif SSS akordeon yöneticisi
│   ├── generator.js              # Çekirdek QR kodlama ve vektörel SVG motoru
│   ├── history.js                # Yerel hafıza (LocalStorage) geçmiş yönetimi
│   ├── modals.js                 # Gizlilik, Şartlar ve İletişim modal pencereleri
│   ├── navigation.js             # Sekme geçişleri, URL hash yönlendirme sistemi
│   ├── scanner.js                # Canlı kamera, görsel yükleme ve jsQR entegrasyonu
│   ├── state.js                  # Global uygulama durumu (window.QRApp) ve DOM önbelleği
│   └── toast.js                  # Dinamik bildirim sistemi (showToast)
├── .gitignore                    # Git hariç tutma kuralları
├── index.html                    # SEO uyumlu tek sayfa uygulama ana şablonu
├── LICENSE                       # MIT Açık Kaynak Lisansı
└── README.md                     # Kapsamlı proje dokümantasyonu (bu dosya)
```

---

<a id="tr-kurulum" name="tr-kurulum"></a>
## 🚀 Kurulum ve Çalıştırma Adımları

<a id="tr-gereksinimler" name="tr-gereksinimler"></a>
### 1. Ön Gereksinimler
* Modern bir web tarayıcısı (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari veya Brave).
* Proje tamamen istemci taraflı (Vanilla JS) olduğundan Node.js veya veritabanı kurulumu gerektirmez.

---

<a id="tr-depo-indirme" name="tr-depo-indirme"></a>
### 2. Depoyu İndirme

Terminal veya komut istemcisinde depoyu klonlayın:

```powershell
# Depoyu klonlayın
git clone https://github.com/DarkRebelss/QR-CODE-STUDYOSU.git

# Proje dizinine geçin
cd QR-CODE-STUDYOSU
```

---

<a id="tr-calistirma" name="tr-calistirma"></a>
### 3. Çalıştırma Yöntemleri

Projeyi aşağıdaki yöntemlerden dilediğinizle anında başlatabilirsiniz:

#### Yöntem A: Python Yerel Sunucusu (En Hızlı)
```powershell
python -m http.server 8000
```
Tarayıcınızdan **`http://localhost:8000`** adresine gidin.

#### Yöntem B: XAMPP / WampServer / Apache
Projeyi `C:\xampp\htdocs\QR Code` (veya sunucu kök klasörünüze) kopyalayın, Apache servisini başlatın ve tarayıcıdan **`http://localhost/QR%20Code/`** adresini açın.

#### Yöntem C: VS Code Live Server
Visual Studio Code üzerinde projeyi açıp `index.html` dosyasına sağ tıklayın ve **"Open with Live Server"** seçeneğini seçin.

---

<a id="tr-kullanim" name="tr-kullanim"></a>
## 💡 Canlı Kullanım Rehberi

<a id="tr-olusturma" name="tr-olusturma"></a>
### A) QR Kod Oluşturma ve Canlı Önizleme
1. Üst menüden kodlamak istediğiniz türü seçin (URL, Wi-Fi, vCard, vb.).
2. İlgili girdi alanlarına bilgilerinizi yazın.
3. Yazdığınız anda sağ paneldeki **Canlı Önizleme** ekranında QR kod otomatik olarak güncellenir.

<a id="tr-ozellestirme" name="tr-ozellestirme"></a>
### B) Logo, Renk ve Şekil Özelleştirmeleri
* **Renk Paletleri:** Tek renk veya zengin gradyan geçişleri seçebilir, hex koduyla tam istediğiniz kurumsal rengi belirleyebilirsiniz.
* **Şeffaf Arka Plan:** Tasarımlarınızın üzerine kusursuz yerleştirmek için şeffaf arka plan anahtarını açabilirsiniz.
* **Logo Entegrasyonu:** Kurum logonuzu veya sosyal medya ikonunuzu yükleyin. Akıllı sistem logonun arkasına otomatik beyaz koruma çemberi ekleyerek QR kodun okunabilirliğini garanti eder.
* **Nokta & Göz Stilleri:** Kare pikseller yerine yumuşatılmış veya tam dairesel noktaları tercih edebilirsiniz.

<a id="tr-disa-aktarma" name="tr-disa-aktarma"></a>
### C) Vektörel SVG ve Yüksek Çözünürlüklü Dışa Aktarma
* **SVG İndir:** Adobe Illustrator, CorelDraw, Figma veya matbaa makineleri için %100 vektörel dosya üretir.
* **PNG İndir:** Seçtiğiniz çözünürlükte (300px - 1000px) kristal netliğinde raster görsel indirir.
* **Panoya Kopyala:** Görseli kaydetmeden doğrudan WhatsApp, Photoshop veya Word içerisine yapıştırmak için tek tıkla kopyalar.

<a id="tr-tarayici" name="tr-tarayici"></a>
### D) Kamera ve Dosyadan QR Tarayıcı
* **Kamera ile Tara:** "Kamera ile Tara" sekmesine geçin ve izin verin. Akıllı vizör kameranızdaki QR kodu milisaniyeler içinde yakalar.
* **Görsel Yükle:** Cihazınızdaki herhangi bir QR kod görselini yükleyin veya sürükleyip bırakın.
* **Pano Yapıştırma:** Ekran görüntüsü aldıysanız sayfadayken `Ctrl+V` yaparak anında okutabilirsiniz.

---

<a id="tr-teknik-detaylar" name="tr-teknik-detaylar"></a>
## 🛡️ Teknik Detaylar & Güvenlik Mimarisi

* **İstemci Taraflı Veri Bütünlüğü:** Tüm QR matris üretimi tarayıcının yerel Canvas ve DOM ağacında gerçekleşir. Verileriniz sunucuya gönderilmez.
* **Hata Düzeltme Algoritması (Reed-Solomon):** Yüksek hata düzeltme seviyesi (H - %30), QR kodun %30'a kadar olan kısmı logo ile kaplansa veya hasar görse dahi kameralar tarafından kusursuz okunmasını sağlar.
* **Vektörel Matematiksel Ayrıştırma:** SVG çıktısı oluşturulurken her piksel bağımsız bir SVG dairesi veya yolu (path) olarak çizilir, böylece hiçbir raster bozulma oluşmaz.

---

<a id="tr-sorunlar" name="tr-sorunlar"></a>
## 🛠️ Sık Karşılaşılan Sorunlar ve Çözümleri

#### 1. QR Kodum Tarayıcı Tarafından Okunmuyor:
* **Çözüm:** Çok karmaşık veya büyük logolar eklediyseniz hata düzeltme seviyesini "Yüksek (H - %30)" olarak ayarlayın veya zemin ile desen arasındaki kontrastı artırın (koyu desen, açık zemin önerilir).

#### 2. Kamera Açılmıyor:
* **Çözüm:** Tarayıcınızın adres çubuğundaki kilit simgesine tıklayarak kamera izninin verildiğinden emin olun. Modern tarayıcılar kamera erişimi için `HTTPS` veya `localhost` bağlantısı şart koşar.

#### 3. SVG Çıktısı Matbaada Açılmıyor:
* **Çözüm:** Üretilen SVG standart XML tabanlı vektörel biçimdedir. Adobe Illustrator veya Inkscape ile doğrudan "File > Open" diyerek açabilirsiniz.

---

<a id="tr-katkida-bulunanlar" name="tr-katkida-bulunanlar"></a>
## 👥 Katkıda Bulunanlar

QR Kod Stüdyosu & Tarayıcı projesinin mimarisi, tasarımı ve geliştirmesi:

<div align="center">
  <table>
    <tr>
      <td align="center" width="180">
        <a href="https://github.com/DarkRebelss">
          <img src="https://avatars.githubusercontent.com/u/232658231?v=4" width="100" height="100" style="border-radius: 50%;" alt="DarkRebelss"/><br /><br />
          <sub><b>DarkRebelss</b></sub>
        </a><br />
        <a href="https://github.com/DarkRebelss" title="Proje Sahibi ve Baş Geliştirici">👑 Kurucu / Lead Dev</a>
      </td>
    </tr>
  </table>
</div>

---

<a id="tr-lisans" name="tr-lisans"></a>
## 📜 Lisans ve Teşekkür

* Bu proje **[MIT Lisansı](LICENSE)** altında açık kaynak olarak korunmaktadır.
* Proje Sahibi & Geliştiricisi: **[DarkRebelss](https://github.com/DarkRebelss)**
* Arayüz ikonları [Feather Icons](https://feathericons.com/) ve modern stil sistemi [Tailwind CSS](https://tailwindcss.com/) ile güçlendirilmiştir.

<br>
<div align="right"><a href="#top">⬆ Başa Dön</a></div>

<br>
<hr>

<a id="english-docs" name="english-docs"></a>
# 🇬🇧 English Documentation

<p align="right">
  <a href="#turkish-docs">🇹🇷 Türkçe Dokümantasyona Geç</a> •
  <a href="#top">⬆ Return to Top</a>
</p>

## Table of Contents
- [Overview](#en-overview)
  - [Why QR Code Studio?](#en-why-qr-studio)
  - [Key Capabilities & Features](#en-features)
- [Supported Content Types](#en-content-types)
- [System Architecture & Workflow](#en-architecture)
- [Project Directory Structure](#en-directory-structure)
- [Installation & Quickstart](#en-installation)
  - [1. Prerequisites](#en-prerequisites)
  - [2. Clone Repository](#en-clone)
  - [3. Running Locally (XAMPP / VS Code / Python)](#en-running)
- [User Guide & Capabilities](#en-user-guide)
  - [A) QR Generation & Live Preview](#en-generation)
  - [B) Logo, Colors & Shape Customization](#en-customization)
  - [C) High-Resolution & Vector SVG Export](#en-export)
  - [D) Camera & File QR Scanner](#en-scanner)
- [Technical Architecture & Privacy](#en-technical)
- [Troubleshooting & FAQ](#en-troubleshooting)
- [Contributors](#en-contributors)
- [License & Credits](#en-license)

---

<a id="en-overview" name="en-overview"></a>
## 📖 Overview

**QR Code Studio & Scanner** is a cutting-edge, 100% browser-based (client-side) web application designed for creating visually stunning, brand-tailored QR codes and scanning existing codes with instant hardware camera detection.

Unlike standard, generic generators that produce rigid monochrome codes, QR Code Studio empowers users with real-time live generation, gradient color blending, transparent backgrounds, central logo embedding, customizable corner eyes, and **lossless vector SVG** export for professional printing.

---

<a id="en-why-qr-studio" name="en-why-qr-studio"></a>
### 🌟 Why QR Code Studio?

Most web-based QR generators upload your sensitive data to third-party tracking servers, introduce dynamic redirects that break over time, or put high-resolution exports behind paywalls. **QR Code Studio** changes the game:

* 🔒 **100% Privacy & Zero Tracking:** Passwords, Wi-Fi keys, vCard contacts, and confidential links never touch a server. All generation and decoding happen directly inside your browser's JavaScript sandbox.
* 📐 **Lossless Vector SVG Output:** Export mathematically perfect vector graphics ready for large-format billboards, signage, business cards, and print presses.
* 🎨 **Bespoke Visual Styling:** Gradient swatches, dot curvature control (square, rounded, dots), custom corner eye styling, and custom brand logo integration.
* 📷 **Versatile Integrated Scanner:** Real-time webcam feed recognition powered by jsQR, file drag-and-drop, and direct clipboard image paste (`Ctrl+V`).
* 💾 **Local Design History:** Keep track of your recent creations locally in browser storage without needing an account.

---

<a id="en-features" name="en-features"></a>
### 📊 Key Capabilities & Features

| Capability | Specification |
|---|---|
| **Architecture** | 100% Client-Side Vanilla JS & ES6 Modules (Zero Backend Required) |
| **Export Formats** | Lossless Vector SVG, Ultra High-Resolution PNG (up to 1000px), Compressed JPEG |
| **Scanner Capabilities** | Live webcam streaming, image file picker, drag & drop, clipboard paste |
| **Aesthetics** | Modern Dark Glassmorphism, smooth CSS micro-interactions, responsive layout |
| **Customization** | Curated gradients, transparent background, custom dot styles, corner eyes, logo badge |
| **Error Correction** | Selectable Reed-Solomon levels: L (7%), M (15%), Q (25%), H (30%) |
| **Compatibility** | Fully responsive across Desktop, Tablets, and Smartphones |

---

<a id="en-content-types" name="en-content-types"></a>
## 🎯 Supported Content Types

All outputs adhere strictly to international standards and RFC specifications:

1. 🌐 **Website URL:** Quick web redirects (`https://...`).
2. 📝 **Plain Text:** Notes, serial codes, passwords, or instructions.
3. 📶 **Wi-Fi Network:** Automatic Wi-Fi connection strings (`WIFI:S:...;T:...;P:...;;`) supporting WPA/WPA2/WPA3, WEP, or Open.
4. 👤 **vCard Contact:** Comprehensive digital business card (`BEGIN:VCARD...`) with full name, phone, email, organization, and title.
5. 💬 **WhatsApp:** One-click chat starter with pre-filled message (`https://wa.me/...`).
6. 📱 **SMS:** Pre-formatted SMS text message with destination phone number.
7. ✉️ **Email:** Direct `mailto:` link with pre-filled subject line and body text.
8. 📞 **Phone Call:** Immediate dialer trigger (`tel:`).
9. 📅 **Calendar Event:** Complete calendar invitation (`BEGIN:VEVENT...`) with event name, start/end timestamps, and location.

---

<a id="en-architecture" name="en-architecture"></a>
## 🏗️ System Architecture & Workflow

```
                     ┌───────────────────────────────────────────┐
                     │          User Input & Form Data           │
                     └─────────────────────┬─────────────────────┘
                                           │
              ┌────────────────────────────┴────────────────────────────┐
              ▼                                                         ▼
  ┌────────────────────────┐                               ┌────────────────────────┐
  │  Payload Formatter     │                               │  Visual Customization  │
  │  (URL, Wi-Fi, vCard..) │                               │  (Colors, Shapes, Logo)│
  └───────────┬────────────┘                               └───────────┬────────────┘
              │                                                         │
              └────────────────────────────┬────────────────────────────┘
                                           │
                                           ▼
                     ┌───────────────────────────────────────────┐
                     │       Matrix Generation Engine            │
                     │       Error Correction: L/M/Q/H           │
                     └─────────────────────┬─────────────────────┘
                                           │
                 ┌─────────────────────────┴─────────────────────────┐
                 ▼                                                   ▼
  ┌───────────────────────────────┐                 ┌───────────────────────────────┐
  │     Canvas Render Engine      │                 │      Vector SVG Builder       │
  │   - Dynamic Pixel Scaling     │                 │   - Mathematical Node Paths   │
  │   - Linear/Radial Gradients   │                 │   - Pure Vector Calculations  │
  │   - Centered Logo Compositing │                 │   - Infinite Scalability      │
  └──────────────┬────────────────┘                 └───────────────┬───────────────┘
                 │                                                  │
                 ▼                                                  ▼
  ┌───────────────────────────────┐                 ┌───────────────────────────────┐
  │ Output: PNG / JPEG / Clipboard│                 │     Output: Lossless SVG      │
  └───────────────────────────────┘                 └───────────────────────────────┘
```

---

<a id="en-directory-structure" name="en-directory-structure"></a>
## 📂 Project Directory Structure

```bash
QR-CODE-STUDYOSU/
├── assets/                       # Static media and graphics
│   ├── favicon/                  # Multi-resolution favicon package
│   │   ├── apple-touch-icon.png  # iOS Home screen icon (180x180)
│   │   ├── favicon-16x16.png     # Small browser tab icon (16x16)
│   │   ├── favicon-32x32.png     # Standard browser tab icon (32x32)
│   │   └── favicon.ico           # Multi-layer root icon
│   └── images/                   # Brand assets
│       └── Logo.png              # Transparent project brand logo
├── components/                   # Reusable Web Components
│   └── footer.js                 # Luminous gradient <custom-footer> component
├── css/                          # Modular stylesheet architecture
│   ├── animations.css            # Pulse, glow, and micro-transitions
│   ├── components.css            # Form controls, cards, and buttons
│   ├── main.css                  # Core CSS variables, typography, and base layout
│   ├── modal.css                 # Legal modals and contact overlay
│   ├── scanner.css               # Camera viewfinder and scanning animation
│   └── toast.css                 # Toast notification system
├── js/                           # Clean modular ES6+ JavaScript
│   ├── app.js                    # Application lifecycle and dark mode init
│   ├── customization.js          # Color, gradient, shape, and logo handlers
│   ├── export.js                 # PNG, JPEG, SVG download, copy, and print
│   ├── faq.js                    # Interactive FAQ accordion manager
│   ├── generator.js              # Core QR encoding and vector SVG engine
│   ├── history.js                # LocalStorage history CRUD manager
│   ├── modals.js                 # Privacy, Terms, and Contact modal controllers
│   ├── navigation.js             # Mode switching and hash navigation
│   ├── scanner.js                # Camera viewfinder, file upload, and jsQR integration
│   ├── state.js                  # Shared state (window.QRApp) and DOM cache
│   └── toast.js                  # Global toast notifications (showToast)
├── .gitignore                    # Git file exclusion rules
├── index.html                    # Semantic, SEO-optimized single page application
├── LICENSE                       # MIT Open-Source License
└── README.md                     # Comprehensive project documentation (this file)
```

---

<a id="en-installation" name="en-installation"></a>
## 🚀 Installation & Quickstart

<a id="en-prerequisites" name="en-prerequisites"></a>
### 1. Prerequisites
* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave, Opera).
* No Node.js runtime, Python backend, or database setup is needed to run the app.

---

<a id="en-clone" name="en-clone"></a>
### 2. Clone Repository

```powershell
git clone https://github.com/DarkRebelss/QR-CODE-STUDYOSU.git
cd QR-CODE-STUDYOSU
```

---

<a id="en-running" name="en-running"></a>
### 3. Running Locally

#### Option A: Python Built-in Web Server (Recommended)
```powershell
python -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

#### Option B: XAMPP / Apache / Nginx
Place the folder in your web root (e.g. `C:\xampp\htdocs\QR Code`) and visit **`http://localhost/QR%20Code/`**.

#### Option C: VS Code Live Server Extension
Open the folder in VS Code, right click `index.html`, and select **"Open with Live Server"**.

---

<a id="en-user-guide" name="en-user-guide"></a>
## 💡 User Guide & Capabilities

<a id="en-generation" name="en-generation"></a>
### A) QR Generation & Live Preview
1. Choose your desired content tab (URL, Wi-Fi, vCard, WhatsApp, etc.).
2. Fill out the corresponding input parameters.
3. The **Live Preview** on the right updates instantly in real-time.

<a id="en-customization" name="en-customization"></a>
### B) Logo, Colors & Shape Customization
* **Gradients & Colors:** Select from curated gradient presets or pick custom hex values.
* **Transparent Background:** Toggle transparent background on to integrate cleanly into any design.
* **Custom Logo Upload:** Upload an icon or company logo. The engine automatically overlays a protective white badge circle to preserve scannability.
* **Dot & Eye Styles:** Switch between sharp square modules, smooth rounded corners, or circular dots.

<a id="en-export" name="en-export"></a>
### C) High-Resolution & Vector SVG Export
* **Download SVG:** Generates an XML-based vector SVG suitable for Adobe Illustrator, Figma, or print shops.
* **Download PNG:** Exports a crisp raster image at your chosen resolution (up to 1000px).
* **Copy to Clipboard:** Copy the generated code directly to your clipboard for instant pasting into WhatsApp or design tools.

<a id="en-scanner" name="en-scanner"></a>
### D) Camera & File QR Scanner
* **Camera Scan:** Switch to the "QR Tarayıcı" tab, grant camera permission, and hold any QR code up to your camera.
* **File Upload / Drag & Drop:** Upload an image file or drop it into the scanner zone.
* **Clipboard Paste:** Press `Ctrl+V` anywhere on the page to scan a screenshot from your clipboard.

---

<a id="en-technical" name="en-technical"></a>
## 🛡️ Technical Architecture & Privacy

* **Zero Cloud Latency & Total Privacy:** QR matrices are generated locally on the HTML5 `<canvas>` and mathematical SVG path nodes.
* **Reed-Solomon Error Correction:** By leveraging High (H - 30%) correction, the code remains fully readable even if up to 30% of its surface is obscured by an embedded center logo.
* **Vector Path Construction:** SVG export computes exact module coordinates, converting them to scalable vector paths for infinite zoom without pixelation.

---

<a id="en-troubleshooting" name="en-troubleshooting"></a>
## 🛠️ Troubleshooting & FAQ

#### 1. Why won't my camera open?
* **Solution:** Verify that your browser has camera permission enabled. Browsers require a secure context (`HTTPS` or `localhost`) to access camera hardware.

#### 2. The QR code isn't scanning after adding a logo:
* **Solution:** Set the error correction level to **"Yüksek (H - %30)"** and ensure sufficient color contrast between the dots and the background.

#### 3. Can I use the SVG file in print media?
* **Solution:** Yes! The SVG output is 100% standard vector data that can be scaled to any size (including billboards) with zero pixelation.

---

<a id="en-contributors" name="en-contributors"></a>
## 👥 Contributors

Design, development, and architectural implementation by:

<div align="center">
  <table>
    <tr>
      <td align="center" width="180">
        <a href="https://github.com/DarkRebelss">
          <img src="https://avatars.githubusercontent.com/u/232658231?v=4" width="100" height="100" style="border-radius: 50%;" alt="DarkRebelss"/><br /><br />
          <sub><b>DarkRebelss</b></sub>
        </a><br />
        <a href="https://github.com/DarkRebelss" title="Project Owner & Lead Developer">👑 Founder / Lead Dev</a>
      </td>
    </tr>
  </table>
</div>

---

<a id="en-license" name="en-license"></a>
## 📜 License & Credits

* This project is licensed under the [MIT License](LICENSE).
* Author & Lead Developer: **[DarkRebelss](https://github.com/DarkRebelss)**
* Vector icons powered by [Feather Icons](https://feathericons.com/) and styling by [Tailwind CSS](https://tailwindcss.com/).

<br>
<div align="center">
  <a href="#top">⬆ Return to Top / Başa Dön</a>
</div>
</div>
