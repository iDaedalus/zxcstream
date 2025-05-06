import {
  Facebook,
  Twitter,
  Youtube,
  SendHorizontal as Telegram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className=" text-gray-300 py-8 px-4 w-full text-xs lg:text-base"
    >
      <div className=" text-center flex flex-col items-center justify-center ">
        <div className="mb-6 flex gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=61567135169478"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 text-[#3b5998]"
          >
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-red-800 text-[#1da1f2]">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-red-800 text-[#0088cc]">
            <Telegram size={24} />
          </a>
          <a href="#" className="hover:text-red-800 text-[#ff0000]">
            <Youtube size={24} />
          </a>
        </div>
        <nav className="mb-5 w-full flex justify-center flex-wrap gap-5">
          <a
            href="https://www.zxcstream.icu/#company/2949"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Shudder
          </a>
          <a
            href="https://www.zxcstream.icu/#company/213"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Netflix
          </a>
          <a
            href="https://www.zxcstream.icu/#company/1024"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Prime Video
          </a>
          <a
            href="https://www.zxcstream.icu/#company/2739"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Disney+
          </a>
          <a
            href="https://www.zxcstream.icu/#company/453"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Hulu
          </a>
          <a
            href="https://www.zxcstream.icu/#company/3186"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Max
          </a>
          <a
            href="https://www.zxcstream.icu/#company/2552"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Apple TV+
          </a>
          <a
            href="https://www.zxcstream.icu/#company/4330"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Paramount+
          </a>
          <a
            href="https://www.zxcstream.icu/#company/3353"
            className=" hover:text-red-800 font-medium transition-colors"
          >
            Peacock
          </a>
        </nav>

        <p className="leading-relaxed mt-4 mb-4 max-w-[900px] px-2">
          <strong className="text-red-800">ZXC[STREAM]</strong> does not host
          any files, it merely pulls streams from 3rd party services. Legal
          issues should be taken up with the file hosts and providers.{" "}
          <strong className="text-red-800">ZXC[STREAM]</strong> is not
          responsible for any media files shown by the video providers.
        </p>

        {/* <p class=" mt-5">
      Dive into endless hours of free streaming entertainment with <strong>ZXC[STREAM]</strong>!
      Join the ZXC revolution and explore a world of movies and TV shows—all without a subscription.
    </p> */}

        <p className="text-white/50">© 2025 ZXC[STREAM] All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
