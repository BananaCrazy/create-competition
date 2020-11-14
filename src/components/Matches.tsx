import React from 'react';
import Competition from '../classes/Competition';
import Match from '../classes/Match';
import EditMatch from '../components/EditMatch';

interface Props {
	matches: any;
}
export default ({ matches }: Props) => {
	return (
		<div key={0} style={{paddingTop: 40}}>
			{
				matches.map((comp: Competition[], index: number) => {
					console.log(index);
					return (
						<div key={index} style={{marginBottom: 20}}>
							<h2>Round {index + 1}</h2>
							{
								comp.map((round: any) => {
									return (
										round.map((match: Match, i: number) => {
											return (
											<div style={{display: "flex", marginBottom: 10}}>
												<div key={i} style={{minWidth: 200}}>{match.homeTeam.getName()} <span style={{fontWeight: 'bold'}}>vs</span> {match.awayTeam.getName()}</div>
												<EditMatch match={match} />

											</div>
											)

										})
									)
								})
							}
						</div>
					)
				})
			}
		</div>
	)
}