import { ArrowRight, CheckCircle } from "lucide-react";


const trustPoints = [
  "Procurement Support",
  "Supplier Coordination",
  "Logistics Assistance",
  "Personal Service",
];


export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">


      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">


        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">



          {/* Left Content */}


          <div>


            <div
              className="
                inline-flex
                items-center
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-medium
                text-[#0f3d5e]
                mb-6
              "
            >
              Procurement • Sourcing • Logistics Support
            </div>




            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                text-[#0f3d5e]
              "
            >

              Procurement made simple.
              <br />

              <span className="text-[#c28b3c]">
                Support throughout the process.
              </span>

            </h1>





            <p className="mt-6 max-w-xl text-base md:text-lg text-slate-600 leading-relaxed">

              Elite Source Point helps individuals source products,
              coordinate purchases and manage logistics through a structured
              procurement process.

            </p>





            <div className="mt-8 flex flex-col sm:flex-row gap-4">


              <a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0f3d5e]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0c314c]
                "
              >

                Start Your Request

                <ArrowRight size={18} />

              </a>




              <a
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-50
                "
              >

                Explore Services

              </a>


            </div>





            <div className="mt-10 grid grid-cols-2 gap-4">


              {trustPoints.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >

                  <CheckCircle
                    size={17}
                    className="text-[#c28b3c]"
                  />

                  {item}

                </div>

              ))}


            </div>



          </div>







          {/* Right Image */}


          <div className="relative">


            <div className="overflow-hidden rounded-3xl shadow-xl">


              <img
                src="/images/hero-procurement.jpg"
                alt="Procurement and sourcing support"
                className="h-[520px] w-full object-cover"
              />


            </div>






            {/* Floating Card */}


            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                rounded-2xl
                bg-white
                p-5
                shadow-lg
              "
            >


              <p className="text-sm font-semibold text-[#0f3d5e]">
                Structured Procurement Support
              </p>



              <p className="mt-2 text-sm text-slate-600">

                Helping organise product research, purchase coordination
                and logistics assistance.

              </p>


            </div>


          </div>



        </div>


      </div>


    </section>
  );
}