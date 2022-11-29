import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import { useState } from 'react';
import { PhotoComp } from '../../PhotoComp';
import * as S from './styles';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const CardAnimation = ({ gif, image, h2, p, id }: any) => {
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <div>
        <S.ProgressBar>
          <motion.div className="progress-bar" style={{ scaleX }}>
            <div className="pochita"></div>
          </motion.div>
          <div className="pochitaResponsive">
            <PhotoComp url={gif} text="" />
          </div>
        </S.ProgressBar>

        <motion.div
          className="card"
          id={id}
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

      <S.DropDown boxShadow={isOpen}>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="menu"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Sobre
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20" color="red">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <motion.li variants={itemVariants}>
              <span className="titleName">Nome:</span>
              <span className="name">Denji</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="titleName">Idade:</span>{' '}
              <span className="name">16-17 anos</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="titleName">Altura:</span>
              <span className="name"> 1.80</span>{' '}
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="titleName"> Habilidades:</span>
              <span className="name">
                força aprimorada, resistência, velocidade, ataques poderosos
              </span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="titleName">Tranformação:</span>
              <span className="name">lâminas de motosserra</span>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </S.DropDown>
    </S.Container>
  );
};
