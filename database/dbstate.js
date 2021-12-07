import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('dev', 'postgres', 'root',
    {host: 'localhost', dialect:'postgres'});
///////////////////////////
sequelize.sync().then(result=>console.log('result'))
    .catch(err=> console.log(err));
