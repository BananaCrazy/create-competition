import React, { useState } from 'react';
import Competition from '../classes/Competition';
import Team from '../classes/Team';
import TeamList from './TeamList';

interface Props {
	competition: Competition;
	resetCompetition: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default ({competition, resetCompetition}: Props) => {
	const table: Team[] = competition.getLeagueTable();

	const [leagueTable, setLeagueTable] = useState(table);
	
	const updateTable = (): void => {
		const league = competition.getLeagueTable();
		console.log(leagueTable);
		setLeagueTable(league);
	}

	return (
		<div>
			<table>
				<colgroup>
					<col />
					<col className="name-col" />
					<col span={8} />
				</colgroup>
				<thead>
					<tr>
						<th>#</th>
						<th className="name-align">Name</th>
						<th>G</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th>P</th>
						<th>GF</th>
						<th>GA</th>
						<th>GD</th>
					</tr>
				</thead>
				<TeamList leagueTable={leagueTable} />
				
				{/*	
					leagueTable?.map((team: Team, index: number) => {
						console.log(team);
						return (
							<tr key={index}>
								<td>{index + 1}.</td>
								<td className="name-align">{team.getName()}</td>
								<td>{team.getGamesPlayed()}</td>
								<td>{team.getWins()}</td>
								<td>{team.getDraws()}</td>
								<td>{team.getLosses()}</td>
								<td>{team.getPoints()}</td>
								<td>{team.getGoalsFor()}</td>
								<td>{team.getGoalsAgainst()}</td>
								<td>{team.getGoalDifference()}</td>
							</tr>
						)
					})
				*/}
			</table>
			<button onClick={updateTable}>Update</button>
			<button onClick={resetCompetition}>Reset</button>
		</div>
	)
}