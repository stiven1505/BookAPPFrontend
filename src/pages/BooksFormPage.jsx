import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createBooks, // Función para crear un libro
  deleteBooks, // Función para eliminar un libro
  updateBooks, // Función para actualizar un libro existente
  getBook, // Función para obtener los datos de un libro por su ID
} from "../api/book.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"; // Librería para mostrar notificaciones (toasts)

export function BooksFormPage() {
  const {
    register, // Función para registrar los campos del formulario
    handleSubmit, // Función para manejar el envío del formulario
    formState: { errors }, // Estado del formulario, incluidos los errores de validación
    setValue, // Función para establecer el valor de los campos del formulario
    reset, // Función para reiniciar el formulario
  } = useForm();

  const navigate = useNavigate(); // Hook para redirigir a diferentes rutas
  const params = useParams(); // Hook para obtener los parámetros de la URL, como el ID del libro

  // Función para manejar el envío del formulario
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      // Si existe un ID, actualiza el libro
      await updateBooks(params.id, data); // Llama a la función para actualizar el libro con los nuevos datos
      toast.success("Libro actualizado", {
        position: "bottom-right",
        style: {
          background: "#7B98F8",
        },
      });
    } else {
      // Si no existe un ID, crea un nuevo libro
      await createBooks(data); // Llama a la función para crear el libro
      toast.success("Libro creado", {
        position: "bottom-right",
        style: {
          background: "#A2F37F",
        },
      });
    }
    navigate("/books"); // Redirige a la página de listado de libros después de crear o actualizar
  });

  // Efecto para cargar los datos del libro en caso de edición
  useEffect(() => {
    async function loadBook() {
      if (params.id) {
        // Si hay un ID, carga los datos del libro
        const res = await getBook(params.id); // Llama a la API para obtener los datos del libro
        setValue("name", res.data.name); // Establece el valor del campo "name" con el dato del libro
      } else {
        // Si no hay ID (es creación), reinicia el formulario para que esté vacío
        reset();
      }
    }
    loadBook(); // Ejecuta la función al cargar el componente
  }, [params.id, setValue, reset]); // Efecto depende del ID del libro y las funciones de formulario
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="p-3 text-center mx-auto">CRUD Libros</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre Libro"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounder-lg block w-full mb-3"
        />
        {errors.name && <span> Nombre es requerido</span>}
        {/* Muestra el error si el nombre no está completo */}
        <br />
        <button className="bg-indigo-900 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
        {/* Botón para guardar (crear o actualizar) */}
      </form>

      {/* Botón para eliminar solo si estamos editando (hay un ID en los parámetros) */}
      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg block w-full mt-3"
          onClick={async () => {
            const accepted = window.confirm("Estas seguro");
            if (accepted) {
              await deleteBooks(params.id);// Llama a la función para eliminar el libro
              toast.success("Libro eliminado", {
                position: "bottom-right",
                style: {
                  background: "#F57272",
                },
              });
              navigate("/books");// Redirige a la página de listado de libros después de eliminar
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
