<script lang="ts">
  import { fadeUp } from "$lib/actions";
</script>

<section id="resume" class="flex flex-col py-8 sm:py-14 scroll-mt-20 overflow-hidden">
  <h1
    use:fadeUp
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
