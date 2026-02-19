// components/AddPostButton.tsx
'use client'

import { useState } from 'react'
import { FormToAddPost } from '../components/FormToAddPost' // Імпортуйте вашу форму

export default function AddPostButton() {
    const [isFormShown, setIsFormShown] = useState(false)

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setIsFormShown(!isFormShown)}
                className="bg-blue-500 px-4 py-2 rounded mb-4"
            >
                {isFormShown ? 'Скасувати' : 'Додати новий пост'}
            </button>

            {isFormShown && <FormToAddPost />}
        </div>
    )
}
