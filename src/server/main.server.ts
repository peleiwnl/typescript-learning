import { ReplicatedStorage } from "@rbxts/services";

function playerEvent() {
	const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;

	event.OnServerEvent.Connect((player: Player) => {
		print(player.Name + "Fired the Server!");
	});
}

playerEvent();
