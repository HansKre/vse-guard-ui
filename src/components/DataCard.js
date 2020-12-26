import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { v4 as uuidv4 } from 'uuid';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        '&:hover': {
            background: '#7d857f',
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function DataCard({ dataCard }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} style={{}}>
            <CardHeader
                avatar={
                    // TODO: icon-ausrichtung im avatar optimieren
                    // TODO: Fallunterscheidung, ob Bild vorhanden ist
                    // TODO: was sind aria-labels?
                    // <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>
                    <Avatar src={process.env.PUBLIC_URL + '../img/' + dataCard.icon} alt='Logo' />
                }
                action={
                    <IconButton aria-label="settings" onClick={() => alert('settings clicked')}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={dataCard.title}
                subheader={(new Date()).toLocaleString()}
            />
            {
                // Add Chart or Picture
                dataCard.chart
                    ? <Chart className={classes.media} chartDefinition={dataCard.chart} />
                    : <CardMedia
                        className={classes.media}
                        image="/static/images/cards/dummy.jpg"
                        title="Dummy Pic"
                    />
            }
            <CardContent>
                {dataCard.environments.map(env => {
                    if (env && env.constructor.name === 'Object') {
                        return (
                            // TODO: use material-ui way of makeStyle for styling
                            <Typography key={uuidv4()} variant="body2" color={env.status ? "textPrimary" : "error"} component="p">
                                {env.name}
                            </Typography>
                        )
                    } else {
                        return (
                            <Typography key={uuidv4()} variant="body2" color="textSecondary" component="p">
                                {env}
                            </Typography>
                        )
                    }
                })}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => alert('add to favs clicked')} >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={() => alert('share clicked')}>
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Lorem Ipsum:</Typography>
                    <Typography paragraph>
                        Lorem lorem
          </Typography>
                    <Typography paragraph>
                        Ipsum
          </Typography>
                    <Typography paragraph>
                        Ipsum
          </Typography>
                    <Typography>
                        Ipsum
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}