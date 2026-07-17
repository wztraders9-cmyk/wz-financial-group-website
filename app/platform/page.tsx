import {
  Smartphone,
  ShieldCheck,
  Workflow,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Digital Financial Tools",
    description:
      "Modern technology solutions designed to simplify financial activities and improve accessibility.",
    icon: Smartphone,
  },
  {
    title: "Secure Information Management",
    description:
      "Responsible systems designed to support secure handling of financial information and records.",
    icon: ShieldCheck,
  },
  {
    title: "Automation & Efficiency",
    description:
      "Technology-driven workflows that help reduce complexity and improve operational efficiency.",
    icon: Workflow,
  },
  {
    title: "Connected Financial Experience",
    description:
      "Integrated solutions that create a smoother experience for individuals, professionals and businesses.",
    icon: BarChart3,
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white">


      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          WZ Financial Platform
        </p>


        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mt-6 max-w-4xl">
          Modern financial technology built for today's needs
        </h1>


        <p className="text-gray-600 text-xl mt-8 max-w-3xl leading-9">
          WZ Financial Group combines digital tools, secure systems and
          technology-driven solutions to support efficient and reliable
          financial experiences.
        </p>


      </section>




      {/* Features */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-8">


          <div className="grid md:grid-cols-2 gap-8">


            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
                    p-8
                    transition-all
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


                  <h2 className="text-2xl font-bold text-slate-900 mt-6">
                    {feature.title}
                  </h2>


                  <p className="text-gray-600 mt-4 leading-7">
                    {feature.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>

      </section>





      {/* Platform Preview */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-8">


          <h2 className="text-4xl font-bold text-center text-slate-900">
            A connected financial ecosystem
          </h2>


          <p className="text-center text-gray-600 mt-5 text-lg">
            Technology designed to support organization, security and
            efficient financial operations.
          </p>




          <div className="mt-12 bg-slate-900 rounded-3xl p-10 shadow-2xl">


            <div className="grid md:grid-cols-4 gap-5">


              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <p className="text-gray-400 text-sm">
                  Financial Data
                </p>
                <p className="font-bold text-xl mt-2">
                  Organized
                </p>
              </div>


              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <p className="text-gray-400 text-sm">
                  Security
                </p>
                <p className="font-bold text-xl mt-2">
                  Protected
                </p>
              </div>


              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <p className="text-gray-400 text-sm">
                  Workflows
                </p>
                <p className="font-bold text-xl mt-2">
                  Efficient
                </p>
              </div>


              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <p className="text-gray-400 text-sm">
                  Insights
                </p>
                <p className="font-bold text-xl mt-2">
                  Accessible
                </p>
              </div>


            </div>


          </div>


        </div>

      </section>


    </main>
  );
}