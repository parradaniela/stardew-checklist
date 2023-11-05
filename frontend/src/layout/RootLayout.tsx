import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="mx-auto min-h-screen max-w-7xl">
            <header>
                <nav className="flex justify-center gap-10">
                    <h1>
                        <a href="/">Stardew Valley Forage Catalogue</a>
                    </h1>
                    <a href="/about">About</a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default RootLayout;
