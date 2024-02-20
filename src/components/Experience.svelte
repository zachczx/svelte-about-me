<script>
  import mcoLogoWhite from "$lib/assets/mco.webp";
  import mindefLogoWhite from "$lib/assets/mindeflogo.webp";
  import sngLogoWhite from "$lib/assets/SNGlogo.webp";

  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import {onMount} from 'svelte';

  onMount(() => {
      AOS.init({
          offset: 120,
          anchorPlacement: 'top-bottom',
          duration: 1500,
          once: true,
      })
  })
</script>

<h2 id="experience" class="mb-7 text-center flex justify-center"><a href="https://www.linkedin.com/in/zixianchen/">Past work</a>
  <a href="https://www.linkedin.com/in/zixianchen/" class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline self-center ms-4 hover:fill-green-700" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
  </a>
</h2>
<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end" data-aos="zoom-in-right">
      <time class="italic text-lg xl:text-xl">2013</time>
      <div class="md:justify-end">
        <div class="avatar" style="height:150px">
          <div class="rounded-full ring ring-gray-200"><img src={mindefLogoWhite} width="150" height="150" alt="NSPD"></div>
        </div>
      </div>
      <div class="text-lg xl:text-3xl font-black">Policy Executive</div>
      <p class="italic font-bold text-gray-600 mb-3">@ MINDEF NS Policy Department</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Did a bunch of meaningful policy (paper) work
      </p>
      <p class="mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Did NS policies for sportsmen, leave, citizenship, exit control
      </p>
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end" data-aos="zoom-in-left">
      <time class="italic text-lg xl:text-xl">2015</time>
      <div class="">
        <div class="avatar" style="height:150px">
          <div class="rounded-full ring ring-gray-200"><img src={mcoLogoWhite} width="150" height="150" alt="MCO"></div>
        </div>
      </div>
      <div class="text-lg xl:text-3xl font-black">Communications Officer</div>
      <p class="italic font-bold text-gray-600 mb-3">@ MINDEF Comms Org</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Did media/PR work, crisis/reactive comms roles
      </p>
      <p class="mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Ran media events, pitched features, wrote/executed comms plans
      </p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end" data-aos="zoom-in-right">
      <time class="italic text-lg xl:text-xl">2017</time>
      <div class="md:justify-end">
        <div class="avatar" style="height:150px">
          <div class="rounded-full ring ring-gray-200"><img src={mcoLogoWhite} width="150" height="150" alt="MCO"></div>
        </div>
      </div>
      <div class="text-lg xl:text-3xl font-black">Comms Product Owner</div>
      <p class="italic font-bold text-gray-600 mb-3">@ MINDEF Comms Org</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Product owner for self built & purchased tooling for media analysts
      </p>
      <p class="mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Raised investments internally and oversaw NLP/CV research projects
      </p>      
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end" data-aos="zoom-in-left">
      <time class="italic text-lg xl:text-xl">2021</time>
      <div class="">
        <div class="avatar" style="height:150px">
          <div class="rounded-full ring ring-gray-200"><img src={sngLogoWhite} width="150" height="150" alt="Smart Nation Group"></div>
        </div>
      </div>
      <div class="text-lg xl:text-3xl font-black">Digital Infrastructure</div>
      <p class="italic font-bold text-gray-600 mb-3">@ Smart Nation SG</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Paper pusher for Govt on commercial cloud, Govt data centre, SG Govt tech stack, employee tooling
      </p>
      <p class="mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Assessed funding requests from Govt agencies trying to start digitalization & modernization projects
      </p>          
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="h-5 w-5 fill-lime-600"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10" data-aos="zoom-in-right">
      <time class="italic text-lg xl:text-xl">2023</time>
      <div class="md:justify-end">
        <div class="avatar" style="height:150px">
          <div class="rounded-full ring ring-gray-200"><img src={mindefLogoWhite} width="150" height="150" alt="Service Delivery Division"></div>
        </div>
      </div>
      <div class="text-lg xl:text-3xl font-black">Product Owner</div>
      <p class="italic font-bold text-gray-600 mb-3">@ MINDEF Service Delivery Division</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Owns internal employee tools/systems for employee services</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Manage outsourced engineering/dev teams
      </p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus inline" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" stroke="white" /><path d="M12 9v6" stroke="white" /></svg>
        Paper pusher for opportunities to use technology for service delivery
      </p>
    </div>
    <hr style="background-color: #65a30d" />
  </li>
</ul>