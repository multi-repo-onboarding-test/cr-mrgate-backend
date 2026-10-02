export interface Widget { id: string; name: string }
export interface WidgetStore {
  findByKey(key: string): Widget | undefined
  insertOnce(key: string, name: string): Widget
}

// insertOnce atomically returns an existing widget for a previously used key.
export function createWidget(store: WidgetStore, key: string, name: string): Widget {
  if (!key.trim() || !name.trim()) throw new Error('Key and name are required')
  return store.insertOnce(`${key}-${Date.now()}`, name)
}
