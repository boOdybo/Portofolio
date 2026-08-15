/**
 * Portfolio & CV Structured Data Repository
 * Abdelrahman Fathi Abodaif Ibrahim
 */

const PORTFOLIO_DATA = {
  profile: {
    name: {
      en: "Abdelrahman Fathi Abodaif",
      ar: "عبدالرحمن فتحي أبوضيف إبراهيم"
    },
    nickname: {
      en: "Malaz",
      ar: "ملاذ"
    },
    title: {
      en: "Electronics & Embedded Systems Developer",
      ar: "مطور أنظمة مدمجة وإلكترونيات"
    },
    subtitles: {
      en: [
        "Founder & Lead Developer at TronicsHub",
        "Hardware-Software Systems Architect",
        "Technical Instructor & Content Creator (262+ Videos)",
        "Top Academic Honors Graduate (88% — 300/300 Project)"
      ],
      ar: [
        "مؤسس ومطور الإلكترونيات في TronicsHub",
        "مهندس معمارية أنظمة العتاد والبرمجيات المدمجة",
        "مدرب تقني وصانع محتوى تعليمي (+262 فيديو)",
        "خريج بمرتبة الشرف (88% — مشروع التخرج 300/300)"
      ]
    },
    location: {
      en: "Sohag, Egypt",
      ar: "سوهاج، مصر"
    },
    phone: "+20 106 757 2993",
    email: "abdelrahman.fathi.abodaif@gmail.com",
    linkedin: "https://linkedin.com/in/abdelrahman-fathi3010/",
    linkedinUser: "abdelrahman-fathi3010",
    github: "https://github.com/boOdybo",
    githubUser: "boOdybo",
    youtube: "https://youtube.com/@MaLaZ00",
    youtubeUser: "@MaLaZ00",
    summary: {
      en: "Electronics & Embedded Systems Developer with a Bachelor's degree in Industrial Education (Electronics Division, 88% Honors, Ranked 3rd). Founder of TronicsHub, with extensive hands-on experience designing end-to-end embedded electronic systems, microcontrollers (ESP32/Arduino/8085), sensor telemetry, custom PCB design in Altium Designer, robotics, and assistive technologies. Creator of Malaz Academy with 262 published lectures in higher mathematics, control systems, and electronics.",
      ar: "مطور إلكترونيات وأنظمة مدمجة حاصل على بكالوريوس التعليم الصناعي (شعبة الإلكترونيات، بتقدير ممتاز مع مرتبة الشرف 88%، والترتيب الثالث). مؤسس TronicsHub، أمتلك خبرة عملية واسعة في ابتكار وتصميم الأنظمة المدمجة المتكاملة، المتحكمات الدقيقة (ESP32 / Arduino / Intel 8085)، قياس ومعالجة الإشارات، تصميم الدوائر المطبوعة PCB عبر Altium Designer، الروبوتات والأنظمة المساعدة. مؤسس قناة ملاذ التعليمية بـ 262 فيديو في الرياضيات الجامعية ونظريات التحكم والإلكترونيات."
    }
  },

  stats: [
    { value: "10+", label: { en: "Hardware Systems Built", ar: "أنظمة عتادية منفذة" }, icon: "cpu" },
    { value: "88%", label: { en: "Honors Degree (Top 3)", ar: "امتياز مع مرتبة الشرف (الـ 3)" }, icon: "award" },
    { value: "300/300", label: { en: "Grad Project Score", ar: "الدرجة النهائية لمشروع التخرج" }, icon: "check-circle" },
    { value: "262", label: { en: "Lectures on Malaz", ar: "محاضرة على قناة ملاذ" }, icon: "video" },
    { value: "3", label: { en: "Major Awards (Hult / ISF)", ar: "جوائز ومسابقات كبرى" }, icon: "zap" }
  ],

  education: {
    degree: {
      en: "Bachelor's Degree in Industrial Education — Electrical Technology (Electronics Division)",
      ar: "بكالوريوس في التعليم الصناعي — تكنولوجيا الكهرباء (شعبة الإلكترونيات)"
    },
    institution: {
      en: "Faculty of Technology and Education, Sohag University",
      ar: "كلية التكنولوجيا والتعليم — جامعة سوهاج"
    },
    year: "2024",
    grade: {
      en: "Excellent with Honors (88%)",
      ar: "ممتاز مع مرتبة الشرف (88%)"
    },
    ranking: {
      en: "Ranked 3rd in Electronics Division | 10th College-wide",
      ar: "الترتيب الثالث على شعبة الإلكترونيات | العاشر على الكلية"
    },
    gradProject: {
      name: "OptiNutri Scale",
      score: "300 / 300 (100% Full Score — Excellent)",
      en: "OptiNutri Scale — Connected Body Measurement & Personalized Nutrition Management Platform (Score: 300/300)",
      ar: "ميزان OptiNutri الذكي — نظام متكامل لقياس المؤشرات الحيوية والتغذية الذكية (300/300)"
    }
  },

  awards: [
    {
      title: { en: "Hult Prize — 1st Place (University Level)", ar: "جائزة هلت العالمية (Hult Prize) — المركز الأول" },
      org: { en: "Sohag University Local Summit", ar: "قمة جامعة سوهاج" },
      year: "2024",
      highlight: { en: "Qualified for the Regional Stage in Thailand", ar: "التأهل للمرحلة الإقليمية في تايلاند" },
      desc: {
        en: "Won 1st place across Sohag University for innovative tech solution architecture and successfully secured qualification to represent the university in the Thailand regional summit.",
        ar: "حصد المركز الأول على مستوى جامعة سوهاج والتأهل المباشر لتمثيل الجامعة في القمة الإقليمية الدولية في تايلاند."
      },
      badge: "1st Place"
    },
    {
      title: { en: "ISF — EGP Competition Winning Team", ar: "مسابقة EGP — صندوق رعاية المبتكرين والنوابغ (ISF)" },
      org: { en: "Egyptian Innovators Support Fund (ISF)", ar: "صندوق رعاية المبتكرين والنوابغ - وزارة التعليم العالي" },
      year: "2024",
      highlight: { en: "Sole winning team from Upper Egypt", ar: "الفريق الفائز الوحيد الممثل لصعيد مصر" },
      desc: {
        en: "Recognized among Egypt's top technical innovations under the prestigious national fund, standing out as the single victorious team from Upper Egypt.",
        ar: "التتويج ضمن أفضل الابتكارات التقنية الوطنية تحت مظلة الصندوق الحكومي المرموق كفريق فائز وحيد من الصعيد."
      },
      badge: "Winner"
    },
    {
      title: { en: "ISF — IGB Competition Winning Team", ar: "مسابقة IGB — صندوق رعاية المبتكرين والنوابغ (ISF)" },
      org: { en: "Egyptian Innovators Support Fund (ISF)", ar: "صندوق رعاية المبتكرين والنوابغ - وزارة التعليم العالي" },
      year: "2024",
      highlight: { en: "Sole winning team from Upper Egypt", ar: "الفريق الفائز الوحيد الممثل لصعيد مصر" },
      desc: {
        en: "Selected as a winning initiative for advanced engineering design and real-world industrial impact.",
        ar: "فوز مستحق في المسابقة الوطنية عن التصميم الهندسي المتقدم والقابلية للتطبيق الصناعي والريادي."
      },
      badge: "Winner"
    }
  ],

  projects: [
    {
      id: "optinutri",
      title: {
        en: "OptiNutri Scale — Connected Body Composition Platform",
        ar: "ميزان OptiNutri الذكي — منصة قياس التكوين الجسدي والتحليل الصحي"
      },
      category: "embedded-iot",
      tagline: {
        en: "Graduation Project (Awarded 300/300 Full Score)",
        ar: "مشروع التخرج الحاصل على الدرجة النهائية 300/300"
      },
      summary: {
        en: "An intelligent medical-grade body measurement and health intelligence station. Combines load cell instrumentation, ultrasonic precision height sensing, Bioelectrical Impedance Analysis (BIA) for body fat calculation, and real-time WiFi telemetry to a cloud platform for automated dynamic nutritional planning.",
        ar: "محطة قياس وتحليل صحي ذكية متكاملة تجمع بين خلايا الوزن (Load Cells) مع مضخمات HX711، قياس الطول بالموجات فوق الصوتية، تحليل المقاومة الكهربائية الحيوية (BIA) لحساب نسبة الدهون، مع نقل بيانات فوري عبر WiFi إلى منصة سحابية لتوليد جداول تغذية علاجية مخصصة."
      },
      architecture: "Load Cells (HX711) + Ultrasonic + BIA Sensors ➔ ESP32 Core MCU ➔ WiFi Telemetry ➔ Cloud REST API ➔ Interactive Diet & Health Analytics Dashboard",
      specs: [
        { label: { en: "Core MCU", ar: "المتحكم الأساسي" }, value: "ESP32 (Dual Core 240MHz)" },
        { label: { en: "Weight Sensor", ar: "مستشعر الوزن" }, value: "4x Load Cells + HX711 24-bit ADC" },
        { label: { en: "Height Sensor", ar: "مستشعر الطول" }, value: "Ultrasonic Transceiver Module" },
        { label: { en: "Body Composition", ar: "تحليل الجسم" }, value: "Bioelectrical Impedance Analysis (BIA)" },
        { label: { en: "Connectivity", ar: "الاتصال اللاسلكي" }, value: "WiFi 802.11 b/g/n & Webhooks" },
        { label: { en: "Firmware Stack", ar: "حزمة الفيرموير" }, value: "Embedded C++, FreeRTOS Tasks" }
      ],
      highlights: [
        { en: "Engineered sensor signal conditioning pipeline with 24-bit ADC calibration routines.", ar: "تصميم دوائر معايرة الإشارات الحيوية مع مصفوفة معالجة رقمية بدقة 24-bit." },
        { en: "Developed real-time wireless synchronization with dynamic nutrition generation algorithms.", ar: "بناء نظام مزامنة لاسلكي لحظي يولد برامج غذائية تفاعلية حسب الحالة الصحية والهدف." },
        { en: "Achieved 300/300 final graduation score with highest committee commendation.", ar: "نال الدرجة النهائية الكاملة 300 من 300 مع إشادة خاصة من لجنة التحكيم." }
      ],
      featured: true,
      badge: "Graduation Project: 300/300"
    },
    {
      id: "ai-robot",
      title: {
        en: "AI Autonomous Mobile Robot with Voice Pipeline",
        ar: "الروبوت الذكي المستقل مع معمارية التفاعل الصوتي المدعومة بالذكاء الاصطناعي"
      },
      category: "robotics-ai",
      tagline: {
        en: "SLAM Mapping, I2S Audio Pipeline & LLM Voice Interaction",
        ar: "ملاحة ورسم خرائط SLAM وتفاعل صوتي كامل عبر I2S ونماذج الذكاء الاصطناعي"
      },
      summary: {
        en: "An autonomous mobile robotics platform combining real-time SLAM environmental mapping, motor control telemetry, and an end-to-end embedded voice dialogue pipeline leveraging I2S MEMS microphones, Cloud LLM reasoning, Text-to-Speech synthesis, and MAX98357A DAC audio amplification.",
        ar: "منصة روبوتية متنقلة ومستقلة تدمج خوارزميات الملاحة ورسم الخرائط SLAM، التحكم في المحركات، وسلسلة معالجة صوتية متكاملة عبر ميكروفون I2S MEMS الرقمي، وتكامل مع نماذج اللغة الكبيرة LLM للاستيعاب، ثم التوليد الصوتي TTS عبر مضخم الصوت الرقمي MAX98357A."
      },
      architecture: "I2S MEMS Mic ➔ Speech-to-Text ➔ LLM Brain ➔ Text-to-Speech ➔ MAX98357A I2S DAC ➔ Audio Speaker + SLAM Motor Navigation",
      specs: [
        { label: { en: "Audio Input", ar: "الإدخال الصوتي" }, value: "INMP441 I2S Digital MEMS Microphone" },
        { label: { en: "Audio Output", ar: "الإخراج الصوتي" }, value: "MAX98357A I2S Class D DAC + 3W Speaker" },
        { label: { en: "Mapping & Nav", ar: "الملاحة والخرائط" }, value: "2D SLAM & Ultrasonic Proximity Arrays" },
        { label: { en: "Controller", ar: "المتحكم الرئيسي" }, value: "ESP32-S3 High Performance Node" },
        { label: { en: "AI Engine", ar: "محرك الذكاء الاصطناعي" }, value: "Cloud LLM Pipeline + Edge Audio DSP" }
      ],
      highlights: [
        { en: "Implemented low-latency direct I2S audio streaming pipeline for speech acquisition.", ar: "تنفيذ خط تدفق صوتي رقمي مباشر عبر I2S بضآلة تأخير استثنائية." },
        { en: "Built autonomous obstacle negotiation and spatial mapping integration.", ar: "برمجة خوارزميات تفادي العوائق ورسم الخرائط المكانية الذاتية." }
      ],
      featured: true,
      badge: "AI & Robotics"
    },
    {
      id: "sign-glove",
      title: {
        en: "Sign Language to Speech Assistive Smart Glove",
        ar: "القفاز الذكي لتحويل لغة الإشارة إلى صوت ناطق"
      },
      category: "biometrics",
      tagline: {
        en: "Wearable Sensor Fusion & Gesture-to-Speech Synthesis",
        ar: "نظام ملبوس لدمج المستشعرات وتحويل الإيماءات الحركية إلى كلام مسموع"
      },
      summary: {
        en: "An assistive wearable system designed to bridge communication barriers for the deaf and mute community. Analyzes finger flexure angles and hand spatial orientation in 3D space using sensor fusion, recognizing gestures and translating them in real-time to clear spoken audio.",
        ar: "نظام ملبوس لمساعدة الصم والبكم على التواصل الفوري. يقرأ زوايا انثناء الأصابع عبر مجسات المرونة (Flex Sensors) والاتجاه المكاني ثلاثي الأبعاد عبر وحدة MPU6050، ثم يصنف الإيماءات بدقة ويحولها فورياً إلى كلام صوتي واضح."
      },
      architecture: "5x Flex Bend Sensors + MPU6050 6-DOF IMU ➔ Microcontroller Gesture Classifier ➔ Audio Speech Decoder ➔ Speaker Output",
      specs: [
        { label: { en: "Finger Flex", ar: "حساسات الانثناء" }, value: "5x Resistive Flex/Bend Sensors" },
        { label: { en: "Orientation", ar: "حساس الحركة" }, value: "MPU6050 (3-Axis Gyro + 3-Axis Accel)" },
        { label: { en: "Interface", ar: "بروتوكول الاتصال" }, value: "Analog ADC Matrix + I2C Fast-Mode" },
        { label: { en: "Audio System", ar: "نظام الصوت" }, value: "Embedded Speech Synthesis Unit" }
      ],
      highlights: [
        { en: "Engineered multi-channel analog filtering for accurate finger flexion calibration.", ar: "تصميم دوائر ترشيح إشارات الأنالوج المتعددة لمعايرة دقيقة لحركات الأصابع." },
        { en: "Integrated complementary filtering for stable IMU yaw/pitch/roll tracking.", ar: "تطبيق خوارزميات تصفية الحركة لتتبع دقيق لزوايا اليد في الفضاء." }
      ],
      featured: true,
      badge: "Assistive Tech"
    },
    {
      id: "firefighting-robot",
      title: {
        en: "Autonomous Firefighting & Flame Suppression Robot",
        ar: "روبوت الإطفاء الذكي واستكشاف ومكافحة الحرائق ذاتياً"
      },
      category: "robotics-ai",
      tagline: {
        en: "Multi-Zone Flame Triangulation & Extinguishing Actuation",
        ar: "تحديد مواقع اللهب والتوجه الذاتي وإخماد النيران"
      },
      summary: {
        en: "An autonomous emergency response vehicle equipped with a calibrated flame detection sensor array, infrared obstacle navigation, and a high-pressure pump targeting system to detect and extinguish localized fires without human hazard.",
        ar: "مركبة استجابة طوارئ ذاتية القيادة مزودة بمصفوفة مستشعرات كشف اللهب المعايرة، وملاحة بالأشعة تحت الحمراء لتفادي العوائق، مع نظام مضخة مائية موجهة لإخماد مصادر النيران دون تعريض البشر للخطر."
      },
      architecture: "Multi-Directional Flame Array + IR Obstacle Avoidance ➔ Embedded Logic ➔ H-Bridge Motor Control + Relay-Driven Pump",
      specs: [
        { label: { en: "Flame Array", ar: "مصفوفة اللهب" }, value: "3-Way Optical Infrared Flame Sensors" },
        { label: { en: "Drivetrain", ar: "منظومة الحركة" }, value: "Dual H-Bridge High Torque Motor Driver" },
        { label: { en: "Actuation", ar: "الإخماد" }, value: "Submersible Micro-Pump + Servo Directional Nozzle" }
      ],
      highlights: [
        { en: "Multi-threshold flame triangulation algorithm for precise target convergence.", ar: "خوارزمية تثليث بصرية ثلاثية لتحديد زاوية وبؤرة اللهب بدقة والاقتراب الآمن." }
      ],
      featured: false,
      badge: "Robotics"
    },
    {
      id: "fingerprint-attendance",
      title: {
        en: "Biometric University Fingerprint Attendance System",
        ar: "نظام تسجيل الحضور الذكي بالبصمة البيومترية للمدرجات الجامعية"
      },
      category: "biometrics",
      tagline: {
        en: "Optical Sensor Interfacing & Local Verification Matrix",
        ar: "معالجة بصمات الأصابع الضوئية وتخزين وتوثيق سجلات الحضور"
      },
      summary: {
        en: "A standalone embedded attendance management unit featuring optical biometric fingerprint scanning, on-chip template matching, real-time clock timestamping, and internal non-volatile logging for secure academic verification.",
        ar: "وحدة مدمجة مستقلة لإدارة الحضور والانصراف تعتمد على مسح البصمة الضوئية، المطابقة المباشرة على الشريحة، توثيق الوقت الحقيقي عبر RTC، وتخزين السجلات في ذاكرة غير متطايرة لمنع التلاعب."
      },
      architecture: "Optical Biometric Module (UART) + RTC Clock ➔ Embedded MCU ➔ OLED Display + EEPROM Log Bank",
      specs: [
        { label: { en: "Sensor", ar: "المستشعر" }, value: "Optical Fingerprint Module (UART 57600 baud)" },
        { label: { en: "Capacity", ar: "السعة" }, value: "100+ Secure Biometric Templates" },
        { label: { en: "Interface", ar: "واجهة المستخدم" }, value: "I2C Graphic Display + Status Audio Buzzer" }
      ],
      highlights: [
        { en: "High-speed matching protocol over secure UART packet transactions.", ar: "بروتوكول اتصال سريع وآمن عبر حزم بيانات UART المشفرة." }
      ],
      featured: false,
      badge: "Biometrics"
    },
    {
      id: "nfc-attendance",
      title: {
        en: "NFC Smart Identification & School Attendance Unit",
        ar: "نظام الحضور والتعريف الذكي للطلاب ببطاقات NFC"
      },
      category: "embedded-iot",
      tagline: {
        en: "High-Frequency 13.56 MHz RFID/NFC Contactless Authentication",
        ar: "مصادقة لا تلامسية عالية التردد وتسجيل بيانات الطلاب إلكترونياً"
      },
      summary: {
        en: "A contactless student verification station powered by high-frequency NFC reader hardware. Automatically scans student ID tokens, checks access authorization, updates local registries, and displays greeting status.",
        ar: "محطة تعريف طلابية لا تلامسية تعمل بتردد 13.56MHz عبر قارئ NFC. تقرأ فورياً شريحة هوية الطالب، تتحقق من الصلاحيات وتحدث السجلات وتظهر بيانات الترحيب."
      },
      architecture: "13.56MHz NFC Reader (SPI) ➔ Microcontroller Validation Engine ➔ LCD Feedback + Local Database Store",
      specs: [
        { label: { en: "NFC Reader", ar: "قارئ NFC" }, value: "PN532 / RC522 High Frequency SPI Module" },
        { label: { en: "Protocols", ar: "البروتوكولات" }, value: "ISO/IEC 14443 Type A/Mifare Classic" }
      ],
      highlights: [
        { en: "Fast contactless transaction under 100ms per student verification.", ar: "زمن استجابة فائق السرعة أقل من 100 مللي ثانية لكل عملية تحقق." }
      ],
      featured: false,
      badge: "IoT"
    },
    {
      id: "desalination-monitor",
      title: {
        en: "Water Desalination Instrumentation & Telemetry System",
        ar: "نظام المراقبة والقياس الإلكتروني لمحطات تحلية المياه"
      },
      category: "embedded-iot",
      tagline: {
        en: "Multi-Parameter Industrial Water Quality & Flow Acquisition",
        ar: "جمع بيانات جودة المياه والأملاح والتدفق وتوثيقها لحظياً"
      },
      summary: {
        en: "An industrial-grade telemetry and process monitoring system engineered for water desalination testing rigs. Acquires real-time readings from TDS (Total Dissolved Solids), temperature, pressure, and water flow rate sensors with persistent SD data logging.",
        ar: "نظام إلكتروني صناعي لمراقبة واختبار محطات تحلية المياه. يجمع البيانات اللحظية من مجسات الأملاح الكلية الذائبة (TDS)، الحرارة، الضغط، ومعدل تدفق المياه، مع حفظ السجلات اللحظية على بطاقة SD وتوفير مراقبة حية."
      },
      architecture: "Analog TDS Probe + Hall-Effect Flow Sensor + Temp Probe ➔ ADC Filter Matrix ➔ Embedded Logger + CSV Engine",
      specs: [
        { label: { en: "TDS Range", ar: "نطاق الأملاح" }, value: "0 - 1000 ppm with Temperature Compensation" },
        { label: { en: "Flow Rate", ar: "حساس التدفق" }, value: "Hall Effect Pulse Frequency Sensor" },
        { label: { en: "Storage", ar: "التخزين" }, value: "High-Speed SPI MicroSD FAT32 Data Logger" }
      ],
      highlights: [
        { en: "Applied temperature compensation formulas to guarantee accurate TDS readings.", ar: "تطبيق معادلات التعويض الحراري لضمان دقة قياس الأملاح الذائبة." }
      ],
      featured: true,
      badge: "Instrumentation"
    },
    {
      id: "smart-home",
      title: {
        en: "Smart Home Embedded Automation & Load Control",
        ar: "نظام أتمتة المنازل الذكية والتحكم في الأحمال الكهربائية"
      },
      category: "embedded-iot",
      tagline: {
        en: "Isolated AC/DC Switching, Multi-Node Telemetry & Remote Control",
        ar: "تحكم معزول في الأحمال الكهربائية وشبكة عقد استشعار ذكية"
      },
      summary: {
        en: "A robust home automation framework designed for safe high-voltage AC load management via optoisolated relays and MOSFET drivers, paired with environmental sensing and responsive web/app control interfaces.",
        ar: "نظام أتمتة منزلي صلب يوفر تحكماً آمناً في الأحمال الكهربائية المنزلية عالية الجهد عبر ريلايات معزولة ضوئياً ومتحكمات MOSFET، مع حساسات للبيئة وتحكم مرن."
      },
      architecture: "Environmental Sensors ➔ ESP32 Microcontroller ➔ Optocoupled Solid State / Relay Drivers ➔ Mains Load Switching",
      specs: [
        { label: { en: "Power Isolation", ar: "العزل الكهربائي" }, value: "Optocoupler Isolated Multi-Channel Drivers" },
        { label: { en: "Switching", ar: "الأحمال" }, value: "Solid-State Relay + Power MOSFET DC Drivers" }
      ],
      highlights: [
        { en: "Galvanic isolation safeguarding microcontrollers from inductive voltage spikes.", ar: "عزل كلفاني كامل لحماية الدوائر الحساسة من التيارات الارتجاعية." }
      ],
      featured: false,
      badge: "IoT"
    },
    {
      id: "solar-dryer",
      title: {
        en: "Hybrid Solar Fruit Dryer with Closed-Loop Control",
        ar: "المجفف الشمسي الهجين للفواكه مع تحكم رقمي مغلق الحلقة"
      },
      category: "renewable",
      tagline: {
        en: "Solar Thermal + PV Electrical Heating with Environmental PID",
        ar: "تكامل الطاقة الحرارية والكهربائية الشمسية مع ضبط دقيق للحرارة"
      },
      summary: {
        en: "An agricultural food preservation system utilizing both direct solar thermal heat collectors and auxiliary photovoltaic electrical heating elements, governed by microcontrollers to maintain ideal drying curves without nutrient degradation.",
        ar: "نظام زراعي لتجفيف وحفظ المحاصيل يجمع بين مجمعات الطاقة الشمسية الحرارية المباشرة والتدفئة الكهربائية المعززة بالخلايا الكهروضوئية، مع نظام تحكم مدمج لضبط منحنيات الحرارة والرطوبة تلقائياً."
      },
      architecture: "Solar Collectors + PV Panels ➔ Temp/Humidity Sensor Network ➔ Closed Loop PWM Controller ➔ Fans & Auxiliary Heaters",
      specs: [
        { label: { en: "Energy Source", ar: "مصادر الطاقة" }, value: "Hybrid: Solar Thermal + 12V Photovoltaic" },
        { label: { en: "Sensors", ar: "المستشعرات" }, value: "Digital DHT22 / DS18B20 Multi-Point Array" }
      ],
      highlights: [
        { en: "Automated exhaust airflow modulation to regulate relative internal chamber humidity.", ar: "تحكم آلي في تدفق الهواء وسحب الرطوبة الزائدة لرفع كفاءة التجفيف." }
      ],
      featured: false,
      badge: "Renewable Energy"
    },
    {
      id: "voice-wheelchair",
      title: {
        en: "Multi-Mode Voice-Controlled Smart Wheelchair",
        ar: "الكرسي المتحرك الذكي متعدد أنماط التحكم بالأوامر الصوتية"
      },
      category: "robotics-ai",
      tagline: {
        en: "Hands-Free Assistive Mobility with Sonar Safety Envelope",
        ar: "حركة ذكية للأشخاص ذوي الإعاقة الحركية مع حزام حماية استشعاري"
      },
      summary: {
        en: "An assistive electric wheelchair interface enabling paralyzed users to steer mobility via custom spoken vocal triggers or alternative modes, backed by an autonomous ultrasonic safety bubble to prevent collisions.",
        ar: "منظومة تحكم ذكية للكراسي المتحركة الكهربائية تمكن المصابين بالشلل من القيادة عبر الأوامر الصوتية المعرفة مسبقاً أو الأنماط البديلة، مع نظام أمان بالموجات فوق الصوتية يوقف الحركة فوراً عند اقتراب العوائق."
      },
      architecture: "Voice Recognition Unit / Joystick ➔ Microcontroller State Machine ➔ Motor Drive Electronics + Collision Override",
      specs: [
        { label: { en: "Safety Interlock", ar: "نظام الأمان" }, value: "Ultrasonic 360 Proximity Zone Braking" },
        { label: { en: "Motor Drivers", ar: "مشغلات المحركات" }, value: "High-Current PWM Differential H-Bridges" }
      ],
      highlights: [
        { en: "Dual-priority safety override: proximity hardware interrupts immediately halt motors.", ar: "مقاطعة أمان عتادية ذات أولوية قصوى توقف المحركات عند وجود خطر فوراً." }
      ],
      featured: true,
      badge: "Assistive Tech"
    }
  ],

  skills: {
    embedded: {
      categoryName: { en: "Embedded Systems & Firmware", ar: "الأنظمة المدمجة والبرمجيات الدقيقة" },
      icon: "cpu",
      items: [
        { name: "ESP32 / ESP32-S3 (Dual-Core, WiFi, BLE, FreeRTOS)", level: "Advanced" },
        { name: "Arduino Architecture & Microchip AVR", level: "Advanced" },
        { name: "Embedded C / C++ & Register Manipulation", level: "Advanced" },
        { name: "Communication Protocols (I²C, SPI, UART, I²S)", level: "Advanced" },
        { name: "NFC / RFID Contactless Identification", level: "Proficient" },
        { name: "Sensor Signal Acquisition & Conditioning", level: "Advanced" },
        { name: "Real-Time Telemetry & IoT Protocols", level: "Advanced" }
      ]
    },
    electronics: {
      categoryName: { en: "Electronics & Hardware Design", ar: "الإلكترونيات وتصميم العتاد" },
      icon: "zap",
      items: [
        { name: "Analog & Digital Circuit Design", level: "Advanced" },
        { name: "Power MOSFET Switching & Gate Drivers", level: "Advanced" },
        { name: "Relay Drivers & Galvanic Isolation", level: "Advanced" },
        { name: "H-Bridge Motor Control & PWM Regulation", level: "Advanced" },
        { name: "Sensors & Measurement Electronics (Load Cells, BIA, IMU)", level: "Advanced" },
        { name: "Hardware Prototyping & Lab Troubleshooting", level: "Advanced" }
      ]
    },
    pcb: {
      categoryName: { en: "PCB Design & Manufacturing", ar: "تصميم الدوائر المطبوعة (PCB)" },
      icon: "layers",
      items: [
        { name: "Altium Designer (Schematic Capture & PCB Layout)", level: "Proficient" },
        { name: "Multi-Layer Routing & Trace Clearance", level: "Proficient" },
        { name: "Power Planes, Ground Pour & Decoupling", level: "Proficient" },
        { name: "Design Rules Checking (DRC) & Signal Integrity", level: "Proficient" },
        { name: "Gerber & Drill File Export for Fabrication", level: "Proficient" },
        { name: "Component Footprints & Bill of Materials (BOM)", level: "Proficient" }
      ]
    },
    microprocessors: {
      categoryName: { en: "Microprocessors & Low-Level", ar: "المعالجات الدقيقة ولغة التجميع" },
      icon: "terminal",
      items: [
        { name: "Intel 8085 Microprocessor Architecture", level: "Advanced" },
        { name: "8085 Assembly Language Programming", level: "Advanced" },
        { name: "Memory & I/O Address Decoding", level: "Advanced" },
        { name: "Instruction Sets (Data Transfer, Branching, Logic, Arithmetic)", level: "Advanced" },
        { name: "Hardware Interrupts & Flag Register Manipulation", level: "Advanced" }
      ]
    },
    controlSystems: {
      categoryName: { en: "Control Systems & Robotics", ar: "نظم التحكم والروبوتكس" },
      icon: "activity",
      items: [
        { name: "Transfer Functions & Block Diagram Reduction", level: "Advanced" },
        { name: "Open-Loop & Closed-Loop Control Analysis", level: "Advanced" },
        { name: "First-Order & Second-Order Transient Response", level: "Advanced" },
        { name: "Routh-Hurwitz Stability Criterion & Steady-State Error", level: "Advanced" },
        { name: "Mobile Robotics, SLAM & Sensor Integration", level: "Advanced" },
        { name: "MATLAB Basics & Engineering Computation", level: "Proficient" }
      ]
    },
    scientific: {
      categoryName: { en: "Mathematical & Scientific Foundations", ar: "الأسس الرياضية والعلمية" },
      icon: "compass",
      items: [
        { name: "Differential & Integral Calculus", level: "Expert / Instructor" },
        { name: "Differential Equations (ODEs)", level: "Expert / Instructor" },
        { name: "Laplace & Inverse Laplace Transforms", level: "Expert / Instructor" },
        { name: "Fourier Series & Harmonic Analysis", level: "Expert / Instructor" },
        { name: "Engineering Statistics, Correlation & Linear Regression", level: "Expert / Instructor" },
        { name: "Classical Physics (Statics, Kinematics, Dynamics, Vectors)", level: "Expert / Instructor" }
      ]
    }
  },

  malazAcademy: {
    channel: "@MaLaZ00",
    name: "ملاذ — Malaz Academy",
    subscriberCount: "1.81K+",
    videoCount: "262",
    startDate: "10 Dec 2020",
    description: {
      en: "A comprehensive academic and technical video library founded in 2020, delivering 262 thorough lectures on university mathematics, microprocessors assembly, electrical circuit analysis, control theory, and physics.",
      ar: "مكتبة أكاديمية وتقنية شاملة انطلقت في ديسمبر 2020، تضم 262 محاضرة مصورة ومفصلة في الرياضيات الجامعية المتقدمة، لغة التجميع لمعالجات Intel 8085، نظريات الدوائر والتحكم، والفيزياء الهندسية."
    },
    categories: [
      {
        id: "math",
        name: { en: "Higher Mathematics", ar: "الرياضيات الجامعية المتقدمة" },
        topics: [
          "Differential Calculus & Limits",
          "Integral Calculus & Partial Fractions",
          "Ordinary Differential Equations (ODEs)",
          "Laplace & Inverse Laplace Transforms",
          "Fourier Series Expansion",
          "Gamma & Beta Special Functions",
          "Vector Algebra & Coordinate Systems"
        ]
      },
      {
        id: "microprocessors",
        name: { en: "Microprocessors & Assembly", ar: "المعالجات الدقيقة ولغة التجميع" },
        topics: [
          "Intel 8085 CPU Internal Architecture",
          "Assembly Instructions: MOV, MVI, LXI, LDA, STA",
          "Arithmetic Operations: ADD, ADC, SUB, SBB, DCR, INR",
          "Jump & Branching Logic: JMP, JZ, JNZ, JC, JNC",
          "Microprocessor Memory & I/O Address Space"
        ]
      },
      {
        id: "circuits-control",
        name: { en: "Circuits & Control Systems", ar: "الدوائر ونظم التحكم" },
        topics: [
          "Kirchhoff's Laws & Resistor Networks",
          "Thevenin, Norton & Superposition Theorems",
          "AC Circuits & RLC Resonance",
          "Transfer Functions & Block Diagram Algebra",
          "First/Second-Order Transient Response",
          "Routh-Hurwitz Stability Criterion"
        ]
      },
      {
        id: "statistics-physics",
        name: { en: "Statistics, Physics & MATLAB", ar: "الإحصاء والفيزياء وماتلاب" },
        topics: [
          "Descriptive Statistics & Central Tendency",
          "Measures of Dispersion, Skewness & Kurtosis",
          "Linear Regression & Pearson Correlation",
          "Statics, Dynamics & Center of Gravity",
          "MATLAB Practical Simulations"
        ]
      }
    ]
  },

  tronicshub: {
    name: "TronicsHub",
    founded: "October 2024",
    role: { en: "Founder & Lead Hardware Developer", ar: "المؤسس ومطور العتاد الإلكتروني" },
    location: "Sohag, Egypt",
    overview: {
      en: "TronicsHub is a technology and embedded hardware development initiative founded by Abdelrahman Fathi. It provides custom embedded hardware prototyping, electronic product development, graduation project engineering support, and practical technical training.",
      ar: "ترونكس هب (TronicsHub) هي مبادرة هندسية تقنية متخصصة أسسها عبدالرحمن فتحي لتصميم وتطوير النماذج الأولية للأجهزة الإلكترونية، وتصنيع حلول الأنظمة المدمجة، وتقديم الدعم الفني لمشاريع التخرج، والتدريب العملي المتخصص."
    },
    services: [
      {
        title: { en: "Custom Embedded Device Prototyping", ar: "تطوير النماذج الأولية للأجهزة المدمجة" },
        desc: {
          en: "From functional concept to working hardware: component selection, circuit design, firmware programming, and full system integration.",
          ar: "تحويل الأفكار إلى أجهزة حقيقية تعمل: اختيار المكونات، تصميم الدوائر، برمجة الفيرموير، وتكامل النظام."
        },
        icon: "cpu"
      },
      {
        title: { en: "PCB Layout & Fabrication Preparation", ar: "تصميم الدوائر المطبوعة وتجهيز التصنيع" },
        desc: {
          en: "Professional schematic capture, multi-layer routing, ground planes, and production-ready Gerber packages using Altium Designer.",
          ar: "رسم المخططات وتوزيع المسارات متعددة الطبقات وإعداد ملفات الجيربر الجاهزة للإنتاج عبر Altium Designer."
        },
        icon: "layers"
      },
      {
        title: { en: "Graduation Project Incubation & Mentoring", ar: "حضانة ودعم مشاريع التخرج الهندسية" },
        desc: {
          en: "Guiding engineering students through system architecture, hardware debugging, firmware development, and presentation prep.",
          ar: "مرافقة الطلاب في بناء المعمارية الهندسية للمشاريع، تصحيح أخطاء العتاد، كتابة الكود وتجهيز العرض الفني."
        },
        icon: "award"
      },
      {
        title: { en: "Hands-On Technical Training Programs", ar: "برامج التدريب التقني التخصصي" },
        desc: {
          en: "Interactive online and in-person courses in Arduino, Robotics, Microprocessors, and Applied University Mathematics.",
          ar: "دورات تدريبية حضورية وعبر الإنترنت في الأردوينو، الروبوتات، المعالجات الدقيقة، والرياضيات التطبيقية."
        },
        icon: "book-open"
      }
    ]
  },

  cvData: {
    roles: [
      { id: "embedded", title: { en: "Embedded Systems & IoT", ar: "الأنظمة المدمجة وإنترنت الأشياء" } },
      { id: "pcb", title: { en: "Electronics & PCB Design", ar: "الإلكترونيات وتصميم الـ PCB" } },
      { id: "trainer", title: { en: "Technical Trainer & Educator", ar: "التدريب التقني والتعليم" } },
      { id: "master", title: { en: "Comprehensive Master CV", ar: "السيرة المهنية الشاملة (Master CV)" } }
    ]
  }
};
