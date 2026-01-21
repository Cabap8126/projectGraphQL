import { gql } from "apollo-server-express";
export const typeDefsUser = gql`
    type Def{
        id: ID,
        fullName: String,
        email:String,
        token:String,
        code: Int,
        message:String
    }
    input ResgisterUserInput{
        fullName:String,
        email: String,
        password:String
    }
    input LoginUserInput{
        email: String,
        password:String
    }
    type Query{
        getUser: User
    }
    type Multation{
        resgisterUser(user: ResgisterUserInput) :User,
        loginUser(user: LoginUserInput) : User,
    }
`