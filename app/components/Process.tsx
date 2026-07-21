import {
  MessageSquare,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";


const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We review your product needs, preferences and procurement requirements.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Research & Review",
    description:
      "We explore available options and discuss suitable procurement approaches.",
    icon: Search,
  },
  {
    number: "03",
    title: "Purchase Coordination",
    description:
      "We assist with organising purchase details and coordinating the next steps.",
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Logistics Support",
    description:
      "We help coordinate delivery arrangements and logistics considerations.",
    icon: Truck,
  },
];


export default function Process() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="text-center max-w-3xl mx-auto mb-16">


          <p className="uppercase tracking-[0.25em] text-[#0f3d5e] font-semibold text-sm">
            HOW IT WORKS
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5">
            A simple procurement process
          </h2>


          <p className="mt-6 text-lg text-slate-600 leading-8">

            We follow a structured approach to help make product sourcing
            and purchasing easier to manage.

          </p>


        </div>




        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {steps.map((step) => {

            const Icon = step.icon;


            return (

              <div
                key={step.number}
                className="relative rounded-2xl bg-white border border-slate-200 p-8"
              >


                <div className="flex items-center justify-between mb-6">


                  <div className="w-12 h-12 rounded-xl bg-[#0f3d5e] flex items-center justify-center">

                    <Icon
                      size={24}
                      className="text-white"
                    />

                  </div>


                  <span className="text-4xl font-bold text-slate-100">
                    {step.number}
                  </span>


                </div>



                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>


                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}