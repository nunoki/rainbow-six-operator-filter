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

export enum SPECIALTY {
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

export type operator = {
	uri: string
	name: string
	side: SIDE
	specialties: SPECIALTY[]
	speed: SPEED
	gunsPrimary: GUN_TYPE[]
	gunsSecondary: GUN_TYPE[]
	gadgets: GADGET[]
	maxScope: SCOPE
	note?: string
	noUbisoftWebsite?: boolean
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
	specialty: number
}

export const NONE = -1
