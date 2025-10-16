<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  function goToTop() {
    document.body.scrollIntoView();
  }
</script>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] pointer-events-none " +
      (y > 0 ? " opacity-full" : " opacity-0")}
  >
    <button
      on:click={goToTop}
      class="ml-auto rounded-full bg-lime-400 text-slate-950 px-4 py-3 sm:px-5 sm:py-4 hover:bg-lime-300 hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg border-2 border-lime-400 hover:border-lime-300 pointer-events-auto"
    >
      <i class="fa-solid fa-arrow-up text-xl sm:text-2xl grid place-items-center aspect-square"></i>
    </button>
  </div>
  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
