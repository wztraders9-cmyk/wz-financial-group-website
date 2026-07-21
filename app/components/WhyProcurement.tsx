import {
  Clock3,
  Users,
  FileCheck,
  Truck,
} from "lucide-react";


const benefits = [
  {
    title: "Save Valuable Time",
    description:
      "Reduce the time spent researching products, reviewing options and coordinating purchasing details.",
    icon: Clock3,
  },
  {
    title: "Organised Communication",
    description:
      "We help coordinate discussions and keep procurement information organised throughout the process.",
    icon: Users,
  },
  {
    title: "Structured Procurement",
    description:
      "A clear process helps organise product research, supplier discussions and purchase coordination.",
    icon: FileCheck,
  },
  {
    title: "Delivery Coordination",
    description:
      "We assist with logistics updates and coordination after purchase arrangements are made.",
    icon: Truck,
  },
];


export default function WhyProcurement() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-8">


        <div className="text-center max-w-3xl mx-auto">


          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold">
            WHY USE PROCUREMENT SUPPORT
          </p>


          <h2 className="mt-5 text-5xl font-bold text-[#0f3d5e]">
            Focus on what you need.
            <br />
            We help organise the process.
          </h2>


          <p className="mt-8 text-lg text-slate-600 leading-8">

            Purchasing products can involve research, communication and
            coordination. Elite Source Point provides structured support
            to help simplify the procurement journey.

          </p>


        </div>





        <div className="grid lg:grid-cols-2 gap-8 mt-20">


          {benefits.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  p-10
                  transition
                  hover:shadow-lg
                "
              >


                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-100
                    mb-8
                  "
                >

                  <Icon
                    className="text-[#0f3d5e]"
                    size={30}
                  />

                </div>




                <h3 className="text-3xl font-bold text-[#0f3d5e]">
                  {item.title}
                </h3>


                <p className="mt-5 text-slate-600 leading-8">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}