import model1 from "../../../assets/images/img-styles/modelo-1.png";
import model2 from "../../../assets/images/img-styles/modelo-2.png";
import model3 from "../../../assets/images/img-styles/modelo-3.png";
import model4 from "../../../assets/images/img-styles/modelo-4.png";

export const dressStyles = [
  {
    title: "Casual",
    image: model1,
    classNames: {
      wrapper: "lg:row-span-2 lg:h-full",
      image:
        "bg-size-[200%] bg-position-[30%_41%] -scale-x-100 sm:bg-size-[90%] lg:bg-size-[260%] lg:bg-position-[36%_37%] xl:bg-size-[200%]",
    },
  },
  {
    title: "Formal",
    image: model2,
    classNames: {
      wrapper: "lg:col-span-2 lg:row-span-2 lg:h-full",
      image:
        "bg-size-[210%] bg-position-[-3%_34%] sm:bg-size-[110%] sm:bg-position-[-330%_35%] lg:bg-size-[175%] lg:bg-position-[-12%_25%] xl:bg-size-[130%] xl:bg-position-[-110%_25%]",
    },
  },
  {
    title: "Party",
    image: model3,
    classNames: {
      wrapper: "lg:col-span-2 lg:row-span-2 lg:row-start-3 lg:h-full",
      image:
        "bg-size-[120%] bg-position-[-20%_77%] sm:bg-size-[60%] sm:bg-position-[95%_65%] lg:bg-size-[110%] lg:bg-position-[-80%_47%] xl:bg-size-[80%] xl:bg-position-[170%_47%]",
    },
  },
  {
    title: "Gym",
    image: model4,
    classNames: {
      wrapper: "lg:row-span-2 lg:col-start-3 lg:row-start-3 lg:h-full",
      image:
        "bg-size-[90%] bg-position-[240%_40%] sm:bg-size-[48%] sm:bg-position-[85%_38%] lg:bg-size-[110%] lg:bg-position-[-135%_38%] xl:bg-size-[90%] xl:bg-position-[240%_38%]",
    },
  },
];
