export const Platforms = () => {
  const platforms = [
    {
      title: "AI-Augmented Content Systems",
      desc: "High-volume, high-consistency content pipelines powered by AI."
    },
    {
      title: "Performance Marketing Systems",
      desc: "Campaigns driven by real-time intelligence and optimisation loops."
    },
    {
      title: "Video & Design Production",
      desc: "Faster iteration. Scalable production. Enterprise-grade output."
    },
    {
      title: "Digital Growth Systems",
      desc: "End-to-end growth infrastructure, not isolated campaigns."
    }
  ];

  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl font-display font-medium tracking-tight text-ink">
            Nextdot for Creative
          </h2>
          <p className="text-lg text-ink/60 max-w-md md:text-right mt-6 md:mt-0">
            A decade of digital and creative consulting, now re-engineered with AI at the core.
          </p>
        </div>

        <div className="flex flex-col">
          {platforms.map((platform, i) => (
            <div 
              key={i} 
              className="flex flex-col md:flex-row md:justify-between md:items-center py-8 border-b border-line group cursor-pointer hover:px-4 transition-all duration-300"
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-3xl font-display font-medium text-ink group-hover:text-blue-600 transition-colors">
                  {platform.title}
                </h3>
                <p className="text-ink/60 mt-2">{platform.desc}</p>
              </div>
              <div className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity text-2xl hidden md:block">
                ✦
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
