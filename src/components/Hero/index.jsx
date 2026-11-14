import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bio } from "@/data/constants";
import HeroImg from "@/images/HeroImage.png";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// The tagline's second part renders in muted text.
const [lead, tail] = Bio.tagline;

const Hero = () => (
  <motion.section
    id="home"
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    className="relative overflow-hidden rounded-2xl border border-border bg-sidebar p-6 sm:p-10"
  >
    {/* Faint grid in the top-right corner. */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]"
    />

    <div className="relative">
      <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={HeroImg}
            alt={Bio.name}
            className="size-14 rounded-full border-2 border-background object-cover shadow-soft"
          />
          <div>
            <h1 className="text-base font-medium">{Bio.name}</h1>
            <p className="text-sm text-muted-foreground">{Bio.title}</p>
          </div>
        </div>
        <p className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          {Bio.availability}
        </p>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-10 max-w-2xl text-3xl leading-tight font-medium tracking-tight sm:text-4xl"
      >
        {lead}
        {tail && <span className="text-muted-foreground"> {tail}</span>}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
      >
        {Bio.intro}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="h-10 px-4 shadow-soft">
          <a href={Bio.resume} target="_blank" rel="noreferrer">
            <Download data-icon="inline-start" />
            Download CV
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-10 px-4">
          <a href="#projects">
            See my projects
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
