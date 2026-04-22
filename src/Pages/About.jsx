import React, { useEffect, memo, useMemo } from "react"
import { IdCard, Book, Building2, Building, Sparkles } from "lucide-react"
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
            <InfoCard 
              icon={IdCard} 
              label="NIM" 
              value="2590544951279" 
              animation="fade-right" 
            />
            <InfoCard 
              icon={Book} 
              label="Bidang Studi/Vokasi" 
              value="Teknik Jaringan Komputer dan Telekomunikasi" 
              animation="fade-left" 
            />
            <InfoCard 
              icon={Building2} 
              label="LPTK Penyelenggara" 
              value="Universitas Negeri Makassar" 
              animation="fade-right" 
            />
            <InfoCard 
              icon={Building} 
              label="Sekolah Mitra" 
              value="SMK NEGERI 10 MAKASSAR" 
              animation="fade-left" 
            />
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

          {/* Quote tambahan agar lebih manis */}
          <div className="relative bg-gradient-to-r from-[#6366f1]/10 to-transparent border-l-4 border-[#6366f1] p-4 italic text-sm text-gray-300" data-aos="fade-up">
  "In technology, we build systems. In education, we build futures."
</div>
        </div>

      </div>
    </div>
  );
};

export default memo(AboutPage);