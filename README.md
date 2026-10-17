# ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಕೇಟರಿಂಗ್ (Sri Annapoorneshwari Catering)

> **ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಕೇಟರಿಂಗ್ • ಹಿರೇಗೌಜ, ಚಿಕ್ಕಮಗಳೂರು, ಕರ್ನಾಟಕ**  
> **ಸಂಪರ್ಕ:** ಹರೀಶ್ – 9945632886 | ಚೇತನ್ – 9731182464 | ವಾಟ್ಸಾಪ್: 9945632886  
> **ಟ್ಯಾಗ್‌ಲೈನ್:** “ರುಚಿಯಾದ ಅಡುಗೆ • ಆತ್ಮೀಯ ಆತಿಥ್ಯ” | **ಧ್ಯೇಯ:** “ನಿಮ್ಮ ಸಮಾರಂಭಕ್ಕೆ ನಮ್ಮ ರುಚಿಯ ಸವಿ”

---

## 🌟 Overview & Design Concept

This website is custom-engineered with the **"Temple Silk & Marigold"** design system:
- **Kannada-First Typography**: Built with `Tiro Kannada` (royal headings), `Baloo Tamma 2` (bold navigation & buttons), and `Anek Kannada` (body text with 1.9 line height for clean matras and ottaksharas).
- **Color Palette**:
  - Deep Emerald Green (`#0B4A32`) & Dark Sanctum Green (`#06301F`)
  - Auspicious Temple Gold (`#D4A93C`, `#F0D27A`) with dynamic shimmer gradients
  - Vibrant Festive Marigold (`#F28C1B`) for buttons and calls-to-action
  - Warm Coconut Cream (`#FFF6E0`) for text and light contrasts
- **Signature Visual Accents**:
  - Rotating temple mandalas on hero borders (60s smooth animation)
  - Swaying marigold & mango leaf garland (*Toran*) across hero
  - Temple signboard cards with double gold borders and notched corners
  - Kannada interactive Banana-Leaf (*Bale Ele Oota*) dish placement layout
  - Pure vegetarian badge on all sections
  - Floating WhatsApp & direct call buttons with gentle pulse animation
  - Instant bilingual toggle (**ಕನ್ನಡ / English**) with `localStorage` memory

---

## 📂 Project Structure

```text
catering-services-website-template/
├── index.html            # Main landing page (Hero, Services, USPs, Banana leaf menu, Gallery, Testimonials, CTA)
├── about.html            # Brand story, 3 Core Values (ಶುದ್ಧತೆ, ಸಂಪ್ರದಾಯ, ಸ್ವಚ್ಛತೆ), Founders Harish & Chethan
├── service.html          # Detailed view of all 6 services with instant WhatsApp booking
├── menu.html             # Tabbed pure-veg Karnataka menu (ಬೆಳಗಿನ ತಿಂಡಿ, ಊಟ, ಸಿಹಿ, ಸಂಜೆ ಸ್ನ್ಯಾಕ್ಸ್)
├── contact.html          # Interactive booking form generating pre-filled Kannada WhatsApp messages
├── blog.html             # Dedicated Photo Gallery (ಗ್ಯಾಲರಿ) with Lightbox
├── team.html             # Leadership & culinary master chefs
├── 404.html              # Custom Kannada-first 404 error page
├── IMAGES-TODO.md        # Image inventory and custom photo replacement guide
├── README.md             # Project documentation and deployment instructions
├── css/
│   ├── custom.css        # "Temple Silk & Marigold" design system, Kannada typography & animations
│   ├── style.css         # Base template overrides
│   └── bootstrap.min.css # Bootstrap 5 framework
├── js/
│   ├── lang.js           # Bilingual language switcher (data-kn and data-en support)
│   └── main.js           # Carousel, lightbox and animation controllers
└── img/
    ├── card.jpg          # Official visiting card image
    ├── goddess-logo.svg  # Golden Annapoorneshwari deity emblem
    ├── banana-leaf.svg   # Traditional Karnataka banana-leaf plate layout
    ├── toran.svg         # Animated marigold and mango leaf garland
    ├── mandala.svg       # Rotating temple mandala
    └── [photos & svgs]   # High-resolution catering and dish photos
```

---

## 🛠️ How to Edit Text & Content

All visible text uses `data-kn` for Kannada and `data-en` for English:
```html
<h2 data-kn="ನಮ್ಮ ಸೇವೆಗಳು" data-en="Our Services">ನಮ್ಮ ಸೇವೆಗಳು</h2>
```
- To modify Kannada wording: update the `data-kn="..."` attribute and the inner text.
- To modify English wording: update the `data-en="..."` attribute.
- **Typography Rule**: Never insert artificial spaces inside Kannada words; Kannada font ligatures rely on un-spaced UTF-8 strings.

---

## 📸 How to Replace Images

1. Consult [`IMAGES-TODO.md`](file:///IMAGES-TODO.md) for the exact list of images and their placements.
2. Drop your high-resolution photos into the `img/` directory using the existing filenames:
   - `royal_wedding_thali.jpg`: Grand wedding feast photo
   - `karnataka_sweets.jpg`: Mysore pak and sweets spread
   - `festive_live_spread.jpg`: Live counter and tiffin spread
   - `card.jpg`: Business card photograph

---

## 🚀 How to Run Locally

This is a pure static website requiring **zero build steps** and **no Node dependencies**:
- Simply **double-click `index.html`** in any browser (Chrome, Edge, Firefox, Safari), or:
- Run a lightweight local HTTP server if desired:
  ```bash
  # Using Python
  python -m http.server 8000
  # Or using Node
  npx serve .
  ```

---

## 🌐 How to Deploy for Free

### Option 1: Netlify (Recommended - 1 Click)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `catering-services-website-template` folder into the browser window.
3. Your site is live immediately with a free custom SSL certificate and URL!

### Option 2: GitHub Pages
1. Push this directory to a GitHub repository.
2. In your repo settings, go to **Pages** -> **Branch** -> select `main` (or `master`) and folder `/ (root)`.
3. Click **Save**. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.
