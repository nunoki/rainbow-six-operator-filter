export enum SIDE {
	defender,
	attacker,
}

export type operator = {
	side: SIDE
	uri: string
	name: string
	pic: string
	icon: string
}
