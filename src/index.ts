import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolves/index.resolves";
import { typeDefs } from "./objets/index.objet";

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
