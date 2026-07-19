import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StructureSection from './components/StructureSection/StructureSection'
import AccessSection from './components/AccessSection/AccessSection'
import FocusSection from './components/FocusSection/FocusSection'
import PricingSection from './components/PricingSection/PricingSection'
import PracticalSection from './components/PracticalSection/PracticalSection'
import CommunitySection from './components/CommunitySection/CommunitySection'
import VideoSection from './components/VideoSection/VideoSection'
import CalculatorSection from './components/CalculatorSection/CalculatorSection'
import CtaBanner from './components/CtaBanner/CtaBanner'
import InfoSection from './components/InfoSection/InfoSection'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StructureSection />
        <AccessSection />
        <FocusSection />
        <PricingSection />
        <PracticalSection />
        <CommunitySection />
        <VideoSection />
        <CalculatorSection />
        <CtaBanner />
        <InfoSection />
      </main>
      <Footer />
    </>
  )
}
