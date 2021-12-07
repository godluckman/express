import {sequelize} from "../dbstate.js";
import pkg from 'sequelize';
const {DataTypes} = pkg;


export const List = sequelize.define(
    'List',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        task:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }
)