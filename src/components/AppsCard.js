import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import DetailsHover from './DetailsHover';

const time = (new Date()).toLocaleString();
const AppsCard = React.memo(({ app }) => {

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