import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-2 lg:gap-8">
            <header className="mt-2 lg:mt-8">
                <nav className="flex w-full justify-center gap-2 lg:gap-10">
                    <h1 className="flex justify-center items-center">
                        <a
                            href="/"
                            className="border-8 border-stardew_persian_orange bg-stardew_light_cream p-6 font-stardew text-4xl md:text-4xl lg:text-6xl text-stardew_dark_brown "
                        >
                            Stardew Valley Forage Catalogue
                        </a>
                    </h1>
                    <a
                        href="/about"
                        className="flex justify-center items-center border-8 border-stardew_persian_orange bg-stardew_light_cream p-6 font-stardew text-3xl md:text-4xl lg:text-6xl text-stardew_dark_brown"
                    >
                        About
                    </a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
