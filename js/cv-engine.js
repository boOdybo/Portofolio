/**
 * Interactive ATS Master CV Workstation Engine
 * Renders role-targeted, evidence-backed resumes with instant PDF print & plaintext copy.
 */

class CvEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentRole = 'embedded'; // 'embedded', 'pcb', 'trainer', 'master'
    if (!this.container) return;

    this.bindEvents();
    this.render();

    window.addEventListener('langChanged', () => {
      this.render();
    });
  }

  bindEvents() {
    const roleButtons = document.querySelectorAll('.cv-role-btn');
    roleButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        roleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentRole = btn.dataset.role || 'embedded';
        this.render();
      });
    });

    const printBtn = document.getElementById('cvPrintBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const copyBtn = document.getElementById('cvCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.copyPlaintext();
      });
    }
  }

  getRoleDetails(lang) {
    switch (this.currentRole) {
      case 'embedded':
        return {
          title: lang === 'ar' ? 'مطور أنظمة مدمجة وإنترنت الأشياء' : 'Embedded Systems & IoT Developer',
          summary: lang === 'ar' 
            ? 'مطور أنظمة مدمجة حاصل على بكالوريوس في التعليم الصناعي (تكنولوجيا الكهرباء - شعبة الإلكترونيات) بتقدير ممتاز مع مرتبة الشرف (88%، الترتيب الثالث). متخصص في برمجة المتحكمات الدقيقة (ESP32/ESP32-S3/Arduino) بلغة Embedded C/C++، وتكامل بروتوكولات الاتصال (I2C/SPI/UART/I2S)، ومعالجة إشارات المستشعرات الحيوية والصناعية، وبناء حلول إنترنت الأشياء المتصلة بالمنصات السحابية. مشروع التخرج حاصل على 300/300.'
            : 'Electronics and Embedded Systems Developer with a Bachelor\'s degree in Industrial Education (Electronics Division, 88% Honors, Ranked 3rd). Proven expertise in developing hardware-software systems using ESP32, Arduino, and Embedded C/C++, integrating sensors, wireless telemetry, and real-time acquisition platforms. Graduation project awarded 300/300 Full Score.',
          coreSkills: ['ESP32 / ESP32-S3 / FreeRTOS', 'Embedded C / C++', 'I²C, SPI, UART, I²S, NFC', 'Sensor Signal Conditioning', 'Robotics & SLAM Navigation', 'IoT & Telemetry Webhooks']
        };

      case 'pcb':
        return {
          title: lang === 'ar' ? 'مهندس تصميم دوائر مطبوعة وإلكترونيات' : 'Electronics & PCB Design Developer',
          summary: lang === 'ar'
            ? 'مطور إلكترونيات وتصميم دوائر مطبوعة PCB بخبرة عملية في استخدام Altium Designer، رسم المخططات الهندسية، توزيع المسارات متعددة الطبقات، إدارة مسارات القدرة والتأريض، وفحص قواعد التصميم DRC، وتجهيز حزم ملفات التصنيع Gerber. خبرة عميقة في دوائر التبديل بالـ MOSFET والريلايات المعزولة ودوائر قياس الإشارات الحساسة.'
            : 'Electronics Developer specializing in PCB design and hardware prototyping. Hands-on experience with Altium Designer for schematic capture, multi-layer layout, power plane distribution, DRC checks, and production Gerber generation. Deep background in analog/digital circuit design, MOSFET power switching, and precision measurement electronics.',
          coreSkills: ['Altium Designer (Schematic & Layout)', 'Multi-Layer Routing & Ground Pours', 'Gerber & Manufacturing Outputs', 'Analog & Digital Circuit Design', 'Power MOSFET Switching & Relays', 'Hardware Prototyping & Lab Debugging']
        };

      case 'trainer':
        return {
          title: lang === 'ar' ? 'مدرب تقني ومحاضر هندسي' : 'Technical Trainer & Engineering Instructor',
          summary: lang === 'ar'
            ? 'مدرب تقني ومؤسس لأكاديمية ملاذ التعليمية (262 فيديو منشور في الرياضيات الجامعية والمعالجات ونظم التحكم) ومؤسس TronicsHub لتدريب الأردوينو والروبوتات واحتضان مشاريع التخرج. أمتلك قدرة مثبتة على تبسيط المفاهيم الهندسية المعقدة وربط النظريات بالتطبيق العملي.'
            : 'Technical Instructor and Educational Content Creator with 262 published university lectures on the Malaz YouTube channel covering Higher Mathematics, Control Systems, Intel 8085 Assembly, and Circuits. Founder of TronicsHub, delivering hands-on courses in Arduino, Robotics, and Graduation Project development.',
          coreSkills: ['Higher Mathematics (Calculus, ODE, Laplace, Fourier)', 'Intel 8085 Microprocessor & Assembly', 'Control Systems Theory & Stability', 'Arduino & Robotics Hands-on Workshops', 'Graduation Project Mentorship', 'Technical Curriculum Development']
        };

      case 'master':
      default:
        return {
          title: lang === 'ar' ? 'السيرة المهنية الشاملة — مطور عتاد وأنظمة مدمجة' : 'Comprehensive Master CV — Electronics & Embedded Systems Developer',
          summary: PORTFOLIO_DATA.profile.summary[lang],
          coreSkills: [
            'ESP32, ESP32-S3, Arduino, Intel 8085',
            'Embedded C/C++, Assembly, MATLAB',
            'Altium Designer, PCB Layout, Gerber',
            'I²C, SPI, UART, I²S, NFC Protocols',
            'Analog/Digital Electronics, MOSFET Drivers',
            'Higher Mathematics, Control Systems, Signal Processing'
          ]
        };
    }
  }

  render() {
    if (!this.container) return;
    const lang = window.i18n ? window.i18n.currentLang : 'en';
    const profile = PORTFOLIO_DATA.profile;
    const roleInfo = this.getRoleDetails(lang);
    const edu = PORTFOLIO_DATA.education;

    // Filter projects based on role
    let relevantProjects = PORTFOLIO_DATA.projects;
    if (this.currentRole === 'embedded') {
      relevantProjects = PORTFOLIO_DATA.projects.filter(p => p.category === 'embedded-iot' || p.id === 'ai-robot' || p.id === 'voice-wheelchair');
    } else if (this.currentRole === 'pcb') {
      relevantProjects = PORTFOLIO_DATA.projects.filter(p => p.id === 'optinutri' || p.id === 'smart-home' || p.id === 'desalination-monitor' || p.id === 'solar-dryer');
    } else if (this.currentRole === 'trainer') {
      relevantProjects = PORTFOLIO_DATA.projects.filter(p => p.id === 'optinutri' || p.id === 'ai-robot' || p.id === 'sign-glove');
    }

    const html = `
      <div class="cv-header">
        <h2 class="cv-name">${profile.name[lang]}</h2>
        <div class="cv-title">${roleInfo.title} | ${profile.nickname[lang]}</div>
        <div class="cv-contact-line">
          <span>📍 ${profile.location[lang]}</span>
          <span>📞 ${profile.phone}</span>
          <span>✉️ ${profile.email}</span>
          <span>🔗 linkedin.com/in/${profile.linkedinUser}</span>
          <span>💻 github.com/${profile.githubUser}</span>
          <span>📺 youtube.com/${profile.youtubeUser}</span>
        </div>
      </div>

      <!-- Professional Summary -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'الملخص المهني' : 'PROFESSIONAL SUMMARY'}</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65;">
          ${roleInfo.summary}
        </p>
      </div>

      <!-- Technical Skills Matrix -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'المهارات التقنية الأساسية' : 'CORE TECHNICAL SKILLS'}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${roleInfo.coreSkills.map(sk => `
            <span style="font-family: var(--font-mono); font-size: 0.78rem; padding: 4px 10px; background: rgba(0,255,157,0.08); border: 1px solid rgba(0,255,157,0.2); border-radius: 4px; color: var(--signal-green);">
              ${sk}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Experience -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'الخبرة العملية والتطوير التقني' : 'PROFESSIONAL EXPERIENCE'}</h3>
        
        <div class="cv-item">
          <div class="cv-item-title-row">
            <span>${lang === 'ar' ? 'مؤسس ومطور الإلكترونيات — TronicsHub' : 'Founder & Lead Hardware Developer — TronicsHub'}</span>
            <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--copper-gold);">${lang === 'ar' ? 'أكتوبر 2024 – حتى الآن' : 'Oct 2024 – Present'}</span>
          </div>
          <div class="cv-item-subtitle">${profile.location[lang]}</div>
          <ul class="cv-bullets">
            <li>${lang === 'ar' ? 'تصميم وتصنيع النماذج الأولية للأجهزة الإلكترونية والأنظمة المدمجة من مرحلة الفكرة حتى الدائرة المتكاملة.' : 'Design and prototype custom electronic devices and embedded systems combining MCUs, sensors, actuators, and communication buses.'}</li>
            <li>${lang === 'ar' ? 'تقديم الدعم الفني والاستشارات الهندسية لطلاب كليات الهندسة والتكنولوجيا في تنفيذ وتصحيح مشاريع التخرج.' : 'Provide technical consulting and hardware/firmware debugging support for engineering graduation projects.'}</li>
            <li>${lang === 'ar' ? 'إعداد وتقديم برامج تدريبية تخصصية حضورية وعبر الإنترنت في الأردوينو، الروبوتات، والمعالجات الدقيقة.' : 'Deliver structured training programs in Arduino, Microprocessors, Robotics, and Applied University Mathematics.'}</li>
          </ul>
        </div>

        <div class="cv-item">
          <div class="cv-item-title-row">
            <span>${lang === 'ar' ? 'صانع محتوى ومحاضر تقني — قناة ملاذ (Malaz)' : 'Technical Instructor & Educational Creator — Malaz Academy'}</span>
            <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--copper-gold);">${lang === 'ar' ? 'ديسمبر 2020 – حتى الآن' : 'Dec 2020 – Present'}</span>
          </div>
          <div class="cv-item-subtitle">1.81K+ Subscribers | 262 Published Video Lectures</div>
          <ul class="cv-bullets">
            <li>${lang === 'ar' ? 'إعداد وتسجيل 262 محاضرة أكاديمية مفصلة في الرياضيات الجامعية المتقدمة (تفاضل وتكامل، معادلات تفاضلية، تحويلات لابلور، متسلسلات فورير).' : 'Produced and published 262 high-quality lectures covering Higher Mathematics (Calculus, ODEs, Laplace Transforms, Fourier Series).'}</li>
            <li>${lang === 'ar' ? 'شرح معمارية ولغة التجميع لمعالج Intel 8085 ونظريات الدوائر الكهربائية ونظم التحكم الخطي.' : 'Authored comprehensive curricula on Intel 8085 Assembly Language, Linear Control Systems, and Electric Circuit Theorems.'}</li>
          </ul>
        </div>
      </div>

      <!-- Selected Engineering Projects -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'أبرز المشروعات الهندسية المنفذة' : 'SELECTED ENGINEERING PROJECTS'}</h3>
        ${relevantProjects.slice(0, 4).map(p => `
          <div class="cv-item">
            <div class="cv-item-title-row">
              <span>${p.title[lang]}</span>
              <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--signal-green);">${p.badge}</span>
            </div>
            <div class="cv-item-subtitle">${p.tagline[lang]}</div>
            <p style="font-size: 0.86rem; color: var(--text-secondary); margin-bottom: 4px;">${p.summary[lang]}</p>
            <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">
              <strong>Architecture:</strong> ${p.architecture}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Education & Academic Honors -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'المؤهل الأكاديمي والتميز الدراسي' : 'EDUCATION & ACADEMIC DISTINCTION'}</h3>
        <div class="cv-item">
          <div class="cv-item-title-row">
            <span>${edu.degree[lang]}</span>
            <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--copper-gold);">${edu.year}</span>
          </div>
          <div class="cv-item-subtitle">${edu.institution[lang]}</div>
          <ul class="cv-bullets">
            <li><strong>${edu.grade[lang]}</strong> — ${edu.ranking[lang]}</li>
            <li><strong>Graduation Project:</strong> ${edu.gradProject.name} — <span style="color: var(--signal-green); font-weight: 700;">Score: 300 / 300 (Full Score)</span></li>
          </ul>
        </div>
      </div>

      <!-- Honors & Awards -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'الجوائز والتكريمات الوطنية' : 'AWARDS & COMPETITIONS'}</h3>
        <ul class="cv-bullets">
          ${PORTFOLIO_DATA.awards.map(aw => `
            <li>
              <strong>${aw.title[lang]} (${aw.year})</strong> — ${aw.org[lang]}: 
              <span>${aw.highlight[lang]}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Languages -->
      <div class="cv-section">
        <h3 class="cv-section-heading">${lang === 'ar' ? 'اللغات' : 'LANGUAGES'}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">
          • <strong>Arabic:</strong> Native (اللغة الأم) &nbsp;&nbsp;|&nbsp;&nbsp; 
          • <strong>English:</strong> Technical Working Proficiency (Strong Reading & Technical Writing)
        </p>
      </div>
    `;

    this.container.innerHTML = html;
  }

  copyPlaintext() {
    const text = this.container.innerText;
    navigator.clipboard.writeText(text).then(() => {
      if (window.showToast) {
        window.showToast(window.i18n.t('contact.copySuccess'));
      }
    });
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.cvEngineInstance = new CvEngine('cvPaperContainer');
});
