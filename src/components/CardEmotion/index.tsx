import  dataCharacter from '../../data/dataCharacter.json';
import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import * as S from './styles';
import {PhotoComp} from "../PhotoComp"
import denji from "../../../public/assets/denji.jpg"
import fakeImage from "../../../public/assets/fakeImage.png"
import Image from 'next/image';
import { CardAnimation } from './CardAnimation';

export const CardEmotion: FC = () => {
  return (
    <S.Container>
      {dataCharacter.map((item, index) => (
        <div className="card-wrapper" key={index}>
          <CardAnimation image={item.image} h2={item.h2} p={item.p} />
        </div>
      ))}
    </S.Container>
  );
};
