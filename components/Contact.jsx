import { Mail, Phone, MapPin } from "lucide-react";
import Title from "./Title";

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-20 relative z-50 text-white">
      <div className="max-width">
        
        <div className="text-left md:text-center">
          <Title text="Contact" />
          <h2 className="title">
            Let's <span className="text-[#31F900] font-bold">Connect</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mt-6 md:mt-10">

          <div className="space-y-6">
            <a
              href="mailto:muhammadzohaibranjha42@gmail.com"
              className="flex items-center gap-2 md:gap-4"
            >
              <div className="p-3 bg-[#32f9004d] rounded-xl text-[#31F900]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#32f900]">Email</h4>
                <p className="text-sm md:text-base">muhammadzohaibranjha42@gmail.com</p>
              </div>
            </a>

            <a href="tel:+923705308459" className="flex items-center gap-2 md:gap-4">
              <div className="p-3 bg-[#32f9004d] rounded-xl text-[#31F900]">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#32f900]">Phone</h4>
                <p>+92 370 5308459</p>
              </div>
            </a>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="p-3 bg-[#32f9004d] rounded-xl text-[#31F900]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#32f900]">Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <form className="bg-black border border-[rgba(255,255,255,0.5)] rounded-lg text-white p-3 md:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#31F900] text-black py-3 rounded-md font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
