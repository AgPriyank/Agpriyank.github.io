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

- **Clean, minimal design** - inspired by modern academic sites
- **Two-column layout** on desktop (main content + news sidebar)
- **No shaded boxes** - papers displayed as simple text entries
- **Icon-based contact buttons** - with emoji symbols (✉ 🎓 💻 📄)
- **Sleek navigation** - minimal bordered buttons
- **News sidebar** - sticky positioning with scroll on desktop (600px height)
- **"View All Publications" button** - links to full publications page
- **Mobile optimized**: 
  - News appears after "About Me" section with scrolling enabled
  - Only first 6 news items shown on mobile
  - All news items visible with scroll on desktop
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
- News sidebar height on desktop: Change `.sidebar.desktop-news .news-container { max-height: 600px; }` (increase or decrease as needed)
- News height on mobile: Change `.sidebar.mobile-news .news-container { max-height: 400px; }`
- Number of news items on mobile: Change `.sidebar.mobile-news .news-item:nth-child(n+7)` (7 means show first 6 items, 8 means show first 7, etc.)

### News section behavior:
**Desktop (>900px):**
- News appears in right sidebar (sticky positioning)
- Fixed height (600px by default) with scroll
- Aligns roughly with Selected Papers section height
- All news items accessible via scroll

**Mobile (≤900px):**
- News appears after "About Me" section
- Shows only first 6 news items
- Limited to 400px height with scroll

To change mobile news position, move the `<aside class="sidebar mobile-news">` block in `index.html` to before or after different sections.

### Add new sections:
1. Add data to `content.json`
2. Add HTML structure to `index.html`
3. Add rendering function to `app.js`

## 🔧 Troubleshooting

**Site not loading?**
- Check browser console for errors (F12)
- Make sure all file paths are correct
- Verify `content.json` is valid JSON (use jsonlint.com)

**Content not showing?**
- Verify the file is at `data/content.json`
- Check that all required fields in JSON are filled

**Sidebar not showing?**
- Check screen width (sidebar hides on screens < 900px)
- On mobile, it appears at the top

## 📝 Creating Additional Pages

To create `publications.html` or `misc.html`:
1. Copy `index.html` structure
2. Create new data sections in `content.json`
3. Update `app.js` to handle the new page

Need help? Check the code comments or reach out!
