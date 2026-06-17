import prisma from '../../lib/prisma'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { BlockType } from '@/generated/prisma/enums'

export async function POST(req: NextRequest) {
    try {
        const userId = true

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id, title, text, type, imageUrl } = body

        if (!id) {
            return NextResponse.json(
                { error: 'Block ID is required' },
                { status: 400 }
            )
        }

        let blockType: BlockType = 'TEXT'

        if (type === 'text') blockType = 'TEXT'
        if (type === 'image') blockType = 'IMAGE'
        if (type === 'video') blockType = 'VIDEO'
        if (type === 'carusel') blockType = 'CARUSEL'

        const updatedBlock = await prisma.postBlock.update({
            where: { id },
            data: {
                type: blockType,
                ...(title !== undefined && { title }),
                ...(text !== undefined && { text }),
                ...(imageUrl !== undefined && { imageUrl }),
            },
        })

        return NextResponse.json(updatedBlock, { status: 200 })
    } catch (error) {
        console.error('API Error in changepostblock:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
