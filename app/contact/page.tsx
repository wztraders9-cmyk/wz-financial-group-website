"use client";
import { useState } from "react";
import {
  MessageCircle,
  BriefcaseBusiness,
  Smartphone,
  UserRound,
} from "lucide-react";

const contactOptions = [
  {
    title: "Client Support",
    text: "Questions about services, financial support or getting started.",
    icon: UserRound,
  },
  {
    title: "Business Enquiries",
    text: "Discuss partnerships, business solutions and opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Platform Support",
    text: "Information about digital solutions and technology services.",
    icon: Smartphone,
  },
];

export default function ContactPage() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (response.ok) {
      setStatus("Thank you! Your enquiry has been sent.");
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }
  return (
    <main className="min-h-screen bg-white">


      <section className="max-w-7xl mx-auto px-8 py-24">


        <div className="grid lg:grid-cols-2 gap-16 items-start">



          {/* Left */}

          <div>


            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Contact Us
            </p>


            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mt-6">
              Let's discuss how we can support your goals
            </h1>


            <p className="text-gray-600 text-lg mt-8 leading-8">
              Whether you need financial guidance, digital solutions or
              professional support, WZ Financial Group is ready to help.
            </p>




            <div className="mt-10 space-y-5">


              {contactOptions.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-slate-200
                      p-6
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <Icon size={24}/>
                    </div>


                    <div>

                      <h3 className="font-bold text-slate-900 text-lg">
                        {item.title}
                      </h3>


                      <p className="text-gray-600 mt-1">
                        {item.text}
                      </p>

                    </div>


                  </div>

                );

              })}


            </div>


          </div>





          {/* Form */}

          <div
            className="
              rounded-3xl
              bg-slate-900
              p-10
              shadow-xl
            "
          >


            <div className="flex items-center gap-3 text-white">

              <MessageCircle size={25}/>

              <h2 className="text-2xl font-bold">
                Send an enquiry
              </h2>

            </div>




            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

  <input
    type="text"
    placeholder="Full Name"
    value={form.name}
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
    required
    className="
      w-full
      rounded-xl
      bg-white
      px-5
      py-4
      text-slate-900
      outline-none
    "
  />

  <input
    type="email"
    placeholder="Email Address"
    value={form.email}
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
    required
    className="
      w-full
      rounded-xl
      bg-white
      px-5
      py-4
      text-slate-900
      outline-none
    "
  />

  <input
    type="text"
    placeholder="Service Interest"
    value={form.service}
    onChange={(e) =>
      setForm({ ...form, service: e.target.value })
    }
    className="
      w-full
      rounded-xl
      bg-white
      px-5
      py-4
      text-slate-900
      outline-none
    "
  />

  <textarea
    placeholder="Your message"
    rows={5}
    value={form.message}
    onChange={(e) =>
      setForm({ ...form, message: e.target.value })
    }
    required
    className="
      w-full
      rounded-xl
      bg-white
      px-5
      py-4
      text-slate-900
      outline-none
    "
  />

  <button
    type="submit"
    disabled={loading}
    className="
      w-full
      rounded-xl
      bg-blue-600
      py-4
      font-semibold
      text-white
      transition
      hover:bg-blue-700
      disabled:opacity-60
    "
  >
    {loading ? "Sending..." : "Submit Enquiry"}
  </button>

  {status && (
    <p className="text-center text-white">
      {status}
    </p>
  )}

</form>


          </div>



        </div>


      </section>


    </main>
  );
}