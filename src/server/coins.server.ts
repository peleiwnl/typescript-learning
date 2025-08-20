import { generateCoin } from "./services/coin.service";
import { setupLeaderboard } from "./services/player.service";
import { Players } from "@rbxts/services";

setupLeaderboard();
const coin = generateCoin();

coin.Touched.Once((hit) => {
	const character = hit.Parent;
	const player = Players.GetPlayerFromCharacter(character);

	if (player) {
		const playerStats = player.FindFirstChild("leaderstats");
		const playerCoins = playerStats?.FindFirstChild("Coins") as NumberValue;

		if (playerCoins) {
			playerCoins.Value += 1;
			print(player.Name + " Now has " + playerCoins.Value + " coins!");
			coin.Destroy();
		}
	}
});
