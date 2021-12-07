import {sequelize} from "./dbstate.js";
import "./models/modelUser.js"


export const initDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('DB connected')
    } catch (e){
        console.log('Error ', e)
    }
}


