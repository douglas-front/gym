import "./whatsapp.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import {motion} from 'framer-motion'

export function WhatsIcon() {
  return (
    <>
    <motion.div
    
    initial={{ translateX: 220}}
    animate={{ translateX: 1}}
    transition={{
     type: "spring",
     stiffness: 260,
     damping: 15,
     delay: 0.3
    }}
    className="container-icon"
    >
      <button className="whatsapp">
        <IoLogoWhatsapp />
      </button>
    </motion.div>
    </>
  );
}
