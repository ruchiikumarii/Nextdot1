export const Insights = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Credibility Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          <div className="md:col-span-4 bg-surface rounded-3xl p-12 flex flex-col justify-end border border-line h-[300px]">
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">Credibility</div>
            <h2 className="text-4xl font-display font-medium text-ink leading-tight">
              Who we work with
            </h2>
            <p className="text-ink/60 mt-4">Client logos</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 gap-6">
            <div className="bg-blue-500 rounded-3xl p-8 text-white flex flex-col justify-between h-[140px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600" />
              <div className="relative z-10">
                <div className="text-5xl font-display font-medium mb-2">10+</div>
                <div className="text-sm font-medium opacity-90">Years Operating</div>
              </div>
            </div>
            <div className="bg-purple-500 rounded-3xl p-8 text-white flex flex-col justify-between h-[140px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600" />
              <div className="relative z-10">
                <div className="text-5xl font-display font-medium mb-2">30+</div>
                <div className="text-sm font-medium opacity-90">Specialists</div>
              </div>
            </div>
            <div className="bg-blue-700 rounded-3xl p-8 text-white flex flex-col justify-between h-[140px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
              <div className="relative z-10">
                <div className="text-5xl font-display font-medium mb-2">100+</div>
                <div className="text-sm font-medium opacity-90">Systems & Campaigns Delivered</div>
              </div>
            </div>
            <div className="bg-purple-700 rounded-3xl p-8 text-white flex flex-col justify-between h-[140px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800" />
              <div className="relative z-10">
                <div className="text-5xl font-display font-medium mb-2">3</div>
                <div className="text-sm font-medium opacity-90">AI Products in Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl font-display font-medium tracking-tight text-ink">
            How we work
          </h2>
          <p className="text-lg text-ink/60 max-w-xl md:text-right mt-6 md:mt-0">
            We deploy dedicated AI engineering pods that work alongside your team to take AI from exploration to production. Each pod is built around your problem, combining AI engineers, system architects, and domain specialists who own the outcome end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-surface rounded-3xl p-10 h-[320px] flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-line">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full mb-4">01 — DISCOVER</span>
              <h3 className="text-2xl font-display font-medium text-white mb-2 leading-tight pr-12">
                Map the highest-leverage problem inside your workflow.
              </h3>
              <div className="absolute bottom-0 right-0 text-cyan-400 text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">✦</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-3xl p-10 h-[320px] flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-line">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full mb-4">02 — ARCHITECT</span>
              <h3 className="text-2xl font-display font-medium text-white mb-2 leading-tight pr-12">
                Design the system, integrations, data flow, and governance before building.
              </h3>
              <div className="absolute bottom-0 right-0 text-cyan-400 text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">✦</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface rounded-3xl p-10 h-[320px] flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-line">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full mb-4">03 — ENGINEER</span>
              <h3 className="text-2xl font-display font-medium text-white mb-2 leading-tight pr-12">
                Deploy real systems into real environments. Not isolated pilots.
              </h3>
              <div className="absolute bottom-0 right-0 text-cyan-400 text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">✦</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface rounded-3xl p-10 h-[320px] flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-line">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" 
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full mb-4">04 — OPTIMISE</span>
              <h3 className="text-2xl font-display font-medium text-white mb-2 leading-tight pr-12">
                Continuously improve performance post-deployment. ROI compounds.
              </h3>
              <div className="absolute bottom-0 right-0 text-cyan-400 text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">✦</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
