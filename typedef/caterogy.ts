import { gql } from "apollo-server-express";

export const typeDefsCaterogy = gql`
    type Caterogy {
        id: ID,
        title: String,
        avatar: String,
    }
    type Query {
        getListCaterogy:[Caterogy]
        getCaterogy(id: ID) : Caterogy
    }
    input  CaterogyInput {
        title: String,
        avatar: String,
        description: String 
    }
    type Multation{
        createCaterogy(caterogy: CaterogyInput) : Caterogy,
        updateCaterogy(id: ID , caterogy: CaterogyInput) : Caterogy,
        deletedCaterogy(id: ID) : String
    }
`