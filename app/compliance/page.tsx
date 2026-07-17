import {
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

const complianceAreas = [
  {
    title: "Identity Verification Support",
    description:
      "Digital verification workflows that help organizations maintain accurate records and improve onboarding processes.",
    icon: UserCheck,
  },
  {
    title: "Operational Risk Controls",
    description:
      "Structured workflows and monitoring processes designed to help businesses organize internal operations and identify potential issues.",
    icon: AlertTriangle,
  },
  {
    title: "Data Protection Practices",
    description:
      "Technology solutions that support secure information handling, controlled access and responsible data management.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation & Records",
    description:
      "Organized digital records and workflow systems that support transparency, accountability and efficient operations.",
    icon: FileCheck,
  },
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Compliance & Trust
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mt-6 max-w-4xl">
          Technology-enabled processes that support responsible operations
        </h1>

        <p className="text-gray-600 text-xl mt-8 max-w-3xl leading-9">
          WZ Financial Group develops digital solutions and operational
          workflows that help organizations improve verification processes,
          documentation and internal controls.
        </p>

      </section>


      {/* Compliance Areas */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 gap-8">

            {complianceAreas.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-blue-600
                    "
                  >
                    <Icon size={25}/>
                  </div>


                  <h2 className="text-2xl font-bold text-slate-900 mt-6">
                    {item.title}
                  </h2>


                  <p className="text-gray-600 mt-4 leading-7">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* Approach */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Approach
          </p>


          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Supporting transparent and efficient workflows
          </h2>


          <p className="text-gray-600 mt-6 text-lg leading-8">
            Our focus is building reliable technology solutions and
            operational processes that help clients manage information,
            improve efficiency and maintain organized business practices.
          </p>


          <div
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-blue-50
              px-6
              py-3
              text-blue-700
              font-semibold
            "
          >
            <ShieldCheck size={20}/>
            Security-focused technology solutions
          </div>


          <p className="mt-8 text-sm text-gray-500 leading-7">
            WZ Financial Group provides technology solutions and operational
            support services. We do not provide legal, regulatory or personal
            financial advice.
          </p>


        </div>

      </section>


    </main>
  );
}