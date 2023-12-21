import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps{
  bgimg: string;
  title: string;
  subtitle: string;
  joined: string;
}

const CampSite = ({ bgimg, title, subtitle, joined } : CampProps ) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${bgimg} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="h-full flex flex-col justify-between items-start p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image 
              src={'/folded-map.svg'}
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className=" flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{joined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className=" hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[600px] ">
        <CampSite 
          bgimg='bg-bg-img-1'
          title='JourneyJoy Camp'
          subtitle='Prigen, Pasuruan'
          joined='50+ joined'
        />
        <CampSite 
          bgimg="bg-bg-img-2"
          title="Mountain Viewpoint"
          subtitle="Somewhere in the wilderness"
          joined="70+ joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 max-w-[500px] xl:max-w-[735px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl ">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white"><strong>Feeling lost</strong> and not knowing the way?</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Find serenity in nature's embrace at our campsite. Amidst breathtaking landscapes, ignite connections around bonfires, embark on thrilling adventures, and relish starlit skies. Unplug from the mundane and immerse yourself in the untamed wilderness, where each moment crafts enduring memories of exploration and tranquility
          </p>
          <Image 
            src='/quote.svg' 
            alt="quote" 
            width={186} 
            height={220} 
            className="camp-quote" 
          />
        </div>
      </div>
    </section>
  )
}

export default Camp