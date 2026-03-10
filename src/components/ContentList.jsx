import ShoppingItem from "./ShoppingItem";

function ContentList({
    items,
    togglePacked,
    sortBy,
    setSortBy,
    totalItems,
    removeItem
}) {
    return (
        <div className="list">
            <h3>My List</h3>
            <p>Your Shopping list will appear here..</p>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="name">Sort by name</option>
                    <option value="packed">Sort by packed status</option>
                </select>

            <ul>
                {items.map((item) => (
                    <ShoppingItem
                        key={item.id}
                        item={item}
                        togglePacked={togglePacked}
                        removeItem={removeItem}
                    />
                ))}
            </ul>
            <div className="stats">
        <p>Total items: {totalItems}</p>
        </div>
    </div>
    )
}

export default ContentList