import { useState } from "react";

export default function useAccordion() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        toggleFaq
    }
}