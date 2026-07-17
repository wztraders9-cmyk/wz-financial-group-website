export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}

          <div>

            <h3 className="text-2xl font-bold text-white">
              WZ Financial Group
            </h3>


            <p className="mt-5 leading-7">
              Modern financial guidance, digital solutions and operational
              support designed for individuals, professionals and businesses.
            </p>


          </div>



          {/* Company */}

          <div>

            <h4 className="font-semibold text-white mb-5">
              Company
            </h4>


            <ul className="space-y-3">

              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>




          {/* Solutions */}

          <div>

            <h4 className="font-semibold text-white mb-5">
              Solutions
            </h4>


            <ul className="space-y-3">

              <li>Financial Guidance</li>

              <li>Digital Financial Solutions</li>

              <li>Professional Support</li>

              <li>Business Solutions</li>

            </ul>


          </div>




          {/* Trust */}

          <div>

            <h4 className="font-semibold text-white mb-5">
              Trust & Compliance
            </h4>


            <p className="leading-7">
              WZ Traders Pty Ltd
            </p>


            <p className="mt-2">
              Australia
            </p>


            <p className="mt-3 text-sm text-gray-400">
              Professional standards and secure operations.
            </p>


          </div>



        </div>





        <div
          className="
            border-t
            border-slate-800
            mt-12
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
          "
        >

          <p>
            © {new Date().getFullYear()} WZ Financial Group.
            All rights reserved.
          </p>


          <div className="flex gap-4">

            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>

            <span>•</span>

            <a href="/terms" className="hover:text-white transition">
              Terms of Use
            </a>

          </div>


        </div>


      </div>

    </footer>
  );
}