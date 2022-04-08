import { DataTypes } from "@sequelize/core"
import sequelize from "../database"

const Users = sequelize.define('User', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
    },
})

//sequelize.sync().then(
//    () => console.log('Table User créé')
//)

export default Users;