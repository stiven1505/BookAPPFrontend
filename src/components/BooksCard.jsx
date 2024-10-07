import { useNavigate } from "react-router-dom";

export function BooksCard({ books }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
      onClick={() => {
        // Al hacer clic en la tarjeta, navega a la página de edición del libro con el ID correspondiente
        navigate(`/books/${books.id}`); // Redirige a la página del libro usando su ID
      }}
    >
      <h1 className="font-bold">
        Id: {books.id} | Nombre del libro: {books.name}
      </h1>
    </div>
  );
}
