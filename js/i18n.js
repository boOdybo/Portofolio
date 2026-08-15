/**
 * Bilingual Translation & Localization Engine (EN / AR)
 * Seamlessly manages state, RTL layout direction, and dynamic DOM updates.
 */

const I18N_DICTIONARY = {
  en: {
    nav: {
      about: "About",
      highlights: "Distinction",
      projects: "Projects",
      skills: "Skills",
      malaz: "Malaz Academy",
      tronicshub: "TronicsHub",
      cv: "Interactive CV",
      contact: "Contact",
      talkCta: "Let's Talk"
    },
    hero: {
      status: "Available for Embedded & Hardware Engineering Roles",
      greeting: "Hello, I am",
      bio: "Electronics & Embedded Systems Developer and Founder of TronicsHub. Dedicated to engineering robust hardware-software architectures, sensor acquisition, PCB design, robotics, and applied higher mathematics.",
      viewProjectsBtn: "Explore Projects",
      viewCvBtn: "Interactive Resume / CV",
      contactBtn: "Quick Contact",
      oscTitle: "Hardware Signal Monitor",
      freq: "Frequency",
      voltage: "Voltage Level",
      busProtocol: "Bus Protocol"
    },
    sections: {
      distinctionEyebrow: "Key Distinctions",
      distinctionTitle: "Academic Excellence & National Recognition",
      distinctionDesc: "A proven track record of engineering precision, top-tier academic ranking, and multiple innovation competition victories.",
      projectsEyebrow: "Engineering Portfolio",
      projectsTitle: "Selected Hardware & Embedded Systems",
      projectsDesc: "From custom medical instrumentation and AI robotics to assistive wearables and industrial telemetry.",
      skillsEyebrow: "Technical Expertise",
      skillsTitle: "Hardware, Firmware & Analytical Capabilities",
      skillsDesc: "A multi-disciplinary stack combining low-level register mastery, PCB layout, control systems theory, and higher mathematics.",
      malazEyebrow: "Educational Dissemination",
      malazTitle: "Malaz Academy — 262 Educational Lectures",
      malazDesc: "Author and instructor of a comprehensive digital university library covering Calculus, Control Theory, Intel 8085 Assembly, and Electronics.",
      tronicshubEyebrow: "Hardware Lab & Innovation",
      tronicshubTitle: "TronicsHub Prototyping & Services",
      tronicshubDesc: "Independent hardware engineering initiative delivering custom embedded devices, PCB solutions, and graduation project mentoring.",
      cvEyebrow: "Career & Experience",
      cvTitle: "Interactive ATS Master CV Workstation",
      cvDesc: "Select your target role to filter qualifications, project evidence, and export a clean ATS-friendly resume.",
      contactEyebrow: "Get In Touch",
      contactTitle: "Initiate Direct Technical Contact",
      contactDesc: "Ready to discuss embedded systems development, hardware prototyping, project collaboration, or engineering roles."
    },
    modal: {
      architectureFlow: "System Architecture & Data Flow",
      technicalSpecs: "Hardware & Technical Specifications",
      keyHighlights: "Key Implementation Highlights",
      closeBtn: "Close Window"
    },
    cv: {
      exportPdf: "Print / Save ATS PDF",
      copyText: "Copy Plaintext CV",
      targetRole: "Target Role View:"
    },
    contact: {
      phoneTitle: "Phone & WhatsApp",
      emailTitle: "Professional Email",
      linkedinTitle: "LinkedIn Profile",
      githubTitle: "GitHub Repository",
      youtubeTitle: "YouTube Channel",
      locationTitle: "Location",
      copySuccess: "Copied to clipboard!"
    },
    footer: {
      builtWith: "Engineered with precision. All rights reserved."
    }
  },

  ar: {
    nav: {
      about: "عن المطور",
      highlights: "التميز والجوائز",
      projects: "المشاريع",
      skills: "المهارات",
      malaz: "قناة ملاذ",
      tronicshub: "ترونكس هب",
      cv: "السيرة الذاتية (CV)",
      contact: "تواصل معي",
      talkCta: "ابدأ محادثة"
    },
    hero: {
      status: "متاح لمشاريع وتوظيف الأنظمة المدمجة والإلكترونيات",
      greeting: "مرحباً، أنا",
      bio: "مطور إلكترونيات وأنظمة مدمجة ومؤسس TronicsHub. متخصص في ابتكار معمارية الأنظمة المدمجة الصلبة، قياس الإشارات الحيوية، تصميم الـ PCB، الروبوتات والرياضيات التطبيقية الجامعية.",
      viewProjectsBtn: "استعراض المشاريع",
      viewCvBtn: "السيرة الذاتية التفاعلية",
      contactBtn: "تواصل مباشر",
      oscTitle: "راسم الإشارات الرقمية الحي",
      freq: "التردد",
      voltage: "مستوى الجهد",
      busProtocol: "بروتوكول الناقل"
    },
    sections: {
      distinctionEyebrow: "التميز والريادة",
      distinctionTitle: "التفوق الأكاديمي والجوائز الوطنية",
      distinctionDesc: "سجل حافل بالدقة الهندسية، المراكز الأولى أكاديمياً، والانتصارات المتتالية في كبرى مسابقات الابتكار.",
      projectsEyebrow: "معرض المشروعات الهندسية",
      projectsTitle: "أنظمة العتاد والأنظمة المدمجة المنفذة",
      projectsDesc: "من الأجهزة الطبية الذكية وروبوتات الذكاء الاصطناعي إلى القفازات المساعدة ومحطات المراقبة الصناعية.",
      skillsEyebrow: "المصفوفة التقنية",
      skillsTitle: "العتاد، الفيرموير، والقدرات التحليلية",
      skillsDesc: "مزيج تخصصي يجمع بين التحكم منخفض المستوى في المسجلات، تصميم الـ PCB، نظريات التحكم، والرياضيات المتقدمة.",
      malazEyebrow: "المحتوى التعليمي",
      malazTitle: "أكاديمية ملاذ — 262 محاضرة جامعية مصورة",
      malazDesc: "مكتبة علمية شاملة تضم شروحات تفصيلية في التفاضل والتكامل، نظريات التحكم، لغة تجميع 8085، والدوائر الكهربائية.",
      tronicshubEyebrow: "معمل الابتكار والعتاد",
      tronicshubTitle: "خدمات وحلول TronicsHub التقنية",
      tronicshubDesc: "مبادرة لتطوير النماذج الأولية للأجهزة الإلكترونية، وتصميم الدوائر المطبوعة، واحتضان مشاريع التخرج.",
      cvEyebrow: "المسار المهني",
      cvTitle: "محطة السيرة الذاتية التفاعلية (ATS Master CV)",
      cvDesc: "اختر المسار المستهدف لتصفية المؤهلات والمشاريع وطباعة نسخة مطابقة لمعايير أنظمة التوظيف ATS.",
      contactEyebrow: "قنوات التواصل",
      contactTitle: "تواصل مهني مباشر وسريع",
      contactDesc: "جاهز لمناقشة تطوير الأنظمة المدمجة، تصنيع النماذج الأولية، أو الانضمام لفرق العمل الهندسية."
    },
    modal: {
      architectureFlow: "معمارية النظام وسلسلة تدفق البيانات",
      technicalSpecs: "المواصفات الفنية والعتادية",
      keyHighlights: "أبرز إنجازات وتحديات التنفيذ",
      closeBtn: "إغلاق النافذة"
    },
    cv: {
      exportPdf: "طباعة / حفظ كـ PDF (ATS)",
      copyText: "نسخ النص كاملاً",
      targetRole: "المسار الوظيفي المستهدف:"
    },
    contact: {
      phoneTitle: "الهاتف والواتساب",
      emailTitle: "البريد الإلكتروني المهني",
      linkedinTitle: "حساب LinkedIn",
      githubTitle: "مستودع GitHub",
      youtubeTitle: "قناة YouTube",
      locationTitle: "الموقع الجغرافي",
      copySuccess: "تم النسخ إلى الحافظة بنجاح!"
    },
    footer: {
      builtWith: "تم البناء والتصميم بأعلى درجات الدقة الهندسية. جميع الحقوق محفوظة."
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio_lang') || 'en';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.applyLanguage(newLang);
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update toggle button text
    const langLabel = document.getElementById('langToggleLabel');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'العربية (AR)' : 'English (EN)';
    }

    // Translate all static data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const text = this.getNestedValue(I18N_DICTIONARY[lang], keyPath);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Notify app subsystems to re-render dynamic content
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  t(keyPath) {
    return this.getNestedValue(I18N_DICTIONARY[this.currentLang], keyPath) || keyPath;
  }
}

// Global instance
window.i18n = new I18nManager();
