import dataCharacter from '../../data/dataCharacter.json';
import { FC } from 'react';
import * as S from './styles';
import { CardAnimation } from './CardAnimation';
import { Dropdown } from './Dropdown';

export const CardEmotion: FC = () => {
  return (
    <S.Container>
      <S.ProfileContainer>
        {dataCharacter.map((item, index) => (
          <S.CardProfile className="test" key={index}>
            <CardAnimation {...item} />
            <Dropdown {...item} index={index} />
          </S.CardProfile>
        ))}
      </S.ProfileContainer>
    </S.Container>
  );
};
