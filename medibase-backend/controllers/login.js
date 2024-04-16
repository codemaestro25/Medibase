import Orglogin from '../models/OrgLogin.js'
import Userlogin from '../models/UserLogin.js';
// var hash = require('object-hash');
// import objectHash from "../../medibase-backend/node_modules/object-hash"
import objectHash from "object-hash"


export const orgLogin = async(req , res)=>{

   // Assuming req.body contains the data
const { orgDetails } = req.body;
const { orgId, password } = JSON.parse(orgDetails);

console.log(orgId);  
console.log(password); 

    try {
        let org = await Orglogin.findOne({orgId});
        if(!org){
            return res.status(400).json({Error : "No organisation with the id found"})
        }
        if(org.password==password){
            return res.status(200).send(org);
        }
    } catch (error) {
        console.error(err.message);
        res.status(500).send({error});
    }
}

export const checkUserCredForOtp = async(req, res )=>{
   try {
    const {uniqueId, password} = req.body;
    const uidhash= objectHash.MD5(uniqueId);
    console.log(uidhash)
 
    let user = await Userlogin.findOne({uniqueId:uidhash});
    console.log(user)
    if(!user){
        return res.status(404).json({Error : "No user with the id found"})
    }
    if(user.password==password){
        return res.status(200).json({flag : true});
    }
    else{
        return res.status(400).json({Error : "bad Credentials"})
    }
   } catch (error) {
    console.error(err.message);
    res.status(500).send({error});
   }

    
}