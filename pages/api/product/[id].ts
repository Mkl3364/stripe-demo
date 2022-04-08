import { NextApiResponse } from "next";
import Produits from "../../../db/Models/Products";


export default async function handler({query : {id}} : any, res: NextApiResponse) {
    try {
        const aProduct = await Produits.findAll({
            where: {
                id : id
            }
        })
        res.status(200).json(aProduct)
    }
    catch (error) {
        res.status(500).json({error})
    }
}