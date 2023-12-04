import { guns } from "./guns"
import type { Operator } from "./types"
import { SIDE, GADGET, SPEED, SCOPE, ROLE } from "./types"

function mpVsSmgNote(smg: string): string {
	return `${smg} is classified as a Machine pistol on Ubisoft's site, but here it counts as a Submachine gun.`
}

function arVsDmrNote(dmr: string): string {
	return `${dmr} is classified as an Assault rifle on Ubisoft's site, but here it counts as a Marksman rifle because it doesn't have full-auto fire.`
}

export const operators: Operator[] = [
	/*
	{
		uri: "tubarao",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Tubarão",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			// TODO:
			{ gun: guns.mpx, maxScope: SCOPE.s1_5 },
			{ gun: guns.ar1550, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.nitro, GADGET.proxalarm],
	},
	*/
	{
		uri: "ram",
		roles: [ROLE.breaching, ROLE.intel],
		name: "Ram",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.r4c, maxScope: SCOPE.s2_0 },
			{ gun: guns.lmge, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.mmk19mm, maxScope: SCOPE.s_none },
			{ gun: guns.ita12s, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.smoke, GADGET.stun],
	},
	{
		uri: "brava",
		roles: [ROLE.antigadget],
		name: "Brava",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.camrs, maxScope: SCOPE.s3_0 },
			{ gun: guns.para308, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.supershorty, maxScope: SCOPE.s1_0 },
			{ gun: guns.usp40, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.claymore],
	},
	{
		uri: "grim",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Grim",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns._552commando, maxScope: SCOPE.s2_0 },
			{ gun: guns.sgcqb, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p229, maxScope: SCOPE.s_none },
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.sbreach, GADGET.hbreach, GADGET.claymore],
	},
	{
		uri: "sens",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Sens",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.pof9, maxScope: SCOPE.s2_5 },
			{ gun: guns._417, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns.sdp9mm, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.hbreach, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "osa",
		roles: [ROLE.intel, ROLE.support],
		name: "Osa",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns._556xi, maxScope: SCOPE.s2_5 },
			{ gun: guns.pdw9, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.pmm, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.smoke, GADGET.claymore, GADGET.emp],
	},
	{
		uri: "flores",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Flores",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ar33, maxScope: SCOPE.s2_0 },
			{ gun: guns.sr25, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns.gsh18, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.stun, GADGET.claymore],
	},
	{
		uri: "zero",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Zero",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.sc3000k, maxScope: SCOPE.s2_0 },
			{ gun: guns.mp7, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.hbreach, GADGET.claymore],
	},
	{
		uri: "ace",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Ace",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ak12, maxScope: SCOPE.s1_5 },
			{ gun: guns.m1014, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p9, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "iana",
		roles: [ROLE.intel, ROLE.frontline],
		name: "Iana",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.arx200, maxScope: SCOPE.s1_0 },
			{ gun: guns.g36c, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.mmk19mm, maxScope: SCOPE.s_none },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.stun, GADGET.smoke],
	},
	{
		uri: "kali",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Kali",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.csrx300, maxScope: SCOPE.s3_0plus }, //
		],
		gunsSecondary: [
			{ gun: guns.spsmg9, maxScope: SCOPE.s1_0 },
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none },
			{ gun: guns.c75auto, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "amaru",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Amaru",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.g8a1, maxScope: SCOPE.s2_5 },
			{ gun: guns.supernova, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s, maxScope: SCOPE.s1_0 },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
			{ gun: guns.smg11, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.stun, GADGET.hbreach],
	},
	{
		uri: "nokk",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nøkk",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.fmg9, maxScope: SCOPE.s1_5 },
			{ gun: guns.six12sd, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.d50, maxScope: SCOPE.s_none },
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.hbreach, GADGET.grenade, GADGET.emp],
	},
	{
		uri: "gridlock",
		roles: [ROLE.support, ROLE.mapcontrol],
		name: "Gridlock",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.f90, maxScope: SCOPE.s2_5 },
			{ gun: guns.m249, maxScope: SCOPE.s2_5 },
		],
		gunsSecondary: [
			{ gun: guns.supershorty, maxScope: SCOPE.s1_0 },
			{ gun: guns.sdp9mm, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.emp],
	},
	{
		uri: "nomad",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Nomad",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ak74m, maxScope: SCOPE.s2_5 },
			{ gun: guns.arx200, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.prb92, maxScope: SCOPE.s_none },
			{ gun: guns._44magsemiauto, maxScope: SCOPE.s2_5 },
		],
		gadgets: [GADGET.sbreach, GADGET.stun],
	},
	{
		uri: "maverick",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Maverick",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.m4, maxScope: SCOPE.s2_5 },
			{ gun: guns.ar1550, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns._1911tacops, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.stun, GADGET.claymore],
	},
	{
		uri: "lion",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Lion",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.v308, maxScope: SCOPE.s2_5 },
			{ gun: guns._417, maxScope: SCOPE.s3_0 },
			{ gun: guns.sgcqb, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
			{ gun: guns.p9, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.stun, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "finka",
		roles: [ROLE.support, ROLE.frontline],
		name: "Finka",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.spear308, maxScope: SCOPE.s2_0 },
			{ gun: guns._6p41, maxScope: SCOPE.s2_0 },
			{ gun: guns.sasg12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.pmm, maxScope: SCOPE.s_none },
			{ gun: guns.gsh18, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.grenade],
	},
	{
		uri: "dokkaebi",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Dokkaebi",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.bosg122, maxScope: SCOPE.s2_5 },
			{ gun: guns.mk14ebr, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns.smg12, maxScope: SCOPE.s1_0 },
			{ gun: guns.c75auto, maxScope: SCOPE.s_none },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.stun, GADGET.emp],
	},
	{
		uri: "zofia",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Zofia",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.m762, maxScope: SCOPE.s2_0 },
			{ gun: guns.lmge, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.rg15, maxScope: SCOPE.s1_0 }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "ying",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Ying",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t95lsw, maxScope: SCOPE.s2_5 },
			{ gun: guns.six12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.q929, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.hbreach, GADGET.smoke],
	},
	{
		uri: "jackal",
		roles: [ROLE.intel, ROLE.mapcontrol],
		name: "Jackal",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.c7e, maxScope: SCOPE.s2_0 },
			{ gun: guns.ita12l, maxScope: SCOPE.s1_0 },
			{ gun: guns.pdw9, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s, maxScope: SCOPE.s1_0 },
			{ gun: guns.usp40, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.claymore, GADGET.smoke],
	},
	{
		uri: "hibana",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Hibana",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.supernova, maxScope: SCOPE.s1_0 },
			{ gun: guns.type89, maxScope: SCOPE.s2_5 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9, maxScope: SCOPE.s1_0 },
			{ gun: guns.p229, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.stun, GADGET.sbreach],
	},
	{
		uri: "capitao",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "CAPITÃO",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.para308, maxScope: SCOPE.s2_0 },
			{ gun: guns.m249, maxScope: SCOPE.s2_5 },
		],
		gunsSecondary: [
			{ gun: guns.prb92, maxScope: SCOPE.s_none },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.claymore, GADGET.hbreach],
	},
	{
		uri: "blackbeard",
		roles: [ROLE.support],
		name: "Blackbeard",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mk17cqb, maxScope: SCOPE.s2_0 },
			{ gun: guns.sr25, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns.d50, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.claymore, GADGET.stun, GADGET.emp],
	},
	{
		uri: "buck",
		roles: [ROLE.breaching, ROLE.support],
		name: "Buck",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.c8sfw, maxScope: SCOPE.s1_5 },
			{ gun: guns.camrs, maxScope: SCOPE.s3_0 },
		],
		gunsSecondary: [
			{ gun: guns.mmk19mm, maxScope: SCOPE.s_none },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.hbreach, GADGET.stun],
	},
	{
		uri: "sledge",
		roles: [ROLE.antigadget, ROLE.breaching],
		name: "Sledge",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.l85a2, maxScope: SCOPE.s1_5 },
			{ gun: guns.m590a1, maxScope: SCOPE.s_none },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.grenade, GADGET.stun, GADGET.emp],
	},
	{
		uri: "thatcher",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Thatcher",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.l85a2, maxScope: SCOPE.s2_0 },
			{ gun: guns.ar33, maxScope: SCOPE.s2_5 },
			{ gun: guns.m590a1, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "ash",
		roles: [ROLE.breaching, ROLE.frontline],
		name: "Ash",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.g36c, maxScope: SCOPE.s1_5 },
			{ gun: guns.r4c, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc, maxScope: SCOPE.s_none },
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.sbreach, GADGET.claymore],
	},
	{
		uri: "thermite",
		roles: [ROLE.breaching, ROLE.support],
		name: "Thermite",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._556xi, maxScope: SCOPE.s2_5 },
			{ gun: guns.m1014, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc, maxScope: SCOPE.s_none },
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.stun],
	},
	{
		uri: "montagne",
		roles: [ROLE.intel, ROLE.support],
		name: "Montagne",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.shield, maxScope: SCOPE.s_none }, //
		],
		gunsSecondary: [
			{ gun: guns.p9, maxScope: SCOPE.s_none },
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.hbreach, GADGET.smoke, GADGET.emp],
	},
	{
		uri: "twitch",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Twitch",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.f2, maxScope: SCOPE.s1_5 },
			{ gun: guns._417, maxScope: SCOPE.s3_0 },
			{ gun: guns.sgcqb, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p9, maxScope: SCOPE.s_none },
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.claymore],
	},
	{
		uri: "blitz",
		roles: [ROLE.frontline, ROLE.mapcontrol],
		name: "Blitz",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.shield, maxScope: SCOPE.s_none }, //
		],
		gunsSecondary: [
			{ gun: guns.p12, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.smoke, GADGET.sbreach],
	},
	{
		uri: "iq",
		roles: [ROLE.intel, ROLE.support],
		name: "IQ",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.auga2, maxScope: SCOPE.s2_5 },
			{ gun: guns._552commando, maxScope: SCOPE.s1_5 },
			{ gun: guns.g8a1, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p12, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.sbreach, GADGET.claymore, GADGET.grenade],
	},
	{
		uri: "fuze",
		roles: [ROLE.antigadget],
		name: "Fuze",
		side: SIDE.attack,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.ak12, maxScope: SCOPE.s2_5 },
			{ gun: guns._6p41, maxScope: SCOPE.s2_5 },
			{ gun: guns.shield, maxScope: SCOPE.s_none },
		],
		gunsSecondary: [
			{ gun: guns.pmm, maxScope: SCOPE.s_none },
			{ gun: guns.gsh18, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.sbreach, GADGET.hbreach, GADGET.smoke],
	},
	{
		uri: "glaz",
		roles: [ROLE.intel, ROLE.support],
		name: "Glaz",
		side: SIDE.attack,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.ots03, maxScope: SCOPE.s3_0plus }, //
		],
		gunsSecondary: [
			{ gun: guns.bearing9, maxScope: SCOPE.s1_0 },
			{ gun: guns.gonne6, maxScope: SCOPE.s_none },
			{ gun: guns.pmm, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.smoke, GADGET.grenade, GADGET.claymore],
	},
	{
		uri: "fenrir",
		roles: [ROLE.trapping],
		name: "Fenrir",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mp7, maxScope: SCOPE.s1_0 },
			{ gun: guns.sasg12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.barbwire, GADGET.bpcamera],
	},
	{
		uri: "solis",
		roles: [ROLE.intel, ROLE.support],
		name: "Solis",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.p90, maxScope: SCOPE.s1_0 },
			{ gun: guns.ita12l, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.smg11, maxScope: SCOPE.s1_0 }, //
		],
		gadgets: [GADGET.impact, GADGET.bpcamera],
	},
	{
		uri: "azami",
		roles: [ROLE.antientry, ROLE.support],
		name: "Azami ",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._9x19vsn, maxScope: SCOPE.s1_0 },
			{ gun: guns.acs12, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.d50, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.impact, GADGET.barbwire],
	},
	{
		uri: "thorn",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Thorn",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.uzk50gi, maxScope: SCOPE.s1_5 },
			{ gun: guns.m870, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns._1911tacops, maxScope: SCOPE.s_none },
			{ gun: guns.c75auto, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.dshield, GADGET.barbwire],
	},
	{
		uri: "thunderbird",
		roles: [ROLE.support],
		name: "Thunderbird",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.spear308, maxScope: SCOPE.s1_0 },
			{ gun: guns.spas15, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9, maxScope: SCOPE.s1_0 },
			{ gun: guns.q929, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.barbwire, GADGET.bpcamera],
	},
	{
		uri: "aruni",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Aruni",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.p10roni, maxScope: SCOPE.s1_0 },
			{ gun: guns.mk14ebr, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.prb92, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
	},
	{
		uri: "melusi",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Melusi",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5, maxScope: SCOPE.s1_0 },
			{ gun: guns.super90, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.rg15, maxScope: SCOPE.s1_0 }, //
		],
		gadgets: [GADGET.impact, GADGET.bpcamera],
	},
	{
		uri: "oryx",
		roles: [ROLE.support],
		name: "Oryx",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t5smg, maxScope: SCOPE.s1_0 },
			{ gun: guns.spas12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
			{ gun: guns.usp40, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.barbwire, GADGET.proxalarm],
	},
	{
		uri: "wamai",
		roles: [ROLE.antigadget, ROLE.trapping],
		name: "Wamai",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.auga2, maxScope: SCOPE.s1_0 },
			{ gun: guns.mp5, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.keratos357, maxScope: SCOPE.s_none },
			{ gun: guns.p12, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.proxalarm, GADGET.impact],
	},
	{
		uri: "goyo",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Goyo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.vector45acp, maxScope: SCOPE.s1_5 },
			{ gun: guns.tcsg12, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.p229, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera, GADGET.impact],
	},
	{
		uri: "warden",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Warden",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mpx, maxScope: SCOPE.s1_5 },
			{ gun: guns.m590a1, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.smg12, maxScope: SCOPE.s1_0 },
			{ gun: guns.p10c, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.dshield, GADGET.nitro, GADGET.obsblocker],
	},
	{
		uri: "mozzie",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Mozzie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.p10roni, maxScope: SCOPE.s1_5 },
			{ gun: guns.commando9, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.sdp9mm, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.barbwire, GADGET.nitro],
	},
	{
		uri: "kaid",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Kaid",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.auga3, maxScope: SCOPE.s1_0 },
			{ gun: guns.tcsg12, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns._44magsemiauto, maxScope: SCOPE.s2_5 },
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.barbwire, GADGET.nitro, GADGET.obsblocker],
	},
	{
		uri: "clash",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Clash",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.shield, maxScope: SCOPE.s_none }, //
		],
		gunsSecondary: [
			{ gun: guns.supershorty, maxScope: SCOPE.s1_0 },
			{ gun: guns.spsmg9, maxScope: SCOPE.s1_0 },
			{ gun: guns.p10c, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.barbwire, GADGET.impact, GADGET.dshield],
	},
	{
		uri: "maestro",
		roles: [ROLE.antigadget, ROLE.intel],
		name: "Maestro",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.alda556, maxScope: SCOPE.s1_0 },
			{ gun: guns.acs12, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.keratos357, maxScope: SCOPE.s_none },
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.barbwire, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "alibi",
		roles: [ROLE.trapping, ROLE.intel],
		name: "Alibi",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.mx4storm, maxScope: SCOPE.s1_0 },
			{ gun: guns.acs12, maxScope: SCOPE.s2_0 },
		],
		gunsSecondary: [
			{ gun: guns.keratos357, maxScope: SCOPE.s_none },
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.proxalarm, GADGET.obsblocker],
	},
	{
		uri: "vigil",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Vigil",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.k1a, maxScope: SCOPE.s1_0 },
			{ gun: guns.bosg122, maxScope: SCOPE.s2_5 },
		],
		gunsSecondary: [
			{ gun: guns.smg12, maxScope: SCOPE.s1_0 },
			{ gun: guns.c75auto, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.bpcamera, GADGET.impact],
	},
	{
		uri: "ela",
		roles: [ROLE.trapping, ROLE.crowdcontrol],
		name: "Ela",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.scorpionevo3a1, maxScope: SCOPE.s1_0 },
			{ gun: guns.fo12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.rg15, maxScope: SCOPE.s1_0 }, //
		],
		gadgets: [GADGET.barbwire, GADGET.dshield, GADGET.obsblocker],
	},
	{
		uri: "lesion",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Lesion",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.t5smg, maxScope: SCOPE.s1_0 },
			{ gun: guns.six12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.supershorty, maxScope: SCOPE.s1_0 },
			{ gun: guns.q929, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.impact, GADGET.bpcamera],
	},
	{
		uri: "mira",
		roles: [ROLE.intel, ROLE.support],
		name: "Mira",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.vector45acp, maxScope: SCOPE.s1_0 },
			{ gun: guns.ita12l, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s, maxScope: SCOPE.s1_0 },
			{ gun: guns.usp40, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.proxalarm, GADGET.nitro],
	},
	{
		uri: "echo",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Echo",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mp5sd, maxScope: SCOPE.s1_5 },
			{ gun: guns.supernova, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9, maxScope: SCOPE.s1_0 },
			{ gun: guns.p229, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.impact, GADGET.dshield],
	},
	{
		uri: "caveira",
		roles: [ROLE.intel, ROLE.crowdcontrol],
		name: "Caveira",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.m12, maxScope: SCOPE.s1_0 },
			{ gun: guns.spas12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.luison, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "valkyrie",
		roles: [ROLE.intel, ROLE.support],
		name: "Valkyrie",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.mpx, maxScope: SCOPE.s1_0 },
			{ gun: guns.spas12, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.d50, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.impact, GADGET.nitro],
	},
	{
		uri: "frost",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Frost",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._9mmc1, maxScope: SCOPE.s1_5 },
			{ gun: guns.super90, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.ita12s, maxScope: SCOPE.s1_0 },
			{ gun: guns.mmk19mm, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.bpcamera, GADGET.dshield],
	},
	{
		uri: "mute",
		roles: [ROLE.antigadget, ROLE.crowdcontrol],
		name: "Mute",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5, maxScope: SCOPE.s1_0 },
			{ gun: guns.m590a1, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.smg11, maxScope: SCOPE.s1_0 },
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.bpcamera, GADGET.nitro],
	},
	{
		uri: "smoke",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Smoke",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.m590a1, maxScope: SCOPE.s1_0 },
			{ gun: guns.fmg9, maxScope: SCOPE.s1_5 },
		],
		gunsSecondary: [
			{ gun: guns.smg11, maxScope: SCOPE.s1_0 },
			{ gun: guns.p226mk25, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.proxalarm, GADGET.barbwire],
	},
	{
		uri: "castle",
		roles: [ROLE.antientry, ROLE.support],
		name: "Castle",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.ump45, maxScope: SCOPE.s1_5 },
			{ gun: guns.m1014, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc, maxScope: SCOPE.s_none },
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
			{ gun: guns.supershorty, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.proxalarm, GADGET.bpcamera],
	},
	{
		uri: "pulse",
		roles: [ROLE.intel, ROLE.support],
		name: "Pulse",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.ump45, maxScope: SCOPE.s1_5 },
			{ gun: guns.m1014, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.m45meusoc, maxScope: SCOPE.s_none },
			{ gun: guns._57usg, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.dshield, GADGET.obsblocker, GADGET.nitro],
	},
	{
		uri: "doc",
		roles: [ROLE.support],
		name: "Doc",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5, maxScope: SCOPE.s1_5 },
			{ gun: guns.p90, maxScope: SCOPE.s1_5 },
			{ gun: guns.sgcqb, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p9, maxScope: SCOPE.s_none },
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
			{ gun: guns.bailiff, maxScope: SCOPE.s1_0 },
		],
		gadgets: [GADGET.bpcamera, GADGET.barbwire],
	},
	{
		uri: "rook",
		roles: [ROLE.support],
		name: "Rook",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns.mp5, maxScope: SCOPE.s2_0 },
			{ gun: guns.p90, maxScope: SCOPE.s1_5 },
			{ gun: guns.sgcqb, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p9, maxScope: SCOPE.s_none },
			{ gun: guns.lfp586, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.proxalarm, GADGET.impact, GADGET.obsblocker],
	},
	{
		uri: "jager",
		roles: [ROLE.antigadget, ROLE.support],
		name: "Jäger",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns._416ccarbine, maxScope: SCOPE.s1_0 },
			{ gun: guns.m870, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p12, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.obsblocker, GADGET.bpcamera],
	},
	{
		uri: "bandit",
		roles: [ROLE.antientry, ROLE.antigadget],
		name: "Bandit",
		side: SIDE.defense,
		speed: SPEED.s3,
		gunsPrimary: [
			{ gun: guns.mp7, maxScope: SCOPE.s1_0 },
			{ gun: guns.m870, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.p12, maxScope: SCOPE.s_none }, //
		],
		gadgets: [GADGET.barbwire, GADGET.nitro],
	},
	{
		uri: "tachanka",
		roles: [ROLE.antientry, ROLE.crowdcontrol],
		name: "Tachanka",
		side: SIDE.defense,
		speed: SPEED.s1,
		gunsPrimary: [
			{ gun: guns._9x19vsn, maxScope: SCOPE.s2_0 },
			{ gun: guns.dp27, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.bearing9, maxScope: SCOPE.s1_0 },
			{ gun: guns.gsh18, maxScope: SCOPE.s_none },
			{ gun: guns.pmm, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.barbwire, GADGET.proxalarm, GADGET.dshield],
	},
	{
		uri: "kapkan",
		roles: [ROLE.antientry, ROLE.trapping],
		name: "Kapkan",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.sasg12, maxScope: SCOPE.s1_0 },
			{ gun: guns._9x19vsn, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.pmm, maxScope: SCOPE.s_none },
			{ gun: guns.gsh18, maxScope: SCOPE.s_none },
		],
		gadgets: [GADGET.impact, GADGET.nitro],
	},
	{
		uri: "recruit",
		roles: [],
		name: "Recruit",
		nameNote: "defense",
		side: SIDE.defense,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.m870, maxScope: SCOPE.s1_0 },
			{ gun: guns.mp5k, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.smg11, maxScope: SCOPE.s1_0 },
			{ gun: guns.p9, maxScope: SCOPE.s_none },
		],
		gadgets: [
			GADGET.bpcamera,
			GADGET.obsblocker,
			GADGET.barbwire,
			GADGET.impact,
			GADGET.proxalarm,
			GADGET.dshield,
		],
	},
	{
		uri: "recruit",
		roles: [],
		name: "Recruit",
		nameNote: "attack",
		side: SIDE.attack,
		speed: SPEED.s2,
		gunsPrimary: [
			{ gun: guns.l85a2, maxScope: SCOPE.s1_0 },
			{ gun: guns.mk14ebr, maxScope: SCOPE.s3_0 },
			{ gun: guns.m249, maxScope: SCOPE.s1_0 },
		],
		gunsSecondary: [
			{ gun: guns.c75auto, maxScope: SCOPE.s_none },
			{ gun: guns.supershorty, maxScope: SCOPE.s_none },
			{ gun: guns.p12, maxScope: SCOPE.s_none },
		],
		gadgets: [
			GADGET.smoke,
			GADGET.hbreach,
			GADGET.emp,
			GADGET.claymore,
			GADGET.stun,
			GADGET.sbreach,
		],
	},
]
