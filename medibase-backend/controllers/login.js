import Orglogin from '../models/OrgLogin.js'

export const orgLogin = async(req , res)=>{

    const {orgId, password} = req.body;
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