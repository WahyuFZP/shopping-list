
function ShoppingForm({ onSubmit, inputValue, setInputValue, qtyValue, setQtyValue }) {
  return (
    <form onSubmit={onSubmit} className="shopping-form">
      <h3>What do you need to buy?</h3>
      <div className="shopping-form-row">
        <div className="shopping-form-field">
          <label htmlFor="item-name">Item name</label>
          <input
            id="item-name"
            type="text"
            placeholder="Add item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="shopping-form-field shopping-form-field-qty">
          <label htmlFor="item-qty">Qty</label>
          <input
            id="item-qty"
            type="number"
            min={1}
            value={qtyValue}
            onChange={(e) => setQtyValue(parseInt(e.target.value) || 0)}
          />
        </div>

        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default ShoppingForm;

