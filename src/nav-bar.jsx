import { Home, Settings, Film, Tv } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DefaultDemo() {
  const tabs = [
    { title: "Home", icon: Home, link: "https://www.zxcstream.icu/" },
    { title: "Movie", icon: Film, link: "https://www.zxcstream.icu/#movie" },
    { title: "TV Show", icon: Tv, link: "https://www.zxcstream.icu/#tv" },
    { type: "separator" },
    { title: "Settings", icon: Settings },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex items-center gap-5 rounded-2xl p-1 ">
      {tabs.map((tab, index) =>
        tab.type === "separator" ? (
          <div key={index} className="mx-1 h-[24px] w-[1.2px] bg-border" />
        ) : (
          <a
            key={tab.title}
            href={tab.link || "#"}
            target={tab.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <motion.button
              onClick={() => handleSelect(index)}
              initial={false}
              animate={{
                gap: selected === index ? ".5rem" : 0,
                paddingLeft: selected === index ? "1rem" : ".5rem",
                paddingRight: selected === index ? "1rem" : ".5rem",
              }}
              transition={{
                delay: 0.1,
                type: "spring",
                bounce: 0,
                duration: 0.3,
              }}
              className="relative flex items-center rounded-xl px-4 py-2 text-sm font-medium whitespace-nowrap cursor-pointer hover:text-red-800 "
            >
              <tab.icon size={20} />
              <AnimatePresence>
                {selected === index && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </a>
        )
      )}
    </div>
  );
}
