import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"
import * as database from "./config/database"
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typedef/indexGraphQl";
import { resolvers } from "./resolvers/index.resolvers";
import { requireAuth } from "./middlewares/auth.middlewares";
const startSever = async () => {
    dotenv.config()
    database.connect()
    const app: Express = express();
    const port: number | string = process.env.PORT || 3000;
    app.use("/graphql",requireAuth)
    //graphql
    const applloServer = new ApolloServer({
        typeDefs : typeDefs,
        resolvers : resolvers,
        introspection : true,
        context : ({req})=>{
            return {...req};
        }
    })
    await applloServer.start();
    applloServer.applyMiddleware({
        app : app,
        path : "/graphql"
    })
    app.listen(port, () => {
        console.log("app listen ")
    })
}
startSever();

