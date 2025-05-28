import { Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import { Doe } from "./pages/doe/Doe";
import { Header } from "./component/header/Header";
import { Container } from "./homeStyles";
import { useState } from "react";
import SubmitModal from "./pages/Modal/modal";
import { Footer } from "./component/footer/footer";
import { Transparencia } from "./pages/transparencia";
import { DocAssociacao } from "./pages/transparencia/doc-associacao/doc-associacao";
import { DocPrestacaoContas } from "./pages/transparencia/prestacao-contas/prestacao-contas";
import { Doc2023 } from "./pages/transparencia/prestacao-contas/2023/2023";
import { Doc2022 } from "./pages/transparencia/prestacao-contas/2022/2022";

export default function App() {
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
          path="/transparencia/prestacao-contas/documentos-2023"
          element={<Doc2023 />}
        />
        <Route
          path="/transparencia/prestacao-contas/documentos-2022"
          element={<Doc2022 />}
        />

        <Route path="/ajude" element={<Doe />} />
      </Routes>
      <SubmitModal isOpen={onSubmitContact} onRequestClose={handleCloseModal} />
      <Footer />
    </Container>
  );
}
