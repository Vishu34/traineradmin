import { useEffect, useState } from "react";

// Custom React hook for debouncing a value
const useDebounce = (value, delay) => {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect to set up the debouncing logic
    useEffect(() => {
        // Set up a timeout to update the debounced value after the specified delay
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout if the value or delay changes before the timeout
        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);

    // Return the debounced value
    return debouncedValue;
};

// Export the useDebounce hook
export { useDebounce };
