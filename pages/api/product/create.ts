import { NextApiRequest, NextApiResponse } from "next";
import Produits from "../../../db/Models/Products";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await Produits.create({
            name : 'Samsung trop chouette',
            description : 'Le dernier samsung',
            prix: 1000,
            stock : 2
        })
        res.status(200).json({result})
    }
    catch (error) {
        res.status(500).json({error})
    }
}