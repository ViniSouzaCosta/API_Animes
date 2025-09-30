import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    synopsis: String,
    background: String,
    tags: [String] 
})

const animeSchema = new mongoose.Schema({
    title: String,
    type: String,
    episodes_count: String,
    studio: [String], 
    genres: [String], 
    rating: String,
    dub: [String], // agora dub é array
    sub: [String], // agora sub é array
    imageUrl: [String],
    descriptions: [descriptionSchema]
});

const Anime = mongoose.model("Anime", animeSchema)

export default Anime;