// lib/prisma.ts (or wherever your client is instantiated)
import { PrismaClient } from '../../generated/prisma/client' // Import from default location
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// Make the Prisma client a singleton
const prismaClientSingleton = () => new PrismaClient({ adapter })

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
