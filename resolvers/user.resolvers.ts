import { generateTokrn } from "../helpers/generate";
import User from "../model/user";
import md5 from "md5"
export const resolversUser = {
    Query:{
        getUser : async (_,args,context)=>{
            const infoUser = await User.findOne({
                token : context["user"].token,
                deleted : false
            })
            if(infoUser){
                return{
                    code:200,
                    message : "Thành Công",
                    id : infoUser.id,
                    fullName : infoUser.fullName,
                    email : infoUser.email,
                    token : infoUser.token
                }
            }
        }
    },
    Multation:{
        resgisterUser: async (_,args)=>{
            const {user} = args;
            const emailExit = await User.findOne({
                email : user.email,
                deleted : false
            })
            if(emailExit){
                return{
                    code : 400,
                    message:"Email đã tồn tại"
                }
            }
            else{
                user.password = md5(user.password)
                user.token = generateTokrn(30)
                const newUser = new User(user);
                const data = await newUser.save();
                return{
                    code : 200,
                    message :"Thành Công",
                    data : data
                }
            }
        },
        loginUser : async (__,args)=>{
            const {email,password} = args.user;
            const infoUser = await User.findOne({
                email : email,
                deleted : false
            })
            if(infoUser){
                return{
                    code : 400,
                    message :"Email Không Tồn Tại"
                }
            }
            if(md5(password) !== infoUser.password){
                return{
                    code : 400,
                    message : "Sai Mật Khẩu"
                }
            }
            return{
                code : 200,
                message:"Thành Công",
                infoUser : infoUser
            }
        }
    }
}