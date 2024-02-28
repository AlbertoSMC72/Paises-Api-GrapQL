export const Query = `
    type Query {
        usuarios: [Usuario]
        usuario(id: ID): [Usuario]
        paises: [Pais]
        pais(id: ID): Pais
    }
`;