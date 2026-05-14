import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main className="mx-auto min-h-screen w-full">
          <Hero />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
