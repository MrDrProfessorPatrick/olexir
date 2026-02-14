import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' })
    }

    const { title, imgUrl } = req.body

    try {
        const post = await prisma.post.create({
            data: {
                title,
                imgUrl,
                // blocks не вказуємо, тому масив буде порожнім за замовчуванням
            },
        })

        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create post' })
    }
}
