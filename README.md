# Narendra's Dental Clinic And Implant Centre

A modern, highly responsive, and premium multi-page website designed for **Narendra's Dental Clinic And Implant Centre** located in Bobbili, Andhra Pradesh.

## Project Structure

The project has been reorganized into a structured, scalable directory format to separate assets, content pages, and documentation:

```text
Narendra-Dental-Clinic/
│
├── index.html                  # Main landing page (features animated counters, testimonials, and full overview)
│
├── assets/                     # Global website assets
│   ├── css/
│   │   └── style.css           # Premium typography, color systems, HSL tailored variables, and animations
│   ├── js/
│   │   └── script.js            # Preloader, navbar animations, scrolling effects, and WhatsApp form redirection
│   └── images/
│       ├── hero/               # Hero background imagery
│       ├── services/           # Service catalog high-res PNG images
│       │   ├── dental-implant.png
│       │   ├── orthodontics.png
│       │   ├── root-canal.png
│       │   └── teeth-cleaning.png
│       ├── doctors/            # Staff and dentist profile photos
│       ├── testimonials/       # Patient review visuals
│       └── logo/               # Brand logos and icons
│
├── pages/                      # Standalone dedicated pages
│   ├── index.html              
│   
├── docs/
│   └── BRAND_GUIDELINES.md     # Official brand rules, Hex color palettes, typography, and styling standards
│
└── README.md                   # Project documentation
```

## Features & UX Highlights

1. **Brand-Consistent Aesthetics**: Curated color palette featuring Main Brand Blue (`#1E88E5`), Deep Accent Blue (`#0D47A1`), and Support Gold (`#FFB74D`) under strict adherence to the [Brand Guidelines](docs/BRAND_GUIDELINES.md).
2. **Dynamic micro-animations**: Custom preloader, navbar scroll transition effects, subtle element parallax, and cubic easing scroll reveals via standard `IntersectionObserver`.
3. **WhatsApp Booking Redirection**: Form submissions on the landing page, contact, and booking pages automatically format patient details into standard, clean markdown messages and redirect to the clinic's official WhatsApp business contact (`09030424008`).
4. **Intelligent Dropdown Pre-selection**: When a user clicks "Book Appointment" from a specific treatment card on the `services.html` page, query parameters (e.g. `?service=root-canal`) pre-load that exact service selection in the appointment form.

## Technical Details

- **Core Technologies**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3 custom variables.
- **Fonts Used**: `Playfair Display` (serif for headings/luxury elements), `Inter` (sans-serif for body/UI).
- **Responsive Layouts**: Fully responsive media queries tailored for high-res desktops, laptops, tablets, and small mobile phone screen layouts.

## Setup and Preview

To view the website locally, you can open `index.html` in any browser or launch a local dev server:

Using **Node.js / Live Server** (recommended):
```bash
# Serve files directly from the directory
npx serve .
```

Or using **Python**:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.
