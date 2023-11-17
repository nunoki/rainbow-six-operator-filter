import { operators } from "$lib/data/operators"
import { NONE, type FilterParams, type Operator } from "$lib/data/types"

export function filter(filters: FilterParams): Operator[] {
	let output = operators
	if (filters.hasOwnProperty("side") && filters.side !== NONE) {
		output = output.filter((op) => op.side === filters.side)
	}
	if (filters.hasOwnProperty("gunTypePrimary") && filters.gunTypePrimary !== NONE) {
		output = output.filter((op) => op.gunsPrimary.includes(filters.gunTypePrimary))
	}
	if (filters.hasOwnProperty("gunTypeSecondary") && filters.gunTypeSecondary !== NONE) {
		output = output.filter((op) => op.gunsSecondary.includes(filters.gunTypeSecondary))
	}
	if (filters.hasOwnProperty("gadget") && filters.gadget !== NONE) {
		output = output.filter((op) => op.gadgets.includes(filters.gadget))
	}
	if (filters.hasOwnProperty("scope") && filters.scope !== NONE) {
		output = output.filter((op) => op.maxScope >= filters.scope)
	}
	if (filters.hasOwnProperty("speed") && filters.speed !== NONE) {
		output = output.filter((op) => op.speed === filters.speed)
	}
	if (filters.hasOwnProperty("role") && filters.role !== NONE) {
		output = output.filter((op) => op.roles.includes(filters.role))
	}
	return output
}
