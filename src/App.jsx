import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './presentation/components/Header/Header';
import { Footer } from './presentation/components/Footer/Footer';
import { PularParaConteudo } from './presentation/components/PularParaConteudo/PularParaConteudo';
import { RolarParaAncora } from './presentation/components/RolarParaAncora/RolarParaAncora';
import { Home } from './presentation/pages/Home/Home';
import { About } from './presentation/pages/About/About';
import { NaoEncontrada } from './presentation/pages/NaoEncontrada/NaoEncontrada';

export function Rotas() {
  return (
    <>
      <RolarParaAncora />
      <PularParaConteudo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
