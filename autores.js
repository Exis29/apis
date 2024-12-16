export default function handler(req, res) {
    const autores = [
      { nombre: "Dan Brown", nacionalidad: "Estadounidense" },
      { nombre: "J. R. R. Tolkien", nacionalidad: "Sudáfrica" },
      { nombre: "Miguel de Cervantes", nacionalidad: "España" },
      { nombre: "Joanne Rowling", nacionalidad: "Reino Unido" },
      { nombre: "Gabriel García Márquez", nacionalidad: "Colombiano" },
    ];
    res.status(200).json(autores);
  }