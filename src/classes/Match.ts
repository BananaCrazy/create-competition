import Team from './Team';

class Match {
	readonly homeTeam: Team;
	readonly awayTeam: Team;
	private submitted: boolean;

	constructor(homeTeam: Team, awayTeam: Team){
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.submitted = false;
	}

	insertResult(homeScore: number, awayScore: number): void {
		if (this.submitted) return;
		
		if (homeScore > awayScore) {
			this.homeTeam.addWin();
			this.awayTeam.addLoss();
		} else if (homeScore < awayScore) {
			this.homeTeam.addLoss();
			this.awayTeam.addWin();
		} else {
			this.homeTeam.addDraw();
			this.awayTeam.addDraw();
		}

		this.homeTeam.addGoalsScoredAndConceded(homeScore, awayScore);
		this.awayTeam.addGoalsScoredAndConceded(awayScore, homeScore);
		this.submitted = true;
	}
}

export default Match;