import React, { ChangeEvent, useState } from 'react';

const Dashboard = () => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [prix, setPrix] = useState<number>(0)
    const [stock, setStock] = useState<number>(0)

    const handleNameStorage = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        console.log(name)
    }

    return (
        <div>
            Ajouter un Produit :
        </div>
    );
};

export default Dashboard;