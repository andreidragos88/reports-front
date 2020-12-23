import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const styles = makeStyles(theme => ({
    loading: {
        textAlign: 'center',
        margin: '0',
        position: 'absolute',
        top: '50%',
        width: '100%',

        '& > *': {
            margin: 'auto'
        }
    }
}));

export default function Spinner (props) {
    const classesSpinner = styles();

    return (
        <div className={classesSpinner.loading}><CircularProgress /></ div>
    );
}