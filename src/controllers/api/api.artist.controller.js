import ArtistService from '../../services/artist.service.js';
import Artists from '../../models/artist.model.js';
import User from '../../models/user.model.js';

class ApiArtistController {
    async getAllArtists(req, res) {
       return await ArtistService.getAllArtists(req, res);
    }

    async get(req, res) {
        return await ArtistService.get(req, res);
    }
}

export default new ApiArtistController;