import {
  Search,
  Lightbulb,
  Headphones,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    text: "We review your objectives, challenges and operational needs to understand the right approach.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design Solutions",
    text: "We develop practical technology solutions and workflows designed around your requirements.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Implement & Support",
    text: "We assist with implementation, organization and ongoing operational support when required.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "Create Long-Term Value",
    text: "We focus on reliable solutions that improve efficiency and support future growth.",
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
            A structured approach to better operations
          </h2>


          <p className="text-gray-400 mt-6 text-lg leading-8">
            We combine technology, operational expertise and ongoing support
            to deliver practical solutions built around client requirements.
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