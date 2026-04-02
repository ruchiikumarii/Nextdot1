export const CapabilitiesGrid = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
          <div className="w-full md:w-1/2">
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">// What We Build</div>
            <h2 className="text-5xl font-display font-medium tracking-tight text-ink mb-6">
              AI Engineering & Agentic Systems
            </h2>
            <p className="text-lg text-ink/60 leading-relaxed max-w-lg">
              Production-grade systems. Built to run inside real enterprises.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-surface rounded-3xl border border-line flex items-center justify-center relative overflow-hidden">
            {/* Abstract 3D Chain representation */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-8 border-ink/10 rounded-3xl rotate-12 transform-gpu" />
              <div className="absolute inset-0 border-8 border-ink/20 rounded-3xl -rotate-12 transform-gpu" />
              <div className="absolute inset-8 bg-gradient-to-br from-ink/5 to-ink/20 rounded-2xl backdrop-blur-sm" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[400px]">
            <div className="w-full md:w-1/2 bg-surface rounded-3xl p-12 border border-line flex flex-col justify-center">
              <h3 className="text-3xl font-display font-medium text-ink mb-4">AI Agent & Agentic Systems</h3>
              <p className="text-ink/60 leading-relaxed">
                Multi-agent architectures designed for real workflows — from document intelligence to decision automation. Autonomous where possible, controlled where necessary.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-line h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop" 
                alt="AI Agent & Agentic Systems"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 h-auto md:h-[400px]">
            <div className="w-full md:w-1/2 bg-surface rounded-3xl p-12 border border-line flex flex-col justify-center">
              <h3 className="text-3xl font-display font-medium text-ink mb-4">Enterprise Workflow Automation</h3>
              <p className="text-ink/60 leading-relaxed">
                AI embedded into your operating layer — orchestrating data, APIs, and systems across CRMs, ERPs, and internal tools.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-line h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Enterprise Workflow Automation"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[400px]">
            <div className="w-full md:w-1/2 bg-surface rounded-3xl p-12 border border-line flex flex-col justify-center">
              <h3 className="text-3xl font-display font-medium text-ink mb-4">AI-Powered Growth Systems</h3>
              <p className="text-ink/60 leading-relaxed">
                Content, campaign, and performance systems that combine LLMs with structured business data — built for scale, not experimentation.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-line h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="AI-Powered Growth Systems"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 h-auto md:h-[400px]">
            <div className="w-full md:w-1/2 bg-surface rounded-3xl p-12 border border-line flex flex-col justify-center">
              <h3 className="text-3xl font-display font-medium text-ink mb-4">Enterprise AI Advisory</h3>
              <p className="text-ink/60 leading-relaxed">
                Architecture, governance, and operating models for organisations building long-term AI capability.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-line h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Enterprise AI Advisory"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col md:flex-row gap-8 h-auto md:h-[400px]">
            <div className="w-full md:w-1/2 bg-surface rounded-3xl p-12 border border-line flex flex-col justify-center">
              <h3 className="text-3xl font-display font-medium text-ink mb-4">LLMOps & ML Engineering</h3>
              <p className="text-ink/60 leading-relaxed">
                Model pipelines, orchestration layers, and infrastructure for enterprises moving toward domain-specific AI systems.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-line h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="LLMOps & ML Engineering"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
