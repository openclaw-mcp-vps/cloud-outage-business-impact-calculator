export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Calculate the Real Business Impact of{' '}
          <span className="text-[#58a6ff]">Cloud Outages</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track your AWS, Google Cloud, and Azure dependencies. When an outage hits, instantly see your revenue loss per minute, SLA breach risk, and recovery priority — before your CFO asks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Calculating — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '$2.3M', label: 'Avg. hourly cost of downtime' },
            { stat: '99.9%', label: 'SLA breach detection accuracy' },
            { stat: '<60s', label: 'Impact alert latency' },
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{item.stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to quantify cloud risk</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited cloud service dependencies',
              'Real-time revenue impact dashboard',
              'SLA breach alerts via Slack & email',
              'Webhook integrations (AWS, GCP, Azure)',
              'Monthly outage impact PDF reports',
              'Priority support',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the revenue impact calculation work?',
              a: 'You enter your hourly revenue and map it to specific cloud services. When a service goes down, we multiply your revenue rate by the outage duration and affected service weight to give you a real-time dollar figure.'
            },
            {
              q: 'Which cloud providers are supported?',
              a: 'AWS, Google Cloud, Azure, Cloudflare, and any provider with a public status page or webhook API. Custom integrations are available on the Pro plan.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Cloud Outage Impact Calculator. All rights reserved.
      </footer>
    </main>
  )
}
