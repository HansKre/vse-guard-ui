import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { v4 as uuidv4 } from 'uuid';
import Link from '@material-ui/core/Link';

const useRowStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
        },
    },
}));

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.path}
                </TableCell>
                <TableCell>{row.actionResult}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                            </Typography>
                            <Table size="small" aria-label="details table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Href</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Link href={row.href} target="_blank" rel="noreferrer">
                                                {row.href}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell align="right">{row.action}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Typography variant="h6" gutterBottom component="div">
                                Foor Bar
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lorem ipsum
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        path: PropTypes.string.isRequired,
        actionResult: PropTypes.string,
        state: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
    }).isRequired,
};

const ChecksTable = ({ checks }) => {

    console.log('checkstable re-renders');

    return (
        <TableContainer component={Paper}>
            <Table aria-label="checks table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Path</TableCell>
                        <TableCell>Action Result</TableCell>
                        <TableCell align="right">State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {checks.map((row) => (
                        <Row key={uuidv4()} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ChecksTable;