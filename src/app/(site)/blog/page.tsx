import { auth } from '@clerk/nextjs/server'
import BlogEditor from '../../../components/BlogEditor'

export default async function Blog() {
    const { userId } = await auth()

    if (!userId) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                BLOG CONTENT
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <BlogEditor />
        </div>
    )
}
