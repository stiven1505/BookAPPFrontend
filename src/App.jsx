import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { BooksPage } from "./pages/BooksPage";
import { BooksFormPage } from "./pages/BooksFormPage";
import { Navigation } from "./components/navigations";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        {/* Nav */}

        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />{" "}
          {/* Redirige desde la raíz a /books */}
          <Route path="/books" element={<BooksPage />} />{" "}
          {/* Muestra la página de libros */}
          <Route path="/books-create" element={<BooksFormPage />} />{" "}
          {/* Muestra el formulario para crear un nuevo libro */}
          <Route path="/books/:id" element={<BooksFormPage />} />{" "}
          {/* Muestra el formulario para editar un nuevo libro */}
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
