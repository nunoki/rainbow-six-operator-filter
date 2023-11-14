import type { operator } from "./types"
import { GUN_TYPE, SIDE, GADGET, SPEED, SCOPE, SPECIALTY } from "./types"

function mpVsSmgNote(smg: string): string {
	return `${smg} is classified as a Machine pistol on Ubisoft's site, so here it counts as both Machine pistol and Submachine gun.`
}

function arVsDmrNote(dmr: string): string {
	return `${dmr} is classified as an Assault rifle on Ubisoft's site, but here it counts as a Marksman rifle because it doesn't have full-auto fire.`
}

export const operators: operator[] = [
	{
		uri: "tubarao",
		specialties: [SPECIALTY.antientry, SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.support, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.breaching],
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
		specialties: [SPECIALTY.intel, SPECIALTY.frontline],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.support],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.support, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.frontline],
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
		specialties: [SPECIALTY.intel, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.support, SPECIALTY.frontline],
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
		specialties: [SPECIALTY.intel, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.breaching],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.intel, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.frontline],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.support],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.breaching],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.support],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.frontline],
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
		specialties: [SPECIALTY.breaching, SPECIALTY.support],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.frontline, SPECIALTY.mapcontrol],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.trapping],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.support],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.support],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.intel, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.intel, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.intel],
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
		specialties: [SPECIALTY.trapping, SPECIALTY.intel],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.trapping, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.intel, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.intel, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.support],
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
		specialties: [SPECIALTY.intel, SPECIALTY.support],
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
		specialties: [SPECIALTY.support],
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
		specialties: [SPECIALTY.support],
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
		specialties: [SPECIALTY.antigadget, SPECIALTY.support],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.antigadget],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.crowdcontrol],
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
		specialties: [SPECIALTY.antientry, SPECIALTY.trapping],
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
		specialties: [],
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
		specialties: [],
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
