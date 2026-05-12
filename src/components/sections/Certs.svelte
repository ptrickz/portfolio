<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { certs } from "$lib/data";
  import { fadeUp } from "$lib/actions";
</script>

<section id="certificate" class="flex flex-col py-8 sm:py-14 scroll-mt-20 overflow-hidden">
  <h1
    use:fadeUp
    class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
  >
    Certifications
  </h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 justify-center items-center gap-8 md:gap-10 lg:gap-12">
    {#each certs as { cert_name, cert_img, cert_desc, cert_link }}
      <Card
        href={cert_link}
        target="_blank"
        img={cert_img}
        imgClass="w-full h-36 overflow-hidden rounded-t-lg object-cover"
        class="rounded-lg bg-black border-gray-500 hover:scale-105 hover:border-lime-200 transition-transform"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-lime-400">
          {cert_name}
        </h5>
        <div class="min-h-[1rem] text-sm">
          <p class="font-normal text-gray-700 leading-tight">{cert_desc}</p>
        </div>
      </Card>
    {/each}
  </div>
</section>
