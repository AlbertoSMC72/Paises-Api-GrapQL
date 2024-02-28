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

export const createUsuario = (NombreUsuario: string, Contrasena:string, Pais_id:number   ) => new Promise((resolve, reject) => {
    const consulta = "INSERT INTO usuariosds (NombreUsuario, Contrasena,Pais_id) VALUES (?,?,?)";
    db.query(consulta, [NombreUsuario, Contrasena, Pais_id])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

export const updateUsuario = (id: number, NombreUsuario: string, Contrasena:string, Pais_id:number  ) => new Promise((resolve, reject) => {
    const consulta = "UPDATE usuariosds SET NombreUsuario = ? , Contrasena = ? ,Pais_id = ? WHERE id_usuarios = ?";
    db.query(consulta, [NombreUsuario, Contrasena, Pais_id , id])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

export const deleteUsuario = (id: number) => new Promise((resolve, reject) => {
    const consulta = "DELETE FROM usuariosds WHERE id_usuarios = ?";
    db.query(consulta, [id])
        .then(([result]) => resolve(result))
        .catch((error) => reject(error));
});

export const getPaisesUsuarios = (id: number) => new Promise((resolve, reject) => {
    const consulta = "SELECT * FROM usuariosds WHERE Pais_id = ?";
    db.query(consulta, [id])
        .then(([rows]) => resolve(rows))
        .catch((error) => reject(error));
});
