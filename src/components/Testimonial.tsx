export const Testimonial = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-display font-medium tracking-tight text-ink mb-24">
          We didn’t follow the crowd.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/3 relative pl-12">
            <div className="text-8xl text-blue-600 font-serif absolute -top-12 left-0 leading-none">"</div>
            <p className="text-2xl text-ink/80 leading-relaxed mb-8 relative z-10 font-medium">
              Nextdot operates an AI Capability Center, bringing together forward-deployed engineers, AI system architects, and agentic specialists under one roof. This is where enterprise AI systems move from idea to production.
            </p>
            <p className="text-xl text-ink/70 leading-relaxed mb-12 relative z-10">
              Multi-agent architectures, workflow automation layers, and domain-trained models, designed, engineered, and deployed by a team that works at the intersection of AI, systems thinking, and real business operations.
            </p>
            <div>
              <div className="text-blue-600 font-medium text-xl mb-1">Built from emerging India</div>
              <div className="text-ink/60">Where the next generation of engineering talent is not just consuming global technology, but building it.</div>
            </div>
            <div className="text-8xl text-blue-600 font-serif absolute -bottom-16 right-12 rotate-180 leading-none">"</div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-surface shadow-2xl relative">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Capability Center"
                className="w-full h-full object-cover grayscale" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
