import { Container, Grid } from '@material-ui/core'
import React from 'react'
import PriceCard from './components/PriceCard'

const Pricing = () => {
    return (
        <Container id="pricing">
            <Grid container justify="space-between" spacing={2}>
                <Grid item sm={12} md={3} lg>
                    <PriceCard name="basic" price="200" paymentTerm="one-time" subHeader="basic-subheader" inclusions={['pricing.installation', 'pricing.video-training', 'pricing.one-support-hour']} background="#57A3D0" />
                </Grid>
                <Grid item sm={12} md={3} lg>
                    <PriceCard name="pricing.season-support-umrah" price="150" paymentTerm="per-umrah-season" subHeader="umrah" inclusions={['pricing.season-support', 'pricing.100-visa-proxy', 'pricing.15-support-calls']} background="#58D09C" />
                </Grid>
                <Grid item sm={12} md={3} lg>
                    <PriceCard name="pricing.season-support-haj" price="400" paymentTerm="per-haj-season" subHeader="haj" inclusions={['pricing.season-support', 'pricing.100-visa-proxy', 'pricing.15-support-calls']} background="#58D068" />
                </Grid>
                <Grid item sm={12} md={3} lg>
                    <PriceCard name="lifetime" price="2800" paymentTerm="per-15-years" subHeader="haj-umrah" inclusions={['pricing.15-years-support', 'pricing.unlimited-visa-proxy', 'pricing.unlimited-support-calls']} background="#E0E4E8" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pricing
