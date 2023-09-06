import { motion, useScroll, useSpring } from 'framer-motion';
import { PhotoComp } from '../../PhotoComp';
import * as S from './styles';

interface CardAnimationProps {
  image: string;
  h2: string;
  p: string;
  id: number;
}

export const CardAnimation = ({ image, h2, p, id }: CardAnimationProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  };

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
      <div>
        <S.ProgressBar>
          <motion.div className="progress-bar" style={{ scaleX }} />
        </S.ProgressBar>

        <motion.div
          className="card"
          id={String(id)}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="image-container"
            variants={imageAnimate}
          >
            <PhotoComp url={image} text="" />
          </motion.div>

          <motion.h2 variants={textAnimate}>{h2}</motion.h2>
          <motion.p variants={textAnimate}>{p}</motion.p>
        </motion.div>
      </div>
    </S.Container>
  );
};
