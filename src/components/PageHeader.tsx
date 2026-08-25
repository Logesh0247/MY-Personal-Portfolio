import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const PageHeader = ({ eyebrow, title, description, children }: PageHeaderProps) => (
  <motion.div {...fadeUp} className="mx-auto max-w-3xl space-y-4 text-center">
    <p className="eyebrow">{eyebrow}</p>
    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
      {title}
    </h1>
    {description && (
      <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
    {children}
  </motion.div>
);

export default PageHeader;
