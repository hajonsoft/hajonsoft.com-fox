import { Container, Grid } from '@material-ui/core'
import React from 'react'
import PriceCard from './components/PriceCard'

const Pricing = () => {
    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={3}>
                    <PriceCard name="basic" price="200" paymentTerm="one-time" subHeader="basic-subheader" inclusions={['installation', 'video-training', 'one-support-hour']} background="#57A3D0" />
                </Grid>
                <Grid item xs={3}>
                    <PriceCard name="season-support-umrah" price="150" paymentTerm="per-umrah-season" subHeader="umrah" inclusions={['season-support', '100-visa-proxy', '15-support-calls']} background="#58D09C" />
                </Grid>
                <Grid item xs={3}>
                    <PriceCard name="season-support-haj" price="400" paymentTerm="per-haj-season" subHeader="haj" inclusions={['season-support', '100-visa-proxy', '15-support-calls']} background="#58D068" />
                </Grid>
                <Grid item xs>
                    <PriceCard name="lifetime" price="2800" paymentTerm="one-time" subHeader="haj-umrah" inclusions={['15-years-support', 'unlimited-visa-proxy', 'unlimited-support-calls']} background="#E0E4E8" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pricing
