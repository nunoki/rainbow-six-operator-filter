import { GADGET, GUN_TYPE, ROLE, SCOPE, SIDE } from "./types"

export const sides = {
	[SIDE.defense]: "Defense",
	[SIDE.attack]: "Attack",
}

export const gunTypes = {
	[GUN_TYPE.rifle]: "Assault rifle",
	[GUN_TYPE.smg]: "Submachine gun",
	[GUN_TYPE.dmr]: "Marksman rifle",
	[GUN_TYPE.lmg]: "Light machinegun",
	[GUN_TYPE.shotgun]: "Shotgun",
	[GUN_TYPE.pistol]: "Pistol",
	[GUN_TYPE.mpistol]: "Machine pistol",
	[GUN_TYPE.gonne6]: "Hand cannon",
	[GUN_TYPE.shield]: "Ballistic shield",
	[GUN_TYPE.bailiff]: "Pistol shotgun",
}

export const roles = {
	[ROLE.antientry]: "Anti-entry",
	[ROLE.antigadget]: "Anti-gadget",
	[ROLE.breaching]: "Breaching",
	[ROLE.trapping]: "Trapping",
	[ROLE.intel]: "Intel",
	[ROLE.support]: "Support",
	[ROLE.frontline]: "Frontline",
	[ROLE.mapcontrol]: "Map control",
	[ROLE.crowdcontrol]: "Crowd control",
}

export const gadgets = {
	// defense:
	[GADGET.impact]: "Impact grenade",
	[GADGET.bpcamera]: "Bulletproof camera",
	[GADGET.obsblocker]: "Observation blocker",
	[GADGET.dshield]: "Deployable shield",
	[GADGET.barbwire]: "Barbed wire",
	[GADGET.proxalarm]: "Proximity alarm",
	[GADGET.nitro]: "Nitro cell",
	// attack:
	[GADGET.grenade]: "Frag grenade",
	[GADGET.smoke]: "Smoke grenade",
	[GADGET.stun]: "Stun grenade",
	[GADGET.claymore]: "Claymore",
	[GADGET.sbreach]: "Breach charge",
	[GADGET.hbreach]: "Hard breach charge",
	[GADGET.emp]: "Impact EMP grenade",
}

export const scopes = {
	[SCOPE.s_none]: "None",
	[SCOPE.s1_0]: "1.0x",
	[SCOPE.s1_5]: "1.5x",
	[SCOPE.s2_0]: "2.0x",
	[SCOPE.s2_5]: "2.5x",
	[SCOPE.s3_0]: "3.0x",
	[SCOPE.s3_0plus]: "> 3.0x",
}
