# Academic Website (courtesy Claude)

A clean, maintainable academic website with separated data and presentation layers.

## 📁 File Structure

```
agpriyank.github.io/
├── index.html              # Main HTML template (don't edit often)
├── css/
│   └── style.css           # All styling (edit for design changes)
├── js/
│   └── app.js              # Renders data (don't edit often)
├── data/
│   └── content.json        # YOUR DATA - EDIT THIS! ⭐
├── images/
│   └── profile.jpg         # Your photo
└── README.md               # This file
```

## 🎨 Layout Features

- **Compact, space-efficient design** - content starts at the top
- **Two-column layout** throughout - no wasted vertical space
- **Profile in LEFT sidebar** - photo, name, contact info on the left (narrower column)
- **Content on the RIGHT** - About Me, Papers on the right (wider column)
- **No shaded boxes** - papers displayed as simple text entries
- **Icon-based contact buttons** - with emoji symbols (✉ 🎓 💻 📄)
- **Sleek navigation** - minimal bordered buttons at top
- **News in sidebar** - below profile, with scroll (400px height)
- **"View All Publications" button** - links to full publications page
- **Mobile optimized**: 
  - Sidebar moves to top on mobile (profile + news)
  - Single column layout on narrow screens
- **Selected Papers** - curated highlights (no boxes)
- **Working Papers** - under review papers (no boxes)
- **Responsive design** - layout adapts at 900px breakpoint

## 🚀 Quick Setup

### Step 1: Create the folders
```bash
mkdir -p css js data images
```

### Step 2: Add the files
1. Copy `index.html` to the root
2. Copy `style.css` to `css/` folder
3. Copy `app.js` to `js/` folder
4. Copy `content.json` to `data/` folder
5. Add your profile photo to `images/` folder as `profile.jpg`

### Step 3: Commit and push
```bash
git add .
git commit -m "New website with separated data"
git push origin main
```

Your site will be live at `https://agpriyank.github.io/` in a few minutes!

## ✏️ How to Edit Your Content

### To update your information:
**Just edit `data/content.json`!** This is the ONLY file you need to edit for content changes.

#### Adding a news item:
```json
{
  "date": "November 2024",
  "text": "Your news here"
}
```

#### Adding a selected paper (published/accepted):
```json
{
  "title": "Your Paper Title",
  "authors": "Author1, Author2",
  "venue": "Conference Name 2024",
  "url": "https://arxiv.org/..."
}
```

#### Adding a working paper (under review):
```json
{
  "title": "Your Paper Title",
  "authors": "Author1, Author2",
  "status": "Under review",
  "url": "https://arxiv.org/..."
}
```

#### Updating your bio:
Edit the `paragraphs` array in the `about` section. You can use HTML tags like `<a>` for links.

#### Changing the publications button link:
The "View All Publications" button in `index.html` links to `publications.html`. Update this URL as needed.

### To change the design:
Edit `css/style.css` - change colors, fonts, spacing, etc.

## 🎨 Customization Tips

### Change color scheme:
In `style.css`, replace these colors:
- `#2c3e50` - Primary dark color (buttons, links)
- `#fafafa` - Light background for news
- `#e5e5e5` - Border colors

### Paper styling:
Papers are displayed as simple text without boxes. To add back boxes/backgrounds, edit the `.paper` class in `style.css`.

### Contact button icons:
Icons are defined in `js/app.js` in the `renderHeader()` function. Current icons:
- ✉ Email
- 🎓 Scholar (Google Scholar)
- 💻 GitHub
- 🐦 Twitter
- 💼 LinkedIn
- 📄 CV

You can change these emoji symbols to any other unicode characters you prefer.

### Adjust section heights:
- News sidebar height: Change `.news-container { max-height: 400px; }` (increase or decrease as needed)
- Profile photo size: Change `.profile-photo { width: 180px; height: 180px; }`

### Layout structure:
**Desktop (>900px):**
- Left sidebar (narrower - 280px): Profile (photo, name, contact) + News
- Right column (wider): About Me, Selected Papers, Working Papers
- Sidebar is sticky (stays visible while scrolling)
- All news items visible with scroll in sidebar

**Mobile (≤900px):**
- Profile section appears at top
- News section below profile
- Main content below
- Single column layout

The profile and news are always together in the sidebar on the left, which moves to the top on mobile.
