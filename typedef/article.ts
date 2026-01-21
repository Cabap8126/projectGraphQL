import { gql } from "apollo-server-express";

export const typeDefsArticle = gql`
    type Article{
        id: ID,
        title: String,
        avatar: String,
        description: String,
        caterogy:Caterogy
    }
    type Query {
        hello: String,
        getListArticle(
            sortKey:String,
            sortValue:String,
            currentPage: Int =1,
            limititems: Int =2,
            filterKey: String,
            filterValue: String,
            valuefind: String
            ): [Article],
        getArticle(id: ID) : Article,
    }
    input  ArticleInput {
        title: String,
        avatar: String,
        description: String,
        caterogyId:String
    }
    type Multation{
        createArticle(article: ArticleInput) : Article,
        deletedArticle(id: ID) : String,
        updatedArticle(id: ID , article: ArticleInput) : Article
    }
`