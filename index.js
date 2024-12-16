export default function handler(req, res) {
    res.status(200).json({
      message: "Bienvenido a la API",
      puntosFinales: {
        autores: "/api/autores",
        libros: "/api/libros",
        disponibles: "/api/disponibles",
        nodisponibles: "/api/nodisponibles",
      },
    });
  }
  