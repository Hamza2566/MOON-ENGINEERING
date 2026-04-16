export const metadata = {
    title: 'Moon Engineering Content Studio',
    description: 'Sanity Content Management',
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-full">
            {children}
        </div>
    )
}
