// Disposable preview fixture. This helper is not wired to an endpoint.
export function widgetPageCount(totalCount: number, pageSize = 25): number {
	if (
		!Number.isInteger(totalCount) ||
		totalCount < 0 ||
		!Number.isInteger(pageSize) ||
		pageSize <= 0
	) {
		throw new RangeError("Expected a non-negative integer count and a positive page size")
	}
	return Math.ceil(totalCount / pageSize)
}
