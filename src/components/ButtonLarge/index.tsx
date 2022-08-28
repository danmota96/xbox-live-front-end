import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLargeProps = {
    value: string;
    variant?: "disabled" | "cancel";
  } & ButtonType;
  
const ButtonLarge = ({ variant, value, ...props }: ButtonLargeProps) => {
	return <S.ButtonLarge type='submit'{...props} variant={variant}>{value}</S.ButtonLarge>;
};

export default ButtonLarge;