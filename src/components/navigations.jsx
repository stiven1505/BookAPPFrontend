import { Link } from "react-router-dom"

export function Navigation(){
    return (
      <div className="flex justify-between py-3 ">
            <Link to="/books"><h1 className="font-bold text-3x1 mb-4">Book APP</h1></Link>
            <button className="bg-indigo-900 px-3 py-2 rounded-lg">
            <Link to="/books-create">Crear Libro</Link>
            </button>
        
      </div>
    )
  }
  
