import {getUserIdByToken} from "./token.service.js";

class UserService {
    constructor(model) {
        this.model = model
    }

    async getAllUsers() {
        try {
            return await this.model.find();
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            return await this.model.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async getUserByToken(token) {
        const userId = await getUserIdByToken(token);
        try {
            return await this.model.findById(userId);
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;