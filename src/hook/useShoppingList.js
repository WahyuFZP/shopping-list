import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useShoppingList() {
    const [items, setItems] = useLocalStorage("shoppingItems", []);
    const [inputValue, setInputValue] = useState("");
    const [qtyValue, setQtyValue] = useState(1);
    const [sortBy, setSortBy] = useState("input");
    const packedCount = items.filter((item) => item.packed).length;
    const progress = items.length === 0 ? 0 : Math.round((packedCount / items.length) * 100);

    const addItems = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "" || qtyValue <= 0) {
            alert("Please enter a valid item name and quantity greater than 0.");
            return;
        }
        // Create new item object
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
            )
        );
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const editItem = (id, newName, newQty) => {
        const qtyNumber = Number(newQty);
        setItems(items.map((item) => item.id === id ? { ...item, name: newName, qty: qtyNumber } : item));
    };

    let sortedItems;
    if (sortBy === "input") {
        sortedItems = items;
    } else if (sortBy === "name") {
        sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "qty") {
        sortedItems = [...items].sort((a, b) => b.qty - a.qty);
    } else if (sortBy === "packed") {
        sortedItems = [...items].sort((a, b) => a.packed - b.packed);
    }

    return {
        sortedItems,
        inputValue,
        setInputValue,
        qtyValue,
        setQtyValue,
        sortBy,
        setSortBy,
        packedCount,
        progress,
        addItems,
        togglePacked,
        removeItem,
        editItem,
    };
}

