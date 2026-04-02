export const CTASection = () => {
  return (
    <section className="py-24 bg-paper relative border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2">
            <div className="text-sm font-medium text-blue-600 mb-4 tracking-wider uppercase">// Ready to Build</div>
            <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1] mb-6">
              Done experimenting with AI?
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed mb-12">
              Let’s define what production looks like for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-ink text-paper px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
                Start the Conversation →
              </button>
              <button className="bg-surface border border-line text-ink px-8 py-4 rounded-full font-medium hover:bg-paper transition-colors">
                See What We Build →
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Full Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Company Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your company name" 
                  className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Work Email*</label>
                <input 
                  type="email" 
                  placeholder="Enter your work email address" 
                  className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Phone</label>
                <div className="flex gap-2">
                  <select className="bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors w-24 appearance-none cursor-pointer">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="flex-1 bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ink mb-2">How can we help you?</label>
                <textarea 
                  placeholder="Type your message here" 
                  rows={4} 
                  className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                />
              </div>
              
              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-line text-blue-600 focus:ring-blue-500" />
                <p className="text-xs text-ink/60 leading-relaxed">
                  I agree to share information with Nextdot for the purpose of fulfilling this request and in accordance with Nextdot's Privacy Statement.
                </p>
              </div>
              
              <button 
                type="button"
                className="w-32 bg-blue-600 text-white rounded-full py-3 font-medium hover:bg-blue-700 transition-colors mt-4 self-start"
              >
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};
