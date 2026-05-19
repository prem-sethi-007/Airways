import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-200 selection:text-ink">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Services />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
