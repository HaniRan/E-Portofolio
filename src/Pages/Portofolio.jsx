import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase"; 
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Book, Camera, Sparkles } from "lucide-react";

// ─── Toggle Button ───────────────────────────────────────────────────────────
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium
      transition-all duration-300 ease-in-out flex items-center gap-2
      bg-white/5 hover:bg-white/10 rounded-md border border-white/10
      hover:border-white/20 backdrop-blur-sm group relative overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full" />
  </button>
);

// ─── Tab Panel ────────────────────────────────────────────────────────────────
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// ─── Tech Stacks ──────────────────────────────────────────────────────────────
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

// ─── Data Artefak Siklus ──────────────────────────────────────────────────────
const artefakSiklus = {
  1: [
    {
      judul: "Modul Ajar Siklus 1",
      deskripsi: "Modul ajar berbasis Project-Based Learning untuk materi Dasar Jaringan Komputer.",
      link: "https://drive.google.com/your-link-siklus1-modul",
      tipe: "Modul Ajar",
    },
    {
      judul: "Capaian Pembelajaran (CP) Siklus 1",
      deskripsi: "Dokumen Capaian Pembelajaran yang disusun sesuai kurikulum Merdeka.",
      link: "https://drive.google.com/your-link-siklus1-cp",
      tipe: "CP & ATP",
    },
    {
      judul: "KKTP Siklus 1",
      deskripsi: "Kriteria Ketercapaian Tujuan Pembelajaran untuk mengukur kompetensi siswa.",
      link: "https://drive.google.com/your-link-siklus1-kktp",
      tipe: "KKTP",
    },
  ],
  2: [
    {
      judul: "Modul Ajar Siklus 2",
      deskripsi: "Modul ajar dengan pendekatan diferensiasi untuk materi Konfigurasi Jaringan.",
      link: "https://drive.google.com/your-link-siklus2-modul",
      tipe: "Modul Ajar",
    },
    {
      judul: "Hasil Asesmen Siklus 2",
      deskripsi: "Dokumen hasil asesmen formatif dan sumatif pada siklus pembelajaran kedua.",
      link: "https://drive.google.com/your-link-siklus2-asesmen",
      tipe: "Asesmen",
    },
    {
      judul: "Refleksi Pembelajaran Siklus 2",
      deskripsi: "Catatan refleksi dan evaluasi diri setelah pelaksanaan pembelajaran siklus 2.",
      link: "https://drive.google.com/your-link-siklus2-refleksi",
      tipe: "Refleksi",
    },
  ],
  3: [
    {
      judul: "Modul Ajar Siklus 3",
      deskripsi: "Modul ajar final dengan integrasi teknologi simulasi Cisco Packet Tracer.",
      link: "https://drive.google.com/your-link-siklus3-modul",
      tipe: "Modul Ajar",
    },
    {
      judul: "Video Pembelajaran Siklus 3",
      deskripsi: "Dokumentasi video proses pembelajaran dan presentasi proyek siswa.",
      link: "https://drive.google.com/your-link-siklus3-video",
      tipe: "Video",
    },
    {
      judul: "Laporan Akhir PPL Siklus 3",
      deskripsi: "Laporan komprehensif hasil keseluruhan pelaksanaan PPL dari siklus 1 sampai 3.",
      link: "https://drive.google.com/your-link-siklus3-laporan",
      tipe: "Laporan",
    },
  ],
};

// ─── Kartu Artefak ────────────────────────────────────────────────────────────
const ArtefakCard = ({ judul, deskripsi, link, tipe }) => (
  <div
    className="bg-[#0a0a1a]/60 border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-500/30 transition-all duration-300 group"
    data-aos="fade-up"
  >
    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
      {tipe}
    </span>
    <h3 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors">
      {judul}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed flex-1">{deskripsi}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-white font-medium transition-colors"
    >
      Lihat Dokumen
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

// ─── Panel Siklus ─────────────────────────────────────────────────────────────
const SiklusPanel = ({ siklusNum }) => (
  <div className="space-y-6 py-4">
    <div className="text-center" data-aos="fade-up">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        Artefak Pembelajaran Siklus {siklusNum}
      </h3>
      <p className="text-gray-400 text-sm mt-1">
        Kumpulan dokumen dan hasil karya pada siklus pembelajaran ke-{siklusNum}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {artefakSiklus[siklusNum].map((item, idx) => (
        <ArtefakCard key={idx} {...item} />
      ))}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order("id", { ascending: false }),
        supabase.from("certificates").select("*").order("id", { ascending: false }),
      ]);
      if (projectsResponse.error) throw projectsResponse.error;
      if (certificatesResponse.error) throw certificatesResponse.error;

      const projectData = projectsResponse.data || [];
      const certificateData = certificatesResponse.data || [];

      setProjects(projectData);
      setCertificates(certificateData);
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  }, []);

  useEffect(() => {
    const cachedProjects = localStorage.getItem("projects");
    const cachedCertificates = localStorage.getItem("certificates");
    if (cachedProjects && cachedCertificates) {
      setProjects(JSON.parse(cachedProjects));
      setCertificates(JSON.parse(cachedCertificates));
    }
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => setValue(newValue);

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects((prev) => !prev);
    else setShowAllCertificates((prev) => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: "#6366f1",
            backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Kumpulan dokumen Capaian Pembelajaran, Modul Ajar, dan KKTP yang telah saya susun dan juga
          Dokumentasi dan laporan kegiatan selama Praktik Pengalaman Lapangan (PPL).
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(180deg, rgba(139,92,246,0.03) 0%, rgba(59,130,246,0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.75rem", md: "0.9rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 12px",
                zIndex: 1,
                margin: "8px 4px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139,92,246,0.2)",
                },
              },
              "& .MuiTabs-indicator": { height: 0 },
              "& .MuiTabs-flexContainer": { gap: "4px" },
            }}
          >
            <Tab icon={<Book className="mb-2 w-5 h-5 transition-all duration-300" />} label="Perangkat Pembelajaran" {...a11yProps(0)} />
            <Tab icon={<Camera className="mb-2 w-5 h-5 transition-all duration-300" />} label="Jurnal PPL" {...a11yProps(1)} />
            <Tab icon={<Sparkles className="mb-2 w-5 h-5 transition-all duration-300" />} label="Artefak Siklus 1" {...a11yProps(2)} />
            <Tab icon={<Sparkles className="mb-2 w-5 h-5 transition-all duration-300" />} label="Artefak Siklus 2" {...a11yProps(3)} />
            <Tab icon={<Sparkles className="mb-2 w-5 h-5 transition-all duration-300" />} label="Artefak Siklus 3" {...a11yProps(4)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Tab 0 — Perangkat Pembelajaran */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.img}
                      Title={project.title}
                      Description={project.description}
                      Link={project.link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          {/* Tab 1 — Jurnal PPL */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          {/* Tab 2 — Artefak Siklus 1 */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <SiklusPanel siklusNum={1} />
          </TabPanel>

          {/* Tab 3 — Artefak Siklus 2 */}
          <TabPanel value={value} index={3} dir={theme.direction}>
            <SiklusPanel siklusNum={2} />
          </TabPanel>

          {/* Tab 4 — Artefak Siklus 3 */}
          <TabPanel value={value} index={4} dir={theme.direction}>
            <SiklusPanel siklusNum={3} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
