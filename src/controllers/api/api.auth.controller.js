import {apiSuccess, apiFailure} from "../../utils/api.response.js";
import services from "../../services/index.js";

class ApiAuthController {
    constructor(service) {
        this.service = service;
    }

    async authenticate(req, res, next) {
        try {
            const user = await this.service.authenticate(req, res);
            return apiSuccess(res, user);
        } catch (error) {
            return apiFailure(res, error.message)
        }
    }

    async register(req, res, next) {
        try {
            const user = await this.service.register(req.body);
            return apiSuccess(res, user);
        } catch (error) {
            return apiFailure(res, error.message)
        }
    }

    async refreshToken(req, res, next) {
        try {
            const token = await this.service.refreshToken(req, res);
            return apiSuccess(res, token);
        } catch (error) {
            return apiFailure(res, error.message)
        }
    }

    async logout(req, res, next) {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    }

    async sendMail(req, res) {
        try {
            await this.service.sendMailToUser(req);
            return "hay"
        } catch (error) {
            return error
        }
    }

    async secret(req, res) {
        res.status(200).json({resources: true});
    }
}

export default new ApiAuthController(services.authService);