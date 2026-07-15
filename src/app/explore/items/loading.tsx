const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-coffee">
            <div className="relative flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-full border-4 border-light-cream border-t-accent animate-spin"></div>

                <h2 className="text-base font-firaSans font-medium text-accent tracking-wide">
                    ESSENCIO is Loading...
                </h2>
            </div>
        </div>
    );
};

export default Loading;
