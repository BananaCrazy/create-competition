import Match from './Match';
import Team from './Team';

const FAKE_TEAM = new Team();

class Competition {
	private teams: Team[];
	private matches: any[];

	constructor(teams: Team[]) {
		this.teams = teams;
		this.matches = [];
	}

	createMatchups() {
		if (this.teams.length % 2 === 1){
			this.teams.push(FAKE_TEAM);
		}
		
		const teamMatchups: Team[] = this.teams;
		const x: number = teamMatchups.length;

		for (let i = 0; i < x - 1; i++) {
			this.matches[i] = [];
			for (let j = 0; j < x / 2; j++) {
				// this will remove the FREE WIN team from created matchups, remove if you want those matches also to show
				if (teamMatchups[j] !== FAKE_TEAM && teamMatchups[x - 1 - j] !== FAKE_TEAM) { 
					this.matches[i].push([new Match(teamMatchups[j], teamMatchups[x - 1 - j])]);
				}
			}

			teamMatchups.splice(1, 0, teamMatchups.pop()!);
		}
	}

	getLeagueTable(): Team[]{
		const sortedLeague = this.teams.sort((a, b) => {
			if (a.getPoints() > b.getPoints()) return -1;
			if (a.getPoints() < b.getPoints()) return 1;
			return 0;
		})

		return sortedLeague;
	}

	getTeams(): Team[] {
		return this.teams;
	}

	getMatchups(): any[]{
		if (this.matches.length < 1) {
			this.createMatchups();
		}

		return this.matches;
	}
}

export default Competition;