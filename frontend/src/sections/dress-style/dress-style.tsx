import { DressStyleCard } from "./components/dress-style-card";
import { dressStyles } from "./constants/dress-style";

export const DressStyle = () => {
  return (
    <section className="flex justify-center">
      <div
        className="bg-[#F0F0F0] flex flex-col items-center gap-8 w-[90%] p-6 rounded-2xl
                            sm:p-8
                            md:p-10
                            xl:gap-14"
      >
        <h2
          className="text-4xl text-center font-black leading-8 tracking-tighter mt-3
                                lg:text-5xl"
        >
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 gap-5 w-full mb-3 lg:grid-cols-3 lg:grid-rows-4 lg:gap-5 lg:h-[450px] xl:h-[650px] xl:gap-7">
          {dressStyles.map((style) => (
            <DressStyleCard
              key={style.title}
              title={style.title}
              image={style.image}
              classNames={style.classNames}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
