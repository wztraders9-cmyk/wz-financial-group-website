import {
  UserRound,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Individual Focus",
    description:
      "Solutions designed around personal financial needs, everyday challenges and long-term goals.",
    icon: UserRound,
  },
  {
    title: "Digital Approach",
    description:
      "Modern technology solutions that help simplify, organize and improve financial activities.",
    icon: MonitorSmartphone,
  },
  {
    title: "Professional Standards",
    description:
      "Responsible practices focused on security, privacy and trusted client relationships.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              About WZ Financial Group
            </span>


            <h2 className="mt-6 text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Making financial services simpler through support and technology
            </h2>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              WZ Financial Group provides modern financial guidance, digital
              solutions and professional support designed for individuals,
              professionals, creators and growing businesses.
            </p>


            <p className="mt-5 text-lg leading-8 text-gray-600">
              We focus on creating practical solutions that help people
              organize financial activities, access better tools and manage
              everyday financial needs with confidence.
            </p>


          </div>



          {/* Right */}

          <div className="space-y-5">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-6
                    transition-all
                    duration-300
                    hover:shadow-lg
                  "
                >

                  <div className="flex gap-5 items-start">


                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <Icon size={24}/>
                    </div>


                    <div>

                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>


                      <p className="mt-2 text-gray-600 leading-7">
                        {item.description}
                      </p>

                    </div>


                  </div>

                </div>

              );

            })}

          </div>


        </div>

      </div>

    </section>
  );
}