import React, { useEffect, memo, useMemo } from "react"
import { IdCard, Book, Building2, Building, Sparkles, GraduationCap, MapPin, Heart, Target } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Komponen Kartu Informasi (NIM, Jurusan, dll)
const InfoCard = memo(({ icon: Icon, label, value, animation }) => (
  <div 
    data-aos={animation} 
    className="bg-[#0a0a1a]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-indigo-500/30 transition-all duration-300"
  >
    <div className="p-3 rounded-xl bg-white/5 mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-indigo-400" />
    </div>
    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{label}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{value}</p>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-20" id="About">
      {/* --- BAGIAN 1: PROFIL & BIODATA --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* KOLOM KIRI: Profil & Kartu */}
        <div className="space-y-8">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">Profil Mahasiswa PPG</h2>
            <p className="text-gray-400 leading-relaxed text-justify">
              Saya adalah mahasiswa Pendidikan Profesi Guru (PPG) yang berdedikasi tinggi dalam mengembangkan kualitas pendidikan dan menciptakan pembelajaran yang inovatif serta berpusat pada murid.
            </p>
          </div>

          {/* Grid Kartu Kecil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={IdCard} label="NIM" value="2590544951279" animation="fade-right" />
            <InfoCard icon={Book} label="Bidang Studi" value="Teknik Jaringan Komputer & Telekomunikasi" animation="fade-left" />
            <InfoCard icon={Building2} label="LPTK" value="Universitas Negeri Makassar" animation="fade-right" />
            <InfoCard icon={Building} label="Sekolah Mitra" value="SMK NEGERI 10 MAKASSAR" animation="fade-left" />
          </div>
        </div>

        {/* KOLOM KANAN: Biodata Pribadi */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Biodata Pribadi</h2>
          
          <div className="text-gray-400 space-y-4 leading-relaxed text-justify">

            <p>

              Halo, perkenalkan nama saya <span className="text-white font-bold">Andi Hanifah Putri Rani, S.Kom</span>. 

              Saya merupakan lulusan Teknik Informatika yang kini sedang menempuh perjalanan baru sebagai calon pendidik melalui program 

              <span className="text-white font-medium"> Pendidikan Profesi Guru (PPG)</span> di Universitas Negeri Makassar.

            </p>



            <p>

              Memiliki latar belakang di bidang Teknologi Informasi, saya memiliki minat yang kuat dalam mengintegrasikan teknologi ke dalam ruang kelas. 

              Saya percaya bahwa pembelajaran TJKT (Teknik Jaringan Komputer dan Telekomunikasi) haruslah adaptif, kreatif, dan mampu membekali siswa 

              dengan keterampilan praktis yang relevan dengan kebutuhan industri saat ini.

            </p>



            <p>

              Melalui proses PPG dan pengalaman PPL di <span className="text-white font-medium">SMK Negeri 10 Makassar</span>, 

              saya terus mengasah kemampuan dalam merancang modul ajar yang berpusat pada murid, mengelola kelas yang inklusif, serta menerapkan metode 

              pembelajaran inovatif seperti <span className="italic text-indigo-300">Project-Based Learning</span>. 

              Saya berkomitmen untuk terus tumbuh menjadi guru yang tidak hanya mengajar, tetapi juga menginspirasi.

            </p>

          </div>

          <div className="relative bg-gradient-to-r from-[#6366f1]/10 to-transparent border-l-4 border-[#6366f1] p-4 italic text-sm text-gray-300">
            "In technology, we build systems. In education, we build futures."
          </div>
        </div>
      </div>

      {/* --- BAGIAN 2: REFLEKSI AKHIR PPL (TUGAS E-PORTFOLIO 1) --- */}
      <section className="mt-32 space-y-12" data-aos="fade-up">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Refleksi Akhir PPL Terbimbing
          </h2>
          <p className="text-gray-400 mt-2 flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            E-Portfolio 1: Fondasi Dasar Karakter Guru Profesional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Profil & Inspirasi */}
          <div className="bg-[#0a0a1a]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-indigo-400" /> Profil & Inspirasi
            </h3>
            <p className="text-gray-400 leading-relaxed text-justify text-sm sm:text-base">
              Saya berasal dari <span className="text-white font-medium">Makassar</span>, kota Daeng yang kental dengan filosofi <i>"Siri' na Pacce"</i>—menjaga harga diri dan empati. Karakter ini mendasari dedikasi saya untuk menjadi guru yang tegas namun tetap humanis. 
              <br /><br />
              Inspirasi saya muncul dari keinginan menjembatani celah teknologi di SMK. Tujuan saya adalah menjadi pendidik profesional yang tidak hanya mentransfer <i>hard-skill</i> TJKT, tapi juga membimbing karakter siswa di era digital.
            </p>
          </div>

          {/* 2. Model Guru yang Dituju */}
          <div className="bg-[#0a0a1a]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-white">
              <Target className="w-5 h-5 text-indigo-400" /> Model Guru Masa Depan
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h4 className="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Misi Utama</h4>
                <p className="text-gray-400 italic">"Mewujudkan pembelajaran TJKT yang adaptif dan inklusif bagi semua murid."</p>
              </div>
              <div>
                <h4 className="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Kompetensi & Karakter</h4>
                <ul className="text-gray-400 list-disc ml-5 space-y-1">
                  <li>Mastery dalam integrasi AI dan simulasi jaringan.</li>
                  <li>Komunikator yang empatik melalui diferensiasi instruksional.</li>
                  <li>Integritas tinggi sebagai pembelajar sepanjang hayat.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Analisis Artefak Pembelajaran */}
          <div className="lg:col-span-2 bg-[#0a0a1a]/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-indigo-500/20 transition-all">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Sparkles className="w-5 h-5 text-indigo-400" /> Analisis Artefak Pembelajaran
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-justify">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium flex items-center gap-2">Kendala Proses</p>
                  <p className="text-gray-400 mt-1">Tantangan terbesar adalah menyederhanakan konsep infrastruktur jaringan yang abstrak agar relevan dengan minat siswa yang beragam.</p>
                </div>
                <div>
                  <p className="text-white font-medium flex items-center gap-2">Konsep Pedagogi</p>
                  <p className="text-gray-400 mt-1">Menggunakan pendekatan <i>Understanding by Design (UbD)</i> untuk memastikan materi tersampaikan secara terstruktur dan bermakna.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium flex items-center gap-2">Faktor Keberhasilan</p>
                  <p className="text-gray-400 mt-1">Implementasi simulasi interaktif Cisco Packet Tracer terbukti meningkatkan keterlibatan siswa secara signifikan.</p>
                </div>
                <div>
                  <p className="text-white font-medium flex items-center gap-2">Adaptasi & Perubahan</p>
                  <p className="text-gray-400 mt-1">Modifikasi konten dilakukan pada bagian instruksi praktikum agar lebih ramah bagi siswa dengan gaya belajar auditori.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Lampiran Penilaian */}
          <div className="lg:col-span-2 flex justify-center pt-2">
            <a 
              href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#030014] rounded-full overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <span className="relative text-white font-bold flex items-center gap-2">
                Lihat Lampiran (Penilaian Guru Pamong)
                <Sparkles className="w-4 h-4 text-purple-400" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(AboutPage);