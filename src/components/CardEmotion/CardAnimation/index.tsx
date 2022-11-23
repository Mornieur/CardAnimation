import { motion, Variants } from 'framer-motion';
import {PhotoComp} from "../../PhotoComp"
import * as S from "./styles"

export const CardAnimation = ({ image, h2, p, id  }: any) => {

  const imageAnimate = {
    offscreen: { x: -100,  opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  };

  // const subImageAnimation = {
  //   offscreen: { x: -70, opacity: 0 },
  //   onscreen: {
  //     x: 0,
  //     opacity: 1,
  //     rotate: [0, 10, 0],
  //     transition: { type: 'spring', bounce: 0.4, duration: 1 },
  //   },
  // }
  
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  };
  return (
    <S.Container>
<motion.div
      className="card"
      id={id}
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      
      <motion.div className="image-container" variants={imageAnimate}>
        
      <PhotoComp url={image} text=""/>     
      </motion.div>

      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
    </motion.div>

    </S.Container>
    
  );
}
