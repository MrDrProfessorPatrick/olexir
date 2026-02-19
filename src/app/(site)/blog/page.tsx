import { useState } from 'react'

import { auth } from '@clerk/nextjs/server'
import AddPostButton from '../../../components/AddPostButton'

export default async function Blog() {
    const { userId } = await auth()
    console.log('User ID:', userId)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                {userId && <AddPostButton />}
                <div className="flex">BLOG CONTENT</div>
            </div>
        </>
    )
}
