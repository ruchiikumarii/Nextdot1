import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    id: "finance",
    title: "Financial Services",
    description: "Automated risk assessment, fraud detection, and personalized wealth management insights powered by secure LLMs.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "Accelerating drug discovery, automating clinical trial documentation, and improving patient triage with HIPAA-compliant AI.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "manufacturing",
    title: "Advanced Manufacturing",
    description: "Predictive maintenance, supply chain optimization, and automated quality control using multimodal AI agents.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

export const UseCases = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCase, setActiveCase] = useState(useCases[0].id);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".use-case-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeData = useCases.find(c => c.id === activeCase);

  return (
    <section ref={sectionRef} id="use-cases" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="use-case-header mb-16 text-center">
          <h2 className="text-sm font-bold tracking-widest text-ink/50 uppercase mb-4">
            Reliability in every domain
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-ink max-w-3xl mx-auto">
            AI solutions tailored for your industry.
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                onClick={() => setActiveCase(uc.id)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 ${
                  activeCase === uc.id 
                    ? "bg-white shadow-md border border-line" 
                    : "hover:bg-white/50 text-ink/60 hover:text-ink"
                }`}
              >
                <h3 className={`text-xl font-semibold mb-2 ${activeCase === uc.id ? "text-accent" : ""}`}>
                  {uc.title}
                </h3>
                {activeCase === uc.id && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-ink/70 leading-relaxed"
                  >
                    {uc.description}
                  </motion.p>
                )}
              </button>
            ))}
            
            <button className="mt-8 text-sm font-medium text-ink flex items-center gap-2 hover:gap-3 transition-all px-6">
              View all case studies <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:col-span-8 h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative bg-ink">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={activeData?.image} 
                  alt={activeData?.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium mb-4">
                    Case Study
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-4">
                    {activeData?.title}
                  </h3>
                  <button className="bg-white text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                    Read Full Story
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
