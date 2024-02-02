<script>
    let googleopen = false

    const frontend = [
        {thing:'Svelte', level: 20},
        {thing:'Htmx', level: 30},
        {thing:'Javascript ES6', level: 30},
        {thing:'Tailwind', level: 20},
        {thing:'Alpine JS', level: 10},
        {thing:'Bootstrap', level: 60},
    ]

    const backend = [
        {thing:'Python3', level: 15},
        {thing:'Django', level: 30},
        {thing:'Django Rest Framework', level: 15},
        {thing:'Sveltekit', level: 10},
        {thing:'SQL', level: 15},
        {thing:'PHP8', level: 5},
    ]

    frontend.sort((a,b) => b.level - a.level)
    console.log(frontend)

    backend.sort((a,b) => b.level - a.level)
    console.log(backend)    
</script>


<div class="col-span-1 md:col-span-2">
    <h2 class="mb-5 text-center">Things I learn & use</h2>
    <p class="mb-6  text-lg">In my free time, I learn and build stuff on the web to solve my problems IRL. Ended up here after clicking on Meta's backend dev course back then.</p>
</div>
<div>
    <h3 class="mb-3">Frontend</h3>
    <table>
        {#each frontend as item}
        <tr class="border-t-1">
            <td><button class="btn btn-primary btn-xs btn-outline hover:btn-accent text-base">{item.thing}</button></td>
            <td>
                {#if item.level > 70}
                <progress class="progress progress-success w-56" value="{item.level}" max="100"></progress>
                {:else}
                <progress class="progress progress-secondary w-56" value="{item.level}" max="100"></progress>
                {/if} 
            </td>
        </tr>
        {/each}
    </table>    
</div>
<div class="mb-7">
    <h3 class="mb-3">Backend</h3>
    <table>
        {#each backend as item}
        <tr class="border-t-1">
            <td><button class="btn btn-primary btn-xs btn-outline hover:btn-accent text-base">{item.thing}</button></td>
            <td>
                {#if item.level > 70}
                <progress class="progress progress-success w-56" value="{item.level}" max="100"></progress>
                {:else}
                <progress class="progress progress-secondary w-56" value="{item.level}" max="100"></progress>
                {/if} 
            </td>
        </tr>
        {/each}
    </table>
</div>
<div>
    <h3 class="">I use</h3>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Oracle Cloud Compute</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Digital Ocean Droplets</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Ubuntu/Nginx</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Cloudflare Pages</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Wordpress</span>
</div>
<div class="mb-7">
    <h3 class="">Courses/Certificates</h3>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Meta Back-end Developer Specialization</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">AWS Fundamentals Specialization</span>
    <a on:click={() => {googleopen = !googleopen}} href="#googleopen">
        <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Google UX
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-maximize inline" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path d="M14 14l6 6" /><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg>
        </span>
    </a>
    {#if googleopen}
    <span class="btn btn-xs btn-neutral btn-outline hover:btn-accent text-sm my-1">Foundations of UX Design</span><span class="btn btn-xs btn-neutral btn-outline hover:btn-accent text-sm ms-1 my-1">Wireframes/Low-fi Prototypes</span><span class="btn btn-xs btn-neutral btn-outline hover:btn-accent text-sm ms-1 my-1">Empathize/Define/Ideate</span>
    {/if}
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">Certified ScrumMaster</span>
    <span class="btn btn-xs btn-primary btn-outline hover:btn-accent text-base my-1">LeSS Basics<a href="https://www.youtube.com/watch?v=vSnCeJEka_s"><svg class="icon icon-tabler icon-tabler-mood-sad-dizzy inline" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" /><path d="M8 9l2 2" /><path d="M10 9l-2 2" /><path d="M14 9l2 2" /><path d="M16 9l-2 2" /></svg></a></span>
</div>
