interface DressStyleCardProps {
  title: string;
  image: string;
  classNames: {
    wrapper: string;
    image: string;
  };
}

export const DressStyleCard = ({
  title,
  image,
  classNames,
}: DressStyleCardProps) => {
  return (
    <article
      className={`relative bg-white rounded-2xl overflow-hidden w-full h-[190px] ${classNames.wrapper} cursor-pointer shadow-lg
                        transition hover:scale-[1.02] duration-500 hover:shadow-xl`}
    >
      <div
        className={`w-full h-full bg-no-repeat transform ${classNames.image}`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`${title} outfit style`}
      />
      <h3
        className="absolute text-2xl top-4 left-6 font-semibold 
                  lg:text-3xl"
      >
        {title}
      </h3>
    </article>
  );
};
