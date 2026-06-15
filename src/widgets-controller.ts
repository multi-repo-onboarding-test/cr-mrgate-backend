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
