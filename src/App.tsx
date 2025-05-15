import { Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import Transparenciaa from "./pages/transparenciaa/Transparencia";
import { Doe } from "./pages/doe/Doe";
import { Header } from "./component/header/Header";
import { Container } from "./homeStyles";
import { useState } from "react";
import SubmitModal from "./pages/Modal/modal";
import { Trasnparencia2022 } from "./pages/transparenciaa/2022/Transp2022";
import { Trasnparencia2023 } from "./pages/transparenciaa/2023/Transp2023";
import { Footer } from "./component/footer/footer";
import { Transparencia } from "./pages/transparencia";
import { DocAssociacao } from "./pages/transparencia/doc-associacao/doc-associacao";
import { DocPrestacaoContas } from "./pages/transparencia/prestacao-contas/prestacao-contas";
import { Doc2025 } from "./pages/transparencia/prestacao-contas/2025/2025";

function App() {
  const [onSubmitContact, setOnSubmitContact] = useState(false);

  function handleOpenModal() {
    setOnSubmitContact(true);
  }

  function handleCloseModal() {
    setOnSubmitContact(false);
  }

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/contato"
          element={<Contact onSubmitContact={handleOpenModal} />}
        />
        <Route path="/sobre" element={<About />} />
        <Route path="/transparencia" element={<Transparenciaa />} />
        <Route path="/transparencia2022" element={<Trasnparencia2022 />} />
        <Route path="/transparencia2023" element={<Trasnparencia2023 />} />

        {/* Transparência */}
        <Route path="/transparenciaaa" element={<Transparencia />} />
        <Route
          path="/transparencia/documentos-associacao"
          element={<DocAssociacao />}
        />
        <Route
          path="/transparencia/prestacao-contas"
          element={<DocPrestacaoContas />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2025"
          element={<Doc2025 />}
        />

        <Route path="/ajude" element={<Doe />} />
      </Routes>
      <SubmitModal isOpen={onSubmitContact} onRequestClose={handleCloseModal} />
      <Footer />
    </Container>
  );
}

export default App;
