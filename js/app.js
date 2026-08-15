/**
 * Main Application Orchestrator
 * Abdelrahman Fathi Abodaif — Portfolio Web App
 * Features: Dark/Light Mode, Interactive Sidebar, Dynamic Rendering, Modals, Multilingual
 */

class PortfolioApp {
  constructor() {
    this.currentProjectFilter = 'all';
    this.currentSkillTab = 'embedded';
    this.currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.renderHeroRotation();
    this.renderHighlights();
    this.renderProjects();
    this.renderSkills();
    this.renderMalazAcademy();
    this.renderTronicsHubServices();
    this.bindEvents();
    this.setupScrollSpy();

    window.addEventListener('langChanged', () => {
      this.renderHeroRotation();
      this.renderHighlights();
      this.renderProjects();
      this.renderSkills();
      this.renderMalazAcademy();
      this.renderTronicsHubServices();
    });
  }

  /* ========================================================================
     1. THEME MANAGEMENT (DARK / LIGHT)
     ======================================================================== */
  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Update Theme Toggle Button Icon & Label
    const themeIcon = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    if (themeIcon && themeLabel) {
      if (theme === 'dark') {
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        themeLabel.textContent = 'Dark';
      } else {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        themeLabel.textContent = 'Light';
      }
    }

    // Notify oscilloscope of theme update
    if (window.oscilloscopeInstance) {
      window.oscilloscopeInstance.updateTelemetry();
    }
  }

  /* ========================================================================
     2. HERO ROTATING SUBTITLES
     ======================================================================== */
  renderHeroRotation() {
    const rotateEl = document.getElementById('heroSubtitleRotate');
    if (!rotateEl) return;

    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const list = PORTFOLIO_DATA.profile.subtitles[lang];
    let idx = 0;

    clearInterval(this.rotateInterval);
    rotateEl.textContent = list[0];

    this.rotateInterval = setInterval(() => {
      idx = (idx + 1) % list.length;
      rotateEl.style.opacity = 0;
      setTimeout(() => {
        rotateEl.textContent = list[idx];
        rotateEl.style.opacity = 1;
      }, 250);
    }, 3200);
  }

  /* ========================================================================
     3. DISTINCTIONS & ACADEMIC HONORS
     ======================================================================== */
  renderHighlights() {
    const container = document.getElementById('highlightsContainer');
    if (!container) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    const cards = [
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
        title: lang === 'ar' ? 'ممتاز مع مرتبة الشرف (88%)' : 'Excellent with Honors (88%)',
        tag: lang === 'ar' ? 'الترتيب: الثالث على شعبة الإلكترونيات' : 'Ranked 3rd in Electronics Division',
        desc: lang === 'ar' 
          ? 'تخرج من كلية التكنولوجيا والتعليم بجامعة سوهاج بتقدير ممتاز مع مرتبة الشرف، والترتيب العاشر على الكلية، مع إنجاز مشروع التخرج بالدرجة النهائية 300/300.'
          : 'Graduated from Sohag University with high distinction, ranking 3rd in the Electronics Division and 10th College-Wide. Awarded 300/300 full score for the graduation project.',
        isCopper: false
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
        title: lang === 'ar' ? 'المركز الأول — Hult Prize 2024' : '1st Place — Hult Prize 2024',
        tag: lang === 'ar' ? 'التأهل للقمة الإقليمية في تايلاند' : 'Qualified to Regional Stage in Thailand',
        desc: lang === 'ar'
          ? 'الفوز بالمركز الأول على مستوى جامعة سوهاج في مسابقة هلت العالمية للابتكار والريادة والتأهل لتمثيل الجامعة إقليمياً.'
          : 'Secured first place across Sohag University for exceptional technical solution design, gaining qualification to the regional summit in Thailand.',
        isCopper: true
      },
      {
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        title: lang === 'ar' ? 'فائز بمسابقتي ISF (EGP / IGB)' : 'Double Winner — ISF (EGP & IGB)',
        tag: lang === 'ar' ? 'الفريق الفائز الوحيد الممثل لصعيد مصر' : 'Sole Winning Team from Upper Egypt',
        desc: lang === 'ar'
          ? 'التتويج المزدوج في مسابقتي صندوق رعاية المبتكرين والنوابغ التابع لوزارة التعليم العالي عن النماذج العتادية المتقدمة.'
          : 'Awarded national victories across both EGP and IGB tracks organized by the Egyptian Innovators Support Fund (ISF) for high-impact hardware innovations.',
        isCopper: false
      }
    ];

    container.innerHTML = cards.map(c => `
      <div class="highlight-card ${c.isCopper ? 'copper' : ''}">
        <div class="card-icon-wrap ${c.isCopper ? 'copper' : ''}">
          ${c.icon}
        </div>
        <span class="highlight-tag">${c.tag}</span>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    `).join('');
  }

  /* ========================================================================
     4. PROJECT EXPLORER & MODALS
     ======================================================================== */
  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    let filtered = PORTFOLIO_DATA.projects;
    if (this.currentProjectFilter !== 'all') {
      filtered = PORTFOLIO_DATA.projects.filter(p => p.category === this.currentProjectFilter);
    }

    grid.innerHTML = filtered.map(p => `
      <div class="project-card" data-project-id="${p.id}">
        <div class="project-card-header">
          <span class="project-badge-pill ${p.id === 'optinutri' ? 'score-300' : ''}">${p.badge}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-faint);">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title[lang]}</h3>
          <div class="project-card-tagline">${p.tagline[lang]}</div>
          <p class="project-card-desc">${p.summary[lang]}</p>
          <div class="project-tech-chips">
            ${p.specs.slice(0, 3).map(s => `
              <span class="tech-chip">${s.value.split(' ')[0]}</span>
            `).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <span>${lang === 'ar' ? 'عرض المخطط والعتاد' : 'Inspect Architecture'}</span>
          <span class="view-details-arrow">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </div>
    `).join('');

    // Bind click events on cards to open modal
    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.projectId;
        this.openProjectModal(id);
      });
    });
  }

  openProjectModal(id) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
    if (!project) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    const backdrop = document.getElementById('projectModalBackdrop');
    const container = document.getElementById('modalContentContainer');
    if (!backdrop || !container) return;

    container.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="project-badge-pill ${project.id === 'optinutri' ? 'score-300' : ''}" style="margin-bottom: 6px; display: inline-block;">
            ${project.badge}
          </span>
          <h2 style="font-size: 1.35rem; color: var(--text-main);">${project.title[lang]}</h2>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-accent-copper);">${project.tagline[lang]}</div>
        </div>
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="modal-body">
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
          ${project.summary[lang]}
        </p>

        <div class="modal-arch-flow">
          <div class="modal-arch-flow-title">⚡ ${window.i18n.t('modal.architectureFlow')}</div>
          <code>${project.architecture}</code>
        </div>

        <h4 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-primary); font-family: var(--font-mono);">
          🛠️ ${window.i18n.t('modal.technicalSpecs')}
        </h4>
        <table class="modal-specs-table">
          <tbody>
            ${project.specs.map(s => `
              <tr>
                <th>${s.label[lang]}</th>
                <td>${s.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <h4 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-accent-copper); font-family: var(--font-mono);">
          💡 ${window.i18n.t('modal.keyHighlights')}
        </h4>
        <div class="modal-highlights-list">
          ${project.highlights.map(h => `
            <div class="modal-highlight-item">
              <span class="modal-highlight-bullet">➔</span>
              <span>${h[lang]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modalCloseBtn').addEventListener('click', () => {
      this.closeProjectModal();
    });
  }

  closeProjectModal() {
    const backdrop = document.getElementById('projectModalBackdrop');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ========================================================================
     5. SKILLS MATRIX TABS
     ======================================================================== */
  renderSkills() {
    const tabsContainer = document.getElementById('skillsTabsContainer');
    const itemsContainer = document.getElementById('skillsItemsContainer');
    if (!tabsContainer || !itemsContainer) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    const skillKeys = Object.keys(PORTFOLIO_DATA.skills);

    tabsContainer.innerHTML = skillKeys.map(key => {
      const sk = PORTFOLIO_DATA.skills[key];
      const isActive = key === this.currentSkillTab;
      return `
        <button class="skill-domain-btn ${isActive ? 'active' : ''}" data-skill-tab="${key}">
          <span>${sk.categoryName[lang]}</span>
        </button>
      `;
    }).join('');

    const activeDomain = PORTFOLIO_DATA.skills[this.currentSkillTab];
    if (activeDomain) {
      itemsContainer.innerHTML = activeDomain.items.map(item => `
        <div class="skill-item-card">
          <span class="skill-item-name">${item.name}</span>
          <span class="skill-item-level">${item.level}</span>
        </div>
      `).join('');
    }

    tabsContainer.querySelectorAll('.skill-domain-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentSkillTab = btn.dataset.skillTab;
        this.renderSkills();
      });
    });
  }

  /* ========================================================================
     6. MALAZ ACADEMY SHOWCASE
     ======================================================================== */
  renderMalazAcademy() {
    const container = document.getElementById('malazCategoriesGrid');
    if (!container) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const academy = PORTFOLIO_DATA.malazAcademy;

    container.innerHTML = academy.categories.map(cat => `
      <div class="malaz-cat-card">
        <h4 class="malaz-cat-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          ${cat.name[lang]}
        </h4>
        <div class="malaz-topic-list">
          ${cat.topics.map(t => `
            <div class="malaz-topic-item">${t}</div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* ========================================================================
     7. TRONICSHUB SERVICES
     ======================================================================== */
  renderTronicsHubServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';

    const icons = {
      cpu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
      layers: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
      award: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
      'book-open': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    };

    container.innerHTML = PORTFOLIO_DATA.tronicshub.services.map(s => `
      <div class="service-card">
        <div class="card-icon-wrap copper">
          ${icons[s.icon] || icons.cpu}
        </div>
        <h4>${s.title[lang]}</h4>
        <p style="color: var(--text-muted); line-height: 1.6;">${s.desc[lang]}</p>
      </div>
    `).join('');
  }

  /* ========================================================================
     8. EVENT BINDINGS & INTERACTIONS
     ======================================================================== */
  bindEvents() {
    // Theme Switcher Button
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Mobile Theme Button
    const mobileThemeBtn = document.getElementById('mobileThemeBtn');
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Project Category Filters
    const filterBtns = document.querySelectorAll('.filter-tab-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentProjectFilter = btn.dataset.filter || 'all';
        this.renderProjects();
      });
    });

    // Modal Backdrop Close
    const modalBackdrop = document.getElementById('projectModalBackdrop');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) this.closeProjectModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeProjectModal();
    });

    // Mobile Sidebar Drawer Toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');

    if (sidebarToggle && sidebar && sidebarBackdrop) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        sidebarBackdrop.classList.toggle('show');
      });

      sidebarBackdrop.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('show');
      });

      sidebar.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('open');
          sidebarBackdrop.classList.remove('show');
        });
      });
    }

    // Direct Copy to Clipboard Handler
    const copyTriggers = document.querySelectorAll('[data-copy]');
    copyTriggers.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const text = el.dataset.copy;
        navigator.clipboard.writeText(text).then(() => {
          this.showToast(window.i18n.t('contact.copySuccess'));
        });
      });
    });
  }

  setupScrollSpy() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${id}`) {
              item.classList.add('active');
            }
          });
        }
      });
    });
  }

  showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Global Toast helper
window.showToast = (msg) => {
  if (window.portfolioAppInstance) {
    window.portfolioAppInstance.showToast(msg);
  }
};

// Start application
window.addEventListener('DOMContentLoaded', () => {
  window.portfolioAppInstance = new PortfolioApp();
});
