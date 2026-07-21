"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const [loading,setLoading]=useState(false);
  const [status,setStatus]=useState<{type:"success"|"error";message:string}|null>(null);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try{
      const res=await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });
      const data=await res.json();
      if(!res.ok) throw new Error(data.error||"Failed to send.");
      setStatus({type:"success",message:"Thank you! Your enquiry has been sent."});
      setForm({name:"",email:"",subject:"",message:""});
    }catch(err:any){
      setStatus({type:"error",message:err.message});
    }finally{
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="uppercase tracking-[0.25em] text-[#c28b3c] font-semibold text-sm">CONTACT US</p>
          <h1 className="mt-6 max-w-4xl text-5xl lg:text-6xl font-bold tracking-tight text-[#0f3d5e]">Let's discuss your procurement request</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Tell us what you are looking for and we will review your request to discuss whether Elite Source Point can assist with sourcing, purchasing coordination or logistics support.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#0f3d5e]">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share details about the product or service you need assistance with. We will review your request and provide guidance on the next steps.
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold text-[#0f3d5e]">Email</h3>
                <p className="mt-2 text-slate-600">info@elitesourcepoint.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#0f3d5e]">Response Time</h3>
                <p className="mt-2 text-slate-600">We aim to respond to enquiries within one business day.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#0f3d5e]" />
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#0f3d5e]" />
              <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What can we help you with?" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#0f3d5e]" />
              <textarea name="message" rows={6} value={form.message} onChange={handleChange} required placeholder="Tell us about your request..." className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#0f3d5e]" />
              {status && <div className={`rounded-xl p-4 text-sm ${status.type==="success"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`}>{status.message}</div>}
              <button disabled={loading} className="w-full rounded-xl bg-[#0f3d5e] py-4 font-semibold text-white transition hover:bg-[#0c314c] disabled:opacity-60">
                {loading?"Sending...":"Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
