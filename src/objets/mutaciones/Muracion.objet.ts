export const Mutacion = `
    type Mutation {
        crearUsuario(input: UsuarioInput): Usuario
        actualizarUsuario(id: ID, input: UsuarioInput): Usuario
        eliminarUsuario(id: ID): Usuario
        crearPais(input: PaisInput): Pais
        actualizarPais(id: ID, input: PaisInput): Pais
        eliminarPais(id: ID): Pais
    }
`;