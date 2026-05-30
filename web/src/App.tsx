import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Contact from './components/Contact'
import ServicesPage from './components/ServicesPage'
import Plane3D from './components/Plane3D'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
}

const scaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <motion.div {...fadeUp}><Services /></motion.div>
                <motion.div {...slideInLeft}><Destinations /></motion.div>
                <motion.div {...slideInRight}><Packages /></motion.div>
                <motion.div {...scaleUp}><Testimonials /></motion.div>
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </Router>
  )
}
