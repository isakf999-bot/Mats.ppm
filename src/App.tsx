import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Erbjudandet from './pages/Erbjudandet/Erbjudandet'
import BliKund from './pages/BliKund/BliKund'
import ByterFonder from './pages/ByterFonder/ByterFonder'
import SenasteFondbytet from './pages/SenasteFondbytet/SenasteFondbytet'
import Nyhetsarkiv from './pages/Nyhetsarkiv/Nyhetsarkiv'
import PpmKonto from './pages/PpmKonto/PpmKonto'
import Statistik from './pages/Statistik/Statistik'
import OmMats from './pages/OmMats/OmMats'
import Kundtjanst from './pages/Kundtjanst/Kundtjanst'
import FragorSvar from './pages/FragorSvar/FragorSvar'
import UppdateraUppgifter from './pages/UppdateraUppgifter/UppdateraUppgifter'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* Tjänst */}
          <Route path="/erbjudandet" element={<Erbjudandet />} />
          <Route path="/bli-kund" element={<BliKund />} />
          <Route path="/sa-har-byter-du-fond" element={<ByterFonder />} />
          <Route path="/senaste-fondbytet" element={<SenasteFondbytet />} />
          <Route path="/nyhetsarkiv" element={<Nyhetsarkiv />} />

          {/* Resultat */}
          <Route path="/mats-ppm-konto" element={<PpmKonto />} />
          <Route path="/statistik" element={<Statistik />} />

          {/* Om */}
          <Route path="/om-mats-svensson" element={<OmMats />} />

          {/* Kontakt/support */}
          <Route path="/kundtjanst" element={<Kundtjanst />} />
          <Route path="/fragor-svar" element={<FragorSvar />} />
          <Route path="/uppdatera-kunduppgifter" element={<UppdateraUppgifter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
