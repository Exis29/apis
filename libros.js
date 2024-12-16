export default function handler(req, res) {
    const libros = [
      { titulo: "El Código da Vinci", autor: "Dan Brown", anioPublicacion: 2003, disponibilidad: true },
      { titulo: "El señor de los anillos", autor: "J. R. R. Tolkien", anioPublicacion: 1954, disponibilidad: true },
      { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anioPublicacion: 1615, disponibilidad: true },
      { titulo: "Harry Potter", autor: "Joanne Rowling", anioPublicacion: 1997, disponibilidad: false },
      { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anioPublicacion: 1967, disponibilidad: true },
    ];
    res.status(200).json(libros);
  }
  