<script>
  export let y;
  let menuOpen = false;

  let tabs = [
    { name: "About Me", link: "#about" },
    { name: "What I Use", link: "#tech" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certificate" },
    { name: "Resume", link: "#resume" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 border border-solid border-transparent " +
    (y > 0 ? "bg-slate-950" : "bg-transparent")}
>
  <div
    class={"flex items-center justify-between px-6 duration-200 " +
      (y > 0 ? "py-4" : "py-6")}
  >
    <a href="#">
      <h1 class="font-medium">
        <b class="font-bold poppins text-lime-400">Pattrick </b>Pengiran
      </h1>
    </a>
    <nav class="hidden sm:flex items-center gap-4">
      {#each tabs as tab}
        <a href={tab.link} class="duration-200 hover:text-lime-400">
          <p>{tab.name}</p>
        </a>
      {/each}
    </nav>
    <div class="flex items-center gap-3">
      <button
        class="sm:hidden p-1"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label="Toggle menu"
      >
        <div class="w-6 h-0.5 bg-white mb-1.5"></div>
        <div class="w-6 h-0.5 bg-white mb-1.5"></div>
        <div class="w-6 h-0.5 bg-white"></div>
      </button>
      <a
        href="#contact"
        class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full text-slate-950 bg-white"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-lime-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get In Touch</h4>
      </a>
    </div>
  </div>
  {#if menuOpen}
    <nav class="sm:hidden bg-slate-950 border-t border-slate-800 flex flex-col">
      {#each tabs as tab}
        <a
          href={tab.link}
          on:click={() => (menuOpen = false)}
          class="px-6 py-3 hover:text-lime-400 hover:bg-slate-800 border-b border-slate-800 duration-200"
        >
          {tab.name}
        </a>
      {/each}
      <a
        href="#contact"
        on:click={() => (menuOpen = false)}
        class="px-6 py-3 hover:text-lime-400 hover:bg-slate-800 duration-200"
      >
        Contact
      </a>
    </nav>
  {/if}
</header>
