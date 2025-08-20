import { Players } from "@rbxts/services";
import { ReplicatedStorage } from "@rbxts/services";

const player = Players.LocalPlayer;
const playerGui: PlayerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const screenGui: ScreenGui = playerGui.WaitForChild("ScreenGui") as ScreenGui;
const button: TextButton = screenGui.WaitForChild("TextButton") as TextButton;
const label: TextLabel = screenGui.WaitForChild("TextLabel") as TextLabel;
const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;
const character = player.Character as Model;
const hRP = character.WaitForChild("HumanoidRootPart") as Part;
const teleportButton: TextButton = screenGui.WaitForChild("TeleportButton") as TextButton;

let counter: number = 0;

button.Activated.Connect(() => {
	counter++;
	label.Text = tostring(counter);
	event.FireServer();
});

teleportButton.Activated.Connect(() => {
	print("Got here");
	hRP.CFrame = new CFrame(0, 5, 0);
});
