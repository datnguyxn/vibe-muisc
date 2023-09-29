import model from '../models/index.js';
import AuthService from "./auth.service.js";
import UserService from "./user.service.js";

export default {
    authService: new AuthService(model.user),
    userService: new UserService(model.user),
}