import { useState } from "react";

function ShoppingItem({ item, togglePacked, removeItem, editItem}) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(item.name);
  const [draftQty, setDraftQty] = useState(item.qty);

  const startEdit = () => {
    setDraftName(item.name);
    setDraftQty(item.qty);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qtyNumber = Number(draftQty);
    if( !draftName.trim() || !Number.isFinite(qtyNumber) || qtyNumber <= 0) {
      return;
    }
    editItem(item.id, draftName, draftQty);
    setIsEditing(false);
  }

  return (  
  <li className="shopping-item">
    {!isEditing ? (
      <>
        <div className="shopping-item-main">
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => togglePacked(item.id)}
          />
          <span
            className="shopping-item-text"
            style={{ textDecoration: item.packed ? "line-through" : "none" }}
          >
            {item.name} - Qty: {item.qty}
          </span>
        </div>

        <div className="item-actions">
          <button type="button" className="btn-edit" onClick={startEdit}>
            Edit
          </button>
          <button
            type="button"
            className="btn-remove"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      </>
    ) : (
      <form className="item-edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={draftName}
          onChange={(e) => setDraftName(e.target.value)}
        />
        <input
          type="number"
          min={1}
          value={draftQty}
          onChange={(e) => setDraftQty(e.target.value)}
        />

        <div className="item-actions">
          <button type="submit" className="btn-edit">Save</button>
          <button type="button" className="btn-remove" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </form>
    )}
  </li>
);
}

export default ShoppingItem;