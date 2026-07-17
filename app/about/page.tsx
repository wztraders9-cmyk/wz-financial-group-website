import {
  UserRound,
  Lightbulb,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

const values = [
  {
    title: "Client Focus",
    description:
      "We design solutions around the needs of individuals, professionals, creators and businesses.",
    icon: UserRound,
  },
  {
    title: "Modern Innovation",
    description:
      "We use technology and structured processes to create simpler financial experiences.",
    icon: Lightbulb,
  },
  {
    title: "Security & Trust",
    description:
      "We prioritize responsible practices, transparency and protection of client information.",
    icon: ShieldCheck,
  },
  {
    title: "Professional Support",
    description:
      "We provide reliable financial and operational support built around long-term relationships.",
    icon: BriefcaseBusiness,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">


      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          About WZ Financial Group
        </p>


        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mt-6 max-w-5xl">
          Building modern financial experiences through guidance,
          technology and trusted support
        </h1>


        <p className="text-gray-600 text-xl mt-8 max-w-3xl leading-9">
          WZ Financial Group is a modern financial services company helping
          individuals, professionals, creators and businesses manage financial
          activities through practical solutions and digital innovation.
        </p>

      </section>




      {/* Who We Are */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid lg:grid-cols-2 gap-16">


          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Who we are
            </h2>


            <p className="text-gray-600 mt-6 text-lg leading-8">
              WZ Financial Group combines financial guidance, technology
              solutions and operational support to help clients navigate
              today's evolving financial environment.
            </p>


            <p className="text-gray-600 mt-5 text-lg leading-8">
              Our approach focuses on making financial activities more
              organized, accessible and secure through professional support
              and modern digital solutions.
            </p>

          </div>



          <div
            className="
              rounded-3xl
              bg-slate-900
              p-10
              text-white
            "
          >

            <h3 className="text-2xl font-bold">
              Our Focus
            </h3>


            <div className="mt-6 space-y-5 text-gray-300">

              <p>
                Financial guidance and personal support
              </p>

              <p>
                Digital financial solutions
              </p>

              <p>
                Creator and professional support
              </p>

              <p>
                Business and operational solutions
              </p>

            </div>


          </div>


        </div>

      </section>





      {/* Values */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-8">


          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Principles
            </p>


            <h2 className="text-4xl font-bold text-slate-900 mt-4">
              Built on trust, innovation and professionalism
            </h2>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">


            {values.map((value) => {

              const Icon = value.icon;

              return (

                <div
                  key={value.title}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
                    p-7
                    hover:shadow-xl
                    transition
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
                    <Icon size={24}/>
                  </div>


                  <h3 className="text-xl font-bold text-slate-900 mt-6">
                    {value.title}
                  </h3>


                  <p className="text-gray-600 mt-4 leading-7">
                    {value.description}
                  </p>


                </div>

              );

            })}


          </div>


        </div>

      </section>


    </main>
  );
}