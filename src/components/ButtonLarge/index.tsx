import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLargeProps = {
    value: string;
  } & ButtonType;
  
const ButtonLarge = ({ value, ...props }: ButtonLargeProps) => {
	return <S.ButtonLarge type='submit'{...props}>{value}</S.ButtonLarge>;
};

export default ButtonLarge;