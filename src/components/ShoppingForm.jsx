
function ShoppingForm({ onSubmit, inputValue, setInputValue, qtyValue, setQtyValue }) {
  return (
    <form onSubmit={onSubmit} className="shopping-list">
      <h3>What do you need to buy?</h3>
      <input
        type="text"
        placeholder="Add item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qty"
        min={1}
        value={qtyValue}
        onChange={(e) => setQtyValue(parseInt(e.target.value) || 1)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingForm;

