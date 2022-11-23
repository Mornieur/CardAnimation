import { FC } from "react";
import * as S from "./styles"

interface TypeImages {
  url: string;
  text: string;
  onClick?: () => void;
}

export const PhotoComp: FC<TypeImages> = ({
  url,
  text,
  onClick,
}: TypeImages) => {
  return (
    <S.Container onClick={onClick} className="selectImages">
      <img src={url} alt={`${text}`} />
      <p> {text}</p>
    </S.Container>
  );
};