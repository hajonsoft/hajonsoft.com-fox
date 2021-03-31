import { Container, Grid } from '@material-ui/core'
import React from 'react'
import PriceCard from './components/PriceCard'

const Pricing = () => {
    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={3}>
                    <PriceCard name="Basic" price="200" priceTerm="One time payment" inclusions={['Setup', '5 support calls']}/>
                </Grid>
                <Grid item xs={4}>
                    <PriceCard name="Premium" price="800" priceTerm="One time payment"  inclusions={['Setup', 'one year support']}/>
                </Grid>
                <Grid item xs>
                    <PriceCard name="LifeTime" price="9,500" priceTerm="One time payment"  inclusions={['Dedicated technician', 'Unlimited support']}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pricing
