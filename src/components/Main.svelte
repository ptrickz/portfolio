<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { Card } from "flowbite-svelte";

  gsap.registerPlugin(ScrollTrigger);
  let component: HTMLElement;
  let tech = [
    { tech_name: "Flutter", tech_color: "text-blue-400" },
    { tech_name: "ReactJS", tech_color: "text-blue-600" },
    { tech_name: "Svelte", tech_color: "text-orange-400" },
    { tech_name: "Firebase", tech_color: "text-yellow-400" },
    { tech_name: "XCode", tech_color: "text-blue-800" },
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
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 overflow-hidden"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h1
        class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
        bind:this={component}
      >
        Tech I Use
      </h1>
      {#each tech as { tech_name, tech_color }}
        <div
          class="tech-row poppins font-semibold flex mb-8 items-center justify-center gap-4 text-slate-700"
        >
          {#each Array(14) as _, i}
            <span
              class={"tech-item text-4xl font-extrabold uppercase tracking-tighter " +
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
    </div>
  </section>
  <br id="projects" />
  <br />
  <section class="flex flex-col py-8 sm:py-14 overflow-hidden">
    <h1
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
      bind:this={component}
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
  <br id="contact" />
  <section class="grid grid-cols-1 gap-6 py-6 sm:py-12 overflow-hidden">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-4 md:gap-6 lg:gap-8"
    >
      <h1
        class="font-semibold text-4xl sm:text-5xl md:text-6xl text-gray-300 uppercase"
      >
        Contact
      </h1>
      <div
        class="flex flex-wrap justify-center lg:justify-start items-center gap-6"
      >
        <!-- GitHub -->
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-6 sm:h-6 text-white"
          >
            <path
              d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.163c-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.238 1.839 1.238 1.07 1.833 2.809 1.303 3.495.997.108-.775.418-1.303.76-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.238-3.221-.123-.303-.536-1.522.118-3.176 0 0 1.01-.322 3.3 1.23a11.46 11.46 0 0 1 3.003-.404c1.019.005 2.046.138 3.003.404 2.29-1.552 3.3-1.23 3.3-1.23.656 1.654.243 2.873.12 3.176.771.84 1.238 1.911 1.238 3.221 0 4.609-2.806 5.624-5.479 5.921.429.372.814 1.102.814 2.222v3.293c0 .32.192.694.801.576C20.565 21.795 24 17.3 24 12 24 5.371 18.629 0 12 0z"
            />
          </svg>
          <a
            href={socialLinks.github}
            target="_blank"
            class="font-semibold text-lg sm:text-xl text-white"
          >
            GitHub
          </a>
        </div>

        <!-- LinkedIn -->
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
          >
            <path
              d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.125 20.452H3.562V9h3.563v11.452zM5.345 7.643c-1.141 0-2.063-.938-2.063-2.083 0-1.15.922-2.083 2.063-2.083 1.141 0 2.063.938 2.063 2.083 0 1.145-.922 2.083-2.063 2.083zM20.451 20.452h-3.562V14.83c0-1.342-.029-3.072-1.872-3.072-1.872 0-2.158 1.461-2.158 2.973v5.721h-3.562V9h3.419v1.561h.049c.477-.903 1.641-1.856 3.38-1.856 3.618 0 4.285 2.383 4.285 5.479v6.268z"
            />
          </svg>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            class="font-semibold text-lg sm:text-xl text-blue-400"
          >
            LinkedIn
          </a>
        </div>

        <!-- Email -->
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
          >
            <path
              d="M12 13.065 2.365 6.558C2.94 6.165 3.655 6 4.5 6h15c.845 0 1.56.165 2.135.558L12 13.065zM12 15.065l9.7-6.708c.187.439.3.946.3 1.517v7c0 1.104-.897 2-2 2H4c-1.103 0-2-.896-2-2v-7c0-.571.113-1.078.3-1.517L12 15.065z"
            />
          </svg>
          <a
            href={`mailto:${socialLinks.email}`}
            target="_blank"
            class="font-semibold text-lg sm:text-xl text-green-400"
          >
            {socialLinks.email}
          </a>
        </div>

        <!-- Phone -->
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              d="M3.654 2.82a3.248 3.248 0 0 1 2.657-1.375h2.041c.945 0 1.8.576 2.135 1.432l1.15 3.057a3.253 3.253 0 0 1-.779 3.46l-1.36 1.36a12.163 12.163 0 0 0 5.657 5.657l1.36-1.36a3.254 3.254 0 0 1 3.46-.779l3.057 1.15a3.253 3.253 0 0 1 1.432 2.135v2.041c0 1.018-.496 1.978-1.375 2.657a3.247 3.247 0 0 1-2.865.525c-3.72-1.24-7.05-3.45-9.838-6.238-2.787-2.788-4.998-6.117-6.238-9.838a3.248 3.248 0 0 1 .525-2.865z"
            />
          </svg>

          <p class="font-semibold text-lg sm:text-xl text-yellow-400">
            {socialLinks.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
</main>
