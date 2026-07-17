import {
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

const complianceAreas = [
  {
    title: "Client Verification",
    description:
      "Structured onboarding processes help maintain accurate client information and support responsible service delivery.",
    icon: UserCheck,
  },
  {
    title: "Risk Management",
    description:
      "Operational controls and monitoring processes help identify, review and manage potential business risks.",
    icon: AlertTriangle,
  },
  {
    title: "Data Security",
    description:
      "Client information and operational records are managed through secure systems and controlled access practices.",
    icon: ShieldCheck,
  },
  {
    title: "Record Management",
    description:
      "Organized documentation supports transparency, accountability and efficient business operations.",
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
          Responsible operations built on transparency and security
        </h1>


        <p className="text-gray-600 text-xl mt-8 max-w-3xl leading-9">
          WZ Financial Group follows structured processes designed to support
          secure client management, operational transparency and responsible
          business practices.
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
            Building trust through structured processes
          </h2>


          <p className="text-gray-600 mt-6 text-lg leading-8">
            We focus on maintaining organized systems, responsible
            operations and transparent processes that support long-term
            relationships with clients and partners.
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
            Security-focused financial practices
          </div>


        </div>


      </section>


    </main>
  );
}