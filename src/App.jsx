import React, { useState, useEffect } from 'react';
import './App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-content">
        <ul className="nav-links">
          <li><a href="#hero">Beranda</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#experience">Pengalaman</a></li>
          <li><a href="#skills">Keahlian</a></li>
          <li><a href="#projects">Proyek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

const GeminiHighlight = () => (
  <section id="gemini-highlight" className="section-container gemini-highlight-section">
    <div className="gemini-container glass">
      <div className="gemini-badge">
        <span className="gemini-icon">✦</span> AI as Co-pilot, Me as Pilot
      </div>
      <h2 className="section-title">Human-Driven, <span className="text-gradient">AI-Assisted</span></h2>
      <p className="gemini-subtitle">
        Portofolio ini adalah bukti sinergi antara visi kreatif saya dan kekuatan teknologi. 
        Setiap ide orisinal, struktur utama, dan keputusan desain tetap sepenuhnya berada di tangan saya, 
        sementara <strong>Google Gemini</strong> berperan sebagai asisten cerdas yang membantu 
        mempercepat iterasi teknis dan mengoptimalkan detail eksekusi.
      </p>
      
      <div className="gemini-features">
        <div className="gemini-feature-card">
          <div className="feature-icon">💡</div>
          <h3>Human Vision First</h3>
          <p>AI membantu mewujudkan konsep, namun ide dasar dan arah kreatif murni dari pemikiran saya.</p>
        </div>
        <div className="gemini-feature-card">
          <div className="feature-icon">🛠️</div>
          <h3>Enhanced Execution</h3>
          <p>Menggunakan AI untuk mempercepat proses koding tanpa mengorbankan kontrol atas kualitas.</p>
        </div>
        <div className="gemini-feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Smart Collaboration</h3>
          <p>Membuktikan bahwa AI bukanlah pengganti, melainkan mitra untuk inovasi yang lebih besar.</p>
        </div>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section id="hero" className="hero-section section-container">
    <div className="hero-content">
      <div className="badge">Google Student Ambassador 2026 Candidate</div>
      <h1 className="hero-title">
        Halo, saya{' '}
        <span className="text-gradient">Renny Melanda<br />Febriyanti</span>.
      </h1>
      <p className="hero-subtitle">
        Informatics Student @ UNISKA MAB Banjarmasin | IT Enthusiast | AI Explorer
      </p>
      <div className="hero-info glass">
        <span>📍 Barito Kuala, Kalsel</span>
        <span>📧 rennymelandaf@gmail.com</span>
        <span>📞 081528990979</span>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">Lihat Proyek Saya</a>
        <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="profile-img-container">
        <img
          src="/photo.png"
          alt="Renny Melanda Febriyanti"
          className="profile-img"
        />
      </div>
      <div className="blob-container">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-container">
    <h2 className="section-title">Tentang Saya</h2>
    <div className="google-divider"></div>
    <div className="about-grid">
      <div className="about-text glass">
        <p>
          Berpengalaman dalam mengembangkan aplikasi desktop dan web dengan <strong>Pascal, Java, Python, C/C#/C++, dan PHP</strong>.
          Memahami perancangan database dan antarmuka pengguna (UI), serta penggunaan <strong>HTML5, CSS3, JavaScript (ES6+), Laravel, dan RESTful API</strong>.
          Familiar dengan Git/GitHub, Figma, VS Code, serta menangani perbaikan hardware/software.
        </p>
        <p style={{ marginTop: '20px' }}>
          Saat ini saya adalah mahasiswa Teknik Informatika di UNISKA MAB Banjarmasin dengan IPK <strong>3.86</strong>, aktif dalam organisasi kampus,
          dan memiliki passion yang sangat besar dalam eksplorasi <strong>Artificial Intelligence (AI)</strong>. Saya percaya bahwa AI adalah mitra revolusioner yang dapat membantu membangun masa depan teknologi yang lebih cerdas dan efisien.
        </p>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const experiences = [
    {
      role: "Curriculum and Content Development",
      company: "HAFECS Yayasan Hasnur Centre",
      period: "Agustus 2025 - Sekarang",
      points: [
        "Terlibat dalam pengembangan kurikulum pendidikan inovatif.",
        "Merancang konten edukasi berbasis teknologi.",
        "Mendukung inovasi dalam metode pembelajaran digital."
      ]
    },
    {
      role: "Guru Bimbel Privat Mandiri",
      company: "Freelance",
      period: "Juli 2023 - Sekarang",
      points: [
        "Mengajar TIK, Matematika, Bahasa Inggris, dan Fisika (TK - SMA/K).",
        "Membuat materi belajar dan evaluasi yang personal.",
        "Membantu persiapan ujian dan lomba akademik."
      ]
    },
    {
      role: "Internship Technician",
      company: "Basmalah Computer",
      period: "Sep 2021 - Des 2021",
      points: [
        "Menangani hardware/software laptop & komputer.",
        "Instalasi OS, pembersihan virus, dan upgrade hardware.",
        "Administrasi stok barang dan melayani pembeli."
      ]
    },
    {
      role: "Internship Programmer",
      company: "LPK Buana",
      period: "Mar 2021 - Jun 2021",
      points: [
        "Membangun aplikasi desktop (Java, C#, C++, Pascal).",
        "Mengembangkan aplikasi web berbasis PHP (CodeIgniter).",
        "Debugging, dokumentasi source code, dan presentasi hasil."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Pengalaman Kerja</h2>
      <div className="google-divider"></div>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item glass">
            <div className="exp-dot"></div>
            <div className="exp-content">
              <h3>{exp.role}</h3>
              <div className="exp-meta">{exp.company} | {exp.period}</div>
              <ul>
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      name: "Hard Skills",
      desc: "Teknologi dan tools yang saya kuasai dalam pengembangan perangkat lunak.",
      skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "PHP Laravel", "RESTful API", "MySQL", "Git & GitHub", "Figma", "UI/UX", "Pascal/Java/Python/C++"]
    },
    {
      name: "Soft Skills",
      desc: "Kemampuan interpersonal yang mendukung kolaborasi dalam tim.",
      skills: ["Leadership", "Problem Solving", "Effective Communication", "Teamwork", "Management Waktu"]
    },
    {
      name: "Languages",
      desc: "Kemampuan berbicara dan menulis dalam bahasa.",
      skills: ["Indonesia (Fasih)", "English (Cukup)"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Keahlian</h2>
      <div className="google-divider"></div>
      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-card glass">
            <h3>{cat.name}</h3>
            <p className="skill-desc">{cat.desc}</p>
            <div className="skill-tags">
              {cat.skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="section-container">
    <h2 className="section-title">Pendidikan</h2>
    <div className="google-divider"></div>
    <div className="edu-grid">
      <div className="edu-card glass">
        <h3>S1 Teknik Informatika</h3>
        <p className="edu-meta">UNISKA Banjarmasin | 2022 - Sekarang</p>
        <p>IPK: <strong>3.86 / 4.00</strong></p>
        <ul className="edu-bullets">
          <li>PMM 2024 di Institut Teknologi Bandung.</li>
          <li>Lolos pendanaan P2MW 2023 (Bisnis Digital).</li>
          <li>Beasiswa Prestasi UNISKA Peduli.</li>
        </ul>
      </div>
      <div className="edu-card glass">
        <h3>Rekayasa Perangkat Lunak</h3>
        <p className="edu-meta">SMK Dr. Wahidin Nganjuk | 2019 - 2022</p>
        <p>Lulus dengan rata-rata <strong>93.57</strong></p>
        <p>Sertifikasi UKK RPL (Sangat Memuaskan).</p>
      </div>
    </div>
  </section>
);

const Others = () => {
  const certs = ["Front-End Web Developer (Dicoding)", "Website Development (MySkill)", "Kompetensi Keahlian RPL (SMK)"];
  const orgs = [
    { role: "Volunteer", name: "Peduly Surabaya", year: "2025", img: "/orgs/peduly.png" },
    { role: "Staff Advokasi", name: "BEM FTI UNISKA", year: "2025", img: "/orgs/bem.png" },
    { role: "Ketua", name: "BAWASLU FTI UNISKA", year: "2023-2025", img: "/orgs/bawaslu.png" },
    { role: "Staff PSDM", name: "HMPS TI UNISKA", year: "2024", img: "/orgs/hmps.png" },
    { role: "Ketua", name: "KPU FTI UNISKA", year: "2023-2024", img: "/orgs/kpu.png" }
  ];

  return (
    <section id="others" className="section-container others-section">
      <div className="others-grid">
        <div className="certs glass">
          <h3>Sertifikasi</h3>
          <ul className="cert-list">
            {certs.map((c, i) => <li key={i}>🏆 {c}</li>)}
          </ul>
        </div>
        <div className="orgs glass">
          <h3>Organisasi</h3>
          <div className="org-list">
            {orgs.map((o, i) => (
              <div key={i} className="org-item">
                <img src={o.img} alt={o.name} className="org-icon-img" />
                <div className="org-info-text">
                  <span className="org-role">{o.role}</span>
                  <span className="org-name">{o.name}</span>
                </div>
                <span className="org-year">{o.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  // ✏️ GANTI: Isi dengan proyek nyata yang pernah kamu buat
  // Kamu bisa menambah atau mengurangi jumlah proyek
  const projects = [
    {
      title: "Sistem Manajemen Ujian Digital GIBS",
      desc: "Sistem manajemen ujian digital modern untuk GIBS, memfasilitasi pelaksanaan ujian yang efisien dan terorganisir.",
      tech: "PHP, JavaScript, MySQL",
      img: "/projects/gibs_exam.png",
      link: "https://github.com/rennymlndf/SistemManajemen-UjianDigitalGIBS"
    },
    {
      title: "SPK Smartphone (Laravel API)",
      desc: "Sistem Pendukung Keputusan untuk pemilihan smartphone menggunakan Laravel API dan Flutter untuk interface mobile.",
      tech: "Laravel, Flutter, REST API",
      img: "/projects/spk_smartphone.png",
      link: "https://github.com/rennymlndf/SPK-LaravelAPI-Smartphone"
    },
    {
      title: "Manajemen Arsip Rumah Sakit",
      desc: "Aplikasi pengelolaan arsip rekam medis rumah sakit yang aman dan mudah diakses untuk efisiensi administrasi.",
      tech: "PHP, MySQL",
      img: "/projects/hospital_archive.png",
      link: "https://github.com/rennymlndf/SistemManajemen-ArsipRumahSakit"
    },
    {
      title: "Education Exam App",
      desc: "Platform ujian edukatif yang interaktif untuk membantu proses belajar dan evaluasi secara mandiri.",
      tech: "JavaScript, React, CSS",
      img: "/projects/education_app.png",
      link: "https://github.com/rennymlndf/EducationExam-App"
    },
    {
      title: "SIP Pengelolaan Daerah Teluk Kepayang",
      desc: "Sistem Informasi Pengelolaan daerah untuk desa Teluk Kepayang, mencakup manajemen data publik dan tata kelola desa.",
      tech: "PHP, MySQL, CSS",
      img: "/projects/teluk_kepayang.png",
      link: "https://github.com/rennymlndf/SistemPengelolaanDaerah-TelukKepayang"
    },
    {
      title: "WEB Events Bootcamp",
      desc: "Platform pencarian dan pengelolaan event bootcamp yang dikembangkan dengan framework Next.js yang modern.",
      tech: "Next.js, JavaScript, SCSS",
      img: "/projects/events_bootcamp.png",
      link: "https://github.com/rennymlndf/WEB-EventsBootcamp"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Proyek Unggulan</h2>
      <div className="google-divider"></div>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card glass">
            <div className="project-img-container">
              <img src={p.img} alt={p.title} className="project-img" />
            </div>
            <div className="project-info">
              <div className="project-tech">{p.tech}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="section-container">
    <div className="contact-card glass">
      <h2 className="section-title">Mari Terhubung</h2>
      <div className="google-divider"></div>
      <p>
        Saya selalu terbuka untuk berdiskusi seputar teknologi, pengembangan komunitas, atau peluang kolaborasi.
        Mari kita bangun sesuatu yang berarti bersama dalam program GSA 2026!
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nama Lengkap" />
        <input type="email" placeholder="Alamat Email" />
        <textarea placeholder="Ceritakan minat teknologimu..."></textarea>
        <button type="submit" className="btn btn-primary">Kirim Pesan</button>
      </form>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <GeminiHighlight />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Others />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p><strong>Renny Melanda Febriyanti</strong></p>
          <p>GSA Candidate 2026 • AI Explorer • Fullstack Developer</p>
          <div className="social-links">
            <a href="https://github.com/rennymlndf" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/username-kamu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <p className="copyright">© 2026 Renny Melanda Febriyanti • Built with Gemini AI assistance</p>
      </footer>
    </div>
  );
};

export default App;
