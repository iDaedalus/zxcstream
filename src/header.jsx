import { motion } from "framer-motion";
import DefaultDemo from "./nav-bar";
export default function Header() {
  return (
    <header className="absolute top-0 px-25 py-6 w-full  z-10 flex items-center justify-between flex-col lg:flex-row">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex justify-center items-center"
      >
        <p className="zxx text-gray-300/50 drop-shadow-md">[STREAM]</p>
        <img
          className="absolute h-8.5 w-8.5 drop-shadow-md"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3_u_Nr0GwTGVEFlmQqAVP9alVZVynQ6u2QGVX4u28EmsikirNdHSIkyZVR0TfIR11mIux4lz6RZG4dkoX5O66c0usT9ULyW2Emkv0cDaLTMTA2xlRGLeVhXyW3xawv2vC2DiRzqBpNRoQFo_2vqbIXyAZ-Qw3D1w5d6RdnBNJT0Cjvp-k8gARvzy/s1600/%5BSTREAM%5D.png"
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-gray-300 flex items-center gap-15"
      ></motion.div>
    </header>
  );
}
