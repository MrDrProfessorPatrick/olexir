'use client'
import { createContext, useState, useContext } from 'react'

const PopupContext = createContext(null)

export function usePopup() {
    const ctx = useContext(PopupContext)
    if (!ctx) throw new Error('usePopup must be inside PopupProvider')
    return ctx
}

export default function PopupProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <PopupContext.Provider
            value={{
                isOpen,
                openPopup: () => setIsOpen(true),
                closePopup: () => setIsOpen(false),
            }}
        >
            {children}
        </PopupContext.Provider>
    )
}
