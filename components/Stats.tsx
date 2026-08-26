'use client';
import {motion} from 'framer-motion';
export default function Stats(){return <div className="stats"><motion.div whileHover={{y:-4}}><b>03</b><span>FLAGSHIP<br/>PROJECTS</span></motion.div><motion.div whileHover={{y:-4}}><b>14+</b><span>SECURITY &<br/>DEV TOOLS</span></motion.div><motion.div whileHover={{y:-4}}><b>24/7</b><span>BUILD · BREAK<br/>· REPEAT</span></motion.div></div>}