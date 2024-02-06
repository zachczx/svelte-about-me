<script>
import corgiProgrammingCard from "$lib/assets/corgi-with-keyboard.webp";
import corgiPresentationCard from "$lib/assets/sad-corgi-beside-powerpoint.webp";
import civilSerpentCard from "$lib/assets/snake-civil-serpent.webp";
import pandaCard from "$lib/assets/_8cf7aaac-e91a-4a81-9d6c-f5faee41baa0.webp";

let dxotoggle = false
</script>

<h2 id="about" class="mb-5 text-center">Who am I?</h2>
<div class="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
    <div>
        <div class="card bg-accent-content shadow-xl">
            <div class="card-body">
                <h2 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg> 
                    Occifer
                </h2>
              <p>I'm a civil serpent.</p>
                <p>I work in the public service in Singapore.
                <sup>
                    <button on:click={() => {dxotoggle = !dxotoggle}}>#</button>
                    {#if dxotoggle}
                    <span><a href="https://www.careers.gov.sg/employers/security/mindef">If a Defence Executive Officer career is your thing</a></span>
                    {/if}
                </sup>
              </p>
            </div>
            <figure><img src={civilSerpentCard} alt="Civil serpent gogogo" class="object-scale-down" loading="lazy" /></figure>
        </div>
    </div>
    <div>
        <div class="card bg-accent-content shadow-xl">
            <figure><img src={pandaCard} alt="Panda at work" class="object-scale-down" loading="lazy" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shovel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 4l3 3" /><path d="M18.5 5.5l-8 8" /><path d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z" /></svg>
                    Work work
                </h2>
              <p>I like to get hands on for tech related problems and ideas. Learned to function despite bureaucracy.</p>
            </div>
          </div>
        
        <p></p>
    </div>
    <div>
        <div class="card bg-accent-content shadow-xl">
            <div class="card-body">
                <h2 class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-office" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3z" /></svg> 
                    Office
                </h2>
              <p>At work, I go for meetings (sometimes unfortunately not even on Teams!), write Outlook emails, create .pptx presentations, write .docx papers.</p>
            </div>
            <figure><img src={corgiPresentationCard} alt="Corgi presenting" class="object-scale-down" loading="lazy" /></figure>
        </div>
        
        <p></p>
    </div>
    <div>
        <div class="card bg-accent-content shadow-xl">
            <figure><img src={corgiProgrammingCard} alt="Corgi programming" class="object-scale-down" loading="lazy" /></figure>
            <div class="card-body">
                <h2 class="card-title font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>    
                    Hobby
                </h2>
              <p class="font-mono">As a hobby, I like to build stuff on the web that can solve real problems. Even better if I can try out yet another JS framework!</p>
            </div>
          </div>
    </div>
</div>