import { db } from "../config/confing";

export const getUsuarios = () => new Promise((resolve, reject) => {
    const consulta = "SELECT * FROM usuariosds";
    db.query(consulta)
        .then(([rows]) => resolve(rows))
        .catch((error) => reject(error));
});

export const getUsuario = (id: number) => new Promise((resolve, reject) => {
    const consulta = "SELECT * FROM usuariosds WHERE id_usuarios = ?";
    db.query(consulta, [id])
        .then(([rows]) => resolve(rows))
        .catch((error) => reject(error));
});

export const createUsuario = (NombreUsuario: string  ) => new Promise((resolve, reject) => {
    const consulta = "INSERT INTO usuariosds (NombreUsuario) VALUES (?)";
    db.query(consulta, [NombreUsuario ])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

export const updateUsuario = (id: number, nombre: string, ) => new Promise((resolve, reject) => {
    const consulta = "UPDATE usuariosds SET nombre = ? WHERE id_usuarios = ?";
    db.query(consulta, [nombre , id])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

export const deleteUsuario = (id: number) => new Promise((resolve, reject) => {
    const consulta = "DELETE FROM usuariosds WHERE id_usuarios = ?";
    db.query(consulta, [id])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

