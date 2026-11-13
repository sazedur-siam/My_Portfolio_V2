import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Tint from "@/components/Tint";
import { Bio } from "@/data/constants";
import { accentAt } from "@/lib/accents";
import HeroImg from "@/images/HeroImage.png";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => (
  <section id="home" className="px-4 pt-6 pb-4 sm:px-6 md:pt-10">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-wash-from to-wash-to">
      <div className="grid items-center gap-10 px-5 py-12 sm:px-10 md:grid-cols-[1.25fr_1fr] md:py-16 lg:px-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="order-2 flex flex-col items-start md:order-1"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-medium tracking-tight sm:text-5xl"
          >
            {Bio.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 text-lg text-primary-deep md:text-xl">
            {Bio.title}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-10 px-4 shadow-soft">
              <a href={Bio.resume} target="_blank" rel="noreferrer">
                <Download data-icon="inline-start" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-10 px-4">
              <a href="#projects">
                View Projects
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-10 px-3">
              <a href="#contact">
                <Mail data-icon="inline-start" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
            {Bio.heroTech.map((tech, i) => (
              <li key={tech}>
                <Tint color={accentAt(i)}>{tech}</Tint>
              </li>
            ))}
          </motion.ul>

          <motion.dl
            variants={fadeUp}
            className="mt-8 grid w-full grid-cols-2 gap-3 lg:grid-cols-4"
          >
            {Bio.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background/80 p-4"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-medium tracking-tight text-primary-deep">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full bg-secondary/70 blur-2xl"
              aria-hidden
            />
            <img
              src={HeroImg}
              alt={Bio.name}
              className="relative size-56 rounded-full border-[6px] border-background object-cover shadow-soft sm:size-72 lg:size-80"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
