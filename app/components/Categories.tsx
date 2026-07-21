import {
  Sofa,
  Car,
  Cpu,
  Wrench,
  Package,
} from "lucide-react";


export default function Categories() {

  const categories = [

    {
      title: "Furniture & Home Items",
      description:
        "Support with sourcing furniture, home items and related products based on your requirements.",
      icon: Sofa,
    },

    {
      title: "Vehicle Parts & Accessories",
      description:
        "Assistance reviewing options for vehicle parts and related accessories.",
      icon: Car,
    },

    {
      title: "Electronics & Technology",
      description:
        "Support with product research and purchase coordination for electronics and technology items.",
      icon: Cpu,
    },

    {
      title: "Specialty Products",
      description:
        "Support with specific product requests where additional research and coordination may be required.",
      icon: Wrench,
    },

    {
      title: "Other Requests",
      description:
        "Have a specific requirement? We can review your request and discuss whether we can assist.",
      icon: Package,
    },

  ];


  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="text-center max-w-3xl mx-auto mb-16">


          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold text-sm">
            WHAT WE CAN HELP WITH
          </p>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0f3d5e]">
            Supporting a range of procurement needs
          </h2>


          <p className="mt-6 text-lg text-slate-600 leading-8">

            We assist individuals with product research, purchasing
            coordination and procurement support based on their specific needs.

          </p>


        </div>




        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">


          {categories.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  p-8
                  transition
                  hover:shadow-lg
                "
              >


                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    mb-6
                  "
                >

                  <Icon
                    className="text-[#0f3d5e]"
                    size={28}
                  />

                </div>




                <h3 className="text-xl font-bold text-[#0f3d5e]">
                  {item.title}
                </h3>



                <p className="mt-4 text-slate-600 leading-7">
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