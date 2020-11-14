import React, { useState } from 'react';
import Match from '../classes/Match';

interface Props {
	match: Match;
}

export default ({ match }: Props) => {
	const [showEdit, setShowEdit] = useState(false);
	const [homeScore, setHomeScore] = useState(0);
	const [awayScore, setAwayScore] = useState(0);
	const [successSubmit, setSuccessSubmit] = useState(false);

	const handleHomeScore = (event: any): void => {
		const score: number = +event.target.value; // + to convert to a number
		setHomeScore(score);
	}

	const handleAwayScore = (event: any): void => {
		const score: number = +event.target.value; // + to convert to a number
		setAwayScore(score);
	}

	const insertResult = (event: { preventDefault: () => void; }): void => {
		event.preventDefault();
		match.insertResult(homeScore, awayScore);
		setShowEdit(false);
		setSuccessSubmit(true);
		setTimeout(() => setSuccessSubmit(false), 1000 * 3);
	}

	return (
		<div style={{marginLeft: 10, display: "flex"}}>
			<button onClick={() => setShowEdit(true)} style={{marginRight: 20}}>Edit</button>
			{
				showEdit && 
				<div style={{display: "flex"}}>
					<form style={{marginBottom: 0}} onSubmit={insertResult}>
						<label htmlFor="homeResult" style={{marginRight: 3}}>{match.homeTeam.getName()}</label>
						<input id="homeResult" name="homeResult" type="number" min={0} value={homeScore} onChange={handleHomeScore} style={{width: "30px"}} />
						 - 
						<input id="awayResult" name="awayResult" type="number" min={0} value={awayScore} onChange={handleAwayScore} style={{width: "30px"}} />
						<label htmlFor="awayResult" style={{marginLeft: 3}}>{match.awayTeam.getName()}</label>
						<button type="submit" style={{marginLeft: 10}}>Submit</button>
					</form>
					
					<button onClick={() => setShowEdit(false)}>close</button>
				</div>
			}
			{
				successSubmit && <span style={{color: "green"}}>Match submitted sucessfully</span>
			}
		</div>
	)
}