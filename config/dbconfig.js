import { Pool } from "pg";
import { env } from "./env.js";

export let pool;

export const connectPostgres = async () => {

        const poolPg = new Pool({
            host: env.DB.HOST,
            port: env.DB.PORT, 
            database: env.DB.NAME, 
            user: env.DB.USER, 
            password: env.DB.PASSWORD
        })
        console.log(poolPg)

        try{
            const conection = await poolPg.connect()
            console.log('postgres connected')
            pool = poolPg
        }catch (error){
            console.log(error)
            process.exit(1)
        }
}

