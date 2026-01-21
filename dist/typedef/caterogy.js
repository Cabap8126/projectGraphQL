"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsCaterogy = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsCaterogy = (0, apollo_server_express_1.gql) `
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
`;
