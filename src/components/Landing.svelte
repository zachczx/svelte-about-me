<script>
        import profilepic from "$lib/assets/1706919561270.webp";
        let tooltip1 = false
</script>

<dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="flex font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle-filled inline" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="white" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="red" /></svg><span class="self-center ms-1">Disclaimer</span></h3>
      <p class="py-4">AI generated pic, so it's meself but not rly. Using this because this AI dude looks great.</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center w-full px-7 h-full">
    <div class="lg:col-span-5 avatar justify-self-center w-96 h-96">
        <div class="rounded-full">
            <a><img src={profilepic} class="object-scale-down object-center" alt="AI generated, so it's me but not rly." on:click={() => {my_modal_2.showModal()}} on:mouseover={() => {tooltip1 = true}} on:mouseout={() => {tooltip1 = false}}></a>
        </div>
    </div>
    <div class="lg:col-span-7">
        <p class="mb-8 text-5xl">Hello, I'm <b>Zixian</b>.</p>
        <p class="text-2xl">By day, I'm a <b>public servant</b>.</p>
        <p class="text-2xl mb-6">I do <b>digitalization</b> and <b>digital products</b>.</p>
        <p class="text-2xl font-mono">By night, I'm a <b>webdev</b> wannabe.</p>
        <p class="text-2xl mb-6 font-mono">I enjoy making <b>web apps</b>.</p>
        <div class="mt-7">
        <a href="#experience"><button class="btn btn-success text-neutral text-xl me-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" /><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" /><path d="M6 9l12 0" /><path d="M6 12l3 0" /><path d="M6 15l2 0" /></svg>
            Work Experience
            </button>
        </a>
        <a href="#stack"><button class="btn btn-accent text-neutral text-xl hover:btn-accent font-mono me-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
            Webdev-wannabe
            </button>
        </a>
        <a href="https://www.linkedin.com/in/zixianchen/">
            <button class="btn btn-primary text-neutral text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                LinkedIn
            </button>
        </a>
        {#if tooltip1 === true}
        <div class="mt-8"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle-filled inline" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="white" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="red" /></svg><span class="inline ms-1 text-red-500">AI portrait => so it's me but not rly</span></div>
        {/if}
    </div>
    </div>
</div>

