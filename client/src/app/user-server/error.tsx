'use client';

import { useEffect } from "react"

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.error("Error in user-server:", error)
    }, [error]);
    return (
        <div className="bg-red-100 text-red-700 p-4 rounded-md shadow-md">
            <h2 className="font-bold">Error:</h2>
            <p>{error.message}</p>
        </div>
    )
}