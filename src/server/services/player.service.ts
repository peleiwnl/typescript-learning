import { Players } from "@rbxts/services";

export function setupLeaderboard() {
	Players.PlayerAdded.Connect((player) => {
		const leaderstats = new Instance("Folder");
		leaderstats.Name = "leaderstats";
		leaderstats.Parent = player;

		const coins = new Instance("NumberValue");
		coins.Name = "Coins";
		coins.Value = 0;
		coins.Parent = leaderstats;
	});
}
