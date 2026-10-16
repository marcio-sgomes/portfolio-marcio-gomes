import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './presentation/components/Header/Header';
import { Footer } from './presentation/components/Footer/Footer';
import { RolarParaAncora } from './presentation/components/RolarParaAncora/RolarParaAncora';
import { Home } from './presentation/pages/Home/Home';
import { About } from './presentation/pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <RolarParaAncora />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<h2 style={{ padding: '80px 24px', textAlign: 'center' }}>404 - Página não encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
