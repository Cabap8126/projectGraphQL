import Article from "../model/article.model";
import Caterogy from "../model/caterogy";

export const resolversArticle={
    Query:{
        getListArticle : async (_,args)=>{
            const {sortKey,sortValue,currentPage,limititems,filterKey,filterValue,valuefind} = args
            const sort ={};
            const find = {
                deleted :false
            };
            //sort
            if(sortKey && sortValue){
                sort[sortKey] = sortValue
            }
            // end
            //pagination
            const skip =(currentPage-1) * limititems
            // end
            // filter
            if(filterKey && filterValue){
                find[filterKey] = filterValue
            }
            // end
            //Regex
            if(valuefind){
                const reg = new RegExp(valuefind,"i");
                find["title"] = reg;
            }
            // end
            const article = await Article.find(find).sort(sort).limit(limititems).skip(skip);
            return article
        },
        getArticle : async (_,args)=>{
            const {id} = args
            const article = await Article.findOne({
                _id : id,
                deleted : false
            })
        },
    },
    Article:{
        caterogy : async (article)=>{
            const caterogyId = article.caterogyId;
            const caterogy = await Caterogy.findOne({
                _id : caterogyId
            })
            return caterogy
        }
    },
    Multation:{
        createArticle : async (_,args)=>{
            const {article} = args;
            const record = new Article(article)
            await record.save()
            return record
        },
        deletedArticle : async (_,args)=>{
            const { id } = args;
            await Article.updateOne({_id : id},{
                deleted : true,
                deletedAt : new Date()
            });
            return "đã xóa"
        },
        updatedArticle : async (_,args)=>{
            const {id ,article} = args;
            await Article.updateOne({_id : id,deleted : false},{article})
            const record = await Article.findOne({
                _id : id
            })
            return record
        },
    }
}