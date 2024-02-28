import { getPais } from "../../../../repocitorio/paises";
import { getPaisesUsuarios } from "../../../../repocitorio/usuariosds";

export default async (_root: any, { id }: any) => {
    const resPaises: any = await getPais(id);
    const resUsers: any = await getPaisesUsuarios(id);
    const newRes = {
        ...resPaises[0],
        Usuario: resUsers.length <= 1 ? [resUsers[0]] : resUsers,
    };
    return newRes;
}