import { ShieldCheck, Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We build trust through transparency, responsible practices and professional service delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Operational Excellence",
    description:
      "We design efficient workflows and support systems that help clients improve everyday operations.",
    icon: Target,
  },
  {
    title: "Innovation",
    description:
      "We use modern technology solutions to simplify processes and create better digital experiences.",
    icon: Lightbulb,
  },
  {
    title: "Client Success",
    description:
      "Our solutions are designed around practical outcomes, efficiency and long-term relationships.",
    icon: Users,
  },
];

const reasons = [
  "Technology-Driven Solutions",
  "Operational Workflow Support",
  "Secure Digital Processes",
  "Identity Verification Solutions",
  "Professional Client Support",
  "Transparent Communication",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <p className="uppercase tracking-[0.25em] text-blue-400 text-sm font-semibold">
            ABOUT US
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Technology Solutions Supporting Modern Financial Operations
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
            WZ Financial Group, operated by WZ Traders Pty Ltd, provides
            digital solutions, operational support and technology-driven
            workflows designed to help individuals and businesses manage
            financial activities more efficiently.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Story
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            WZ Financial Group was established to develop practical digital
solutions and operational support services for an increasingly
technology-driven business environment.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine technology, workflow design and operational expertise
            to help clients improve efficiency, manage processes and adopt
            modern digital solutions.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            WZ Financial Group provides technology solutions and operational
            support services. We do not provide personal financial product
            advice, investment recommendations or asset management services.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Values
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              The principles that guide our work and client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-700" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {["Understand", "Design", "Implement", "Support"].map((step, index) => (
              <div key={step}>
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose WZ Financial Group
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Combining technology, operational expertise and practical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="border border-slate-700 rounded-xl p-6"
              >
                <p className="text-lg font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
  Build Better Financial Operations With Technology
</h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Whether you need digital solutions, operational support or
            technology-enabled workflows, WZ Financial Group helps simplify
            complex processes.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}