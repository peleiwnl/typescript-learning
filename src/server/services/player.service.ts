import { Players } from "@rbxts/services";
import { ReplicatedStorage } from "@rbxts/services";

function leaderboardSetup(player: Player) {
	const leaderstats = new Instance("Folder");
	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const coins = new Instance("NumberValue");
	coins.Name = "Coins";
	coins.Value = 0;
	coins.Parent = leaderstats;
}

function init() {
	const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;

	event.OnServerEvent.Connect((player: Player) => {
		print(player.Name + "Fired the Server!");
	});

	Players.PlayerAdded.Connect(leaderboardSetup);
}

init();
