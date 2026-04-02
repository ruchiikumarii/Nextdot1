import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <h2 className="text-sm font-bold tracking-widest text-ink/50 uppercase mb-8">
            We are Nextdot
          </h2>
          <p className="text-4xl md:text-6xl font-display font-medium leading-[1.1] tracking-tight text-ink">
            Your path to reliable digital quality and enterprise-grade AI. We engineer systems that scale, secure, and perform.
          </p>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-12">
            {[
              { label: "Years of Excellence", value: "10+" },
              { label: "Enterprise Clients", value: "500+" },
              { label: "AI Models Deployed", value: "2M+" },
              { label: "Global Presence", value: "15+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-display font-bold text-ink mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-ink/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
