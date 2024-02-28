import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getPaisesUsuarios,
} from "../repocitorio/usuariosds";
import {
    getPaises,
    getPais,
    postPais,
    putPais,
    deletePais,
} from "../repocitorio/paises";

export const resolvers = {
    Query: {
        /* aqui deveria estar la paginacion */
        usuarios: () => getUsuarios(),
        usuario: (_root: any, { id }: any) => getUsuario(id),
        paises: async () => {
            const resPaises: any = await getPaises();
            const paisesWithUsuarios: any[] = [];
            for (const pais of resPaises) {
                const resUsers: any = await getPaisesUsuarios(pais.id_paises);
                const paisWithUsuarios = {
                    ...pais,
                    Usuario: resUsers,
                };
                paisesWithUsuarios.push(paisWithUsuarios);
            }
            return paisesWithUsuarios;
        },
        pais: async (_root: any, { id }: any) => {
            const resPaises: any = await getPais(id);
            const resUsers: any = await getPaisesUsuarios(id);
            const newRes = {
                ...resPaises[0],
                Usuario: resUsers.length <= 1 ? [resUsers[0]] : resUsers,
            };
            return newRes;
        },
    },
    Mutation: {
        crearUsuario: (_root: any, { input }: any) => createUsuario(input.NombreUsuario, /* aqui se deveria encriptar xd */input.Contrasena, input.Pais_id),
        actualizarUsuario: (_root: any, { id, input }: any) =>
            updateUsuario(id, input.NombreUsuario, input.Contrasena, input.Pais_id),
        eliminarUsuario: (_root: any, { id }: any) => deleteUsuario(id),
        crearPais: (_root: any, { input }: any) =>
            postPais(
                input.nombre,
                input.codigo_iso,
                input.capital,
                input.idioma_principal
            ),
        actualizarPais: (_root: any, { id, input }: any) =>
            putPais(
                input.nombre,
                input.codigo_iso,
                input.capital,
                input.idioma_principal,
                id
            ),
        eliminarPais: (_root: any, { id }: any) => deletePais(id),
    },
};