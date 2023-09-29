import PlaylistService from "../../services/playlist.service.js";
class ApiPlaylistController {
    async get(req, res) {
        return res.json(await PlaylistService.get(req.body));
    }
}

export default new ApiPlaylistController();