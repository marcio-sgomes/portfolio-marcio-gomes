import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './presentation/components/Header/Header';
import { Home } from './presentation/pages/Home/Home';
import { About } from './presentation/pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<h2 style={{ padding: '20px' }}>404 - Página não encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;