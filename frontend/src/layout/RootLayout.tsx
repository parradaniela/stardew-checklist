import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col justify-between mx-auto max-w-7xl">
            <header className="mt-8">
                <nav className="flex justify-center gap-10 w-full">
                    <h1 className="flex items-center">
                        <a href="/" className="p-8 bg-stardew_light_cream border-8 border-stardew_persian_orange text-stardew_dark_brown text-7xl font-stardew ">Stardew Valley Forage Catalogue</a>
                    </h1>
                    <a href="/about" className="font-stardew text-7xl text-stardew_dark_brown bg-stardew_light_cream p-8 border-8 border-stardew_persian_orange">About</a>
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
