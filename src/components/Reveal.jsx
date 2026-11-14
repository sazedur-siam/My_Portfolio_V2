import { motion } from "framer-motion";

// Gentle fade-up when the element scrolls into view.
const Reveal = ({ children, delay = 0, className, as = "div", ...props }) => {
  const Comp = motion[as];
  return (
    <Comp
      {...props}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
