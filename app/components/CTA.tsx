import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-600 py-24">

      <div className="max-w-5xl mx-auto px-8 text-center text-white">


        <div className="flex justify-center mb-6">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/10
            "
          >
            <Sparkles size={28} />
          </div>

        </div>



        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Ready to simplify your financial journey?
        </h2>



        <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
          Whether you need financial guidance, digital solutions or
          professional support, WZ Financial Group provides practical
          solutions designed around your goals.
        </p>



        <div className="flex flex-wrap justify-center gap-5 mt-10">


          <a
            href="/contact"
            className="
              bg-white
              text-blue-700
              px-8
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              gap-2
              transition
              hover:bg-gray-100
            "
          >
            Get Started

            <ArrowRight size={18} />

          </a>



          <a
            href="/services"
            className="
              border
              border-white/50
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
              hover:bg-white
              hover:text-blue-700
            "
          >
            Explore Services
          </a>


        </div>


      </div>

    </section>
  );
}