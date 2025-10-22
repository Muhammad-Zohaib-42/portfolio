import CertificateBox from "./CertificateBox";
import Title from "./Title";

export default function Certificates() {
  return (
    <section id="certificates" className="py-10 md:py-20 relative z-50">
        <div className="max-width">
            <Title text="My Certificates" />
            <h2 className="title">Professional <span className="text-[#31F900] font-bold">Certificates</span></h2>  
            <CertificateBox />
        </div>
    </section>
  )
}
