import {motion} from 'framer-motion';
import { default as Link } from "next/link";

export const PopLink = ({href, title}) => (
  // <motion.div whileHover={{scale: [1, 1.2, 1.2, 1, 1],
  //   rotate: [0, 0, 270, 270, 0]}}>
    <Link href={href}>{title}</Link>
  // {/* </motion.div>  */}
);