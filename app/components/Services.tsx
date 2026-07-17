import {
  ArrowRight,
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
      "Practical financial support to help individuals understand options, organize their finances and make informed decisions.",
    icon: ChartLine,
  },
  {
    title: "Personal Financial Support",
    description:
      "Assistance with financial administration, documentation and managing everyday financial activities.",
    icon: WalletCards,
  },
  {
    title: "Digital Financial Solutions",
    description:
      "Technology-driven solutions that make financial tasks simpler, more organized and easier to manage.",
    icon: Smartphone,
  },
  {
    title: "Financial Security & Protection",
    description:
      "Support with secure financial practices, privacy awareness and reducing risks in digital financial activities.",
    icon: ShieldCheck,
  },
  {
    title: "Creator & Professional Support",
    description:
      "Operational and financial support for creators, freelancers and digital professionals managing modern income streams.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Support Solutions",
    description:
      "Structured financial and operational support for entrepreneurs and growing businesses.",
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
            Financial solutions designed for modern life
          </h2>


          <p className="mt-6 text-lg leading-8 text-gray-600">
            WZ Financial Group provides financial guidance, digital solutions
            and professional support designed for individuals, professionals,
            creators and businesses.
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
                  href="/services"
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
            Need support with your financial goals?
          </h3>


          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Explore how WZ Financial Group can help simplify financial
            activities through professional support and digital solutions.
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