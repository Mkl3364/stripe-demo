import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')('sk_test_51KmBobKZq74SdZP8z5uL24c9GpZriAdc8Mvo0PPMlCyYORz1hqcmfO4p028KKJxG8iZpkaSs4yTwOfA9c6wGBevw00t9JKQDpc');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data : {
                "currency": "eur",
                "product_data": {
                    "name": "Trotinette",
                    "description": "some trotinette",
                    "images": [],
                },
                "unit_amount_decimal": 1200,
              
            },
            quantity: 1
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}