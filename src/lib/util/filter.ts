import { operators } from "$lib/data/operators"
import { NONE, type FilterParams, type Operator } from "$lib/data/types"

export function filter(filters: FilterParams): Operator[] {
	let output = operators
	if (filters.side !== NONE) {
		output = output.filter((op) => op.side === filters.side)
	}
	if (filters.gunTypePrimary !== NONE) {
		output = output.filter(
			(op) => op.gunsPrimary.filter((g) => g.gun.type === filters.gunTypePrimary).length,
		)
	}
	if (filters.gunTypeSecondary !== NONE) {
		output = output.filter(
			(op) => op.gunsSecondary.filter((g) => g.gun.type === filters.gunTypeSecondary).length,
		)
	}
	if (filters.gadget !== NONE) {
		output = output.filter((op) => op.gadgets.includes(filters.gadget))
	}
	if (filters.scopePrimaryGun !== NONE) {
		output = output.filter((op) => {
			// are there guns with the selected scope:
			let guns = op.gunsPrimary.filter((g) => g.maxScope >= filters.scopePrimaryGun)

			// if a gun is also selected, then we want the selected scope to be on the selected
			// gun:
			if (filters.gunTypePrimary !== NONE) {
				return guns.filter((g) => g.gun.type === filters.gunTypePrimary).length
			}
			return guns.length
		})
	}
	if (filters.scopeSecondaryGun !== NONE) {
		output = output.filter((op) => {
			// are there guns with the selected scope:
			let guns = op.gunsSecondary.filter((g) => g.maxScope >= filters.scopeSecondaryGun)

			// if a gun is also selected, then we want the selected scope to be on the selected
			// gun:
			if (filters.gunTypeSecondary !== NONE) {
				return guns.filter((g) => g.gun.type === filters.gunTypeSecondary).length
			}
			return guns.length
		})
	}
	if (filters.speed !== NONE) {
		output = output.filter((op) => op.speed === filters.speed)
	}
	if (filters.role !== NONE) {
		output = output.filter((op) => op.roles.includes(filters.role))
	}
	return output
}
