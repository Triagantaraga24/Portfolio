let currentLanguage = localStorage.getItem('language') || 'id';

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const container = document.querySelector(".container");

    sidebar.classList.toggle("collapsed");
    container.classList.toggle("shifted");
}

function toggleSidebarMobile() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebarMobile() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}


function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = src;
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}

const translations = {
    id: {
        title: "Pengembang Web",
        address: "Tangerang Selatan",
        aboutTitle: "Tentang Saya",
        aboutText: "Saya adalah lulusan Teknik Informatika dari Universitas Mercu Buana dengan minat yang mendalam pada pengembangan aplikasi web. Memiliki keterampilan yang kuat dalam pemecahan masalah, kemampuan beradaptasi dengan cepat, serta bekerja dalam tim. Selain itu, saya terbiasa berpikir logis dalam menghadapi tantangan teknis. Saya memiliki keahlian dalam teknologi web seperti HTML, CSS, JavaScript, PHP, dan SQL. Pengalaman magang saya sebagai Web Developer di Tanjung Duren Selatan pada tahun 2023 memberikan saya kesempatan untuk mengasah kemampuan teknis serta meningkatkan keterampilan dalam pengembangan aplikasi web secara profesional.",
        skillsTitle: "Keahlian",
        skillsData: [
            { title: "HTML & CSS", desc: "Struktur dan styling web modern" },
            { title: "JavaScript", desc: "Interaksi dinamis dan logika web" },
            { title: "PHP", desc: "Pengembangan backend dan server" },
            { title: "SQL", desc: "Manajemen dan query database" }
        ],
        experienceTitle: "Pengalaman Kerja",
        collegeTitle: "Kampus",
        educationTitle: "Pendidikan",
        organizationsTitle: "Organisasi",
        achievementsTitle: "Prestasi",
        socialTitle: "Koneksi Sosial",
        contactBtn: "Hubungi Saya",
        downloadBtn: "Unduh CV",
        cvFile: "./assets/CV_RagaTriagantara.pdf"
    },
    en: {
        title: "Web Developer",
        address: "South Tangerang",
        aboutTitle: "About Me",
        aboutText: "I am graduate from Informatics Engineering from Mercu Buana University with a keen interest in web application development. Strong problem-solving skills, quick adaptability, and working in a timely manner. In addition, I am accustomed to thinking logistically when facing technical challenges. I have expertise in web technologies such as HTML, CSS, JavaScript, PHP, and SQL. My internship experience as a Web Developer in Tanjung Duren Selatan Subdistrict in 2023 gave me the opportunity to hone my technical skills as well as improve my skills in web application development professionally.",
        skillsTitle: "Skills",
        skillsData: [
            { title: "HTML & CSS", desc: "Modern web structure and styling" },
            { title: "JavaScript", desc: "Dynamic interaction and web logic" },
            { title: "PHP", desc: "Backend and server development" },
            { title: "SQL", desc: "Database management and queries" }
        ],
        experienceTitle: "Work Experiences",
        collegeTitle: "College",
        educationTitle: "Educations",
        organizationsTitle: "Organizations",
        achievementsTitle: "Achievements",
        socialTitle: "Social Connections",
        contactBtn: "Contact Me",
        downloadBtn: "Download CV",
        cvFile: "./assets/CV_RagaTriagantara_EN.pdf"
    }
};

function toggleLanguage() {
    const languageText = document.getElementById('language-text');

    if (currentLanguage === 'id') {
        currentLanguage = 'en';
        languageText.innerHTML = '<img src="https://flagcdn.com/id.svg" alt="ID Flag" width="20" style="vertical-align: middle; margin-right: 6px;">ID';
        updateContent('en');
    } else {
        currentLanguage = 'id';
        languageText.innerHTML = '<img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" style="vertical-align: middle; margin-right: 6px;">EN';
        updateContent('id');
    }

    localStorage.setItem('language', currentLanguage);
}

function updateContent(lang) {
    const content = translations[lang];

    // Update title
    document.querySelector('.title').textContent = content.title;
    document.querySelector('.contact-item').textContent = content.address;

    // Update about section
    document.querySelector('.glass-card:nth-child(2) .section-title').textContent = content.aboutTitle;
    document.querySelector('.glass-card:nth-child(2) p').textContent = content.aboutText;

    // Update skills section
    document.querySelector('.glass-card:nth-child(3) .section-title').textContent = content.skillsTitle;
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        if (content.skillsData[index]) {
            item.querySelector('h3').textContent = content.skillsData[index].title;
            item.querySelector('p').textContent = content.skillsData[index].desc;
        }
    });

    // Update section titles
    document.querySelector('.glass-card:nth-child(4) .section-title').textContent = content.experienceTitle;
    document.querySelector('.glass-card:nth-child(5) .section-title').textContent = content.collegeTitle;
    document.querySelector('.glass-card:nth-child(6) .section-title').textContent = content.educationTitle;
    document.querySelector('.glass-card:nth-child(7) .section-title').textContent = content.organizationsTitle;
    document.querySelector('.glass-card:nth-child(8) .section-title').textContent = content.achievementsTitle;
    document.querySelector('.glass-card:nth-child(9) .section-title').textContent = content.socialTitle;

    // Update buttons
    document.querySelector('.btn-primary').textContent = content.contactBtn;
    document.querySelector('.btn-secondary').textContent = content.downloadBtn;

    // === Sidebar Items ===
    const sidebarItems = [
        { class: '.sidebar-item-1', en: 'Home', id: 'Beranda' },
        { class: '.sidebar-item-2', en: 'About Me', id: 'Tentang Saya' },
        { class: '.sidebar-item-3', en: 'Skills', id: 'Keahlian' },
        { class: '.sidebar-item-4', en: 'Work Experiences', id: 'Pengalaman Kerja' },
        { class: '.sidebar-item-5', en: 'College', id: 'Kampus' },
        { class: '.sidebar-item-6', en: 'Educations', id: 'Pendidikan' },
        { class: '.sidebar-item-7', en: 'Organizations', id: 'Organisasi' },
        { class: '.sidebar-item-8', en: 'Achievements', id: 'Prestasi' },
        { class: '.sidebar-item-9', en: 'Contact', id: 'Kontak' }
    ];

    // Update experience content for English
    if (lang === 'en') {
        sidebarItems.forEach(item => {
            const el = document.querySelector(item.class);
            if (el) {
                const span = el.querySelector('span');
                if (span) span.textContent = item.en;
            }
        });

        const experiences = document.querySelectorAll('.experience-item');
        if (experiences[0]) {
            experiences[0].querySelector('.experience-title').textContent = 'Freelance Web Developer';
            experiences[0].querySelector('.experience-company').textContent = 'Devasana Nirmata Isvara';
            experiences[0].querySelector('p').textContent = 'Built and developed a website with ticket booking features for Fashion Show events held at Bandung Convention Centre. The website was designed with an intuitive user experience, online booking capabilities, and secure payment systems.';
        }
        if (experiences[1]) {
            experiences[1].querySelector('.experience-date').textContent = 'July 2023 – February 2024';
            experiences[1].querySelector('.experience-title').textContent = 'Web Developer Internship';
            experiences[1].querySelector('.experience-company').textContent = 'Tanjung Duren Selatan Subdistrict ';
            experiences[1].querySelector('p').textContent = 'Created and developed a district office website to facilitate access to information and public services transparently and efficiently. Improved work efficiency with an integrated platform for data management and inter-departmental coordination.';
        }
        if (experiences[2]) {
            experiences[2].querySelector('.experience-date').textContent = 'September 2022 – July 2023';
            experiences[2].querySelector('.experience-title').textContent = 'Internship';
            experiences[2].querySelector('.experience-company').textContent = 'Entrepreneurship Bureau Mercu Buana University';
            experiences[2].querySelector('p').textContent = 'Provided work support to unit colleagues and supported every event from the Entrepreneurship Bureau Mercu Buana University unit.';
        }

        // Update college content for English
        const collegeItems = document.querySelectorAll('.glass-card:nth-child(5) .experience-item');
        if (collegeItems[0]) {
            collegeItems[0].querySelector('.experience-date').textContent = 'September 2021 – February 2025';
            collegeItems[0].querySelector('.experience-title').textContent = 'Bachelor of Informatics Engineering';
            collegeItems[0].querySelector('.experience-company').textContent = 'Mercu Buana University, West Jakarta';
            collegeItems[0].querySelector('p').innerHTML = '"Implementation of Hybrid GWO-SCA with Support Vector Machine and K-Nearest Neighbor for Classifying Air Pollution Index in DKI Jakarta Province" <br><br> Graduated 7 Semesters (3.5 Years)';
            collegeItems[0].querySelector('#gpa-content').textContent = 'GPA 3.76';
            collegeItems[0].querySelector('#thesis-link').textContent = 'My Thesis';
        }

        // Update education content for English
        const educationItems = document.querySelectorAll('.glass-card:nth-child(6) .experience-item');
        if (educationItems[0]) {
            educationItems[0].querySelector('.experience-title').textContent = 'Senior High School';
            educationItems[0].querySelector('.experience-company').textContent = 'SMA Negeri 85, West Jakarta';
        }
        if (educationItems[1]) {
            educationItems[1].querySelector('.experience-title').textContent = 'Junior High School';
            educationItems[1].querySelector('.experience-company').textContent = 'SMP Negeri 206, West Jakarta';
        }
        if (educationItems[2]) {
            educationItems[2].querySelector('.experience-title').textContent = 'Elementary School';
            educationItems[2].querySelector('.experience-company').textContent = 'SDN Meruya Selatan 03 Pagi, West Jakarta';
        }

        // Update organizations content for English
        const organizationsItems = document.querySelectorAll('.glass-card:nth-child(7) .experience-item');
        if (organizationsItems[0]) {
            organizationsItems[0].querySelector('.experience-title').textContent = 'Advocacy Commission';
            organizationsItems[0].querySelector('.experience-company').textContent = 'Student Representative Council of the Faculty of Computer Science, Mercu Buana University';
            organizationsItems[0].querySelector('p').textContent = 'Voice students aspirations and interests to the university, government, and relevant institutions, and organize actions or campaigns to advocate for student rights. Provide legal assistance and rights protection, serve as a liaison between students and the university, and educate students about their rights and obligations through discussion forums to explore issues and find joint solutions.';
        }
        if (organizationsItems[1]) {
            organizationsItems[1].querySelector('.experience-title').textContent = 'Human Resources Management Division (HRD)';
            organizationsItems[1].querySelector('.experience-company').textContent = 'LDF Al-Khawarizmi Mercu Buana University';
            organizationsItems[1].querySelector('p').textContent = 'Manage new member recruitment and develop training programs for skills and leadership development. Maintain the physical, mental, and social well-being of members, and conduct regular performance evaluations to ensure optimal development. Furthermore, develop an effective organizational structure and build collaborative relationships with internal and external parties.';
        }

        // Update achievements content for English
        const achievementItems = document.querySelectorAll('.achievement-item');
        if (achievementItems[0]) {
            achievementItems[0].querySelector('.achievement-title').textContent = 'Student Entrepreneurship Development Program (P2MW)';
            achievementItems[0].querySelector('p').textContent = 'Recipient of P2MW funding 2023 Initial Stage Digital Business Category with business name "Acaverse SIA Mobile".';
        }
        if (achievementItems[1]) {
            achievementItems[1].querySelector('.achievement-title').textContent = 'Student Creativity Program (PKM)';
            achievementItems[1].querySelector('p').textContent = 'Recipient of PKM-AI incentive 2023 with research on K-Nearest Neighbor algorithm optimization for breast cancer prediction.';
        }
        if (achievementItems[2]) {
            achievementItems[2].querySelector('.achievement-title').textContent = 'Gemastik XV';
            achievementItems[2].querySelector('p').textContent = 'Participant in Gemastik XV User Experience Design field 2022.';
        }
        if (achievementItems[3]) {
            achievementItems[3].querySelector('.achievement-title').textContent = 'Student Creativity Program (PKM)';
            achievementItems[3].querySelector('p').textContent = 'Participant in PKM-AI 2024 with research on "Fear of Missing Out (FOMO) Misuse of Social Media".';
        }
    } else {
        // Restore Indonesian content
        sidebarItems.forEach(item => {
            const el = document.querySelector(item.class);
            if (el) {
                const span = el.querySelector('span');
                if (span) span.textContent = item.id;
            }
        });

        const experiences = document.querySelectorAll('.experience-item');
        if (experiences[0]) {
            experiences[0].querySelector('.experience-title').textContent = 'Freelance Web Developer';
            experiences[0].querySelector('.experience-company').textContent = 'Devasana Nirmata Isvara';
            experiences[0].querySelector('p').textContent = 'Membangun dan mengembangkan situs web dengan fitur pemesanan tiket untuk acara Fashion Show yang diselenggarakan di Bandung Convention Centre. Website dirancang dengan pengalaman pengguna yang intuitif, kemampuan pemesanan online, dan sistem pembayaran yang aman.';
        }
        if (experiences[1]) {
            experiences[1].querySelector('.experience-date').textContent = 'Juli 2023 – Februari 2024';
            experiences[1].querySelector('.experience-title').textContent = 'Magang Web Developer';
            experiences[1].querySelector('.experience-company').textContent = 'Kelurahan Tanjung Duren Selatan';
            experiences[1].querySelector('p').textContent = 'Membuat dan mengembangkan website Kelurahan untuk mempermudah akses informasi dan pelayanan publik secara transparan dan efisien. Meningkatkan efisiensi kerja dengan platform terintegrasi untuk pengelolaan data dan koordinasi antar bagian.';
        }
        if (experiences[2]) {
            experiences[2].querySelector('.experience-date').textContent = 'September 2022 – Juli 2023';
            experiences[2].querySelector('.experience-title').textContent = 'Magang';
            experiences[2].querySelector('.experience-company').textContent = 'Biro Kewirausahaan Universitas Mercu Buana';
            experiences[2].querySelector('p').textContent = 'Melakukan support pekerjaan pada rekan satu unit, dan memberikan dukungan untuk setiap event dari unit Biro Kewirausahaan Universitas Mercu Buana.';
        }

        // Restore Indonesian college content
        const collegeItems = document.querySelectorAll('.glass-card:nth-child(5) .experience-item');
        if (collegeItems[0]) {
            collegeItems[0].querySelector('.experience-date').textContent = 'September 2021 – Februari 2025';
            collegeItems[0].querySelector('.experience-title').textContent = 'Sarjana Teknik Informatika';
            collegeItems[0].querySelector('.experience-company').textContent = 'Universitas Mercu Buana, Jakarta Barat';
            collegeItems[0].querySelector('p').innerHTML = '"Implementasi Hybrid GWO-SCA Dengan Support Vector Machine Dan K-Nearest Neighbor Untuk Mengklasifikasi Indeks Polusi Udara Provinsi DKI Jakarta" <br><br> Lulus 7 Semester (3,5 Tahun)';
            collegeItems[0].querySelector('#gpa-content').textContent = 'IPK 3,76';
            collegeItems[0].querySelector('#thesis-link').textContent = 'Skripsi Saya';
        }

        // Restore Indonesian education content
        const educationItems = document.querySelectorAll('.glass-card:nth-child(6) .experience-item');
        if (educationItems[0]) {
            educationItems[0].querySelector('.experience-title').textContent = 'Sekolah Menengah Atas';
            educationItems[0].querySelector('.experience-company').textContent = 'SMA Negeri 85, Jakarta Barat';
        }
        if (educationItems[1]) {
            educationItems[1].querySelector('.experience-title').textContent = 'Sekolah Menengah Pertama';
            educationItems[1].querySelector('.experience-company').textContent = 'SMP Negeri 206, Jakarta Barat';
        }
        if (educationItems[2]) {
            educationItems[2].querySelector('.experience-title').textContent = 'Sekolah Dasar';
            educationItems[2].querySelector('.experience-company').textContent = 'SDN Meruya Selatan 03 Pagi, Jakarta Barat';
        }

        // Restore Indonesian organizations content
        const organizationsItems = document.querySelectorAll('.glass-card:nth-child(7) .experience-item');
        if (organizationsItems[0]) {
            organizationsItems[0].querySelector('.experience-title').textContent = 'Komisi Advokasi';
            organizationsItems[0].querySelector('.experience-company').textContent = 'Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Mercu Buana';
            organizationsItems[0].querySelector('p').textContent = 'Menyuarakan aspirasi dan kepentingan mahasiswa kepada universitas, pemerintah, dan lembaga terkait, serta mengorganisir aksi atau kampanye untuk memperjuangkan hak-hak mahasiswa. Menyediakan bantuan hukum dan perlindungan hak, menjadi penghubung antara mahasiswa dan pihak kampus, serta mengedukasi mahasiswa mengenai hak dan kewajiban mereka melalui forum diskusi untuk menggali isu dan mencari solusi bersama.';
        }
        if (organizationsItems[1]) {
            organizationsItems[1].querySelector('.experience-title').textContent = 'Divisi Pengelolaan Sumber Daya Manusia (PSDM)';
            organizationsItems[1].querySelector('.experience-company').textContent = 'LDF Al-Khawarizmi Universitas Mercu Buana';
            organizationsItems[1].querySelector('p').textContent = 'Mengelola rekrutmen anggota baru dan menyusun program pelatihan untuk pengembangan keterampilan serta kepemimpinan. Menjaga kesejahteraan anggota secara fisik, mental, dan sosial, serta melakukan evaluasi kinerja secara berkala guna memastikan perkembangan optimal. Selain itu, menyusun struktur organisasi yang efektif dan membangun hubungan kerja sama dengan pihak internal maupun eksternal.';
        }

        // Restore Indonesian achievements content
        const achievementItems = document.querySelectorAll('.achievement-item');
        if (achievementItems[0]) {
            achievementItems[0].querySelector('.achievement-title').textContent = 'Program Pembinaan Mahasiswa Wirausaha (P2MW)';
            achievementItems[0].querySelector('p').textContent = 'Peraih pendanaan P2MW Tahun 2023 Tahapan Awal Kategori Bisnis Digital dengan nama usaha "Acaverse SIA Mobile".';
        }
        if (achievementItems[1]) {
            achievementItems[1].querySelector('.achievement-title').textContent = 'Program Kreativitas Mahasiswa (PKM)';
            achievementItems[1].querySelector('p').textContent = 'Peraih insentif bidang PKM-AI Tahun 2023 dengan penelitian tentang optimalisasi algoritma K-Nearest Neighbor untuk prediksi kanker payudara.';
        }
        if (achievementItems[2]) {
            achievementItems[2].querySelector('.achievement-title').textContent = 'Gemastik XV';
            achievementItems[2].querySelector('p').textContent = 'Peserta Gemastik XV bidang Desain Pengalaman Pengguna tahun 2022.';
        }
        if (achievementItems[3]) {
            achievementItems[3].querySelector('.achievement-title').textContent = 'Program Kreativitas Mahasiswa (PKM)';
            achievementItems[3].querySelector('p').textContent = 'Peserta PKM-AI Tahun 2024 dengan penelitian tentang "Fear of Missing Out (FOMO) Misuse of Social Media".';
        }
    }
}
// Toggle light/dark theme using Font Awesome icons
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon?.classList.remove('fa-moon');
        themeIcon?.classList.add('fa-sun');
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon?.classList.remove('fa-sun');
        themeIcon?.classList.add('fa-moon');
    }
}

function loadLanguage() {
    const savedLanguage = localStorage.getItem('language');
    const languageText = document.getElementById('language-text');

    if (savedLanguage === 'en') {
        currentLanguage = 'en';
        languageText.textContent = '🇮🇩 ID';
        updateContent('en');
    } else {
        currentLanguage = 'id';
        languageText.textContent = '🇺🇸 EN';
        updateContent('id');
    }
}

// Download CV Function
function downloadCV() {
    const content = translations[currentLanguage];
    const cvFileName = content.cvFile;

    // Create a temporary anchor element to trigger download
    const a = document.createElement('a');
    a.href = cvFileName;
    a.download = cvFileName;
    a.target = '_blank';

    // Add to document, click, and remove
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Optional: Show a message if file is not found
    setTimeout(() => {
        console.log('CV download initiated for ' + currentLanguage);
    }, 100);
}

// Theme Toggle

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadLanguage();

    const languageText = document.getElementById('language-text');
    languageText.innerHTML =
        currentLanguage === 'en'
            ? '<img src="https://flagcdn.com/id.svg" alt="ID Flag" width="20" style="vertical-align: middle; margin-right: 6px;">ID'
            : '<img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" style="vertical-align: middle; margin-right: 6px;">EN';

    // Observe all glass cards for animation
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body');
    const speed = scrolled * 0.5;

    parallax.style.backgroundPosition = `center ${speed}px`;
});