<script lang="ts">
  import { socialLinks } from "$lib/data";
  import { fadeUp } from "$lib/actions";
</script>

<section id="contact" class="flex flex-col py-8 sm:py-14 scroll-mt-20 overflow-hidden">
  <h1
    use:fadeUp
    class="font-semibold text-5xl sm:text-6xl md:text-7xl text-gray-300 uppercase mb-8"
  >
    Get In Touch
  </h1>
  <div use:fadeUp class="flex flex-wrap gap-6">
    <a href={`mailto:${socialLinks.email}`} class="flex items-center gap-4 group">
      <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
        <i class="fa-solid fa-envelope text-lime-400 text-xl"></i>
      </div>
      <div>
        <p class="text-gray-400 text-sm">Email</p>
        <p class="font-semibold text-lime-400 group-hover:text-lime-300 transition-colors">{socialLinks.email}</p>
      </div>
    </a>
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
        <i class="fa-solid fa-phone text-lime-400 text-xl"></i>
      </div>
      <div>
        <p class="text-gray-400 text-sm">Phone</p>
        <p class="font-semibold text-lime-400">{socialLinks.phoneNumber}</p>
      </div>
    </div>
    <a href={socialLinks.github} target="_blank" class="flex items-center gap-4 group">
      <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
        <i class="fa-brands fa-github text-lime-400 text-xl"></i>
      </div>
      <div>
        <p class="text-gray-400 text-sm">GitHub</p>
        <p class="font-semibold text-lime-400 group-hover:text-lime-300 transition-colors">ptrickz</p>
      </div>
    </a>
    <a href={socialLinks.linkedin} target="_blank" class="flex items-center gap-4 group">
      <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
        <i class="fa-brands fa-linkedin text-lime-400 text-xl"></i>
      </div>
      <div>
        <p class="text-gray-400 text-sm">LinkedIn</p>
        <p class="font-semibold text-lime-400 group-hover:text-lime-300 transition-colors">Pattrick Pengiran</p>
      </div>
    </a>
  </div>
</section>
