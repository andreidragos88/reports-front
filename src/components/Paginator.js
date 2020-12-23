import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export default function Paginator(props) {
    return (
    <Grid
        container
        justify="space-between"
        spacing={1}>
        {props.currentPage > 0 && (
            <Grid item xs container justify="flex-start">
                <Button data-testid="next-btn" onClick={props.onPrevious}>
                    Previous
                </Button>
            </Grid>
        )}
        {props.currentPage < props.totalPages - 1 && (
            <Grid item xs container justify="flex-end">
                <Button data-testid="next-btn" onClick={props.onNext}>
                    Next
                </Button>
            </Grid>
        )}
    </Grid>
    );
}