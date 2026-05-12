<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { tech } from "$lib/data";
  import { fadeUp } from "$lib/actions";

  let component: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
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
      { x: (index) => (index % 2 === 0 ? 100 : -100) },
      { x: (index) => (index % 2 === 0 ? -100 : 100), ease: "power1.inOut" }
    );
  });
</script>

<section
  id="tech"
  class="flex flex-col py-8 sm:py-14 scroll-mt-20 overflow-hidden"
  bind:this={component}
>
  <h1
    use:fadeUp
    class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase text-center lg:text-left mb-10"
  >
    Tech I Use
  </h1>
  {#each tech as { tech_name, tech_color }}
    <div class="tech-row poppins font-semibold flex mb-8 items-center justify-center gap-4 text-slate-700">
      {#each Array(14) as _, i}
        <span
          class={"tech-item text-4xl font-extrabold uppercase tracking-tighter whitespace-nowrap " +
            (i === 7 && tech_color ? tech_color : "inherit")}
        >{tech_name}
        </span>
        <i
          class={"fa-solid fa-circle text-3xl " +
            (i === 6 && tech_color ? tech_color : "inherit")}
        ></i>
      {/each}
    </div>
  {/each}
</section>
