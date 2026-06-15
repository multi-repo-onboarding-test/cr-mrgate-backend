import type { Widget, WidgetRepository } from "./widgets-controller.js"

// Response envelope for the v2 bulk endpoint.
export interface WidgetV2Envelope {
	readonly version: 2
	readonly items: readonly Widget[]
	readonly total: number
}

// Concrete v2 controller. Wires GET /widgets/v2/all.
export class WidgetsV2Controller {
	constructor(private readonly repo: WidgetRepository) {}

	// GET /widgets/v2/all -> returns every widget wrapped in a versioned envelope.
	// Response body: { version: 2, items: Widget[], total: number }
	listAllV2(): WidgetV2Envelope {
		const items = this.repo.findAll()
		return { version: 2, items, total: items.length }
	}
}

// Route registration for the v2 bulk endpoint.
export function registerWidgetsV2Routes(
	router: { get(path: string, handler: () => WidgetV2Envelope): void },
	controller: WidgetsV2Controller,
): void {
	// GET /widgets/v2/all
	router.get("/widgets/v2/all", () => controller.listAllV2())
}
