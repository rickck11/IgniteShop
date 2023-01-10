import Stripe from "stripe";

const apikey: string = process.env.STRIPE_SECRET_KEY || ''

export const stripe = new Stripe(apikey, {
    apiVersion: "2022-11-15",
    appInfo: {
        name: 'Ignite Shop'
    }
})