import {
  Search,
  FileSearch,
  ShoppingCart,
  Truck,
  PackageSearch,
} from "lucide-react";
import ServiceProcess from "../components/ServiceProcess";

const services = [
  {
    title: "Product Sourcing",
    description:
      "We help review product requirements and identify suitable sourcing options based on your needs.",
    icon: Search,
  },
  {
    title: "Supplier Research",
    description:
      "We assist with reviewing supplier information and available options to support better purchasing decisions.",
    icon: FileSearch,
  },
  {
    title: "Purchase Coordination",
    description:
      "We help coordinate quotations, communication and purchasing activities throughout the process.",
    icon: ShoppingCart,
  },
  {
    title: "Logistics Support",
    description:
      "We assist with logistics coordination, shipment communication and delivery arrangements.",
    icon: Truck,
  },
  {
    title: "Custom Procurement Support",
    description:
      "Have a specific requirement? We review your request and discuss how we may be able to assist.",
    icon: PackageSearch,
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-b from-slate-50 to-white py-24">

        <div className="max-w-6xl mx-auto px-8">

          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold">
            OUR SERVICES
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl lg:text-6xl font-bold tracking-tight text-[#0f3d5e]">
            Procurement support from sourcing to coordination
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Elite Source Point provides procurement, sourcing and logistics
            support to help individuals manage product research, purchasing
            coordination and delivery arrangements.
          </p>

        </div>

      </section>



      {/* Services */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-8">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
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
                      size={30}
                      className="text-[#0f3d5e]"
                    />
                  </div>


                  <h2 className="text-3xl font-bold text-[#0f3d5e]">
                    {service.title}
                  </h2>


                  <p className="mt-6 text-slate-600 leading-8">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>



      {/* Process */}

      <ServiceProcess />



      {/* CTA */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-bold text-[#0f3d5e]">
            Have a product request?
          </h2>


          <p className="mt-6 text-lg text-slate-600 leading-8">

            Submit your requirements and we will review your request and
            discuss whether we can assist with sourcing and procurement
            support.

          </p>


          <a
            href="/contact"
            className="
              inline-block
              mt-10
              rounded-xl
              bg-[#0f3d5e]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#0c314c]
            "
          >
            Contact Us
          </a>

        </div>

      </section>


    </main>
  );
}