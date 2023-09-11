import * as S from './styles';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

interface DropdownProps {
  name: string;
  age: number;
  height: string;
  abilities: string;
  transformation: string;
  id: number;
  index: number;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Dropdown = ({
  name,
  age,
  height,
  abilities,
  transformation,
  index,
}: DropdownProps) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  const handleToggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <S.DropDown>
      <motion.nav
        initial={false}
        animate={openDropdownIndex !== null ? 'open' : 'closed'}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => handleToggleDropdown(index)}
        >
          About
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
          key={index}
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
          style={{
            pointerEvents:
              openDropdownIndex !== null && openDropdownIndex !== index
                ? 'none'
                : 'auto',
          }}
        >
          <motion.li variants={itemVariants}>
            <span className="titleName">Name:</span>
            <span className="name">{name}</span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="titleName">Age:</span>
            <span className="name">{age} years old</span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="titleName">Height:</span>
            <span className="name">{height}</span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="titleName">Abilities:</span>
            <span className="name">{abilities}</span>
          </motion.li>
          <motion.li variants={itemVariants}>
            <span className="titleName">Transformation:</span>
            <span className="name">{transformation}</span>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </S.DropDown>
  );
};
