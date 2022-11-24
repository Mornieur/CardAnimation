import  dataCharacter from '../../data/dataCharacter.json';

import { FC } from 'react';
import * as S from './styles';
import { CardAnimation } from './CardAnimation';

export const CardEmotion: FC = () => {
  return (
    <S.Container>
      {dataCharacter.map((item, index) => (
        <div className="card-wrapper" key={index}>
          <CardAnimation image={item.image} h2={item.h2} p={item.p} gif={item.gif} />
        </div>
      ))}
    </S.Container>
  );
};
