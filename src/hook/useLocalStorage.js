import {useState, useEffect} from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(()=> {
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue)); 
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}