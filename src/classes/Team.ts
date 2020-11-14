class Team {
	private name: string;
	private wins: number;
	private draws: number;
	private losses: number;
	private goalsFor: number;
	private goalsAgainst: number;

	constructor(name = "FREE WIN") {
		this.name = name;
		this.wins = 0;
		this.draws = 0;
		this.losses = 0;
		this.goalsFor = 0;
		this.goalsAgainst = 0;
	}

	getName(): string {
		return this.name;
	}

	getWins(): number {
		return this.wins;
	}

	getDraws(): number {
		return this.draws;
	}

	getLosses(): number {
		return this.losses;
	}

	getGamesPlayed(): number {
		return this.wins + this.draws + this.losses;
	}

	getGoalsFor(): number {
		return this.goalsFor;
	}

	getGoalsAgainst(): number {
		return this.goalsAgainst;
	}
	
	getGoalDifference(): number {
		return this.goalsFor - this.goalsAgainst;
	}

	getPoints(): number {
		return (this.wins * 3) + this.draws;
	}

	addWin(): void {
		this.wins++;
	}

	addLoss(): void {
		this.losses++;
	}

	addDraw(): void {
		this.draws++;
	}

	addGoalsScoredAndConceded(scored: number, conceded: number): void {
		this.goalsFor += scored;
		this.goalsAgainst += conceded;
	}
}

export default Team;