import { Container, Grid } from '@material-ui/core'
import React from 'react'
import PriceCard from './components/PriceCard'

const priceCards = [
    {
        name: 'pricing.basic',
        price: 200,
        paymentTerm:"pricing.one-time",
        subHeader: "pricing.basic-subheader",
        inclusions: ['pricing.installation', 'pricing.video-training', 'pricing.one-support-hour'],
        background: "#57A3D0",
        learnMore: 'pricing.basic-learn-more',
        paymentLink: "https://buy.stripe.com/4gw4jQ7cMgASevS6oo"
    },
    {
        name: 'pricing.season-support-umrah',
        price: 150,
        paymentTerm:"pricing.per-umrah-season",
        subHeader: "umrah",
        inclusions: ['pricing.season-support', 'pricing.100-visa-proxy', 'pricing.15-support-calls'],
        background: "#58D09C",
        learnMore: 'pricing.season-support-umrah-learn-more',
        paymentLink: "https://buy.stripe.com/28obMi40A84mdrO001"
    },
    {
        name: 'pricing.season-support-haj',
        price: 400,
        paymentTerm:"pricing.per-haj-season",
        subHeader: "pricing.haj",
        inclusions: ['pricing.season-support', 'pricing.100-visa-proxy', 'pricing.15-support-calls'],
        background: "#58D068",
        learnMore: 'pricing.season-support-haj-learn-more',
        paymentLink: "https://buy.stripe.com/fZe8A6bt21FY3Re9AC"
    },
    {
        name: 'pricing.lifetime',
        price: 2800,
        paymentTerm:"pricing.per-15-years",
        subHeader: "pricing.haj-umrah",
        inclusions: ['pricing.15-years-support', 'pricing.unlimited-visa-proxy', 'pricing.unlimited-support-calls'],
        background: "#E0E4E8",
        learnMore: 'pricing.lifetime-learn-more',
        paymentLink: "https://buy.stripe.com/5kA2bIcx670icnK147"
    }
]

const Pricing = () => {
    return (
        <Container id="pricing">
            <Grid container justify="space-between" spacing={2}>
                {
                    priceCards.map(priceCard => <Grid item sm={12} md={3} lg>
                        <PriceCard 
                        name={priceCard.name} 
                        price={priceCard.price}  
                        paymentTerm={priceCard.paymentTerm}
                        subHeader={priceCard.subHeader}
                        inclusions={priceCard.inclusions}
                        background={priceCard.background}
                        learnMore={priceCard.learnMore}
                        paymentLink={priceCard.paymentLink}
                        />
                    </Grid>)
                }
            </Grid>
        </Container>
    )
}

export default Pricing
