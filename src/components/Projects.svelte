<script>
let yes = "dose"
</script>

<h2 class="mb-9 text-center" id="projects" >Personal projects</h2>

<div class="flex flex-wrap justify-center mt-7">
<button on:click={() => {yes="dose"}} class="btn btn-outline btn-sm text-base mx-1 my-1"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-6z" /><path d="M9 18v3h6v-3" /><path d="M9 6v-3h6v3" /></svg>
    Eat Your Meds</button>
<button on:click={() => {yes="bto"}} class="btn btn-outline btn-sm text-base mx-1 my-1"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
    BTOnomics</button>
<button on:click={() => {yes="rank"}} class="btn btn-outline btn-sm text-base mx-1 my-1"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-military-rank" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7v13h-10v-13l5 -3z" /><path d="M10 13l2 -1l2 1" /><path d="M10 17l2 -1l2 1" /><path d="M10 9l2 -1l2 1" /></svg>
    Rank-a-Mate</button>  
</div>
<div class="flex justify-center">
<div class="w-5/6 bg-base-100 rounded-lg border border-1 p-4">    
    {#if yes === "rank"}
    <!-- rank -->
    <h3 class="mb-8">Appraisal ranking app with Django-SortableJS-Htmx</h3>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" fill="black"/><path d="M11 9l3 3l-3 3" stroke="white"/></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Context</h3>
            <p>Officers are rank sorted on Excel sheet, but not in sequence.</p>
            </div>
            <hr/>
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle fill-red-500 stroke-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" stroke="white" /><path d="M12 16h.01" stroke="white" /></svg>
            </div>
            <div class="timeline-end md:text-start mb-10">
                <time class="italic"></time>
                <h3 class="font-black mt-1">Problem</h3>
                <p>Excel is inefficient - doesn't sort automatically, doesn't show grades assigned, doesn't show quotas.</p>
            </div>
            <hr style="background-color: #ef4444" />
        </li>
        <li>
            <hr style="background-color: #ef4444" />
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check fill-lime-600 stroke-lime-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" stroke="white" /></svg>          
            </div>
            <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Solution</h3>
            <p class="mb-4">Drag-and-drop list, state management using Htmx for each drag+drop (previously localStorage).</p>
            <a href="https://tinker.zixianchen.com/rank/"><button class="btn btn-accent btn-sm lg:text-lg xl:text-xl">
                Rank-a-Mate webapp
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </button></a>
            </div>
            <hr style="background-color: #65a30d" />
        </li>
        <li>
            <hr style="background-color: #65a30d" />
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
            </div>
            <div class="timeline-end md:text-start mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Further features</h3>
            <p>Users can segregate entries according to ranking grades (A/B/C/D). Users can define percentiles for grade quotas. Users can import json/csv files for quick population.</p>
            </div>
            <hr style="background-color: #eab308;" />
        </li>
        <li>
            <hr style="background-color: #eab308;" />
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dot fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
            </div>
        </li>
        </ul>
    <!-- rank -->
    {:else if yes === "bto"}
    <!-- bto -->
    <h3 class="mb-8">BTOnomics blog with Wordpress-PHP/FPM</h3>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" fill="black"/><path d="M11 9l3 3l-3 3" stroke="white"/></svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Context</h3>
            <p>I was a new home owner with little money.</p>
          </div>
          <hr/>
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle fill-red-500 stroke-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" stroke="white" /><path d="M12 16h.01" stroke="white" /></svg>
            </div>
            <div class="timeline-end md:text-start mb-10">
              <time class="italic"></time>
              <h3 class="font-black mt-1">Problem</h3>
              <p>I didn't know how to buy/ship from Taobao, design, choose lights, pick flooring, select fans, decide taps, etc.</p>
            </div>
            <hr style="background-color: #ef4444" />
        </li>
        <li>
          <hr style="background-color: #ef4444" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check fill-lime-600 stroke-lime-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" stroke="white" /></svg>          
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Solution</h3>
            <p class="mb-4">Wordpress blog that documented my journey renovating my HDB, choosing an ID, buying and shipping from Taobao, DIY assembly.</p>
            <p class="mb-4">Easy to host on shared hosting (since shifted to OCI + Nginx + PHP-FPM), good admin UX, huge plugin ecosystem, many templates avail.</p>
            <a href="https://btonomics.com"><button class="btn btn-accent btn-sm lg:text-lg xl:text-xl">
                BTOnomics.com
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </button></a>
          </div>
          <hr style="background-color: #65a30d" />
        </li>
        <li>
          <hr style="background-color: #65a30d" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
          </div>
          <div class="timeline-end md:text-start mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Further features</h3>
            <p>Being maintained as legacy item, thinking of redoing it on Hugo or Sveltekit.</p>
          </div>
          <hr style="background-color: #eab308;" />
        </li>
        <li>
          <hr style="background-color: #eab308;" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dot fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
          </div>
        </li>
      </ul>
    <!-- bto -->
    {:else if yes === "dose"}
    <!-- dose -->
    <h3 class="mb-8">Eat Your Medicine webapp with Django-Htmx-Bootstrap-Postgres</h3>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" fill="black"/><path d="M11 9l3 3l-3 3" stroke="white"/></svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Context</h3>
            <p>When my kid fell sick, I needed to know when the next dose of medicine was due.</p>
          </div>
          <hr/>
        </li>
        <li>
            <hr />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle fill-red-500 stroke-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" stroke="white" /><path d="M12 16h.01" stroke="white" /></svg>
            </div>
            <div class="timeline-end md:text-start mb-10">
              <time class="italic"></time>
              <h3 class="font-black mt-1">Problem</h3>
                <p>Tedious to constantly copy-paste-write medicine/date/times/intervals, record in Telegram/Keep/Notion. Difficult to share among both parents too.</p>
            </div>
            <hr style="background-color: #ef4444" />
        </li>
        <li>
          <hr style="background-color: #ef4444" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check fill-lime-600 stroke-lime-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" stroke="white" /></svg>          
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Solution</h3>
            <p class="mb-4">Webapp to auto fill doses, track timings, and prompt generic info about the medicine.</p>
            <a href="https://tinker.zixianchen.com/eatyourmeds/"><button class="btn btn-accent btn-sm lg:text-lg xl:text-xl">
                Eat Your Meds webapp
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </button></a>
          </div>
          <hr style="background-color: #65a30d" />
        </li>
        <li>
          <hr style="background-color: #65a30d" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
          </div>
          <div class="timeline-end md:text-start mb-10">
            <time class="italic"></time>
            <h3 class="font-black mt-1">Further features</h3>
            <p>Whatsapp/SMS alerts? Integration with Twilio?</p>
          </div>
          <hr style="background-color: #eab308;" />
        </li>
        <li>
          <hr style="background-color: #eab308;" />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dot fill-yellow-500 stroke-yellow-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
          </div>
        </li>
      </ul>
    <!-- dose -->
    {/if}
</div>
</div>
