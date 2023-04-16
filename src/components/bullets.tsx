

function Bullet(text:string) {

    return (
        <div className="flex w-full">
            <button className="flex rounded-3xl w-12 h-12 hover:w-auto hover:px-4 duration-500 bg-gradient-to-r from-orange-300 to-orange-200 justify-center items-center ">
                <div className="opacity-0 hover:opacity-100  duration-500 transition justify-start items-start">
                    <h1 className="text-[3px] text-orange-300 hover:text-lg font-light hover:text-gray-800 px-6">{text}</h1>
                </div>
            </button>
        </div>
    );
};

export default Bullet;
