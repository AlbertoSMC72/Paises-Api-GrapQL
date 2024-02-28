import { getPaises } from "../../../../repocitorio/paises";
import { getPaisesUsuarios } from "../../../../repocitorio/usuariosds";
import { GraphQLError } from "graphql";

export default async () => {
    try {
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
    } catch (error: any) {
        throw new GraphQLError(error);
    }

}