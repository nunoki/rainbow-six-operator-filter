export enum SIDE {
	defense,
	attack,
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
	bailiff,
}

export enum ROLE {
	antientry,
	antigadget,
	breaching,
	trapping,
	intel,
	support,
	frontline,
	mapcontrol,
	crowdcontrol,
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
	emp,
}

export enum SCOPE {
	s1_0,
	s1_5,
	s2_0,
	s2_5,
	s2_5plus,
}

export enum SPEED {
	s1,
	s2,
	s3,
}

export type Operator = {
	uri: string
	name: string
	side: SIDE
	roles: ROLE[]
	speed: SPEED
	gunsPrimary: GUN_TYPE[]
	gunsSecondary: GUN_TYPE[]
	gadgets: GADGET[]
	maxScope: SCOPE
	note?: string
	noUbisoftWebsite?: boolean
}

export type RadioOption = {
	label: string
	secondaryLabel?: string
	value: number
	disabled?: boolean
}

export type FilterParams = {
	side: number
	gunTypePrimary: number
	gunTypeSecondary: number
	gadget: number
	scope: number
	speed: number
	role: number
}

export type Link = {
	url: string
	domain: string
}

export const NONE = -1
