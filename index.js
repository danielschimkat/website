// ====================================
// Translations
// ====================================
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            title: "Software Quality Assurance Engineer",
            description: "Specialized in test automation, API testing, and ensuring software quality through comprehensive testing strategies.",
            contact: "Get in Touch",
            download: "Download CV"
        },
        about: {
            title: "About Me",
            p1: "Welcome! I'm a dedicated Software Quality Assurance Engineer with expertise in test automation, API testing, and load testing. Currently working at TIMOCOM, I specialize in ensuring software quality through comprehensive testing strategies.",
            p2: "With a Bachelor of Engineering in Electrical and Information Technology (Automation Technology) from Hochschule Düsseldorf, I combine technical knowledge with practical testing experience. I'm ISTQB Certified and have extensive experience with modern testing frameworks and tools.",
            p3: "When I'm not testing software, you'll find me jogging, traveling, riding my motorcycle, or working on my HomeLab projects. I also volunteer as a night watch at Haus am Stadtpark, Caritas Neuss, and have a background in community service through the youth fire department and church children's programs."
        },
        skills: {
            title: "Skills",
            programming: "Programming Languages",
            testing: "Testing & Development Tools",
            devops: "DevOps & Infrastructure",
            languages: "Languages",
            german: "German (Native)",
            english: "English (B2)"
        },
        experience: {
            title: "Experience"
        },
        education: {
            title: "Education"
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Let's Connect",
            description: "I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über mich",
            skills: "Fähigkeiten",
            experience: "Berufserfahrung",
            education: "Bildung",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Hallo, ich bin",
            title: "Software Quality Assurance Engineer",
            description: "Spezialisiert auf Testautomatisierung, API-Tests und Sicherstellung der Softwarequalität durch umfassende Teststrategien.",
            contact: "Kontakt aufnehmen",
            download: "Lebenslauf herunterladen"
        },
        about: {
            title: "Über mich",
            p1: "Willkommen! Ich bin ein engagierter Software Quality Assurance Engineer mit Expertise in Testautomatisierung, API-Tests und Lasttests. Derzeit arbeite ich bei TIMOCOM und bin spezialisiert auf die Sicherstellung der Softwarequalität durch umfassende Teststrategien.",
            p2: "Mit einem Bachelor of Engineering in Elektro- und Informationstechnik (Automatisierungstechnik) von der Hochschule Düsseldorf verbinde ich technisches Wissen mit praktischer Testerfahrung. Ich bin ISTQB-zertifiziert und verfüge über umfangreiche Erfahrung mit modernen Test-Frameworks und -Tools.",
            p3: "Wenn ich nicht gerade Software teste, finden Sie mich beim Joggen, auf Reisen, beim Motorradfahren oder bei der Arbeit an meinen HomeLab-Projekten. Ich engagiere mich auch ehrenamtlich als Nachtwache im Haus am Stadtpark, Caritas Neuss, und habe einen Hintergrund im Gemeindedienst durch die Jugendfeuerwehr und kirchliche Kinderprogramme."
        },
        skills: {
            title: "Fähigkeiten",
            programming: "Programmiersprachen",
            testing: "Test- & Entwicklungswerkzeuge",
            devops: "DevOps & Infrastruktur",
            languages: "Sprachen",
            german: "Deutsch (Muttersprache)",
            english: "Englisch (B2)"
        },
        experience: {
            title: "Berufserfahrung"
        },
        education: {
            title: "Bildung"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Lass uns verbinden",
            description: "Ich bin immer interessiert daran, von neuen Möglichkeiten, interessanten Projekten zu hören oder einfach über Technologie zu plaudern.",
            name: "Name",
            email: "E-Mail",
            message: "Nachricht",
            send: "Nachricht senden"
        }
    }
};

// ====================================
// Language & Theme Management
// ====================================
let currentLang = localStorage.getItem('language') || 'de'; // Default to German
let currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];

        for (const key of keys) {
            translation = translation[key];
        }

        element.textContent = translation;
    });

    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    langToggle.textContent = lang === 'en' ? 'DE' : 'EN';

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    } else {
        document.documentElement.classList.remove('light-mode');
        document.getElementById('themeToggle').textContent = '🌙';
    }
}

// Initialize language and theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Set initial theme
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    }

    // Add event listeners
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'de' : 'en');
    });

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Activate current nav link on page load
    activateNavLink();

    // Trigger skill bar animation if already in view
    animateSkillBars();

    console.log('CV Website loaded successfully!');
});

// ====================================
// Navbar Scroll Effect
// ====================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ====================================
// Mobile Navigation Toggle
// ====================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ====================================
// Active Navigation Link on Scroll
// ====================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ====================================
// Smooth Scroll with Offset for Fixed Navbar
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// Animate Skill Bars on Scroll
// ====================================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
            bar.style.width = bar.style.width; // Trigger animation
        }
    });
};

window.addEventListener('scroll', animateSkillBars);

// ====================================
// Fade In Animation on Scroll
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateOnScroll = document.querySelectorAll(
    '.skill-category, .timeline-item, .education-card'
);

animateOnScroll.forEach(element => {
    observer.observe(element);
});

// ====================================
// Contact Form Handling
// ====================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');

    // Reset form
    contactForm.reset();

    // In a real implementation, you would do something like:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch(error => {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
    });
    */
});

// Note: DOMContentLoaded initialization is now at the top of the file
