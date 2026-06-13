import prisma from '../../lib/prisma'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { BlockType } from '@/generated/prisma/enums'

export async function POST(req: NextRequest) {
    try {
        // const { userId } = getAuth(req)
        const userId = true

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { postid, title, text, type } = body

        if (!title || !text || !type) {
            return NextResponse.json(
                { error: 'Title text and type is required' },
                { status: 400 }
            )
        }

        let blockType: BlockType = 'TEXT'

        if (type === 'text') blockType = 'TEXT'
        if (type === 'image') blockType = 'IMAGE'
        if (type === 'video') blockType = 'VIDEO'
        if (type === 'carusel') blockType = 'CARUSEL'

        const newBlock = await prisma.postBlock.create({
            data: {
                postId: postid,
                type: blockType,
                title: title,
                text: text,
            },
        })
        return NextResponse.json(newBlock, { status: 201 })
    } catch (error) {
        console.error('API Error in addpostblock:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
