function ShoppingItem({ item, togglePacked, removeItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.name} - Qty: {item.qty}
      </span>
      <button onClick={() => removeItem(item.id)}>
        Remove
        </button>
    </li>
  );
}

export default ShoppingItem;