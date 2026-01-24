import { auth } from '@clerk/nextjs/server'

export default async function Blog() {
    const { userId, sessionStatus } = await auth()

    console.log('USER ID ON ROOT', userId, 'SESSION STATUS', sessionStatus)
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            BLOG
        </div>
    )
}
