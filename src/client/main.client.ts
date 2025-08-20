const player: Player = game.GetService("Players").LocalPlayer;
const playerGui: PlayerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const screenGui: ScreenGui = playerGui.WaitForChild("ScreenGui") as ScreenGui;
const button: TextButton = screenGui.WaitForChild("TextButton") as TextButton;
const label: TextLabel = screenGui.WaitForChild("TextLabel") as TextLabel;
const ReplicatedStorage = game.GetService("ReplicatedStorage");
const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;
let counter: number = 0;

button.Activated.Connect(() => {
	counter++;
	label.Text = tostring(counter);
	event.FireServer();
});
