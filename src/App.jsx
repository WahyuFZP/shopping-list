import { useState } from 'react'
export default function App() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [qtyValue, setQtyValue] = useState(0)

// Function 
const addItems = (e) =>{
  e.preventDefault()
  if(inputValue.trim() === '' || qtyValue <= 0) {
    alert('Please enter a valid item name and quantity greater than 0.')
    return
  }
  // Buat object item baru
  const newItem = {
    id: Date.now(),
    name: inputValue.trim(),
    qty: parseInt(qtyValue),
    packed: false
  }
  setItems([...items, newItem])
  setInputValue('')
  setQtyValue(0)
}

  return (
    <div className="app">
      <h1>My Shopping List</h1>

      <form action="" onSubmit={addItems} className='shopping-list'>
        <h3>What do you need to buy?</h3>
        <input type="text" placeholder='Add item' 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        />
        <input type="number" placeholder='Qty' min={0} defaultValue={0} 
        value={qtyValue} 
        onChange={(e) => setQtyValue(parseInt(e.target.value) || 0)} 
        />
        <button type='submit'>Add Item</button>
      </form>
      <div className="list">
        <h3>My List</h3>
        <p>Your Shopping list will appear here..</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Qty: {item.qty}
            </li>
          ))}
        </ul>
        <div className="stats">
          <p>Total items: {items.length}</p>
        </div>
      </div>
    </div>
  )
}


