const player: Player = game.GetService("Players").LocalPlayer;
const playerGui: PlayerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const screenGui: ScreenGui = playerGui.WaitForChild("ScreenGui") as ScreenGui;
const button: TextButton = screenGui.WaitForChild("TextButton") as TextButton;
const label: TextLabel = screenGui.WaitForChild("TextLabel") as TextLabel;
const ReplicatedStorage = game.GetService("ReplicatedStorage");
const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;

button.Activated.Connect(() => {
	label.Text = "You pressed the button!";
	event.FireServer();
});
