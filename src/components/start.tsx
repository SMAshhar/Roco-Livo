function Start(text:string) {

    return (
        <div className="flex w-full">
            <button className="flex rounded-full w-40 h-40 animate-bounce duration-1000 bg-gradient-to-r from-orange-400 to-orange-200 justify-center items-center ">
                <div className="duration-500 transition justify-start items-start">
                    <h1 className="text-xl font-light hover:text-gray-800 px-6">{text}</h1>
                </div>
            </button>
        </div>
    );
};

export default Start;