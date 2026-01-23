import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <SignedOut>
                <SignIn
                    afterSignInUrl="/admin"
                    appearance={{
                        variables: {
                            colorBackground: '#ffffff',
                            colorPrimary: '#6c47ff',
                        },
                    }}
                />
            </SignedOut>

            <SignedIn>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p>Manage website content here</p>
            </SignedIn>
        </div>
    )
}
