<script>
        import profilepic from "$lib/assets/kitandi.webp";
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center w-full h-full">
    <div class="lg:col-span-5 avatar justify-self-center w-96 h-96">
        <div class="rounded-full">
            <img src={profilepic} class="object-scale-down" alt="Kit and I">
        </div>
    </div>
    <div class="lg:col-span-7">
        <p class="mb-8 text-5xl">Hello, I'm <b>Zixian</b>.</p>
        <p class="text-2xl">By day, I'm a <b>public servant</b>.</p>
        <p class="text-2xl mb-6">I do <b>digitalization</b> and <b>digital products</b>.</p>
        <p class="text-2xl font-mono">By night, I'm a <b>webdev</b> wannabe.</p>
        <p class="text-2xl mb-6 font-mono">I enjoy making <b>web apps</b>.</p>
        <div class="mt-7">
        <a href="#experience"><button class="btn btn-primary text-neutral text-2xl me-3">Work Experience</button></a>
        <a href="#stack"><button class="btn btn-accent btn-outline text-neutral text-2xl hover:btn-accent font-mono">Webdev-wannabe</button></a>
        </div>
    </div>
</div>