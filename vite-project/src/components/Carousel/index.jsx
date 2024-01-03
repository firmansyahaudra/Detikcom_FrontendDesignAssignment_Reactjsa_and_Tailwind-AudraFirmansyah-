import React, { useState } from "react";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from "react-icons/io"

const Carousel = ({slides}) => {
        const [current, setCurrent] = useState(0);
        
        const previousSlide = () => {
            if(current === 0) setCurrent(slides.length - 1);
            else setCurrent(current - 1);
        };

        const nextSlide = () => {
            if(current === slides.length - 1) setCurrent(0);
            else setCurrent(current + 1);
        };

        const filteredSlides = slides.filter(slide => slide);

    return (
        <div className="flex flex-col " style={{width: '1058px', height: '772px'}}>
        <div className="overflow-hidden relative"  style={{width: '1057px', height: '604px'}}>
            <div className={`flex transition ease-out duration-400 `}
            style={{
                transform: `translateX(-${current * 100}%)`,
            }}
            >
                {slides.map((s) => {
                    return <img src={s} />
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-12 text-7xl">
                <button onClick={previousSlide}>
                    <IoIosArrowDropleftCircle/>
                </button>
                <button onClick={nextSlide}>
                    <IoIosArrowDroprightCircle/>
                </button>
            </div>
        </div>
            <div className=" py-4 flex justify-center gap-3" style={{width: '1057', height: '168px'}}>
                {filteredSlides.map((s, i) => (
                    <img
                    style={{width: '254px', height: '145px', borderRadius: '16px'}}
                        key={`circle${i}`}
                        className={`${i === current ? "color-white" : "color-gray-300"
                            } cursor-pointer`}
                        src={s}
                        alt={`thumbnail-${i}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    )
};

export default Carousel;