import { useRef } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommentCard } from "./components/comment-card";
import "swiper/css";
import { customerComments } from "./constants/customer-comments";

export const OurHappyCustomer = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-5 w-[90%] sm:w-[100%]">
        <div
          className="flex justify-between items-end w-full 
                                sm:w-[90%] sm:m-auto"
        >
          <h1
            className="text-4xl font-black tracking-tighter
                                    lg:text-5xl"
          >
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex gap-4">
            <button
              type="button"
              className="disabled:opacity-50"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <LuArrowLeft className="size-6" />
            </button>
            <button
              type="button"
              className="disabled:opacity-50"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <LuArrowRight className="size-6" />
            </button>
          </div>
        </div>

        <div className="relative flex mt-4">
          <Swiper
            modules={[FreeMode, Autoplay]}
            loop={true}
            onSwiper={(swiper) => {
              console.log(swiper);
              swiperRef.current = swiper;
            }}
            speed={500} // 👈 velocidad de transición (en ms)
            spaceBetween={24}
            centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 3.5,
              },
              1440: {
                slidesPerView: 5.5,
              },
            }}
          >
            {customerComments.map((comment) => (
              <SwiperSlide key={comment.id} className="cursor-pointer">
                <CommentCard {...comment} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Lado izquierdo */}
          <div
            className="absolute left-0 top-0 h-full bg-white/10 backdrop-blur-[2px] backdrop-saturate-200 z-10 pointer-events-none 
                                    sm:w-24
                                    md:w-14
                                    lg:w-20
                                    xl:w-18"
          />

          {/* Lado derecho */}
          <div
            className="absolute right-0 top-0 h-full bg-white/20 backdrop-blur-[2px] backdrop-saturate-200 z-10 pointer-events-none  
                                    sm:w-24
                                    md:w-14
                                    lg:w-20
                                    xl:w-18"
          />
        </div>
      </div>
    </section>
  );
};
