import { server } from '../config/server'
import { BadgeCard } from '../components/Card'
import Header from '../components/Header/Header'

export default function Home(props : any) {

  return (
    <>
      
      <Header title={'Accueil'} />
      {
        props.prod.map((produit: { id: number, name: string; description: string; prix: number }) => {
           return <BadgeCard key={produit.id} image={''} id={produit.id} title={produit.name} description={produit.description} prix={produit.prix} />
        })
      }

      </>
      
    
  )
}

export const getStaticProps = async () => {

//  sequelize.authenticate().then(
//    () => console.log('Connexion OK')
//  )
//
//  await Produits.sync({alter: true}).then(
//    () => console.log('Produit synchronized')
//  )
//
//  await Users.sync().then(
//    () => console.log('Produit synchronized')
//  )

  const res = await fetch(`${server}/api/product`)
  const prod = await res.json()

  return {
    props: {prod},
  }
}
