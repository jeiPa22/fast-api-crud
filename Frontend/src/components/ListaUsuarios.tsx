import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Cargar usuarios al iniciar
  useEffect(() => {
    fetch("http://127.0.0.1:8000/usuarios/")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  // Agregar nuevo usuario
  const agregarUsuario = async () => {
    if (!nombre || !correo) {
      alert("Por favor ingresa todos los datos");
      return;
    }

    const nuevoUsuario = { nombre, correo };

    try {
      const res = await fetch("http://127.0.0.1:8000/usuarios/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });

      if (res.ok) {
        const usuarioCreado = await res.json();
        setUsuarios([...usuarios, usuarioCreado]);
        setNombre("");
        setCorreo("");
      } else {
        alert("Error al agregar usuario");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  // Eliminar usuario
  const eliminarUsuario = async (id: number) => {
    if (!confirm("¿Deseas eliminar este usuario?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/usuarios/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsuarios(usuarios.filter((u) => u.id !== id));
      } else {
        alert("Error al eliminar usuario");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div className="lista-usuarios">
      <h2>Gestión de Usuarios</h2>

      <div className="formulario">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button onClick={agregarUsuario}>Agregar Usuario</button>
      </div>

      <h3>Usuarios Registrados</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong> ({usuario.correo}){" "}
            <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
