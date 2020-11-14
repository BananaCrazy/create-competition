import React from 'react';
import Team from '../classes/Team';

interface Props {
	team: Team;
}

export default ({ team }: Props) => {
	return (
		<>
			<td className="name-align">{team.getName()}</td>
			<td>{team.getGamesPlayed()}</td>
			<td>{team.getWins()}</td>
			<td>{team.getDraws()}</td>
			<td>{team.getLosses()}</td>
			<td>{team.getPoints()}</td>
			<td>{team.getGoalsFor()}</td>
			<td>{team.getGoalsAgainst()}</td>
			<td>{team.getGoalDifference()}</td>
		</>
	)
};