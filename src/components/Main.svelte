<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
  let component: HTMLElement;

  let tech = [
    { tech_name: "Flutter", tech_color: "text-blue-400" },
    { tech_name: "Svelte", tech_color: "text-orange-400" },
    { tech_name: "Firebase", tech_color: "text-yellow-400" },
    { tech_name: "XCode", tech_color: "text-blue-800" },
    // { tech_name: "PostgreSQL", tech_color: "text-blue-800" },
    // { tech_name: "AdonisJS", tech_color: "text-blue-800" },
  ];

  onMount(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      },
    });

    tl.fromTo(
      ".tech-row",
      {
        x: (index) => {
          return index % 2 == 0 ? 150 : -150;
        },
      },
      {
        x: (index) => {
          return index % 2 == 0 ? -150 : 150;
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
        src="images/p.jpeg"
        alt="Profile Image"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <br />
  <br id="tech" />
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
          {#each Array(15) as _, i}
            <span
              class={"tech-item text-6xl font-extrabold uppercase tracking-tighter " +
                (i == 7 && tech_color ? tech_color : "inherit")}
              >{tech_name}
            </span>
            <i class="fa-solid fa-circle text-3xl"></i>
          {/each}
        </div>
      {/each}
    </div>
  </section>
  <br />
  <section
    id="about"
    class="grid grid-cols-1 gap-10 py-8 sm:py-14 overflow-hidden"
  >
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
        with a strong background in collaborative team environments, proficient
        in both
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
</main>
