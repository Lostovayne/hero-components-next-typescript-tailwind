const Header = () => {
    return (
        <header className="fixed left-0 top-0 w-full p-5 flex items-center justify-between z-50">
            <h1 className="font-semibold text-xl text-white">travel.</h1>
            <button type="button" className="relative">
                <span className="absolute w-10 h-1 bg-white -left-10 top-0" />
                <span className="absolute w-10 h-1 bg-white -left-10 top-3" />
            </button>
        </header>
    );
};
export default Header;
