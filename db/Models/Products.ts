import { DataTypes } from "@sequelize/core"
import sequelize from "../database"

const Produits = sequelize.define('Produits', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
    prix: {
        type: DataTypes.INTEGER
    },
    stock : {
        type: DataTypes.INTEGER
    }
})

export function ProductSync() {
     return (sequelize.sync().then(
        () => console.log('Table Produit créé')
    )
     )
}

export default Produits;
