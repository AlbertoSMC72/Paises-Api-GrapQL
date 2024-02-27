import { db } from "../config/confing";

export const getPaises = () => new Promise((resolve, reject) => {
    const consulta = "SELECT * FROM paises";
    db.query(consulta)
        .then(([rows]) => resolve(rows))
        .catch((error) => reject(error));
});

export const getPais = (id: number) => new Promise((resolve, reject) => {
    const consulta = " SELECT * FROM paises WHERE id_paises = ?"
    db.query(consulta, [id])
        .then(([rows]) => resolve(rows))
        .catch((error) => reject(error));
});

export const postPais = (nombre: string, codigo_iso: string, capital: string, idioma_principal: string) => new Promise((resolve, reject) => {
    const consulta = "INSERT INTO paises (nombre, codigo_iso, capital, idioma_principal) VALUES (?, ?, ?, ?)";
    db.execute(consulta, [nombre, codigo_iso, capital, idioma_principal])
        .then((resultados) => resolve(resultados))
        .catch((error) => reject(error))
});

export const putPais = (id: number, nombre: string, codigo_iso: string, capital: string, idioma_principal: string) => new Promise((resolve, reject) => {
    const consulta = "UPDATE paises SET nombre = ?, codigo_iso = ?, capital = ?, idioma_principal = ? WHERE id_paises = ?";
    db.execute(consulta, [nombre, codigo_iso, capital, idioma_principal, id])
        .then((resultados) => resolve(resultados))
        .catch((error) => reject(error))
});

export const deletePais = (id: number) => new Promise((resolve, reject) => {
    const consulta = "DELETE FROM paises WHERE id_paises = ?";
    console.log(id);
    db.execute(consulta, [id])
        .then((resultados) => resolve(resultados))
        .catch((error) => reject(error))
});

