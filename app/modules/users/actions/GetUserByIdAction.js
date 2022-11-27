import { BaseAction } from "../../../http/Controllers/BaseAction.js";
import { UserDao } from './../../../models/UserDao.js'

export default class GetUserByIdAction extends BaseAction {
    static get accessTag () {
        return 'users:get-by-id'
    }

      static async run (ctx) {
        const model = await UserDao.getdById(Number(ctx.params.id))
        return this.result({ data: model })
      }
}
