import { ArrowRight } from "lucide-react";


export default function CTA() {
  return (
    <section className="py-24 bg-[#0f3d5e]">

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">


        <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#c28b3c]" />


        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Need help with a product request?
        </h2>


        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200 leading-8">

          Share your requirements with us and we will review your request
          to discuss whether we can assist with procurement, sourcing
          support and logistics coordination.

        </p>




        <div className="mt-8">

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-8
              py-4
              text-sm
              font-semibold
              text-[#0f3d5e]
              transition
              hover:bg-slate-100
            "
          >

            Start Your Request

            <ArrowRight size={18} />

          </a>


        </div>


      </div>


    </section>
  );
}