import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Transparency from './components/Transparency'
import DonationForm from './components/DonationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-warm-blue-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Перейти к основному содержимому
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Impact />
        <Programs />
        <Testimonials />
        <Transparency />
        <DonationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
