import {sequelize} from "../database/dbstate.js";

const Users = sequelize.model('User');

export class userController {
    async addUser(request, response) {
        const {firstName, login, password} = request.body
        const existCheck = await Users.findOne({ where: { firstName: `${firstName}`}}) && await Users.findOne({ where: { login: `${login}`}});
        if (firstName && login && password && !existCheck){
            Users.create({
                firstName: `${firstName}`,
                login: `${login}`,
                password: `${password}`
            }).then(r =>response.send(`Пользователь ${firstName} добавлен...`));
        } else {
            response.send(`Пользователь с такими данными уже существует`);
        }
    }

    async getUsers(request, response) {
        const allUsers = await Users.findAll({raw: true});
        const names = allUsers.map(obj => obj.firstName);
        response.send(`Список пользователей: ${names}`);
    }

    async deleteUser(request, response) {
        const {firstName} = request.body
        const userToDelete = await Users.findOne({ where: { firstName: `${firstName}`} });
        if (userToDelete){
            await userToDelete.destroy();
            response.send(`Пользователь ${firstName} удален.`);
        } else {
            response.send(`Пользователь ${firstName} не найден.`);
        }
    }

}