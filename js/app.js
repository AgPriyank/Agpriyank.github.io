// Load and render the website data
async function loadData() {
    try {
        const response = await fetch('data/content.json');
        const data = await response.json();
        renderPage(data);
    } catch (error) {
        console.error('Error loading data:', error);
        document.body.innerHTML = '<div style="text-align: center; padding: 50px;">Error loading content. Please check console.</div>';
    }
}

function renderPage(data) {
    // Render Header
    renderHeader(data.personal, data.links);
    
    // Render Navigation
    renderNavigation(data.navigation);
    
    // Render About Section
    renderAbout(data.about);
    
    // Render Selected Papers
    renderPapers(data.selectedPapers);
    
    // Render Working Papers
    renderWorkingPapers(data.workingPapers);
    
    // Render News
    renderNews(data.news);
    
    // Render Footer
    renderFooter(data.personal.name);
}

function renderHeader(personal, links) {
    const header = document.getElementById('header');
    
    const contactButtons = [];
    
    if (personal.email) {
        contactButtons.push(`<a href="mailto:${personal.email}" class="contact-btn">✉ Email</a>`);
    }
    if (links.googleScholar) {
        contactButtons.push(`<a href="${links.googleScholar}" class="contact-btn" target="_blank">🎓 Scholar</a>`);
    }
    if (links.github) {
        contactButtons.push(`<a href="${links.github}" class="contact-btn" target="_blank">💻 GitHub</a>`);
    }
    if (links.twitter) {
        contactButtons.push(`<a href="${links.twitter}" class="contact-btn" target="_blank">🐦 Twitter</a>`);
    }
    if (links.linkedin) {
        contactButtons.push(`<a href="${links.linkedin}" class="contact-btn" target="_blank">💼 LinkedIn</a>`);
    }
    if (personal.cv) {
        contactButtons.push(`<a href="${personal.cv}" class="contact-btn" target="_blank">📄 CV</a>`);
    }
    
    header.innerHTML = `
        <img src="${personal.photo}" alt="${personal.name}" class="profile-photo">
        <h1>${personal.name}</h1>
        <p class="subtitle">${personal.title}, ${personal.department}<br>${personal.institution}</p>
        <div class="contact-buttons">
            ${contactButtons.join('')}
        </div>
    `;
}

function renderNavigation(navItems) {
    const nav = document.getElementById('navigation');
    const navLinks = navItems.map(item => 
        `<a href="${item.url}">${item.text}</a>`
    ).join('');
    nav.innerHTML = navLinks;
}

function renderAbout(about) {
    const aboutContent = document.getElementById('about-content');
    
    const paragraphs = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    
    const links = about.additionalLinks.map(link => 
        `<a href="${link.url}" target="_blank">${link.icon} ${link.text}</a>`
    ).join('');
    
    aboutContent.innerHTML = `
        <div class="about-content">
            ${paragraphs}
        </div>
        <div class="links">
            ${links}
        </div>
    `;
}

function renderNews(newsItems) {
    const newsHTML = newsItems.map(item => `
        <div class="news-item">
            <div class="news-date">${item.date}</div>
            <div class="news-text">${item.text}</div>
        </div>
    `).join('');
    
    // Render in both desktop and mobile containers
    const newsContentDesktop = document.getElementById('news-content-desktop');
    const newsContentMobile = document.getElementById('news-content');
    
    if (newsContentDesktop) {
        newsContentDesktop.innerHTML = newsHTML;
    }
    if (newsContentMobile) {
        newsContentMobile.innerHTML = newsHTML;
    }
}

function renderPapers(papers) {
    const papersContent = document.getElementById('papers-content');
    
    const papersHTML = papers.map(paper => {
        const titleHTML = paper.url 
            ? `<a href="${paper.url}" target="_blank">${paper.title}</a>`
            : paper.title;
            
        return `
            <div class="paper">
                <div class="paper-title">${titleHTML}</div>
                <div class="paper-authors">${paper.authors}</div>
                <div class="paper-venue">${paper.venue}</div>
            </div>
        `;
    }).join('');
    
    papersContent.innerHTML = papersHTML;
}

function renderWorkingPapers(papers) {
    const papersContent = document.getElementById('working-papers-content');
    
    const papersHTML = papers.map(paper => {
        const titleHTML = paper.url 
            ? `<a href="${paper.url}" target="_blank">${paper.title}</a>`
            : paper.title;
            
        return `
            <div class="paper">
                <div class="paper-title">${titleHTML}</div>
                <div class="paper-authors">${paper.authors}</div>
                <div class="paper-status">${paper.status}</div>
            </div>
        `;
    }).join('');
    
    papersContent.innerHTML = papersHTML;
}

function renderFooter(name) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('footer-name').textContent = name;
    document.getElementById('last-updated').textContent = currentMonth;
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadData);