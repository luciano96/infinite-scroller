import { FC } from "react";
import useHover from "../../hooks/useHover";
import { PropTypes } from "./Item.types";
import classNames from "classnames";

export const Item: FC<PropTypes> = ({
  id,
  label,
  onClick,
  equipment,
  absIndex,
  clicked = false,
}) => {
  const clickItem = () => {
    onClick(absIndex, clicked);
  };
  const { onHoverProps, hovering } = useHover(500);

  return (
    <div
      className={`m-2xl h-40 w-80 max-h-[12rem] max-w-80 box-border flex flex-col items-center  rounded-2xl border border-solid border-cardBackground cursor-pointer transition-background-color`}
      data-testid={label}
      id={id}
      onClick={clickItem}
    >
      <p
        className={classNames(
          "w-full h-[30%] text-center p-[0.1rem] break-words text-text text-4xl rounded-t-2xl box-border transition-background-color ",
          { "bg-gray-500": clicked, "bg-headerBackground": !clicked }
        )}
      >
        Applicance
      </p>

      <p
        className={classNames(
          "text-2xl w-full h-full text-center pt-[5%] rounded-b-2xl break-words text-text",
          { "bg-gray-500": clicked, "bg-secondaryBackground": !clicked }
        )}
        {...onHoverProps}
      >
        {hovering && !clicked ? `Equipment: ${equipment}` : `${label}`}
      </p>
    </div>
  );
};

export default Item;
