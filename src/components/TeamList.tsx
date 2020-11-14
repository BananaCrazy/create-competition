import React from 'react';
import Team from '../classes/Team';
import TeamCard from './TeamCard';

interface Props {
	leagueTable: Team[];
}

export default ({ leagueTable } : Props) => {
	return (
		<tbody>
			{
				leagueTable.map((team: Team, index: number) => {
					return (
						<tr key={index}>
							<td>{index + 1}.</td>
							<TeamCard team={team} />
						</tr>
					)
				})
			}
		</tbody>
	)
};