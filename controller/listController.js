import {sequelize} from "../database/dbstate.js";

const Lists = sequelize.model('List');


export class listController {
    async addList(request, response) {
        const {task, UserId} = request.body
        if (task){
            Lists.create({
                task: `${task}`,
                UserId: `${UserId}`
            }).then(r =>response.send(`Задача добавлена пользователю ${UserId}`));
        } else {
            response.send(`Невозможно добавить пустую задачу.`);
        }
    }

    async getListByUser(request, response) {
        const id = request.query.id
        console.log(id)
        const lists = await Lists.findAll({ where: { UserId: `${id}`}})
        response.send(lists)
    }

}