<script>
    import About from "../components/About.svelte";
    import Header from "../components/Header.svelte";
    import Experience from "../components/Experience.svelte"
    import Stack from "../components/Stack.svelte"
    import Landing from "../components/Landing.svelte";
    import Projects from "../components/Projects.svelte";
    import KitKit from "../components/KitKit.svelte";
</script>

<Header />
<section id="landing" class="h-[50rem] lg:h-[35rem] bg-neutral m-0">
    <Landing />
</section>
<div class="separator"></div>

<section id="about" class="">
    <div class="container max mx-auto px-5 py-5">
        <About />
    </div>
</section>
<div class="separator-white"></div>

<section id="experience" class="p-5 bg-neutral">
    <Experience />
</section>
<div class="separator"></div>

<section id="stack" class="font-mono">
    <div class="container max mx-auto px-4 py-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Stack />
        </div>
    </div>
</section>
<div class="separator-white"></div>

<section id="projects" class="bg-neutral p-5">
    <Projects />
</section>
<div class="separator"></div>

<section id="kitkit" class="p-5">
    <KitKit />
</section>
<div class="separator-white"></div>


<style>
.separator {
  position: relative;
  height: 5rem;
  background: #EDF1D6;
}

.separator::after {
  content: '';
  background-image: url("../lib/assets/svg/wavy-loops-top.svg");
  position: absolute;
  transform: scaleY(-1);
  width: 100%;
  height: 2rem;
  bottom: 0;
}


.separator-white {
  position: relative;
  height: 3rem;
  background: #EDF1D6;
}

.separator-white::after {
  content: '';
  background-image: url("../lib/assets/svg/wavy-loops-top.svg");
  position: absolute;
  transform: scaleY(1);
  width: 100%;
  height: 3rem;
  bottom: 0;
}

</style>