export default function handler(req, res) {
    const disponibles = [
      { titulo: "El Código da Vinci", autor: "Dan Brown", anioPublicacion: 2003 },
      { titulo: "El señor de los anillos", autor: "J. R. R. Tolkien", anioPublicacion: 1954 },
      { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anioPublicacion: 1615 },
      { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anioPublicacion: 1967 },
    ];
    res.status(200).json(disponibles);
  }
  