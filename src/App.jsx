import { useState } from "react";
import { useLocalStorage} from "./hook/useLocalStorage";
import Header from "./components/header";
import ShoppingForm from "./components/ShoppingForm";
import ContentList from "./components/ContentList";


export default function App() {
  const [items, setItems] = useLocalStorage("shoppingItems", []);
  const [inputValue, setInputValue] = useState("");
  const [qtyValue, setQtyValue] = useState(1);
  const [sortBy, setSortBy] = useState("input");

  // Function
  const addItems = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "" || qtyValue <= 0) {
      alert("Please enter a valid item name and quantity greater than 0.");
      return;
    }
    // Buat object item baru
    const newItem = {
      id: Date.now(),
      name: inputValue.trim(),
      qty: parseInt(qtyValue),
      packed: false,
    };
    setItems([...items, newItem]);
    setInputValue("");
    setQtyValue(1);
  };
  const togglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "qty") {
    sortedItems = [...items].sort((a, b) => b.qty - a.qty);
  } else if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => b.packed - a.packed);
  }

  return (
    <div className="app">
      <Header />

      <ShoppingForm
        onSubmit={addItems}
        inputValue={inputValue}
        setInputValue={setInputValue}
        qtyValue={qtyValue}
        setQtyValue={setQtyValue}
      />

      <ContentList
        items={sortedItems}
        togglePacked={togglePacked}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalItems={items.length}
        removeItem={removeItem}
      />
      
    </div>
  );
}
