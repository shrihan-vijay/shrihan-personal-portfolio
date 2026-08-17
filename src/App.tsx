import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { useDarkMode } from "./hooks";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function Layout({ isDark, onToggleDark }: { isDark: boolean; onToggleDark: () => void }) {
  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
      <Header isDark={isDark} onToggleDark={onToggleDark} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout isDark={isDark} onToggleDark={toggle} />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        </Route>
      </Routes>
    </>
  );
}
