import {
  ShieldCheck,
  Workflow,
  Smartphone,
  Handshake,
} from "lucide-react";

const features = [
  {
    title: "Reliable Processes",
    text: "Structured workflows and operational support designed to help clients manage activities more efficiently.",
    icon: ShieldCheck,
  },
  {
    title: "Practical Solutions",
    text: "Technology and support services built around real operational needs and business requirements.",
    icon: Workflow,
  },
  {
    title: "Digital-First Approach",
    text: "Modern technology solutions that simplify processes, improve organization and support better experiences.",
    icon: Smartphone,
  },
  {
    title: "Trusted Relationships",
    text: "Focused on professionalism, transparency and long-term relationships with clients and partners.",
    icon: Handshake,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">


        <div className="max-w-3xl mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Why Choose WZ Financial Group
          </p>


          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-4">
            Technology-driven solutions built around your needs
          </h2>


          <p className="text-gray-600 text-lg leading-8 mt-6">
            We combine digital solutions, operational expertise and
            professional support to help individuals, professionals and
            businesses improve efficiency and manage modern workflows.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
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
                  "
                >
                  <Icon size={25} />
                </div>


                <h3 className="text-2xl font-bold text-slate-900 mt-6">
                  {item.title}
                </h3>


                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>


              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}