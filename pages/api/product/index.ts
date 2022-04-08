import { NextApiRequest, NextApiResponse } from "next";
import Produits from "../../../db/Models/Products"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const results = await Produits.findAll();
        res.status(200).json(results)
    }
    catch (error) {
        res.status(500).json({error})
    }
}