import { useEffect, useState } from "react";
import { getAllBooks } from "../api/book.api";
import { BooksCard } from "./BooksCard";

export function BooksList() {
  const [books, setBooks] = useState([]); //Guarda elementos

  useEffect(() => {
    // ejecucion cuando cargue la pagina

    async function loadBooks() {
      const res = await getAllBooks(); // Llama a la API para obtener todos los libros
      setBooks(res.data);// Actualiza el estado 'books' con los datos recibidos de la API
    }
    loadBooks();
  }, []);// El array vacío significa que el efecto se ejecutará solo una vez

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Mapea sobre el estado 'books' y renderiza un componente BooksCard por cada libro */}
      {books.map((books) => (
        <BooksCard key={books.id} books={books} />
      ))}
    </div>
  );
}
