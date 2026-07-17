import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  Smartphone,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

      <div className="max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-semibold">
              Digital Solutions & Operational Support
            </span>


            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Technology solutions that simplify modern financial operations.
            </h1>


            <p className="mt-8 text-xl leading-9 text-gray-600">
              WZ Financial Group provides digital solutions, operational
              support and technology-enabled workflows designed for
              individuals, professionals, creators and businesses.
            </p>


            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/contact"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition
                "
              >
                Get Started

                <ArrowRight size={18} />

              </a>


              <a
                href="/services"
                className="
                  border
                  border-slate-300
                  hover:border-blue-600
                  hover:text-blue-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Explore Services
              </a>

            </div>

          </div>


          {/* Right */}

          <div>

            <div className="bg-slate-900 rounded-[32px] p-10 shadow-2xl">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold text-white">
                  Why WZ Financial Group
                </h2>

                <ShieldCheck className="text-blue-400" size={28} />

              </div>


              <p className="text-gray-400 mt-3">
                Practical technology and operational solutions built for
                modern businesses and professionals.
              </p>


              <div className="mt-8 space-y-5">


                <div className="bg-slate-800 rounded-2xl p-5 flex items-center gap-5">

                  <div className="bg-blue-600 rounded-xl p-3">

                    <Workflow className="text-white" size={24} />

                  </div>


                  <div>

                    <h3 className="text-white font-semibold">
                      Operational Support
                    </h3>


                    <p className="text-gray-400 text-sm mt-1">
                      Structured workflows that improve efficiency.
                    </p>

                  </div>

                </div>



                <div className="bg-slate-800 rounded-2xl p-5 flex items-center gap-5">

                  <div className="bg-blue-600 rounded-xl p-3">

                    <Smartphone className="text-white" size={24} />

                  </div>


                  <div>

                    <h3 className="text-white font-semibold">
                      Digital Solutions
                    </h3>


                    <p className="text-gray-400 text-sm mt-1">
                      Technology designed to simplify processes.
                    </p>

                  </div>

                </div>



                <div className="bg-slate-800 rounded-2xl p-5 flex items-center gap-5">

                  <div className="bg-blue-600 rounded-xl p-3">

                    <Users className="text-white" size={24} />

                  </div>


                  <div>

                    <h3 className="text-white font-semibold">
                      Professional Support
                    </h3>


                    <p className="text-gray-400 text-sm mt-1">
                      Solutions designed around client requirements.
                    </p>

                  </div>

                </div>


              </div>


            </div>

          </div>


        </div>

      </div>

    </section>
  );
}