<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { Card } from "flowbite-svelte";

  gsap.registerPlugin(ScrollTrigger);
  let component: HTMLElement;
  let projectsComponent: HTMLElement;
  let certsComponent: HTMLElement;
  let tech = [
    { tech_name: "Flutter", tech_color: "text-blue-400" },
    { tech_name: "ReactJS", tech_color: "text-blue-600" },
    { tech_name: "Svelte", tech_color: "text-orange-400" },
    { tech_name: "Firebase", tech_color: "text-yellow-400" },
    { tech_name: "XCode", tech_color: "text-blue-800" },
  ];

  let certs = [
    {
      cert_name: "Flutter",
      cert_img: "images/flutter-testdome.png",
      cert_desc: "TestDome",
      cert_link:
        "https://testdome.com/certificates/105e9e16bf3e4860a87a760a6b6b86f1",
    },
    {
      cert_name: "Administration Certification",
      cert_img: "images/ivanti.png",
      cert_desc: "Ivanti Neurons for ITSM",
      cert_link:
        "https://drive.google.com/file/d/1xOy_DnYUILq_H1M0PawomM8FvwvPm0cf/view?usp=sharing",
    },
  ];

  let projects = [
    {
      project_name: "Faculty Guide with Chatbot",
      project_img: "images/faqulty.png",
      project_desc:
        "A faculty guide application with AI Chatbot (Google Dialogflow)",
      project_link:
        "https://docs.google.com/presentation/d/110fBZGL08JEzMD7SFXwJWA1Nnon4xdUV/edit?usp=sharing&ouid=115596111486891015734&rtpof=true&sd=true",
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
      project_desc:
        "A luggage booking mobile application for UNIMAS students (Freelance)",
      project_link: "",
    },
    {
      project_name: "Tempeh Store App",
      project_img: "images/toba.png",
      project_desc:
        "A tempeh store booking application for small tempeh business (Freelance)",
      project_link: "",
    },
  ];

  const socialLinks = {
    github: "https://github.com/ptrickz",
    linkedin: "https://www.linkedin.com/in/pattrick-pengiran/",
    email: "pattrickpatt@gmail.com",
    phoneNumber: "+60 16 432 6915",
  };

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  function handleSubmit(event: Event) {
    event.preventDefault();

    const mailtoLink = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Create a temporary link and click it
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.click();

    // Reset form after a short delay
    setTimeout(() => {
      formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    }, 100);
  }

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top bottom",
        end: "bottom top",
        scrub: 5,
      },
    });

    tl.fromTo(
      ".tech-row",
      {
        x: (index) => {
          return index % 2 == 0 ? 100 : -100;
        },
      },
      {
        x: (index) => {
          return index % 2 == 0 ? -100 : 100;
        },
        ease: "power1.inOut",
      }
    );
  });
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="intro-page"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-lime-400">Pattrick</span> Pengiran
        <br />
        <br />
        <h5 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Mobile & Web <br />
          <span class="poppins text-lime-400">Developer</span>
        </h5>
      </h2>
      <br />
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="images/pat.jpeg"
        alt="Profile Image"
        class="object-cover z-[2] max-h-[70vh] rounded-lg"
      />
    </div>
  </section>
  <br id="about" />
  <br />
  <section class="grid grid-cols-1 gap-10 py-8 sm:py-14 overflow-hidden">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h1
        class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
      >
        About Me
      </h1>
      <span class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        An enthusiastic <span
          class="font-semibold text-3xl sm:text-4xl md:text-5xl text-lime-400"
          >Software Engineer</span
        >
        with a strong background in collaborative team environments, proficient in
        both
        <span
          class="font-semibold text-3xl sm:text-4xl md:text-5xl text-blue-400"
          >Web Development</span
        >
        and
        <span
          class="font-semibold text-3xl sm:text-4xl md:text-5xl text-blue-400"
          >Mobile Application Development</span
        >.
      </span>
    </div>
  </section>
  <br id="tech" />
  <br />
  <section
    class="flex flex-col py-8 sm:py-14 overflow-hidden"
    bind:this={component}
  >
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase text-center lg:text-left mb-10"
    >
      Tech I Use
    </h1>
    {#each tech as { tech_name, tech_color }}
      <div
        class="tech-row poppins font-semibold flex mb-8 items-center justify-center gap-4 text-slate-700"
      >
        {#each Array(14) as _, i}
          <span
            class={"tech-item text-4xl font-extrabold uppercase tracking-tighter whitespace-nowrap " +
              (i == 7 && tech_color ? tech_color : "inherit")}
            >{tech_name}
          </span>
          <i
            class={"fa-solid fa-circle text-3xl " +
              (i == 6 && tech_color ? tech_color : "inherit")}
          ></i>
        {/each}
      </div>
    {/each}
  </section>
  <br id="projects" />
  <br />
  <section class="flex flex-col py-8 sm:py-14 overflow-hidden">
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
      bind:this={projectsComponent}
    >
      Mobile Apps & Websites
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 justify-center items-center gap-8 md:gap-10 lg:gap-12"
    >
      {#each projects as { project_name, project_img, project_desc, project_link }}
        <Card
          href={project_link}
          target="_blank"
          img={project_img}
          imgClass="w-full h-36 overflow-hidden rounded-t-lg object-cover"
          class="rounded-lg bg-black border-gray-500 hover:scale-105 hover:border-lime-200 transition-transform"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tigh text-lime-400">
            {project_name}
          </h5>
          <div class="h-12">
            <p class="font-normal text-gray-70 leading-tight">{project_desc}</p>
          </div>
        </Card>
      {/each}
    </div>
  </section>
  <br />
  <br id="certificate" />
  <br />
  <section class="flex flex-col py-8 sm:py-14 overflow-hidden">
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
      bind:this={certsComponent}
    >
      Certifications
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 justify-center items-center gap-8 md:gap-10 lg:gap-12"
    >
      {#each certs as { cert_name, cert_img, cert_desc, cert_link }}
        <Card
          href={cert_link}
          target="_blank"
          img={cert_img}
          imgClass="w-full h-36 overflow-hidden rounded-t-lg object-cover"
          class="rounded-lg bg-black border-gray-500 hover:scale-105 hover:border-lime-200 transition-transform"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tigh text-lime-400">
            {cert_name}
          </h5>
          <div class="h-1 text-sm">
            <p class="font-normal text-gray-70 leading-tight">{cert_desc}</p>
          </div>
        </Card>
      {/each}
    </div>
  </section>
  <br />
  <br id="resume" />
  <br />
  <section class="flex flex-col py-8 sm:py-14 overflow-hidden">
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase mb-8"
    >
      Resume
    </h1>
    <div class="flex flex-col gap-8">
      <p class="text-xl sm:text-2xl text-gray-300">
        Interested in learning more about my experience and qualifications?
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          class="blueShadow relative overflow-hidden px-8 py-4 group rounded-lg bg-lime-400 text-slate-950 font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-3"
        >
          <i class="fa-solid fa-eye text-xl"></i>
          <span>View Resume</span>
        </a>
        <a
          href="/resume.pdf"
          download="Pattrick_Pengiran_Resume.pdf"
          class="blueShadow relative overflow-hidden px-8 py-4 group rounded-lg bg-blue-400 text-slate-950 font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-3"
        >
          <i class="fa-solid fa-download text-xl"></i>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  </section>
  <br />
  <br id="contact" />
  <section class="flex flex-col py-8 sm:py-14 overflow-hidden">
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase mb-8"
    >
      Get In Touch
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Contact Form -->
      <div class="flex flex-col gap-6">
        <p class="text-xl sm:text-2xl text-gray-300">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>
        <form class="flex flex-col gap-4" on:submit={handleSubmit}>
          <div class="flex flex-col gap-2">
            <label for="name" class="text-gray-300 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={formData.name}
              required
              class="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:border-lime-400 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-gray-300 font-semibold">Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              bind:value={formData.email}
              required
              class="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:border-lime-400 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="subject" class="text-gray-300 font-semibold"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              name="subject"
              bind:value={formData.subject}
              required
              class="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:border-lime-400 transition-colors"
              placeholder="What's this about?"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="message" class="text-gray-300 font-semibold"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              bind:value={formData.message}
              required
              rows="6"
              class="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:border-lime-400 transition-colors resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="blueShadow px-8 py-4 rounded-lg bg-lime-400 text-slate-950 font-bold text-lg hover:bg-lime-300 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <i class="fa-solid fa-paper-plane text-xl"></i>
            <span>Send Message</span>
          </button>
        </form>
      </div>

      <!-- Contact Info & Social Links -->
      <div class="flex flex-col gap-8">
        <div>
          <h2 class="text-3xl sm:text-4xl font-semibold text-lime-400 mb-6">
            Contact Information
          </h2>
          <div class="flex flex-col gap-4">
            <!-- Email -->
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center"
              >
                <i class="fa-solid fa-envelope text-green-400 text-xl"></i>
              </div>
              <div>
                <p class="text-gray-400 text-sm">Email</p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  class="font-semibold text-lg text-green-400 hover:text-green-300"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center"
              >
                <i class="fa-solid fa-phone text-yellow-400 text-xl"></i>
              </div>
              <div>
                <p class="text-gray-400 text-sm">Phone</p>
                <p class="font-semibold text-lg text-yellow-400">
                  {socialLinks.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-semibold text-lime-400 mb-6">
            Connect With Me
          </h2>
          <div class="flex gap-4">
            <!-- GitHub -->
            <a
              href={socialLinks.github}
              target="_blank"
              class="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <i class="fa-brands fa-github text-white text-2xl"></i>
            </a>

            <!-- LinkedIn -->
            <a
              href={socialLinks.linkedin}
              target="_blank"
              class="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin text-blue-400 text-2xl"></i>
            </a>
          </div>
        </div>

        <!-- Note -->
        <div class="mt-4 p-6 bg-slate-800 rounded-lg border border-slate-700">
          <p class="text-sm text-gray-400">
            <i class="fa-solid fa-circle-info text-lime-400 mr-2"></i>
            The contact form will open your default email client with the message
            pre-filled. You can also reach me directly using the contact information
            above.
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
</main>
