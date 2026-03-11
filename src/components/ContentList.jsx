import ShoppingItem from "./ShoppingItem";
import { Progress } from "@/components/ui/progress";
import { Field, FieldLabel } from "@/components/ui/field";

function ContentList({
    items,
    togglePacked,
    sortBy,
    setSortBy,
    totalItems,
    removeItem,
    progress,
    editItem
}) {
    return (
        <div className="list">
            <h3>My List</h3>
            <p>Your Shopping list will appear here..</p>
            <Field className="w-full max-w-sm">
                <FieldLabel htmlFor="progress-upload">
                    <span>Upload progress</span>
                    <span className="ml-auto">{progress}%</span>
                </FieldLabel>
                <Progress value={progress} id="progress-upload" />
            </Field>
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
                        editItem={editItem}
                    />
                ))}
            </ul>
            <div className="stats">
                <p>Total items: {totalItems}</p>
            </div>
        </div>
    );
}

export default ContentList;
