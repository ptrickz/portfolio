<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { projects } from "$lib/data";
  import { fadeUp } from "$lib/actions";
</script>

<section id="projects" class="flex flex-col py-8 sm:py-14 scroll-mt-20 overflow-hidden">
  <h1
    use:fadeUp
    class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
  >
    Mobile Apps & Websites
  </h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 justify-center items-center gap-8 md:gap-10 lg:gap-12">
    {#each projects as { project_name, project_img, project_desc, project_link }}
      <Card
        href={project_link || undefined}
        target="_blank"
        img={project_img}
        imgClass="w-full h-36 overflow-hidden rounded-t-lg object-cover"
        class="rounded-lg bg-black border-gray-500 hover:scale-105 hover:border-lime-200 transition-transform"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-400">
          {project_name}
        </h5>
        <div class="min-h-[3rem]">
          <p class="font-normal text-gray-400 leading-tight">{project_desc}</p>
        </div>
      </Card>
    {/each}
  </div>
</section>
