import { motion } from "framer-motion";

const StarNode = ({ className }: { className?: string }) => (
  <div className={`absolute ${className} w-4 h-4 -ml-2 -mt-2`} style={{ transformStyle: 'preserve-3d' }}>
    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[4px]" />
    <div className="absolute top-1/2 left-1/2 w-12 h-[2px] bg-blue-400 -translate-x-1/2 -translate-y-1/2 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-blue-400 -translate-x-1/2 -translate-y-1/2 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-blue-300 -translate-x-1/2 -translate-y-1/2 rotate-45 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-blue-300 -translate-x-1/2 -translate-y-1/2 -rotate-45 blur-[1px]" />
    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#fff]" />
  </div>
);

const GlowingOrb = () => {
  return (
    <div className="relative w-[350px] h-[350px]" style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Ring 1 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(0deg) rotateY(0deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-0 left-1/2" />
          <StarNode className="bottom-0 left-1/2" />
        </div>
        
        {/* Ring 2 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(60deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-1/2 left-0" />
        </div>

        {/* Ring 3 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(120deg) rotateY(90deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-1/2 right-0" />
        </div>

        {/* Ring 4 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(45deg) rotateY(135deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="top-[15%] left-[15%]" />
        </div>

        {/* Ring 5 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-600/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(135deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
          <StarNode className="bottom-[15%] right-[15%]" />
        </div>

        {/* Ring 6 */}
        <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.4)]" style={{ transform: 'rotateX(90deg) rotateY(0deg)', transformStyle: 'preserve-3d' }} />

        {/* Inner Glow */}
        <div className="absolute inset-1/4 bg-blue-500/10 blur-3xl rounded-full" style={{ transform: 'translateZ(0)' }} />
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="pt-40 pb-32 relative overflow-hidden bg-paper">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-ink mb-8 leading-[1.1]">
            Domain Engineered AI Products & Agents For Enterprise
          </h1>
          <p className="text-xl text-ink/60 max-w-3xl leading-relaxed mb-12">
            Real transformation needs an architected agentic ecosystem — not isolated use cases. Nextdot builds AI operating systems for enterprises that are no longer experimenting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-ink text-paper px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
              See What We Build →
            </button>
            <button className="bg-surface border border-line text-ink px-8 py-4 rounded-full font-medium hover:bg-paper transition-colors">
              Talk to Us →
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Connecting Lines */}
          <div className="absolute -top-40 left-[50%] w-px h-40 bg-gradient-to-b from-transparent to-blue-500 hidden md:block" />
          <div className="absolute top-0 left-[50%] w-2 h-2 -ml-[3px] rounded-full bg-blue-500 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <div className="absolute top-0 left-[50%] w-px h-[120%] bg-line hidden md:block" />

          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
            <GlowingOrb />
          </div>

          <div className="w-full md:w-1/2 relative flex items-center">
            <div className="absolute -left-12 top-1/2 w-12 h-px bg-line hidden md:block" />
            <div className="border border-line rounded-3xl p-10 bg-surface relative hover:shadow-2xl hover:shadow-ink/5 transition-shadow duration-500 w-full">
              <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">The Problem</div>
              <h2 className="text-3xl font-display font-medium mb-4 text-ink">
                Most enterprises are stuck at the pilot.
              </h2>
              <p className="text-ink/70 leading-relaxed mb-6 text-sm">
                Moving AI into production is not a model problem — it’s a systems problem. It requires domain context, workflow integration, and engineering accountability.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-ink text-sm">01 — The Integration Gap</div>
                  <div className="text-xs text-ink/60 mt-1">Multiple tools. Disconnected workflows. What looks like AI adoption is actually fragmentation.</div>
                </div>
                <div>
                  <div className="font-medium text-ink text-sm">02 — The Accountability Gap</div>
                  <div className="text-xs text-ink/60 mt-1">Vendors deliver decks. Your internal team inherits complexity without clarity.</div>
                </div>
                <div>
                  <div className="font-medium text-ink text-sm">03 — The Architecture Gap</div>
                  <div className="text-xs text-ink/60 mt-1">Pilots don’t scale. Real transformation needs an AI operating system — not scattered experiments.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-line bg-paper/80 backdrop-blur-md py-4 px-6 flex justify-center items-center text-sm font-medium text-ink/80 text-center z-20">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span>10+ Years in Enterprise</span>
          <span className="hidden sm:inline">·</span>
          <span>30+ Specialists</span>
          <span className="hidden sm:inline">·</span>
          <span>3 Engineering Tracks</span>
          <span className="hidden sm:inline">·</span>
          <span>1 AI Capability Center</span>
        </div>
      </div>
    </section>
  );
};
