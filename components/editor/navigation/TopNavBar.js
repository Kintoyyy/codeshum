import ThemeToggle from "@/components/editor/navigation/ThemeToggle";

const TopNavBar = () => {
    return (
        <nav className="p-2 border shadow-sm">
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="text-2xl font-bold">Code Shum v2</h1>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default TopNavBar;
