'use client'

import { useState } from 'react'
import { FormToAddPost } from '../components/FormToAddPost'

export default function AddPostButton() {
    const [isFormShown, setIsFormShown] = useState(false)

    return (
        <div className="flex flex-col items-center">
            {!isFormShown && (
                <button
                    onClick={() => setIsFormShown(!isFormShown)}
                    className="bg-blue-500 px-4 py-2 rounded mb-4"
                >
                    Додати Пост
                </button>
            )}

            {isFormShown && <FormToAddPost setIsFormShown={setIsFormShown} />}
        </div>
    )
}
