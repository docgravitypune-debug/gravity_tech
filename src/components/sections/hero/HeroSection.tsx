import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import Navbar from '../../layout/Navbar'

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-[#EFEFEF]">
      <HeroBackground />
      <Navbar />
      <div className="flex-1" />
      <HeroContent />
    </section>
  )
}

export default HeroSection
