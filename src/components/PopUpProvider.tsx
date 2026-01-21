'use client'
import { createContext, useState, useContext } from 'react'

interface PopupProviderProps {
    children: React.ReactNode
}

type PopupContextType = {
    isOpen: boolean
    openPopup: () => void
    closePopup: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function usePopup() {
    const ctx = useContext(PopupContext)
    if (!ctx) throw new Error('usePopup must be inside PopupProvider')
    return ctx
}

export default function PopupProvider({ children }: PopupProviderProps) {
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
