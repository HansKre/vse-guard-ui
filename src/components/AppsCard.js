import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import DetailsHover from './DetailsHover';
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typo: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            cursor: 'default', // supress 'text' cursorc
        }
    },
    typoClicked: {
        backgroundColor: theme.palette.primary.main,
        cursor: 'default', // supress 'text' cursorc
    }
}));

// global vars:
// values which must not change on re-render
// but can be shared across ALL AppsCard instances
const time = (new Date()).toLocaleString();
let prevBackgrColor;

const AppsCard = React.memo(({ app }) => {

    console.log('apps re-render');

    const classes = useStyles();

    const [details, setDetails] = React.useState();
    const [currentlyClickedIndex, setCurrentlyClickedIndex] = React.useState(undefined);
    const [shouldStayOpen, setShouldStayOpen] = React.useState(false);

    // refs to dynamic Typography-elements of environments
    const refs = React.useMemo(
        () => Array.from({ length: app.environments.length }).map(() => React.createRef()),
        [app.environments.length]
    );


    const handleMouseEnter = (env) => {
        if (!shouldStayOpen) setDetails(env)
    }

    const handleMouseLeave = () => {
        if (!shouldStayOpen) closeDetails();
    }

    const theme = useTheme();
    const handleShouldStayOpen = (clickedOnIndex) => {
        if (shouldStayOpen && (currentlyClickedIndex !== clickedOnIndex)) {
            resetHighlighted();
            // closeDetails();
        }
        setShouldStayOpen(true);
        setCurrentlyClickedIndex(clickedOnIndex);
        prevBackgrColor = refs[clickedOnIndex].current.style.backgroundColor;
        refs[clickedOnIndex].current.style.backgroundColor = theme.palette.primary.main;
        setDetails(app.environments[clickedOnIndex]); // this changes state and causes self to re-render and hence all component-vars to reset
    }

    const resetHighlighted = () => {
        if (currentlyClickedIndex !== undefined) {
            // change style before it happens next re-render automatically
            refs[currentlyClickedIndex].current.style.backgroundColor = prevBackgrColor;
            setCurrentlyClickedIndex(undefined);
        }
    }

    const closeDetails = () => {
        setDetails(undefined);
        setShouldStayOpen(false);
        resetHighlighted();
    }

    return (
        <>
            {details && <DetailsHover details={details} closeSelf={closeDetails} />}
            <Card
                key={uuidv4()}
                onMouseEnter={handleMouseLeave}
            >
                <CardHeader
                    key={uuidv4()}
                    // TODO: map app.class to icon and display as avatar
                    title={`${app.desc} ${app.class}`}
                    subheader={time}
                />
                <CardContent key={uuidv4()}>
                    {
                        app.environments.map((env, i) => {
                            return (
                                <React.Fragment key={uuidv4()}>
                                    <Typography
                                        key={uuidv4()}
                                        className={currentlyClickedIndex === i ? classes.typoClicked : classes.typo}
                                        variant='body2'
                                        component='p'
                                        onMouseEnter={() => handleMouseEnter(env)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleShouldStayOpen(i)}
                                        ref={refs[i]}
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