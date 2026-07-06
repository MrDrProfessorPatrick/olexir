import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'
import prisma from '../../lib/prisma'

export async function POST(req: NextRequest) {
    try {
        // const { userId } = getAuth(req)
        const userId = true

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id } = body

        if (!id) {
            return NextResponse.json(
                { error: 'Post ID is required' },
                { status: 400 }
            )
        }

        const existingPost = await prisma.post.findUnique({
            where: { id },
        })

        if (!existingPost) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        const post = await prisma.post.update({
            where: { id },
            data: {
                isHidden: !existingPost.isHidden,
            },
        })

        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
