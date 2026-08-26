'use client';
import {motion} from 'framer-motion';
export default function Availability(){return <motion.div className="availability" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}><span className="status-dot"/> AVAILABLE FOR SELECTED PROJECTS <span>2026</span></motion.div>}