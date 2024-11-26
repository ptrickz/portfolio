<script>
  export let y;

  let tabs = [
    { name: "About Me", link: "#about" },
    { name: "What I Use", link: "#tech" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-transparent"
      : " py-6 bg-transparent border-transparent")}
>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#">
    <h1 class="font-medium">
      <b class="font-bold poppins text-lime-400">Pattrick </b>Pengiran
    </h1>
  </a>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-lime-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a
    href="#contact"
    class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full text-slate-950 bg-white"
  >
    <div
      class="absolute top-0 right-full w-full h-full bg-lime-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
    />
    <h4 class="relative z-9">Get In Touch</h4>
  </a>
</header>
