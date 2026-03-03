import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.APP_PORT, (error) =>{
    try {
        console.log(`Server run in http://localhost:${env.APP_PORT}`)

        if (error){
            console.error(error); 
        }
    }catch (error){
        console.log('Error to inicialize server: ',error); 
    }
});
