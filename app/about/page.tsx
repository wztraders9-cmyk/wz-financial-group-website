import { ShieldCheck, Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We believe trust is built through transparency, ethical conduct and responsible financial practices.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Excellence",
    description:
      "Our commitment is to deliver reliable financial guidance and operational support with the highest professional standards.",
    icon: Target,
  },
  {
    title: "Innovation",
    description:
      "We embrace technology and modern financial solutions to improve efficiency and create better client experiences.",
    icon: Lightbulb,
  },
  {
    title: "Client Success",
    description:
      "Every solution we provide is focused on helping clients achieve sustainable financial and operational outcomes.",
    icon: Users,
  },
];

const reasons = [
  "Professional Financial Expertise",
  "Secure & Confidential Services",
  "Technology-Driven Solutions",
  "Personalized Client Support",
  "Transparent Communication",
  "Long-Term Partnerships",
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
            Helping You Make Financial Decisions With Confidence
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
            WZ Financial Group delivers professional financial advisory,
            operational support and technology-driven solutions designed to
            help individuals and businesses operate with greater confidence,
            efficiency and long-term success.
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
            WZ Financial Group was established to provide modern financial
            support, operational expertise and technology solutions that help
            individuals and businesses navigate an increasingly digital
            financial environment.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            By combining practical financial knowledge with innovative
            technology, we deliver efficient, transparent and client-focused
            solutions that simplify financial processes and support informed
            decision-making.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Values
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              The principles that guide every client relationship.
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

      {/* Our Approach */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {["Understand", "Assess", "Deliver", "Support"].map((step, index) => (
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
              Built on professionalism, trust and long-term client relationships.
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
            Let's Build a Stronger Financial Future Together
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Whether you're an individual seeking financial guidance or a
            business looking for operational support, we're here to help you
            move forward with confidence.
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