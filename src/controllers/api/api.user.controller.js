import {apiSuccess} from "../../utils/api.response.js";
import services from "../../services/index.js";
class ApiUserController {
    constructor(service) {
        this.service = service;
    }
    // async getAllUsers(req, res) {
    //     const users = await UserService.getAllUsers();
    //     return apiSuccess(res, users);
    // }

    async get(req, res) {
        console.log(req.params.id)
        const user = await this.service.getUserById(req.params.id);
        return apiSuccess(res, user);

    }

    async getByToken(req, res) {
        const user = await this.service.getUserByToken(req.params.token);
        return apiSuccess(res, user);
    }
}

export default new ApiUserController(services.userService);