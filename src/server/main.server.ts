const ReplicatedStorage = game.GetService("ReplicatedStorage");
const event = ReplicatedStorage.WaitForChild("RemoteEvent") as RemoteEvent;

event.OnServerEvent.Connect((plr) => {
	print(plr.Name + "Fired the Server!");
});
