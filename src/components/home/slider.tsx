import { ISlider } from "../../utils/data"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useState } from "react";


type SliderProps = {
    sliders: ISlider[]
}

const Slider = ({sliders}: SliderProps) => {

    const colors: string[] = [
        'bg-[#5B86E5]',
        'bg-[#36D1DC]',
        'bg-[#5B86E5]',
        'bg-[#36D1DC]',
        'bg-[#5B86E5]',
        'bg-[#36D1DC]',
    ]

    const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)])


  return (
      <div className={``}>
        <Swiper
        onSliderMove={(e)=>setColor(colors[Math.floor(Math.random() * colors.length)])}
              pagination={true} modules={[Pagination]}
        >
            {sliders.map((slider: ISlider, index) => (
                <SwiperSlide  key={index} >
                    <div className={`${color}`}>
                        <div className={` px-12 py-4  pt-[12rem]`}>
                            <div className="flex justify-between">
                                <div className="">
                                    <div className="text-5xl font-semibold text-white-primary max-w-4xl">
                                        {slider.text}
                                    </div>

                                    <div className="text-white-primary mt-6 text-xl font-bold">
                                        <div className="flex items-center gap-4">
                                            <span>{slider.cat.toString()}</span>
                                            <div className="w-2 h-2 bg-white-primary rounded-full"></div>
                                            <span>{slider.date.toLocaleDateString('en-US')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <img className="min-w-[15rem] w-[15rem] h-[15rem] min-h-[15rem] object-cover" src={slider.img} alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider