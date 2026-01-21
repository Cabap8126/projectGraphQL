import mongoose from "mongoose";
const caterogy = new mongoose.Schema({
    title : String,
    avatar : String ,
    deleted : {
        type : Boolean,
        default : false
    },
    deletedAt : Date
},{
    timestamps : true
});
const Caterogy = mongoose.model("Caterogy",caterogy,"caterogy");
export default Caterogy;