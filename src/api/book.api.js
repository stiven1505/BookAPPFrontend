import axios from "axios";

//Instancia para el back
const booksApi = axios.create({
  //baseURL: "http://127.0.0.1:8000/books/api/v1/books/",//Desarrollo
    baseURL: "https://bookappbackend-31ic.onrender.com/books/api/v1/books/"
});
//Solicitudes endpoint de la API

export const getAllBooks = () => booksApi.get("/"); // Listado de libros
export const getBook = (id) => booksApi.get(`/${id}/`); // Listar un libro
export const createBooks = (books) => booksApi.post("/", books); // Crear Libros
export const deleteBooks = (id) => booksApi.delete(`/${id}/`); // Eliminar Libros
export const updateBooks = (id, book) => booksApi.put(`/${id}/`, book); // Actualizar Libros
