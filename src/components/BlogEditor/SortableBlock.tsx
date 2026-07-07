'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import type { ReactNode } from 'react'

interface SortableBlockProps {
    id: string
    children: ReactNode
}

export function SortableBlock({ id, children }: SortableBlockProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        position: 'relative' as const,
    }

    return (
        <div ref={setNodeRef} style={style}>
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 z-10 pr-1"
                {...attributes}
                {...listeners}
                aria-label="Drag to reorder"
            >
                <GripVertical size={20} />
            </button>
            {children}
        </div>
    )
}
