import { db } from "../config/confing";

/* manera de paginar son en los get */

//const index = async (req, res) => {
//    try {
//        const { page, limit } = req.query;
//        const skip = (page - 1) * limit;
//        let vacas;
//
//        if (page && limit) {
//            vacas = await db.execute(
//                `SELECT * FROM bovino WHERE deleted = 0 OR deleted IS NULL LIMIT ${skip},${limit} `
//            );
//        } else {
//            vacas = await db.execute('SELECT * FROM bovino WHERE deleted = 0 OR deleted IS NULL');
//        }
//
//        return res.status(200).json({
//            message: 'Vacas obtenidas correctamente',
//            vacas: vacas[0],
//        });
//    } catch (error) {
//        return res.status(500).json({
//            message: 'Hubo un error en el servidor',
//            error: error.message,
//        });
//    }
//};

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

