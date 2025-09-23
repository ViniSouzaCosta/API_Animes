import { CommandStartedEvent } from "mongodb";
import Anime from "../models/Animes.js"

class animeService {

    async getAll(){
        try{
            const animes = await Anime.find();
            return animes;
           }catch(error){
            console.log("error");
        }
    }

    async Create(title,type,episodes_count,studio,genres,rating,dub,sub,descriptions){
        try{
            const newAnime = new Anime({
                title,
                type,
                episodes_count,
                studio,
                genres,
                rating,
                dub,
                sub,
                descriptions,
            });
            await newAnime.save();
        }catch(error){
            console.log(error);
        }
    }

    async Delete(id){
        try{
            await Anime.findByIdAndDelete(id);
            console.log(`Anime com a id: ${id} foi deletado com sucesso.`);
        }catch(error){
            console.log(error);
        }
    }

    async Update(id,title,type,episodes_count,studio,genres,rating,dub,sub,descriptions){
        try{
            const anime = await Anime.findByIdAndUpdate(
                id,
                {
                title,
                type,
                episodes_count,
                studio,
                genres,
                rating,
                dub,
                sub,
                descriptions,  
                },
                { new: true}
            );
            console.log(`Dados do anime com id ${id} alterados com sucesso.`);
            return anime;
        }catch(error){
            console.log(error);
        }
    }

    async getOne(id){
        try{
            const anime = await Anime.findOne({_id: id});
            return anime;
        }catch (error){
            console.log(error)
        }
    }
}
export default new animeService();