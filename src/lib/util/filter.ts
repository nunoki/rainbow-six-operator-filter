import { operators } from "$lib/data/operators"
import { NONE, type FilterParams, type Operator } from "$lib/data/types"

export function filter(filters: FilterParams): Operator[] {
	let output = operators
	if (filters.hasOwnProperty("side") && filters.side !== NONE) {
		output = output.filter((op) => op.side === filters.side)
	}
	if (filters.hasOwnProperty("gunTypePrimary") && filters.gunTypePrimary !== NONE) {
		output = output.filter(
			(op) => op.gunsPrimary.filter((g) => g.gun.type === filters.gunTypePrimary).length,
		)
	}
	if (filters.hasOwnProperty("gunTypeSecondary") && filters.gunTypeSecondary !== NONE) {
		output = output.filter(
			(op) => op.gunsSecondary.filter((g) => g.gun.type === filters.gunTypeSecondary).length,
		)
	}
	if (filters.hasOwnProperty("gadget") && filters.gadget !== NONE) {
		output = output.filter((op) => op.gadgets.includes(filters.gadget))
	}
	if (filters.hasOwnProperty("scopePrimaryGun") && filters.scopePrimaryGun !== NONE) {
		output = output.filter((op) => {
			// are there guns with the selected scope:
			let guns = op.gunsPrimary.filter((g) => g.maxScope >= filters.scopePrimaryGun)

			// if a gun is also selected, then we want the selected gun to be on the selected
			// scope:
			if (filters.hasOwnProperty("gunTypePrimary") && filters.gunTypePrimary !== NONE) {
				return guns.filter((g) => g.gun.type === filters.gunTypePrimary).length
			}
			return guns.length
		})
	}
	if (filters.hasOwnProperty("scopeSecondaryGun") && filters.scopeSecondaryGun !== NONE) {
		output = output.filter((op) => {
			// are there guns with the selected scope:
			let guns = op.gunsSecondary.filter((g) => g.maxScope >= filters.scopeSecondaryGun)

			// if a gun is also selected, then we want the selected gun to be on the selected
			// scope:
			if (filters.hasOwnProperty("gunTypeSecondary") && filters.gunTypeSecondary !== NONE) {
				return guns.filter((g) => g.gun.type === filters.gunTypeSecondary).length
			}
			return guns.length
		})
	}
	if (filters.hasOwnProperty("speed") && filters.speed !== NONE) {
		output = output.filter((op) => op.speed === filters.speed)
	}
	if (filters.hasOwnProperty("role") && filters.role !== NONE) {
		output = output.filter((op) => op.roles.includes(filters.role))
	}
	return output
}
