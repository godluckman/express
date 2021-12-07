

import {sequelize} from "../database/dbstate.js";





export function addUser(request, response) {
    const {firstName} = request.body
    console.log(firstName)
sequelize.model('User').create({
    firstName: `${firstName}`
}).then(r =>response.send("Добавление пользователя..."));


}





export function getUsers(request, response) {
    response.send("Список пользователей");
}