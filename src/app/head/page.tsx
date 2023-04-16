import SlideShow from "@/components/slideshow";

function BulletPoint({ text }: any) {

  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen justify-center items-center bg-white">
      {/* <div className="flex w-1/2">
        <button className="flex rounded-full w-8 h-8 hover:w-auto hover:px-4 duration-1000 bg-gray-500 justify-center items-center ">
         <p className="opacity-0 hover:opacity-100 transition">Something awefully successful</p> 
        </button>
      </div> */}
      <SlideShow />

    </div>
  );
};

export default BulletPoint;
