import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    data: {type: mongoose.Schema.Types.ObjectId, ref: 'Album'},
})
const Topic = mongoose.model('Topic', topicSchema);

export default Topic;