import {
  Search,
  Users,
  ShoppingCart,
  Truck,
  ClipboardCheck,
} from "lucide-react";


const services = [
  {
    title: "Product Sourcing",
    description:
      "Assistance identifying suitable products based on your requirements and preferences.",
    icon: Search,
  },
  {
    title: "Supplier Research",
    description:
      "Support reviewing potential suppliers and gathering relevant product information.",
    icon: Users,
  },
  {
    title: "Purchase Coordination",
    description:
      "Help coordinating purchasing steps, communication and order requirements.",
    icon: ShoppingCart,
  },
  {
    title: "Logistics Support",
    description:
      "Assistance coordinating delivery arrangements and logistics considerations.",
    icon: Truck,
  },
  {
    title: "Custom Procurement Support",
    description:
      "For specific requests, we review your needs and discuss possible procurement options.",
    icon: ClipboardCheck,
  },
];


export default function Services() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[0.25em] text-[#0f3d5e] font-semibold text-sm">
            OUR SERVICES
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5">
            Procurement support designed around your needs
          </h2>


          <p className="mt-6 text-lg text-slate-600 leading-8">

            We help individuals simplify the process of finding products,
            coordinating purchases and managing procurement requirements.

          </p>


        </div>



        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">


          {services.map((service) => {

            const Icon = service.icon;


            return (

              <div
                key={service.title}
                className="rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-lg transition"
              >


                <div className="w-14 h-14 rounded-xl bg-[#e8f1f8] flex items-center justify-center mb-6">

                  <Icon
                    size={28}
                    className="text-[#0f3d5e]"
                  />

                </div>



                <h3 className="text-xl font-bold text-slate-900">

                  {service.title}

                </h3>



                <p className="mt-4 text-slate-600 leading-7">

                  {service.description}

                </p>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}