import React, { useState } from "react";
import Team from "./classes/Team";
import Competition from "./classes/Competition";
import CompetitionTable from './components/CompetitionTable';
import Matches from './components/Matches';
import "./index.css";

const Page = () => {
	const teamArray: Team[] = [];
	const competitionBegin: Competition = new Competition(teamArray);

	const [inputValue, setInputValue] = useState("");
	const [teams, setTeams] = useState(teamArray);
	const [compStarted, setCompStarted] = useState(false);
	const [competition, setCompetition] = useState(competitionBegin);

	const addTeam = (event: { preventDefault: () => void; }): void => {
		event.preventDefault();
		setTeams([...teams, new Team(inputValue)]);
		setInputValue("");
	}

	const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }): void => {
		setInputValue(event.target.value);
	}

	const startComp = (): void => {
		const competition = new Competition([...teams]);
		setCompStarted(true);
		setCompetition(competition);
	}

	const resetCompetition = (): void => {
		setInputValue("");
		setTeams(teamArray);
		setCompStarted(false);
		setCompetition(competitionBegin);
	}

	return (
		<div>
			{compStarted
				? <>
					<CompetitionTable competition={competition} resetCompetition={resetCompetition} />
					<Matches matches={competition.getMatchups()} />
				</>
				: <>
					<form onSubmit={addTeam}>
						<label>
							Team name
							<input type="text" value={inputValue} onChange={handleChange} required />
						</label>
						<button type="submit">Add Team</button>
						{teams.length > 1 && <button type="button" onClick={startComp}>Start Competition</button>}
					</form>

					<ol className="team-list">
						{
							teams.map((team: Team, index: number) => <li key={index}>{team.getName()}</li>)
						}
					</ol>
				</>
			}
		</div>
	)
	
}

export default Page;