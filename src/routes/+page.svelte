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
<section id="landing" class="h-[65rem] lg:h-[30rem] bg-neutral m-0 px-4">
    <Landing />
</section>
<div class="separator-header"></div>

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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-7">
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
<div class="separator-footer"></div>


<style>

.separator-header {
    width: 100%;
    height: 20rem;
    background-size: cover;
    background-image: url("../lib/assets/svg/layered-waves-haikei.svg");
}

.separator-footer {
    height: 20rem;
    width: 100%;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat; 
    background-image: url("../lib/assets/svg/layered-waves-haikei-footer.svg");
}

@media only screen and (min-height: 960px) {
    .separator-header {
        height: 20rem;
    }
    .separator-footer {
        height: 25rem;
    }
}
@media only screen and (min-width: 1920px) {
    .separator-header {
        height: 30rem;
    }
    .separator-footer {
        height: 25rem;
    }
}

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
  height: 2.5rem;
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