import React, { useEffect } from 'react';
import { Card, Image, Text, Group, Badge, createStyles, Button } from '@mantine/core';
import { GetStaticProps } from 'next';
import { server } from '../../../config/server';
import { loadStripe } from '@stripe/stripe-js';

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    imageSection: {
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: -0.25,
      textTransform: 'uppercase',
    },
  
    section: {
      padding: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    icon: {
      marginRight: 5,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  }));

loadStripe(
    //process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    'pk_test_51KmBobKZq74SdZP81vhKSxJGDhPc2UEv1d2SBCu1IJf3WDkc4ZSJENLjFC04YFIA32bs4MBG6Sd8gkQuGR4XynoT00UHNoA9hn'
  );

const ProductItem = ({aProduct}: any) => {

    const {classes} = useStyles()
    console.log(aProduct)

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);
    
    

    return (
        <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
        </Card.Section>
  
        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>{'ds'}</Text>
            <Text size="xs" color="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>
  
        <Card.Section className={classes.section} mt="md">
          <Text size="sm" color="dimmed" className={classes.label}>
            {aProduct[0].name}
          </Text>
          
        </Card.Section>
  
        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                {aProduct[0].prix}
              </Text>
            </div>
  
            <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
          </Group>
        </Card.Section>
      </Card>
    );
};

export const getStaticProps = async (context: { params: any }) => {
    const id = context.params;

    if(id === undefined) {
        throw new Error('id non trouvé ')
    }

    const res = await fetch(`${server}/api/product/${id.id}`)
    const aProduct = await res.json()

    return {
        props : {
            aProduct
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/product`)

    const aProduct = await res.json();
    //console.log('item', items)
    const ids = aProduct.map((item: any) => item.id)
    console.log(ids)
    const paths = ids.map((id: any) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default ProductItem;
