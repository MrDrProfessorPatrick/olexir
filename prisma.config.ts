import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import { defineConfig, env } from 'prisma/config'
import { config } from 'dotenv'
import path from 'path'

config({ path: path.resolve(process.cwd(), '.env.local') })

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: env('DATABASE_URL'),
    },
    migrations: {
        path: 'prisma/migrations',
    },
})
