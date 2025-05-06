import { Home, Settings, Film, Tv } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DefaultDemo() {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "Movie", icon: Film },
    { title: "TV", icon: Tv },
    { type: "separator" },
    { title: "Settings", icon: Settings },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected((prev) => (prev === index ? null : index)); // Toggle selection
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl p-1 shadow-sm">
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <div
              key={index}
              className="mx-1 h-[24px] w-[1.2px] bg-border"
              aria-hidden="true"
            />
          );
        }

        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <motion.button
            key={tab.title}
            initial={false}
            animate={{
              gap: isSelected ? ".5rem" : 0,
              paddingLeft: isSelected ? "1rem" : ".5rem",
              paddingRight: isSelected ? "1rem" : ".5rem",
            }}
            onClick={() => handleSelect(index)}
            transition={{
              delay: 0.1,
              type: "spring",
              bounce: 0,
              duration: 0.6,
            }}
            className="relative flex items-center rounded-xl px-4 py-2 text-sm font-medium"
          >
            <Icon size={20} />
            <AnimatePresence>
              {isSelected && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    bounce: 0,
                    duration: 0.6,
                  }}
                  className="overflow-hidden"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
