let APIKEY = "1a80ca6f-5bde-4b0b-973b-8ed99d817801";
const fetch = require("node-fetch");

async function getUUID(player) {
	const json = await fetch(
		`https://api.mojang.com/users/profiles/minecraft/${player}`
	).then((r) => r.json());
	console.log(json.name);
	console.log(json.id);
	return json.id;
}
async function getStats(player) {
	const json = await fetch(
		`https://api.hypixel.net/player?key=${APIKEY}&uuid=${await getUUID(player)}`
	).then((r) => r.json());
	console.log(json.success);
	const finalDeaths = json.player.stats.Bedwars.final_deaths_bedwars;
	const finalKills = json.player.stats.Bedwars.final_kills_bedwars;
	const FKDR = finalKills / finalDeaths;
	console.log(Number.parseFloat(FKDR).toFixed(2));
}

getStats("Inqz");
