import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import React from 'react'

const PriceCard = ({ name, price, priceTerm, inclusions, exclusions }) => {
    return (
        <Card raised>
            <CardHeader
                title={name}
                subheader={priceTerm}
            />
            <CardContent>
                <Typography variant="h4" align="center" gutterBottom>
                    {`USD ${price}`}
                </Typography>
                <Divider />

                <Typography variant="body1" gutterBottom style={{ marginTop: '1rem' }}>
                    INCLUDES:
            </Typography>
                {inclusions && inclusions.map(i => <Grid container spacing={2} alignItems="center" style={{ marginLeft: '2rem' }}>
                    <grid item>

                        <CheckIcon style={{color: '#85C24B'}}></CheckIcon>
                    </grid>
                    <Grid item>

                        <Typography variant="body2">
                            {i}
                        </Typography>
                    </Grid>

                </Grid>)}
            </CardContent>

            <CardActions>
                <Button>Buy</Button>
            </CardActions>
        </Card>
    )
}

export default PriceCard
