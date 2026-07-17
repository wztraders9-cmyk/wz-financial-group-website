export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              WZ Financial Group
            </h3>

            <p className="mt-5 leading-7">
  Digital solutions, operational support and financial technology
  services designed for individuals, professionals and businesses.
</p>

<p className="mt-4 text-sm text-gray-400 leading-6">
  WZ Financial Group provides technology solutions and operational
  support services. We do not provide personal financial product
  advice, investment recommendations or asset management services.
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

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              <li>Financial Advisory</li>
              <li>Financial Operations Support</li>
              <li>Identity Verification Support</li>
              <li>Risk & Compliance Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} WZ Financial Group. All rights reserved.
          </p>

          {/* Center */}
<p className="text-sm text-gray-500 text-center">
  Operated by{" "}
  <span className="font-medium text-gray-300">
    WZ Traders Pty Ltd
  </span>
  <br />
  ACN: 683 347 579 · ABN: 27 683 347 579
  <br />
  Australia
</p>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>

            <span className="text-slate-600">•</span>

            <a href="/terms" className="hover:text-white transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}