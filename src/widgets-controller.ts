// Widgets API controller.
export class WidgetsController {
	// GET /widgets - list all widgets (v1)
	listWidgets(): Widget[] {
		return this.repo.findAll()
	}

	// GET /widgets/:id - fetch a single widget by id
	getWidget(id: string): Widget | undefined {
		return this.repo.findById(id)
	}

	constructor(private readonly repo: WidgetRepository) {}
}

export interface Widget {
	readonly id: string
	readonly name: string
}

export interface WidgetRepository {
	findAll(): Widget[]
	findById(id: string): Widget | undefined
}

// --- v2 additions ---
export interface WidgetsV2Controller {
	// GET /widgets/v2/all - returns every widget with v2 envelope metadata.
	listAllV2(): WidgetV2Envelope
}

export interface WidgetV2Envelope {
	readonly version: 2
	readonly items: readonly Widget[]
	readonly total: number
}
