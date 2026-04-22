import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// --- Mini Components ---

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 py-1 bg-[#030014] border border-white/10 rounded-full text-xs text-gray-400">
        Pembelajar Sepanjang Hayat 👩‍🏫
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Andi Hanifah 
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Putri Rani
        </span>
      </span>
    </h1>
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className="w-4 h-4 text-gray-200 transform transition-all duration-300 z-10" />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// --- Main Home Component ---

const WORDS = ["Mahasiswa PPG Universitas Negeri Makassar","Teknik Jaringan Komputer dan Telekomunikasi","PPG Calon Guru Gel 1 2026", "PPL di SMK Negeri 10 Makassar"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/HaniRan", label: "GitHub Profile" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/andi-hanifah-putri-rani-b34716276?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn Profile" },
  { icon: Instagram, link: "https://www.instagram.com/raa.inn1", label: "Instagram Profile" }
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    setIsLoaded(true);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? 100 : 50);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] lg:px-[10%]" id="Home">
      <Helmet>
        <title>Andi Hanifah Putri Rani | E-Portofolio</title>
      </Helmet>

      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Konten Teks */}
          <div className="w-full lg:w-1/2 space-y-8 text-left order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-6">
              <StatusBadge />
              <MainTitle />
              
              <div className="h-8 flex items-center">
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
              </div>

              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light">
                Mengabdi sambil belajar, tumbuh untuk menginspirasi masa depan.
              </p>

              <div className="flex flex-row gap-3 justify-start">
                <CTAButton href="#Portofolio" text="Jurnal PPL" icon={ExternalLink} />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>

              <div className="flex gap-4 justify-start">
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Gambar Lingkaran */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 mt-20 lg:mt-0">
  {/* Tambahkan mt-20 di atas agar saat di HP dia tidak nempel ke navbar */}
  <div className="relative group pt-2">
              {/* Efek Glow di Belakang */}
              <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
              </div>

              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
                  
                  {/* Overlay efek */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                  
                  <img
                    src="/Photo2.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />

                  {/* Efek hover cahaya (Desktop Only) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slower { animation: spin-slower 12s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0; } 
        }
      `}</style>
    </div>
  );
};

export default memo(Home);