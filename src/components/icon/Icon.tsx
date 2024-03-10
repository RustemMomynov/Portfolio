import { FC } from "react";
import iconsSprite from "../../assets/images/sprites.svg";

interface IconProps {
  iconId: string;
  size?: string;
}

export const Icon: FC<IconProps> = (props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
