const Players = game.GetService("Players");
const ReplicatedStorage = game.GetService("ReplicatedStorage");
const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;

function leaderboardSetup(player: Player) {
	const leaderstats = new Instance("Folder");
	leaderstats.Name = "leaderstats";
	leaderstats.Parent = player;

	const coins = new Instance("NumberValue");
	coins.Name = "Coins";
	coins.Value = 0;
	coins.Parent = leaderstats;
}

event.OnServerEvent.Connect((player: Player) => {
	print(player.Name + "Fired the Server!");
});

Players.PlayerAdded.Connect(leaderboardSetup);
