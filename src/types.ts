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
	mpistol,
	gonne6,
	shield,
}

export enum GADGET {
	// defense:
	impact,
	bpcamera,
	obsblocker,
	dshield,
	barbwire,
	proxalarm,
	nitro,
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

export enum SPEED {
	s1,
	s2,
	s3,
}

export type operator = {
	uri: string
	name: string
	pic: string
	icon: string
	side: SIDE
	speed: SPEED
	gunsPrimary: GUN_TYPE[]
	gunsSecondary: GUN_TYPE[]
	gadgets: GADGET[]
	maxScope: SCOPE
	note?: string
}

export type radioOption = {
	label: string
	secondaryLabel?: string
	value: number
	disabled?: boolean
}

export type filterParams = {
	side: number
	gunTypePrimary: number
	gunTypeSecondary: number
	gadget: number
	scope: number
	speed: number
}

export const NONE = -1
