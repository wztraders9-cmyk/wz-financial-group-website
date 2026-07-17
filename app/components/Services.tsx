import {
  ArrowRight,
  Workflow,
  FileCheck,
  Smartphone,
  ShieldCheck,
  MonitorSmartphone,
  BriefcaseBusiness,
} from "lucide-react";


const services = [
  {
    title: "Digital Solutions",
    description:
      "Technology solutions designed to simplify digital processes, improve efficiency and support modern financial workflows.",
    icon: Smartphone,
  },
  {
    title: "Operational Support",
    description:
      "Structured operational assistance including process management, administration and workflow improvements.",
    icon: Workflow,
  },
  {
    title: "Identity Verification Support",
    description:
      "Digital verification workflows that help organizations improve onboarding processes and maintain accurate records.",
    icon: FileCheck,
  },
  {
    title: "Risk & Compliance Support",
    description:
      "Technology-enabled tools and operational support to assist with documentation, monitoring and internal processes.",
    icon: ShieldCheck,
  },
  {
    title: "Creator & Professional Support",
    description:
      "Operational tools and digital support for creators, freelancers and professionals managing online activities.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Support Solutions",
    description:
      "Digital infrastructure and operational solutions designed to support growing businesses and entrepreneurs.",
    icon: BriefcaseBusiness,
  },
];


export default function Services() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="max-w-3xl mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </p>


          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Technology and operational solutions for modern businesses and professionals
          </h2>


          <p className="mt-6 text-lg leading-8 text-gray-600">
            WZ Financial Group provides digital solutions, operational support
            and technology-enabled workflows designed to improve efficiency,
            organization and business processes.
          </p>

        </div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    transition
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >

                  <Icon size={25}/>

                </div>


                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>


                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>


                <a
                  href="/contact"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-600
                    transition-all
                    hover:gap-3
                  "
                >
                  Learn More

                  <ArrowRight size={16}/>

                </a>

              </div>

            );

          })}

        </div>


        {/* CTA */}

        <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Need technology or operational support?
          </h3>


          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Explore how WZ Financial Group can help improve workflows,
            digital processes and operational efficiency.
          </p>


          <a
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              hover:bg-blue-700
              transition
            "
          >

            Contact Us

            <ArrowRight size={18}/>

          </a>

        </div>


      </div>

    </section>
  );
}