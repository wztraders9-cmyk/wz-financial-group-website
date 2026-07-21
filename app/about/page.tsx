export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-gradient-to-b from-slate-50 to-white py-24">

        <div className="max-w-6xl mx-auto px-8">

          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold">
            ABOUT ELITE SOURCE POINT
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl lg:text-6xl font-bold tracking-tight text-[#0f3d5e]">
            Procurement support designed around your needs
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Elite Source Point provides procurement, sourcing and logistics
            support for individuals seeking assistance with product research,
            purchasing coordination and delivery arrangements.
          </p>

        </div>

      </section>



      {/* Who We Are */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-start">


            <div>

              <h2 className="text-4xl font-bold text-[#0f3d5e]">
                Who we are
              </h2>


              <p className="mt-8 text-lg leading-8 text-slate-600">

                Elite Source Point helps individuals navigate the
                procurement process by providing structured support from
                initial requirements through purchase coordination and
                logistics assistance.

              </p>


              <p className="mt-6 text-lg leading-8 text-slate-600">

                We focus on understanding each request, reviewing available
                options and assisting clients through a clear and organised
                process.

              </p>

            </div>



            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10">

              <h3 className="text-2xl font-bold text-[#0f3d5e]">
                Our approach
              </h3>


              <ul className="mt-8 space-y-5 text-slate-700">

                <li>
                  <span className="text-[#c28b3c] font-bold">✓</span>{" "}
                  Understand your product requirements
                </li>

                <li>
                  <span className="text-[#c28b3c] font-bold">✓</span>{" "}
                  Review sourcing options and availability
                </li>

                <li>
                  <span className="text-[#c28b3c] font-bold">✓</span>{" "}
                  Assist with purchase coordination
                </li>

                <li>
                  <span className="text-[#c28b3c] font-bold">✓</span>{" "}
                  Support logistics arrangements
                </li>

                <li>
                  <span className="text-[#c28b3c] font-bold">✓</span>{" "}
                  Maintain clear communication throughout
                </li>

              </ul>

            </div>


          </div>

        </div>

      </section>



      {/* Mission */}

      <section className="bg-[#0f3d5e] py-20">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-bold text-white">
            Making procurement simpler
          </h2>


          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-slate-200">

            Our goal is to provide practical procurement support that helps
            individuals better manage product research, purchasing decisions
            and coordination requirements.

          </p>

        </div>

      </section>


    </main>
  );
}