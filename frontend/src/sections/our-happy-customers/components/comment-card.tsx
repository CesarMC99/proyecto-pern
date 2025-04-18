import { useId } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";

interface CommentCardProps {
  name: string;
  comment: string;
  rating: number;
}

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const uuid = useId();
  return (
    <>
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => {
          const key = `${uuid}-${index}`;

          if (index < Math.floor(rating)) {
            return (
              <MdOutlineStar key={key} className="text-yellow-400 size-5" />
            );
          }
          if (index < Math.round(rating)) {
            return (
              <MdOutlineStarHalf key={key} className="text-yellow-400 size-5" />
            );
          }
          return <MdOutlineStar key={key} className="text-black/30 size-5" />;
        })}
      </div>
    </>
  );
};

export const CommentCard = ({ name, comment, rating }: CommentCardProps) => {
  return (
    <li className="border border-black/10 rounded-2xl p-5 h-full">
      <article className="flex flex-col gap-1">
        <StarRating rating={rating} />
        <h1 className="flex items-center gap-2 text-lg font-bold">
          {name}
          <span>
            <GoCheckCircleFill className="text-green-600 size-4" />
          </span>
        </h1>
        <blockquote className="text-sm text-black/60">"{comment}"</blockquote>
      </article>
    </li>
  );
};
