import { cn } from "../../utils/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hook/useOutsideClick";

const ModalContext = createContext(undefined);

export const ModalProvider = ({
  children
}) => {
  const [open, setOpen] = useState(false);

  return (
    (<ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>)
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({
  children
}) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className
}) => {
  const { setOpen } = useModal();
  return (
    (<button
      className={cn(
        "py-2 md:text-sm md:py-1 md:mb-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}>
      {children}
    </button>)
  );
};

export const ModalBody = ({ children, className }) => {
  const { open } = useModal();

  useEffect(() => {
    const disableScroll = (e) => e.preventDefault();

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", disableScroll);
    }

    return () => document.removeEventListener("touchmove", disableScroll);
  }, [open]);

  const modalRef = useRef(null);
  const { setOpen } = useModal();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 h-full w-full z-[9999] flex items-center justify-center">
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] max-h-[90%] md:max-w-[60%] bg-gray-900 dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-[9999] flex flex-col flex-1 overflow-hidden",
              className
            )}
            initial={{ opacity: 0, scale: 0.5, rotateX: 30, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}>
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col flex-1 px-8 pb-8 pt-12 md:p-10", className)}>
      {children}
    </div>)
  );
};


const Overlay = ({
  className
}) => {
  return (
    (<motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}></motion.div>)
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    (<button onClick={() => setOpen(false)} className="absolute top-4 right-4 group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-violet-200 dark:text-white bg-gray-950 h-8 w-8  relative z-50 group-hover:scale-125 group-hover:rotate-3 transition duration-200">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>)
  );
};

