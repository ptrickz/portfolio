export interface Project {
  project_name: string;
  project_img: string;
  project_desc: string;
  project_link: string;
}

export interface Cert {
  cert_name: string;
  cert_img: string;
  cert_desc: string;
  cert_link: string;
}

export interface Tech {
  tech_name: string;
  tech_color: string;
}

export const tech: Tech[] = [
  { tech_name: "Flutter", tech_color: "text-blue-400" },
  { tech_name: "ReactJS", tech_color: "text-blue-600" },
  { tech_name: "Svelte", tech_color: "text-orange-400" },
  { tech_name: "Firebase", tech_color: "text-yellow-400" },
  { tech_name: "XCode", tech_color: "text-indigo-400" },
];

export const certs: Cert[] = [
  {
    cert_name: "Flutter",
    cert_img: "images/flutter-testdome.png",
    cert_desc: "TestDome",
    cert_link: "https://testdome.com/certificates/105e9e16bf3e4860a87a760a6b6b86f1",
  },
  {
    cert_name: "Administration Certification",
    cert_img: "images/ivanti.png",
    cert_desc: "Ivanti Neurons for ITSM",
    cert_link: "https://drive.google.com/file/d/1xOy_DnYUILq_H1M0PawomM8FvwvPm0cf/view?usp=sharing",
  },
];

export const projects: Project[] = [
  {
    project_name: "Faculty Guide with Chatbot",
    project_img: "images/faqulty.png",
    project_desc: "A faculty guide application with AI Chatbot (Google Dialogflow)",
    project_link: "https://docs.google.com/presentation/d/110fBZGL08JEzMD7SFXwJWA1Nnon4xdUV/edit?usp=sharing&ouid=115596111486891015734&rtpof=true&sd=true",
  },
  {
    project_name: "Recipe Finder App (WIP)",
    project_img: "images/rf.png",
    project_desc: "A Recipe Finder App using ReactJS & TheMealDB",
    project_link: "https://recipe-finder-hazel-ten.vercel.app/",
  },
  {
    project_name: "IVS300 Mobile Application",
    project_img: "images/ivs.png",
    project_desc: "A CCTV Monitoring mobile application for SDEC",
    project_link: "https://sdec.com.my/web/",
  },
  {
    project_name: "MyPSM Mobile",
    project_img: "images/mypsm.png",
    project_desc: "A Human Resource management mobile application for LKIM",
    project_link: "https://www.lkim.gov.my/",
  },
  {
    project_name: "CitizenApp",
    project_img: "images/app_logo.png",
    project_desc: "A citizen mobile application for SMA and SIOC",
    project_link: "https://www.sma.gov.my/web/home/index/",
  },
  {
    project_name: "MPRH Website",
    project_img: "images/mprh.png",
    project_desc: "A wordpress website for MPRH - LPPKN",
    project_link: "https://mprh.lppkn.gov.my/",
  },
  {
    project_name: "Luggage Booking App",
    project_img: "images/eluggage.png",
    project_desc: "A luggage booking mobile application for UNIMAS students (Freelance)",
    project_link: "",
  },
  {
    project_name: "Tempeh Store App",
    project_img: "images/toba.png",
    project_desc: "A tempeh store booking application for small tempeh business (Freelance)",
    project_link: "",
  },
];

export const socialLinks = {
  github: "https://github.com/ptrickz",
  linkedin: "https://www.linkedin.com/in/pattrick-pengiran/",
  email: "pattrickpatt@gmail.com",
  phoneNumber: "+60 16 432 6915",
};
