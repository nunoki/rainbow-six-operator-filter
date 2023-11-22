import type { Operator } from "$lib/data/types"

export function gunNotes(operator: Operator): string[] | null {
	let guns = operator.gunsPrimary.filter((g) => g.gun.note !== undefined)
	guns = guns.concat(operator.gunsSecondary.filter((g) => g.gun.note !== undefined))

	if (!guns.length) {
		return null
	}

	// @ts-ignore
	return guns.map((g) => `${g.gun.name} - ${g.gun.note}`)
}
