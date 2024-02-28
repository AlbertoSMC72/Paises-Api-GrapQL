import { Pais } from "./entidades/Paises.objet";
import { Usuarios } from "./entidades/Usuario.objet";
import { UsuarioInput } from "./inputs/Usuario.input";
import { PaisInput } from "./inputs/Pais.input";
import { Query } from "./query/Querys.objet";
import { Mutacion } from "./mutaciones/Muracion.objet";

export const typeDefs = `
    ${Pais}
    ${Usuarios}
    ${UsuarioInput}
    ${PaisInput}
    ${Query}
    ${Mutacion}
`;