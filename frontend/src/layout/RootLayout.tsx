import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col gap-8 mx-auto max-w-7xl">
            <header className="mt-8">
                <nav className="flex justify-center gap-10 w-full">
                    <h1 className="flex items-center">
                        <a href="/" className="p-6 bg-stardew_light_cream border-8 border-stardew_persian_orange text-stardew_dark_brown text-6xl font-stardew ">Stardew Valley Forage Catalogue</a>
                    </h1>
                    <a href="/about" className="font-stardew text-6xl text-stardew_dark_brown bg-stardew_light_cream p-6 border-8 border-stardew_persian_orange">About</a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
