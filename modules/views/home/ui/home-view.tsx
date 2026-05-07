"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import  { useRouter } from "next/navigation";

export default function HomeView() {
    const { data: session } = authClient.useSession();
    const router=useRouter();

    if (!session) {
        return <p>Loading...</p>
    }

    return (
        <div className="flex flex-col p-4 gap-y-4">
            <h1>Welcome, {session.user.name}!</h1>
            <p>Email: {session.user.email}</p>
            <Button onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => router.push("/login") } })}>
                Sign Out
            </Button>
        </div>
    );
}
