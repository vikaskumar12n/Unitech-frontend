import { FaLocationArrow } from "react-icons/fa";
 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const GuidingPolicies = () => {
     useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();  
  }, []);
  const policyLinks = [
    {
      title: "Policy on Environmental Sustainability and Green Energy Initiatives",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Employee Code of Conduct and Workplace Ethics Policy",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Corporate Social Responsibility and Community Development Guidelines",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Data Protection and Information Security Compliance Policy",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Equal Employment Opportunity and Diversity Inclusion Strategy",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Supplier Code of Conduct and Ethical Sourcing Standards",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Health, Safety, and Environment Management Framework",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Anti-Corruption and Anti-Bribery Compliance Policy",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Whistleblower Protection and Grievance Redressal Mechanism",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Customer Data Privacy and Confidentiality Assurance Policy",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Risk Management and Internal Audit Control Procedures",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Remote Work and Flexible Working Hours Policy Framework",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Performance Evaluation and Employee Recognition Programs",
      url: "/E Call Letter.pdf",
    },
    {
      title: "Corporate Governance and Board Accountability Standards",
      url: "/E Call Letter.pdf",
    },
  ];

  return (
    <>
        <div className="relative w-full h-[500px] overflow-hidden">
 
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/hero-video.webm" type="video/webm" />
    <source src="/hero-video.mp4" type="video/mp4" />
    
  </video>
 
  <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">
              GUIDING POLICIES
            </h2>
          </div>
        </div>
      </div>
 <nav className="flex items-center p-4 bg-gray-100 text-gray-500">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900">About US</span>
    </nav>
      <div className="px-8 py-10 flex flex-col items-center mb-30" data-aos="fade-right" >
        <div className="flex flex-col gap-4 w-full md:w-3/4 lg:w-2/3"  >
          {policyLinks.map((policy, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-xs text-blue-600">
                <FaLocationArrow />
              </span>
              <a
                href={policy.url}
                target="_blank"      
                rel="noopener noreferrer"  
                className="text-blue-600 hover:text-blue-900 hover:underline text-xs text-left"
              >
                {policy.title}
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default GuidingPolicies;
