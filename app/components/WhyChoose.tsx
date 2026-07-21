import {
  Clock,
  FileCheck,
  Headphones,
  MapPin,
} from "lucide-react";


const benefits = [
  {
    title: "Save Valuable Time",
    description:
      "Reduce the time spent searching for products, reviewing options and coordinating purchase details.",
    icon: Clock,
  },
  {
    title: "Structured Process",
    description:
      "A clear approach helps organise requirements, product research and purchasing steps.",
    icon: FileCheck,
  },
  {
    title: "Personal Support",
    description:
      "Receive guidance throughout the procurement process with clear communication and support.",
    icon: Headphones,
  },
  {
    title: "Logistics Coordination",
    description:
      "Support with delivery considerations and coordinating the next steps after purchase.",
    icon: MapPin,
  },
];


export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold text-sm">
              WHY CHOOSE US
            </p>


            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0f3d5e] leading-tight">
              Making procurement easier and more organised
            </h2>


            <p className="mt-6 text-lg text-slate-600 leading-8">

              Finding the right product can require time, research and
              coordination. Elite Source Point provides structured support
              to help simplify the procurement process.

            </p>


          </div>





          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">


            {benefits.map((item) => {

              const Icon = item.icon;


              return (

                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-6
                    transition
                    hover:shadow-lg
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
                      bg-slate-100
                      mb-5
                    "
                  >

                    <Icon
                      size={24}
                      className="text-[#0f3d5e]"
                    />

                  </div>




                  <h3 className="font-bold text-[#0f3d5e]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {item.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>


      </div>

    </section>
  );
}