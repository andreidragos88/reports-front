import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Search from '../components/Search';
import Paginator from '../components/Paginator';
import Spinner from '../components/Spinner';
import useHomeStyles from '../assets/styles/home';
import { getReports } from '../store/actions/reports';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';

function Home(props) {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.reports.loading);
    const reports = useSelector(state => state.reports.reports);
    let totalPages = useSelector(state => state.reports.totalPages);

    const [page, setPage] = useState(0);
    const [values, setValues] = useState({});

    const onSearchSubmit = (values) => {
        searchResults(values, 0);
        setValues(values);
        setPage(0);
    }

    const onPreviousPageHandler = () => {
        let newPage = page - 1;

        searchResults(values, newPage);
        setPage(newPage);
    }

    const onNextPageHandler = () => {
        let newPage = page + 1;

        searchResults(values, newPage);
        setPage(newPage);
    }

    const searchResults = (filters, page) => {
        dispatch(getReports(filters, page));
    }

    return <div className={classes.main}>
        <Search onSearchSubmit={onSearchSubmit} />
        <TableContainer className={classes.table} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Bank name</TableCell>
                        <TableCell align="right">Bank BIC</TableCell>
                        <TableCell align="right">Report score value</TableCell>
                        <TableCell align="right">Type of the report</TableCell>
                        <TableCell align="right">Created date</TableCell>
                        <TableCell align="right">Published date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(reports.map((row) => (
                        <TableRow key={row.uuid}>
                            <TableCell component="th" scope="row">
                                {row.body.bankName}
                            </TableCell>
                            <TableCell align="right">{row.body.bankBIC}</TableCell>
                            <TableCell align="right">{row.body.reportScore}</TableCell>
                            <TableCell align="right">{row.body.type}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.publishedAt}</TableCell>
                        </TableRow>
                    )))}
                </TableBody>
            </Table>
            {loading && <Spinner />}
        </TableContainer>
        <Paginator
            onPrevious={onPreviousPageHandler}
            onNext={onNextPageHandler}
            currentPage={page}
            totalPages={totalPages} />
    </div>;
}

export default Home;