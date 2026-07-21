export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">


        <div className="grid gap-10 md:grid-cols-3">


          {/* Brand */}

          <div>

            <h3 className="text-2xl font-extrabold tracking-tight text-[#0f3d5e]">
              Elite Source Point
            </h3>


            <div className="mt-2 h-0.5 w-12 bg-[#c28b3c]" />


            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">

              Procurement, sourcing and logistics support helping individuals
              coordinate product research, purchasing and delivery arrangements
              through a structured process.

            </p>

          </div>




          {/* Services */}

          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0f3d5e]">
              Services
            </h4>


            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              <li>
                Product Sourcing
              </li>

              <li>
                Supplier Research
              </li>

              <li>
                Purchase Coordination
              </li>

              <li>
                Logistics Support
              </li>

            </ul>

          </div>





          {/* Contact */}

          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0f3d5e]">
              Contact
            </h4>


            <div className="mt-5 space-y-3 text-sm text-slate-600">

              <p>
                info@elitesourcepoint.com
              </p>


            </div>

          </div>


        </div>





        {/* Bottom */}

        <div
          className="
            mt-10
            border-t
            border-slate-200
            pt-6
            text-sm
            text-slate-500
            flex
            flex-col
            gap-3
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Elite Source Point. All rights reserved.
            <span className="mx-2 text-slate-300">|</span>
            Operated by WZ Traders Pty Ltd
          </p>


          <div className="flex gap-5">

            <a
              href="/privacy"
              className="transition hover:text-[#0f3d5e]"
            >
              Privacy Policy
            </a>


            <a
              href="/contact"
              className="transition hover:text-[#0f3d5e]"
            >
              Contact
            </a>

          </div>


        </div>


      </div>

    </footer>
  );
}