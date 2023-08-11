export default function Layout({children,}: {children: React.ReactNode}) {
    return (
        <main className="flex justify-center items-center flex-col min-h-screen pb-6 mx-auto font-poppins">
            {children}
        </main>
    );
}