export default function Layout({children,}: {children: React.ReactNode}) {
    return (
        <main className="flex justify-center items-center flex-col pb-6 font-poppins">
            {children}
        </main>
    );
}