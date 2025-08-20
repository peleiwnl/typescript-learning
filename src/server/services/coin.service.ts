export function generateCoin(): Part {
	const coin = new Instance("Part");
	coin.Size = new Vector3(3, 3, 3);
	coin.Position = new Vector3(math.random(-50, 50), 5, math.random(-50, 50));
	coin.Anchored = true;
	coin.Parent = game.Workspace;

	return coin;
}
