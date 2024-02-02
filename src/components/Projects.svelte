<script>
let yes = "dose"
</script>
<div class="flex justify-center mt-7 font-mono">
<button on:click={() => {yes="dose"}} class="btn btn-accent text-base mx-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-6z" /><path d="M9 18v3h6v-3" /><path d="M9 6v-3h6v3" /></svg>
    Meds Dose Tracker</button>
<button on:click={() => {yes="bto"}} class="btn btn-accent text-base mx-2"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
    BTOnomics Blog</button>
<button on:click={() => {yes="rank"}} class="btn btn-accent text-base mx-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-military-rank" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7v13h-10v-13l5 -3z" /><path d="M10 13l2 -1l2 1" /><path d="M10 17l2 -1l2 1" /><path d="M10 9l2 -1l2 1" /></svg>
    Rank-a-mate</button>  
</div>
<div class="flex justify-center font-mono">
<div class="w-5/6 bg-base-100 rounded-lg border border-1 p-4 font-mono">    
    {#if yes === "rank"}
    <h3>Appraisal ranking app with Django/SortableJS</h3>
    <ul class="steps steps-vertical">
        <li class="step step-accent">Officers are rank sorted on Excel sheet, but not in sequence.</li>
        <li class="step step-accent">Excel is inefficient and doesn't sort automatically.</li>
        <li class="step step-accent">Excel doesn't show the grades assigned and the quotas.</li>
        <li class="step step-primary">Solution: A drag-and-drop list with some state management using localStorage.</li>
        <li class="step step-primary">Further features >> + sync with backend DB for persistence + toggleable grade visualisation.</li>
    </ul>
    {:else if yes === "bto"}
    <h3>BTOnomics blog with Wordpress</h3>  
    <ul class="steps steps-vertical place-items-start">
        <li class="step step-accent">I was a new home owner with little money.</li>
        <li class="step step-accent">I didn't know how to buy/ship from Taobao, design, choose lights, pick flooring, select fans, decide taps..</li>
        <li class="step step-accent">Solution: A Wordpress blog that documented my journey renovating my HDB, choosing an ID, buying and shipping from Taobao, DIY assembly..</li>
        <li class="step step-primary">Easy to host on shared hosting (since shifted to OCI + Nginx + PHP-FPM), good admin UX, huge plugin ecosystem, many templates avail.</li>
        <li class="step step-primary">(Being maintained as legacy item, thinking of redoing it on Hugo or Sveltekit).</li>
    </ul>
    {:else if yes === "dose"}
    <h3>Eat Your Medicine webapp</h3>
    <ul class="steps steps-vertical place-items-start">
        <li class="step step-accent">When my kid fell sick, I needed to know when the next dose of medicine was due.</li>
        <li class="step step-accent">Tedious to constantly copy-paste-write medicine/date/times/intervals, record in Telegram/Keep/Notion</li>
        <li class="step step-accent">Difficult to share among both parents too.</li>
        <li class="step step-primary">Solution: webapp to auto fill doses, track timings, and prompt generic info about the medicine.</li>
        <li class="step step-primary">Further features >> + Whatsapp/SMS alerts, probably via Twilio</li>
    </ul>
    {/if}
</div>
</div>
