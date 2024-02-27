import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario, getPaisesUsuarios } from "./repocitorio/usuariosds";
import { getPaises, getPais, postPais, putPais, deletePais } from "./repocitorio/paises";

const typeDefs = `
    type Pais {
        id_paises: ID
        nombre: String
        codigo_iso: String
        capital: String
        idioma_principal: String
        Usuario: [Usuario]
    }


    type Usuario {
        id_usuarios: ID
        NombreUsuario: String
        Pais_id: ID
    }   

    input UsuarioInput {
        id_usuarios: ID
        NombreUsuario: String
        Pais_id: ID
    }

    input PaisInput {
        id_paises: ID
        nombre: String
        codigo_iso: String
        capital: String
        idioma_principal: String
    }

    type Query {
        usuarios: [Usuario]
        usuario(id: ID): [Usuario]
        paises: [Pais]
        pais(id: ID): Pais
    }

    type Mutation {
        crearUsuario(input: UsuarioInput): Usuario
        actualizarUsuario(id: ID, input: UsuarioInput): Usuario
        eliminarUsuario(id: ID): Usuario
        crearPais(input: PaisInput): Pais
        actualizarPais(id: ID, input: PaisInput): Pais
        eliminarPais(id: ID): Pais
    }
`;

const resolvers = {
    Query: {
        usuarios: () => getUsuarios(),
        usuario: (_root: any, { id }: any) => getUsuario(id),
        paises: async () => {
            const resPaises: any = await getPaises();
            const paisesWithUsuarios: any[] = [];
            for (const pais of resPaises) {
                const resUsers: any = await getPaisesUsuarios(pais.id_paises);
                const paisWithUsuarios = {
                    ...pais,
                    Usuario: resUsers
                };
                paisesWithUsuarios.push(paisWithUsuarios);
                console.log(paisWithUsuarios);
            }
            return paisesWithUsuarios;
        },
        pais: async (_root: any, { id }: any) => {
            const resPaises: any = await getPais(id)
            const resUsers: any = await getPaisesUsuarios(id)
            const newRes = {
                ...resPaises[0],
                Usuario: resUsers.length <= 1 ? [resUsers[0]] : resUsers
            }
            console.log(newRes)
            return newRes
        },
    },
    Mutation: {
        crearUsuario: (_root: any
            , { input }: any) => createUsuario(input.usuariosds),
        actualizarUsuario: (_root: any
            , { id, input }: any) => updateUsuario(id, input.usuariosds),
        eliminarUsuario: (_root: any
            , { id }: any) => deleteUsuario(id),
        crearPais: (_root: any
            , { input }: any) => postPais(input.nombre, input.codigo_iso, input.capital, input.idioma_principal),
        actualizarPais: (_root: any
            , { id, input }: any) => putPais(input.nombre, input.codigo_iso, input.capital, input.idioma_principal, id),
        eliminarPais: (_root: any
            , { id }: any) => deletePais(id),
    },
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const PORT = parseInt(process.env.PORT || "4000");

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    });
    console.log("Servidor corriendo en " + url);
})();
console.log("OK!");
