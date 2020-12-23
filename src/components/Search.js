import React, { useState } from "react";
import { FormControl, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function Search(props) {
	const [bank, setBank] = useState('');
	const [scoreFrom, setScoreFrom] = useState('');
	const [scoreTo, setScoreTo] = useState('');

	const { onSearchSubmit } = props;

	const onFormSubmit = (event) => {
		event.preventDefault();
		onSearchSubmit({ bank, scoreFrom, scoreTo });
	}

	const onChangeField = (func) => (input) => func(input.currentTarget.value);

	return (
		<form className="form" onSubmit={onFormSubmit} >
			<FormControl fullWidth={true} >
				<TextField
					label="Bank"
					value={bank}
					margin="normal"
					fullWidth
					onChange={onChangeField(setBank)}
					name="bank" />
			</FormControl>
			<FormControl fullWidth={true} >
				<TextField
					label="Score from"
					value={scoreFrom}
					margin="normal"
					fullWidth
					onChange={onChangeField(setScoreFrom)}
					name="scoreFrom" />
			</FormControl>
			<FormControl fullWidth={true} >
				<TextField
					label="Score to"
					value={scoreTo}
					margin="normal"
					fullWidth
					onChange={onChangeField(setScoreTo)}
					name="scoreTo" />
			</FormControl>
			<FormControl fullWidth={true} margin="normal" >
				<Button variant="contained" color="primary" type="submit">Search</Button>
			</FormControl>
		</form>
	)
}
