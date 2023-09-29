import Artist from "../models/artist.model.js";
import {apiFailure, apiSuccess} from "../utils/api.response.js";
import Album from "../models/album.model.js";

class ArtistService {
    async getAllArtists(req, res) {
        // return "getAllArtists";
        const artists = await Artist.find({})
        try {
            return apiSuccess(res, artists);
        } catch (e) {
            return apiFailure(res, e);
        }
    }

    async get(req, res) {
        console.log(req.params)
        let id = req.params.id
        console.log(id)
        const artist = await Album.findOne({id: id})
        try {
            return apiSuccess(res, artist);
        } catch (e) {
            return apiFailure(res, e);
        }
    }

}

export default new ArtistService;