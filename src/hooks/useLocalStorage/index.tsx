import { useState } from "react";

export const useLocalStorage = () => {
    const [value, setValue] = useState('')

    const setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);
        setValue(value);
    }

    const getItem = (key: string) => {
     const value = localStorage.getItem(key)
     return value;
    }

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
        setValue('');
    }

    return { setItem, getItem, removeItem, value}
}