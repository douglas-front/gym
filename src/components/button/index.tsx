import { motion } from "framer-motion"
import './button.scss'

interface ButtonProps {
  text: string;
  classe: string;
}

export default function Button({ text ,classe}: ButtonProps) {


  return (
    <motion.div
      className={`div-button-header ${classe}`}
      initial={{ translateX: 320 }}
      animate={{ translateX: 1 }}
      transition={{
        type: "spring",
        stiffness: 460,
        damping: 15
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
    >
      <button>{text}</button>
    </motion.div>
  );
}
