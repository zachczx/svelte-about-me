<script>
    import profilepic from "$lib/assets/kitandi.webp";
    let tooltip1 = false
</script>

<!--
<dialog id="my_modal_2" class="modal">
<div class="modal-box">
  <h3 class="flex font-bold text-lg"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle-filled inline" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="white" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="red" /></svg><span class="self-center ms-1">Disclaimer</span></h3>
  <p class="py-4">AI generated pic, so it's meself but not rly. Using this because this AI dude looks great.</p>
</div>
<form method="dialog" class="modal-backdrop">
  <button>close</button>
</form>
</dialog>-->

<div class="grid grid-cols-1 lg:grid-cols-12 items-center w-full min-h-dvh ">
<div class="lg:col-span-3"><p class="text-5xl text-center lg:text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-900">Hello,<br> I'm <b>Zixian</b>.</p></div>
<div class="lg:col-span-4 text-center">
    <div class="avatar w-4/6">
        <div class="rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"><a href="#kitkit"><img src={profilepic} class="" alt="Doggo and I"></a></div>
    </div>
</div>
<div class="lg:col-span-5">
    <div class="grid justify-start">
    <div>
        <p class="text-2xl">For work, I'm a <span class="rounded-full btn btn-accent text-2xl"><a href="#experience">public servant</a></span></p>
        <p class="text-xl mb-10 ms-[4rem]">I do <b>digitalization</b> and <b>digital products</b>.</p>
    </div>
    <div>
        <p class="text-2xl font-mono">For hobby, I'm a <span class="rounded-full btn btn-accent text-2xl"><a href="#projects">webdev</a></span></p>
        <p class="text-xl mb-6 font-mono ms-[4rem]">I enjoy writing <b>web apps</b> and <b>code</b>.</p>
    </div>
    </div>
</div>
</div>

<style>
    .imground {
        clip-path: ellipse(100% 50% at 50% 40%);   
    }

    .imggrunge {
        background-image: url("../lib/assets/svg/blob.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .imggrunge2 {
        background-image: url("../lib/assets/svg/blob2.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>