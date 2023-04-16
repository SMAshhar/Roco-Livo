import Bullet from "@/components/bullets";
import bulletData from "./data/data";
import Start from "@/components/start";
import localFont from '@next/font/local'
import Link from "next/link";
import SlideShow from "@/components/slideshow";

const better = localFont({
  src: [
    {
      path: '../../public/fonts/Magica-BWgl8.ttf',
      weight: '400'
    },
  ],
  variable: '--font-better'

})
const cal = localFont({
  src: [
    {
      path: '../../public/fonts/Calligrapher-JRxaE.ttf',
      weight: '400'
    },
  ],
  variable: '--font-cal'

})

export default function Home() {
  return (
    <div>
      <title>Roco Livo</title>
      <div className="flex w-screen h-screen items-center bg-[url('/lake.jpg')] bg-cover">
        <div className="z-10 w-1/2 justify-center items-center ">
          <div className=" justify-center items-center hover:justify-start hover:items-start mt-20">
            <div className="ml-48 mb-20 transition ease-in duration-700 delay-100">
              <Link href='#'>{Bullet(bulletData[0])}</Link>
            </div>
            <div className="ml-36 mb-20 transition ease-in duration-700 delay-100">
              {Bullet(bulletData[1])}
            </div>
            <div className="ml-32 mb-20 transition ease-in duration-700 delay-150">
              {Bullet(bulletData[2])}
            </div>
            <div className="ml-36 mb-20 transition ease-in duration-700 delay-200">
              {Bullet(bulletData[3])}
            </div>
            <div className="ml-48 mb-20 transition ease-in duration-700 delay-250">
              {Bullet(bulletData[4])}
            </div>
          </div>
        </div>
        <div className="z-0 w-1/2 h-full">
          <div className="flex justify-start items-center h-full z-0 ">
            <h1 className="text-9xl text-white transition ease-in duration-750 delay-250 ">
              <p className={`${cal.variable} font-cal`}>Realize a vacation...!</p>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-20 right-20">
          {/* <p className={`${better.variable} font-better`}> */}
          {Start('Let us begin')}
          {/* </p> */}
        </div>
      </div>
    </div>
  )
}