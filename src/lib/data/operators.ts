import type { Operator } from "./types"
import { GUN_TYPE, SIDE, GADGET, SPEED, SCOPE, ROLE } from "./types"

function mpVsSmgNote(smg: string): string {
	return `${smg} is classified as a Machine pistol on Ubisoft's site, so here it counts as both Machine pistol and Submachine gun.`
}

function arVsDmrNote(dmr: string): string {
	return `${dmr} is classified as an Assault rifle on Ubisoft's site, but here it counts as a Marksman rifle because it doesn't have full-auto fire.`
}

export const operators: Operator[] = [
	{
		uri: "tubarao",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Tubarão",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.nitro, GADGET.proxalarm],
		maxScope: SCOPE.s1_5,
		note: arVsDmrNote("AR-15.50"),
	},
	{
		uri: "ram",
		roles: [ROLE.breaching, ROLE.intel],
		name: "Ram",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg],
		gunsSecondary: [GUN_TYPE.shotgun, GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.stun],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "brava",
		roles: [ROLE.antigadget],
		name: "Brava",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.smoke, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "grim",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Grim",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.hbreach, GADGET.claymore],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "sens",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Sens",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6],
		gadgets: [GADGET.hbreach, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "osa",
		roles: [ROLE.intel, ROLE.support],
		name: "Osa",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.claymore, GADGET.emp],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "flores",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Flores",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.stun, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "zero",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Zero",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6],
		gadgets: [GADGET.hbreach, GADGET.claymore],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "ace",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Ace",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "iana",
		roles: [ROLE.intel, ROLE.frontline],
		name: "Iana",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6],
		gadgets: [GADGET.stun, GADGET.smoke],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "kali",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Kali",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.mpistol, GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s2_5plus,
	},
	{
		uri: "amaru",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Amaru",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.lmg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.gonne6, GUN_TYPE.mpistol, GUN_TYPE.smg, GUN_TYPE.shotgun],
		gadgets: [GADGET.stun, GADGET.hbreach],
		maxScope: SCOPE.s2_5,
		note: mpVsSmgNote("SMG-11"),
	},
	{
		uri: "nokk",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nøkk",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.hbreach, GADGET.grenade, GADGET.emp],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "gridlock",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Gridlock",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg],
		gunsSecondary: [GUN_TYPE.shotgun, GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.emp],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "nomad",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nomad",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.stun],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "maverick",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Maverick",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.stun, GADGET.claymore],
		maxScope: SCOPE.s2_5,
		note: arVsDmrNote("AR-15.50"),
	},
	{
		uri: "lion",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Lion",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.gonne6, GUN_TYPE.pistol],
		gadgets: [GADGET.stun, GADGET.claymore, GADGET.emp],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "finka",
		roles: [ROLE.support, ROLE.frontline],
		name: "Finka",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.grenade],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "dokkaebi",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Dokkaebi",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.dmr, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.gonne6, GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.emp],
		maxScope: SCOPE.s2_5,
		note: mpVsSmgNote("SMG-12"),
	},
	{
		uri: "zofia",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Zofia",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.lmg, GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "ying",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Ying",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.lmg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.hbreach, GADGET.smoke],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "jackal",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Jackal",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.claymore, GADGET.smoke],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "hibana",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Hibana",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol],
		gadgets: [GADGET.stun, GADGET.sbreach],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "capitao",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "CAPITÃO",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6],
		gadgets: [GADGET.claymore, GADGET.hbreach],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "blackbeard",
		roles: [ROLE.support],
		name: "Blackbeard",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.claymore, GADGET.stun, GADGET.emp],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "buck",
		roles: [ROLE.breaching, ROLE.support],
		name: "Buck",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6],
		gadgets: [GADGET.hbreach, GADGET.stun],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "sledge",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Sledge",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.grenade, GADGET.stun, GADGET.emp],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "thatcher",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Thatcher",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "ash",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Ash",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "thermite",
		roles: [ROLE.breaching, ROLE.support],
		name: "Thermite",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.stun],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "montagne",
		roles: [ROLE.intel, ROLE.support],
		name: "Montagne",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.shield],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.hbreach, GADGET.smoke, GADGET.emp],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "twitch",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Twitch",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.dmr, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "blitz",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Blitz",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shield],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.smoke, GADGET.sbreach],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "iq",
		roles: [ROLE.intel, ROLE.support],
		name: "IQ",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.claymore],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "fuze",
		roles: [ROLE.antigadget],
		name: "Fuze",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg, GUN_TYPE.shield],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.sbreach, GADGET.hbreach, GADGET.smoke],
		maxScope: SCOPE.s2_5,
	},
	{
		uri: "glaz",
		roles: [ROLE.intel, ROLE.support],
		name: "Glaz",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.gonne6, GUN_TYPE.mpistol],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.claymore],
		maxScope: SCOPE.s2_5plus,
	},
	{
		uri: "fenrir",
		roles: [ROLE.trapping],
		name: "Fenrir",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.barbwire, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "solis",
		roles: [ROLE.intel, ROLE.support],
		name: "Solis",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.impact, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
		note: mpVsSmgNote("SMG-11"),
	},
	{
		uri: "azami",
		roles: [ROLE.antientry, ROLE.support],
		name: "Azami ",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.impact, GADGET.barbwire],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "thorn",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Thorn",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol],
		gadgets: [GADGET.dshield, GADGET.barbwire],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "thunderbird",
		roles: [ROLE.support],
		name: "Thunderbird",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.mpistol, GUN_TYPE.pistol],
		gadgets: [GADGET.barbwire, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "aruni",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Aruni",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "melusi",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Melusi",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.impact, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "oryx",
		roles: [ROLE.support],
		name: "Oryx",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.barbwire, GADGET.proxalarm],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "wamai",
		roles: [ROLE.antigadget, ROLE.trapping],
		name: "Wamai",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.proxalarm, GADGET.impact],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "goyo",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Goyo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera, GADGET.impact],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "warden",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Warden",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.dshield, GADGET.nitro, GADGET.obsblocker],
		maxScope: SCOPE.s1_5,
		note: mpVsSmgNote("SMG-12"),
	},
	{
		uri: "mozzie",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Mozzie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.barbwire, GADGET.nitro],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "kaid",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Kaid",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.barbwire, GADGET.nitro, GADGET.obsblocker],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "clash",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Clash",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.shield],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.barbwire, GADGET.impact, GADGET.dshield],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "maestro",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Maestro",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.lmg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.barbwire, GADGET.impact, GADGET.obsblocker],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "alibi",
		roles: [ROLE.trapping, ROLE.intel],
		name: "Alibi",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.proxalarm, GADGET.obsblocker],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "vigil",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Vigil",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.bpcamera, GADGET.impact],
		maxScope: SCOPE.s2_5,
		note: mpVsSmgNote("SMG-12"),
	},
	{
		uri: "ela",
		roles: [ROLE.trapping, ROLE.crowdcontrol],
		name: "Ela",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.barbwire, GADGET.dshield, GADGET.obsblocker],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "lesion",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Lesion",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.impact, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "mira",
		roles: [ROLE.intel, ROLE.support],
		name: "Mira",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.proxalarm, GADGET.nitro],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "echo",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Echo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol],
		gadgets: [GADGET.impact, GADGET.dshield],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "caveira",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Caveira",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "valkyrie",
		roles: [ROLE.intel, ROLE.support],
		name: "Valkyrie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.impact, GADGET.nitro],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "frost",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Frost",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.bpcamera, GADGET.dshield],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "mute",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Mute",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.bpcamera, GADGET.nitro],
		maxScope: SCOPE.s1_0,
		note: mpVsSmgNote("SMG-11"),
	},
	{
		uri: "smoke",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Smoke",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol, GUN_TYPE.smg],
		gadgets: [GADGET.proxalarm, GADGET.barbwire],
		maxScope: SCOPE.s1_5,
		note: mpVsSmgNote("SMG-11"),
	},
	{
		uri: "castle",
		roles: [ROLE.antientry, ROLE.support],
		name: "Castle",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.shotgun],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "pulse",
		roles: [ROLE.intel, ROLE.support],
		name: "Pulse",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.dshield, GADGET.obsblocker, GADGET.nitro],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "doc",
		roles: [ROLE.support],
		name: "Doc",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.bailiff],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
		maxScope: SCOPE.s1_5,
	},
	{
		uri: "rook",
		roles: [ROLE.support],
		name: "Rook",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "jager",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Jäger",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.shotgun, GUN_TYPE.rifle],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.obsblocker, GADGET.bpcamera],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "bandit",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Bandit",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.barbwire, GADGET.nitro],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "tachanka",
		roles: [ROLE.antientry, ROLE.crowdcontrol],
		name: "Tachanka",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [GUN_TYPE.lmg, GUN_TYPE.smg],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol],
		gadgets: [GADGET.barbwire, GADGET.proxalarm, GADGET.dshield],
		maxScope: SCOPE.s2_0,
	},
	{
		uri: "kapkan",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Kapkan",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol],
		gadgets: [GADGET.impact, GADGET.nitro],
		maxScope: SCOPE.s1_0,
	},
	{
		uri: "recruit-defense",
		roles: [],
		name: "Recruit",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.smg, GUN_TYPE.shotgun],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.smg],
		gadgets: [
			GADGET.nitro,
			GADGET.bpcamera,
			GADGET.obsblocker,
			GADGET.barbwire,
			GADGET.impact,
			GADGET.proxalarm,
			GADGET.dshield,
		],
		maxScope: SCOPE.s1_0,
		noUbisoftWebsite: true,
	},
	{
		uri: "recruit-attack",
		roles: [],
		name: "Recruit",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [GUN_TYPE.rifle, GUN_TYPE.lmg, GUN_TYPE.dmr],
		gunsSecondary: [GUN_TYPE.pistol, GUN_TYPE.mpistol, GUN_TYPE.shotgun],
		gadgets: [
			GADGET.grenade,
			GADGET.smoke,
			GADGET.hbreach,
			GADGET.emp,
			GADGET.claymore,
			GADGET.stun,
			GADGET.sbreach,
		],
		maxScope: SCOPE.s1_0,
		noUbisoftWebsite: true,
	},
]
