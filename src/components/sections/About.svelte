<script lang="ts">
  import { fadeUp } from "$lib/actions";
</script>

<section id="about" class="grid grid-cols-1 gap-10 py-8 sm:py-14 scroll-mt-20 overflow-hidden">
  <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6">
    <h1
      use:fadeUp
      class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase"
    >
      About Me
    </h1>
    <p use:fadeUp class="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
      An enthusiastic <span class="text-lime-400 font-semibold">Software Engineer</span>
      with a strong background in collaborative team environments, proficient in both
      <span class="text-lime-400 font-semibold">Web Development</span> and
      <span class="text-lime-400 font-semibold">Mobile Application Development</span>.
    </p>
  </div>
</section>
