import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import trans from '../../../util/trans'
import React from 'react'
import { FormattedNumber } from 'react-intl';

const PriceCard = ({ name, price, subHeader, inclusions, paymentTerm, background }) => {
    return (
        <Card raised>
            <CardHeader style={{ backgroundColor: background }}
                title={trans(name)}
                subheader={trans(subHeader)}
            />
            <CardContent>
                <Grid container spacing={1} justify="center" alignItems="flex-end">
                    <Grid item>
                        {trans('usd')}
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>
                            <FormattedNumber value={price}></FormattedNumber>
                        </Typography>
                    </Grid>
                    <Grid item>
                        {trans(paymentTerm)}
                    </Grid>

                </Grid>

                <Divider />

                <Typography variant="body1" gutterBottom style={{ marginTop: '1rem' }}>
                    {trans('includes')}
                </Typography>
                {inclusions && inclusions.map(i => <Grid container spacing={2} alignItems="center" style={{ marginLeft: '2rem' }}>
                    <grid item>
                        <CheckIcon style={{ color: '#85C24B' }}></CheckIcon>
                    </grid>
                    <Grid item>

                        <Typography variant="body2">
                            {trans(i)}
                        </Typography>
                    </Grid>

                </Grid>)}
            </CardContent>

            <CardActions>
                <Button>{trans('buy-now')}</Button>
            </CardActions>
        </Card>
    )
}

export default PriceCard
