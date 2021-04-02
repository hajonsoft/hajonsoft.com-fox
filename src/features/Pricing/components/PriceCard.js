import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import trans from '../../../util/trans'
import React from 'react'
import { FormattedNumber } from 'react-intl';

const PriceCard = ({ name, price, subHeader, inclusions, background}) => {
    return (
        <Card raised>
            <CardHeader style={{backgroundColor: background}}
                title={name}
                subheader={subHeader}
            />
            <CardContent>
                <Typography variant="h4" align="center" gutterBottom>
                    <FormattedNumber value={price}></FormattedNumber>
                    {` `}
                    {trans('usd')} 
                </Typography>
                <Divider />

                <Typography variant="body1" gutterBottom style={{ marginTop: '1rem' }}>
                    {trans('includes')}
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
                <Button>{trans('buy-now')}</Button>
            </CardActions>
        </Card>
    )
}

export default PriceCard
