import {sequelize} from "../dbstate.js";
import pkg from 'sequelize';
import {List} from "./modelList.js";
const {DataTypes} = pkg;


export const User = sequelize.define(
    'User',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },

        login: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

User.hasMany(List, { onDelete: "cascade" });