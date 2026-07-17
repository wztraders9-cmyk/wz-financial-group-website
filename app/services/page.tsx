import {
  ChartLine,
  WalletCards,
  Smartphone,
  ShieldCheck,
  MonitorSmartphone,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Financial Guidance",
    description:
      "Personal financial support to help individuals understand options, organize finances and make informed decisions.",
    icon: ChartLine,
  },
  {
    title: "Personal Financial Support",
    description:
      "Assistance with financial administration, documentation and everyday financial activities.",
    icon: WalletCards,
  },
  {
    title: "Digital Financial Solutions",
    description:
      "Technology-driven solutions designed to make financial activities simpler, faster and more accessible.",
    icon: Smartphone,
  },
  {
    title: "Financial Security & Protection",
    description:
      "Guidance on secure financial practices, protecting personal information and reducing risks associated with digital financial activities.",
    icon: ShieldCheck,
  },
  {
    title: "Creator & Digital Professional Support",
    description:
      "Financial and operational support for creators, freelancers and digital professionals managing modern income streams.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Support Solutions",
    description:
      "Financial and operational support services for entrepreneurs and growing businesses.",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">


      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">


        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Our Services
        </p>


        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mt-6 max-w-5xl">
          Financial solutions designed around modern needs
        </h1>


        <p className="text-gray-600 text-xl mt-8 max-w-3xl leading-9">
          WZ Financial Group provides financial guidance, digital solutions
          and operational support designed for individuals, professionals,
          creators and businesses.
        </p>


      </section>





      {/* Services */}

      <section className="bg-slate-50 py-24">


        <div className="max-w-7xl mx-auto px-8">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {services.map((service) => {

              const Icon = service.icon;

              return (

                <div
                  key={service.title}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
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
                    "
                  >
                    <Icon size={25}/>
                  </div>


                  <h2 className="text-xl font-bold text-slate-900 mt-6">
                    {service.title}
                  </h2>


                  <p className="text-gray-600 mt-4 leading-7">
                    {service.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>


      </section>





      {/* CTA */}

      <section className="py-20">


        <div className="max-w-4xl mx-auto px-8 text-center">


          <h2 className="text-4xl font-bold text-slate-900">
            Solutions designed around your needs
          </h2>


          <p className="text-gray-600 mt-5 text-lg leading-8">
            Whether you are seeking personal financial support or looking
            for operational solutions, WZ Financial Group provides structured
            services designed around your goals.
          </p>


          <a
            href="/contact"
            className="
              inline-flex
              mt-8
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            Get Started
          </a>


        </div>


      </section>


    </main>
  );
}