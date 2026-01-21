import mongoose, { Schema } from "mongoose";
const articleModel = new mongoose.Schema({
    title : String,
    avatar : String,
    description : String,
    caterogyId : String,
    deleted : {
        type : Boolean,
        default : false
    },
    deletedAt : Date,
},{
    timestamps : true
})
const Article = mongoose.model("Articles",articleModel , "articles")
export default Article;