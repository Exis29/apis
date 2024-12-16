export default function handler(req, res) {
    const noDisponibles = [
      { titulo: "Harry Potter", autor: "Joanne Rowling", anioPublicacion: 1997 },
    ];
    res.status(200).json(noDisponibles);
  }
  