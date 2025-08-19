const PlayerService = game.GetService("Players");

PlayerService.PlayerAdded.Connect(function (player) {
	print(player.Name);
});
