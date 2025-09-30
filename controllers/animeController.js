import animeService from "../services/animeService.js";
import { ObjectId } from "mongodb";

const getAllanimes = async (req, res) =>{
    try{
        const animes = await animeService.getAll();
        res.status(200).json({ animes: animes});
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor"});
    }
};

const createAnime = async (req, res) => {
    try{
       const { title,type,episodes_count,studio,genres,rating,dub,sub,imageUrl,descriptions} = req.body;
       await animeService.Create(title,type,episodes_count,studio,genres,rating,dub,sub,imageUrl,descriptions);
       res.sendStatus(201); 
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor"});
    }
};

const deleteAnime = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id =req.params.id;
            await animeService.Delete(id);
            res.sendStatus(204);
        }else{
            res.status(400).json({error: "A ID enviada é inválida"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor"});
    }
};

const updateAnime = async (req, res) =>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const {title,type,episodes_count,studio,genres,rating,dub,sub,imageUrl,descriptions} = req.body;
            const anime = await animeService.Update(id,title,type,episodes_count,studio,genres,rating,dub,sub,imageUrl,descriptions);
            res.status(200).json({anime});
        }else{
            res.sendStatus(400);
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500).json({error: "Erro interno do servidor."});
    }
}; 

const getOneAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id
      const anime = await animeService.getOne(id);
      if (!anime) {
        res.status(404).json({ error: 'O anime não foi encontrado'}) 
      } else {
        res.status(200).json({ anime })
      }
    }else {
      res.status(400).json({ error: 'A ID enviada é inválida' });
    }
  }catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
};

export default {getAllanimes, createAnime, deleteAnime, updateAnime, getOneAnime};