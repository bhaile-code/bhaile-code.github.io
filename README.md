# Beemnet Haile - AI Product Manager Portfolio

A clean, minimalist portfolio website showcasing enterprise AI product management expertise, GenAI product strategy, and AI governance experience. Built for deployment on GitHub Pages.

🔗 **Live Site:** [bhaile-code.github.io](https://bhaile-code.github.io)

---

## 🎨 Design Philosophy

This portfolio embraces a **warm minimalist aesthetic** designed to:
- Present information clearly without visual clutter
- Create a welcoming, professional atmosphere
- Showcase projects with emphasis on impact and outcomes
- Provide smooth, delightful user interactions
- Work seamlessly across all devices

### Color Palette

The design uses a carefully selected warm color scheme:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Warm White | `#FFFEF9` | Primary background |
| Light Beige | `#F5F3EE` | Secondary background |
| Warm Terracotta | `#E07A5F` | Primary accent (CTAs, links) |
| Sage Green | `#81B29A` | Secondary accent (tags, highlights) |
| Dark Blue-Gray | `#3D405B` | Primary text |
| Medium Gray | `#6B6D76` | Secondary text |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, generous spacing, clear hierarchy
- **Body Text:** 16-18px for optimal readability
- **Style:** Clean, modern sans-serif throughout

### Layout Principles

- **Max Width:** 1200px container for optimal reading
- **Whitespace:** Generous padding and margins for breathing room
- **Card Design:** Subtle shadows with smooth hover effects
- **Grid System:** Flexible, responsive layouts
- **Mobile-First:** Fully responsive from 320px to 4K displays

---

## 📁 Project Structure

```
bhaile-code.github.io/
├── index.html              # Main single-page portfolio
├── css/
│   └── style.css          # All styling (warm minimalist design)
├── js/
│   └── main.js            # Smooth scrolling, animations, interactions
├── images/
│   └── placeholder-avatar.svg  # Avatar placeholder (replace with your photo)
├── README.md              # This file - design documentation
├── CLAUDE.local.md        # Local development notes (gitignored)
└── .gitignore            # Git ignore rules
```

---

## 🚀 Quick Start

### Viewing Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhaile-code/bhaile-code.github.io.git
   cd bhaile-code.github.io
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Then visit: http://localhost:8000
     ```

### Deploying to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Your site will be live at:** `https://bhaile-code.github.io`

---

## ✏️ Customizing Content

All content is clearly marked with `<!-- TODO -->` comments in [index.html](index.html). Here's what to update:

### 1. Personal Information

**Location:** Hero section in [index.html:60-85](index.html#L60-L85)

**Current content:**
- Name: Beemnet Haile
- Title: AI Product Manager
- Tagline emphasizes building AI products that work in real-world, regulated environments

### 2. Professional Photo

**Location:** [index.html:90](index.html#L90) and `images/` folder

Replace `images/placeholder-avatar.svg` with your professional headshot:
```html
<img src="images/your-photo.jpg" alt="Professional headshot" class="avatar">
```

**Recommended specs:**
- Square aspect ratio (1:1)
- At least 600x600px
- Format: JPG or PNG
- File size: Under 500KB

### 3. About Section

**Location:** [index.html:103-113](index.html#L103-L113)

**Current content:**
- 3 paragraphs highlighting Product Manager role at Deloitte's AI Center of Excellence
- Emphasizes $2M+ portfolio management, cross-functional team leadership
- Details technical foundation (Python, AWS, Databricks) and enterprise product experience
- Focuses on building AI products that pass Big 4 compliance and legal reviews

### 4. Projects

**Location:** [index.html:175-278](index.html#L175-L278)

**Current status:** 3 project cards remain as placeholders

**Recommended content:**
- Focus on AI products built at Deloitte's Center of Excellence
- Highlight internal MVPs for practitioners and client-facing solutions
- Emphasize user adoption metrics, compliance navigation, and business impact
- Include GenAI guardrail evaluation framework as a "product"
- Use tech tags: GenAI, Python, AWS, AI Governance, Vendor Evaluation

**To add more projects:** Copy a project card block and paste below existing ones.

### 5. Skills

**Location:** [index.html:278-321](index.html#L278-L321)

**Current content organized into three categories:**
1. **AI Product Management:** Product strategy, MVP development, stakeholder management, Agile/PMP
2. **AI/ML & Technical:** GenAI evaluation, AI guardrails, Python, AWS, Databricks, data engineering
3. **Enterprise & Governance:** AI governance, risk & compliance, Lean Six Sigma, Tableau/Power BI

### 6. Contact Links

**Location:** [index.html:395-435](index.html#L395-L435)

Links are pre-configured for:
- LinkedIn: `linkedin.com/in/beemnethaile`
- GitHub: `github.com/bhaile-code`

**To add resume download:**
1. Add your resume PDF to the root directory (e.g., `resume.pdf`)
2. Update the href in [index.html:431](index.html#L431):
   ```html
   <a href="resume.pdf" class="contact-btn" download>
   ```

---

## 🎯 Section Overview

### Navigation
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Name and title
- Compelling tagline
- Professional photo
- Primary CTAs

### About Section
- Professional summary
- Three value propositions
- What makes you unique

### Projects Section
- 3 featured AI projects (expandable)
- Project descriptions with metrics
- Technology tags
- Role and impact highlights

### Skills Section
- Product Management skills
- AI/ML expertise (LLMs, RAG, Agentic AI, etc.)
- Technical tools proficiency

### Contact Section
- LinkedIn and GitHub links
- Resume download option
- Professional closing

---

## 💻 Technology Stack

- **HTML5:** Semantic, accessible markup
- **CSS3:** Custom styling, CSS Grid, Flexbox
- **Vanilla JavaScript:** No frameworks, fast and lightweight
- **Google Fonts:** Inter font family
- **GitHub Pages:** Free hosting with custom domain support

**No build tools required!** Simple, maintainable code.

---

## 🎨 Design Features

### Animations
- Fade-in effects on scroll (Intersection Observer API)
- Smooth hover transitions
- Mobile menu slide-in animation

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Performance
- Lazy loading for images
- Optimized font loading
- Minimal dependencies
- Fast page load times

### Accessibility
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios

---

## 🔧 Customization Tips

### Changing Colors

All colors are defined as CSS variables in [css/style.css:18-33](css/style.css#L18-L33):

```css
:root {
  --bg-primary: #FFFEF9;
  --accent-primary: #E07A5F;
  /* ... etc */
}
```

Update these values to change the entire color scheme.

### Adding New Sections

1. Add HTML section in `index.html`
2. Add navigation link in the nav menu
3. Style in `css/style.css`
4. Add smooth scroll behavior (already configured)

### Changing Fonts

Replace the Google Fonts import in [css/style.css:7](css/style.css#L7) and update the font-family in [css/style.css:43](css/style.css#L43).

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Future Enhancements

Consider adding:
- [ ] Individual project detail pages
- [ ] Blog section for thought leadership
- [ ] Testimonials from colleagues
- [ ] Case study deep-dives
- [ ] Dark mode toggle
- [ ] Contact form integration (Formspree, Netlify Forms)
- [ ] Google Analytics
- [ ] SEO optimization
- [ ] Custom domain

---

## 📝 Git Workflow

### Making Updates

```bash
# 1. Make your changes to index.html or other files

# 2. Check what changed
git status

# 3. Stage your changes
git add .

# 4. Commit with a descriptive message
git commit -m "Update project descriptions and add new headshot"

# 5. Push to GitHub (deploys automatically)
git push origin main

# 6. Wait 1-2 minutes for GitHub Pages to rebuild
```

### Checking Deployment Status

Go to your repository → Actions tab to see deployment progress.

---

## 🤝 Credits

**Portfolio Owner:** Beemnet Haile - AI Product Manager
**Design & Development:** Built with Claude Code
**Fonts:** [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
**Icons:** SVG icons (inline)
**Hosting:** GitHub Pages

---

## 📧 Questions?

If you need help customizing this portfolio:
1. Check the `<!-- TODO -->` comments in the HTML
2. Review the CSS variables for styling changes
3. Consult the [GitHub Pages documentation](https://docs.github.com/en/pages)

---

## 📄 License

This portfolio template is free to use and modify for personal use.

---

**Built with ❤️ for showcasing AI Product Management expertise**
