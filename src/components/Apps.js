import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';

export default function Apps({ app }) {
    return (
        <Card>
            <CardHeader
                title={app.desc}
                subheader={(new Date()).toLocaleString()}
            />
            <CardContent>
                {
                    app.environments.map(env => {
                        return (
                            <Typography key={uuidv4()} variant='body2' component='p'>
                                {env.env}
                            </Typography>
                        )
                    })
                }
            </CardContent>
        </Card>
    );
}