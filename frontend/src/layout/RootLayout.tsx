import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <header className="mx-auto max-w-7xl ">
                <nav className="flex justify-center gap-10">
                    <h1>
                        <a href="/">Stardew Valley Forage Catalogue</a>
                    </h1>
                    <a href="/about">About</a>
                </nav>
            </header>
            <main className="mx-auto max-w-7xl ">
                <Outlet />
            </main>
            <footer className="mx-auto max-w-7xl ">Footer</footer>
        </div>
    );
};

export default RootLayout;
