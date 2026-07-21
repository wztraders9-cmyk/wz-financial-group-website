import {
  Search,
  FileSearch,
  ShoppingCart,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We begin by understanding your product requirements, specifications and preferences.",
    icon: Search,
  },
  {
    number: "02",
    title: "Research & Review",
    description:
      "We review available options and supplier information to support your purchasing decisions.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Purchase Coordination",
    description:
      "We assist with communication, quotations and documentation throughout the purchasing process.",
    icon: ShoppingCart,
  },
  {
    number: "04",
    title: "Logistics Support",
    description:
      "We assist with logistics coordination, shipment communication and delivery arrangements.",
    icon: Truck,
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">


        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold">
            OUR PROCESS
          </p>


          <h2 className="mt-5 text-5xl font-bold text-[#0f3d5e]">
            How we support your procurement journey
          </h2>


          <p className="mt-8 text-lg text-slate-600 leading-8">
            Every request is different. Our structured approach helps
            organise the sourcing and purchasing process with clear
            communication and practical support.
          </p>

        </div>



        <div className="grid lg:grid-cols-4 gap-8">


          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  rounded-3xl
                  bg-white
                  p-8
                  border
                  border-slate-200
                  transition
                  hover:shadow-lg
                "
              >

                <div className="flex justify-between items-center">


                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-100
                    "
                  >
                    <Icon
                      className="text-[#0f3d5e]"
                      size={28}
                    />
                  </div>


                  <span className="text-4xl font-bold text-slate-200">
                    {step.number}
                  </span>


                </div>



                <h3 className="mt-8 text-2xl font-bold text-[#0f3d5e]">
                  {step.title}
                </h3>


                <p className="mt-5 text-slate-600 leading-7">
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