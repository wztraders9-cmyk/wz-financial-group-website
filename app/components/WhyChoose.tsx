import {
  ShieldCheck,
  UserRound,
  Smartphone,
  Handshake,
} from "lucide-react";

const features = [
  {
    title: "Trusted Financial Support",
    text: "Providing practical guidance and support designed to help individuals and professionals manage financial activities with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Solutions",
    text: "Understanding each client's goals and creating solutions that fit their unique financial needs and circumstances.",
    icon: UserRound,
  },
  {
    title: "Digital-First Approach",
    text: "Using modern technology solutions to simplify processes, improve accessibility and support better financial experiences.",
    icon: Smartphone,
  },
  {
    title: "Long-Term Relationships",
    text: "Focused on professionalism, transparency and building trusted relationships with clients and partners.",
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
            A modern approach to financial support
          </h2>


          <p className="text-gray-600 text-lg leading-8 mt-6">
            We combine professional guidance, digital solutions and
            personalized support to help individuals, professionals and
            businesses navigate today's financial environment.
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