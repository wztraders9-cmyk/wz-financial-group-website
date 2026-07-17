import {
  Search,
  Lightbulb,
  Headphones,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Needs",
    text: "We review your goals, challenges and requirements to understand the right financial support approach.",
    icon: Search,
  },
  {
    number: "02",
    title: "Create A Solution",
    text: "We develop practical guidance and digital solutions designed around your specific situation.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Provide Ongoing Support",
    text: "Our team helps with implementation, organization and continued assistance when needed.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "Build Long-Term Value",
    text: "We focus on trusted relationships and solutions that support future financial goals.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24 text-white">

      <div className="max-w-7xl mx-auto px-8">


        <div className="max-w-3xl mb-16">

          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Our Process
          </p>


          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            A structured approach built around your goals
          </h2>


          <p className="text-gray-400 mt-6 text-lg leading-8">
            We combine professional guidance, technology and ongoing support
            to deliver a clear and reliable client experience.
          </p>

        </div>



        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="
                  rounded-2xl
                  bg-slate-800
                  p-8
                  border
                  border-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-4xl font-bold text-blue-400">
                    {step.number}
                  </span>


                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-600
                    "
                  >
                    <Icon size={22} />
                  </div>

                </div>



                <h3 className="text-xl font-semibold mt-8">
                  {step.title}
                </h3>


                <p className="text-gray-400 mt-4 leading-7">
                  {step.text}
                </p>


              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}