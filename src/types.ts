export enum SIDE {
	defender,
	attacker,
}

export enum GUN_TYPE {
	rifle,
	smg,
	dmr,
	lmg,
	shotgun,
	pistol,
}

export enum GADGET {
	// defense:
	impact,
	bpcamera,
	obsblocker,
	dshield,
	barbwire,
	// attack:
	grenade,
	smoke,
	stun,
	claymore,
	sbreach,
	hbreach,
}

export enum SCOPE {
	s1_0,
	s1_5,
	s2_0,
	s2_5,
}

export type operator = {
	side: SIDE
	uri: string
	name: string
	pic: string
	icon: string
}

export type radioOption = {
	label: string
	value: number
}

export type filterParams = {
	side: number
	gunTypePrimary: number
	gunTypeSecondary: number
	gadget: number
	scope: number
}

export const NONE = -1
