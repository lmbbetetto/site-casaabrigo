import { Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Contato from "./pages/contact/Contact";
import Sobre from "./pages/about/About";
// import Transparencia from "./pages/transparenciaa/Transparencia";
import Doe from "./pages/doe/Doe";
import { Header } from "./component/header/Header";
import { Container } from "./homeStyles";
import { useState } from "react";
import SubmitModal from "./pages/Modal/modal";
// import { Trasnparencia2022 } from "./pages/transparenciaa/2022/Transp2022";
// import { Trasnparencia2023 } from "./pages/transparenciaa/2023/Transp2023";
import { Footer } from "./component/footer/footer";
import { Transparencia } from "./pages/transparencia";
import { DocAssociacao } from "./pages/transparencia/doc-associacao/doc-associacao";
import { DocPrestacaoContas } from "./pages/transparencia/prestacao-contas/prestacao-contas";
import { Doc2022 } from "./pages/transparencia/prestacao-contas/2022/2022";
import { Doc2023 } from "./pages/transparencia/prestacao-contas/2023/2023";
import { Doc2024 } from "./pages/transparencia/prestacao-contas/2024/2024";
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
          element={<Contato onSubmitContact={handleOpenModal} />}
        />
        <Route path="/sobre" element={<Sobre />} />
        {/* <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/transparencia2022" element={<Trasnparencia2022 />} />
        <Route path="/transparencia2023" element={<Trasnparencia2023 />} /> */}

        {/* Transparência */}
        <Route path="/transparencia" element={<Transparencia />} />
        <Route
          path="/transparencia/documentos-associacao"
          element={<DocAssociacao />}
        />
        <Route
          path="/transparencia/prestacao-contas"
          element={<DocPrestacaoContas />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2022"
          element={<Doc2022 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2023"
          element={<Doc2023 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2024"
          element={<Doc2024 />}
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
