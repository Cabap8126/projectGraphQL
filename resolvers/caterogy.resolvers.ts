import Article from "../model/article.model";
import Caterogy from "../model/caterogy";

export const resolversCaterogy={
    Query:{
        getListCaterogy : async ()=>{
            const caterogy = await Caterogy.find({
                deleted : false
            })
            return caterogy
        },
        getCaterogy : async (_,args)=>{
            const {id} = args
            const caterogy = await Caterogy.findOne({
                _id : id,
                deleted : false
            })
        }
    },
    Multation:{
        createCaterogy: async (_,args)=>{
            const {caterogy} = args;
            const record = new Article(caterogy)
            await record.save()
            return record
        },
        updateCaterogy : async (_,args)=>{
            const {id ,caterogy} = args;
            await Caterogy.updateOne({_id : id,deleted : false},{caterogy})
            const record = await Caterogy.findOne({
                _id : id
            })
            return record
        },
        deletedCaterogy : async (_,args)=>{
            const { id } = args;
            await Caterogy.updateOne({_id : id},{
                deleted : true,
                deletedAt : new Date()
            });
            return "đã xóa"
        }
    }
}