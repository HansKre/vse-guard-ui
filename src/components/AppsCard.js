import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import DetailsHover from './DetailsHover';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    typo: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    }
}));

// time defined outside of class to avoid changing on re-render
const time = (new Date()).toLocaleString();

const AppsCard = React.memo(({ app }) => {

    const classes = useStyles();

    console.log('apps re-render');

    const [detailsText, setDetailsText] = React.useState();

    return (
        <>
            {detailsText && <DetailsHover text={detailsText} />}
            <Card key={uuidv4()}
            >
                <CardHeader
                    key={uuidv4()}
                    title={app.desc}
                    subheader={time}
                />
                <CardContent key={uuidv4()}>
                    {
                        app.environments.map(env => {
                            return (
                                <React.Fragment key={uuidv4()}>
                                    <Typography
                                        key={uuidv4()}
                                        className={classes.typo}
                                        variant='body2'
                                        component='p'
                                        onMouseEnter={() => { setDetailsText(env.env) }}
                                        onMouseLeave={() => { setDetailsText(undefined) }}
                                    >
                                        {env.env}
                                    </Typography>
                                </React.Fragment>
                            )
                        })
                    }
                </CardContent>
            </Card>
        </>
    );
}, (prevProps, nextProps) => {
    return true;
})

export default AppsCard;