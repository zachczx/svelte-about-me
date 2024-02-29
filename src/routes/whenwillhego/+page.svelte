<script>
    let birthday = new Date("Sep 14, 2024 00:00:00").getTime()
    let days, hours, minutes, seconds, difference
    let trigger = false
    let x = setInterval(() => {
        let now = new Date().getTime()
        difference = birthday - now
    
        days = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        if (difference<0) {
            clearInterval(x)
        }
    }, 1000)
    let random = Math.floor(Math.random() * 100)
    let text = 1
    if (random <= 25) {
      text = 1
    } else if (random <= 50 && random > 25) {
      text = 2 
    } else if (random <= 75 && random > 50) {
      text = 3 
    } else {
      text = 4
    }
</script>
    
    <svelte:head>
    <title>Countdown time</title>
</svelte:head>
{#if difference < 0 || trigger === true}
<div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
</div>
{/if}
<section id="Main" class="bg-image min-h-dvh p-5">
<h1 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-white mb-5 pb-3 text-center">When will he go?</h1>

<div class="grid justify-items-center">
    <div class="text-xl italic mt-3 rounded-lg bg-gradient-to-r from-red-600 text-white py-5 ps-5 px-9 mb-10">
        <p class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline me-2 fill-white" width="40" height="40" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>            
            {#if text === 1}
            Armed with knowledge, a digital knight,<br>
            To slay the forms and make systems alight.<br>
            But met with relics, dusty and slow,<br>
            And colleagues who thought "cloud" meant a place for the snow.<br><br>
            My Kanban dreams met paper chase woes,<br>
            Progress a whisper, lost in bureaucratic flows.<br>
            So long, dear government, progress unknown,<br>
            My expertise seeks a fertile field, a purpose to be sown.
            {:else if text === 2}
            Joined the gov't, bright-eyed and keen,<br>
            To streamline forms, a coding machine.<br>
            Met endless approvers with an approval queue,<br>
            And colleagues who thought "cloud" was a shade of blue.<br><br>
            My agile sprints met fax machine hums,<br>
            Ideas drowned in process's mumbling chums.<br>
            So long, bureaucracy, where progress sleeps,<br>
            My skills are better suited elsewhere, it seems.
            {:else if text === 3}
            In the halls of power, a geek did tread,<br>
            With visions of algorithms, bright ideas in his head.<br>
            He dreamt of reform, efficiency to sow,<br>
            But found himself amidst a bureaucratic show.<br><br>

            "Change the system!" he cried, with logic so clear,<br>
            But the old guard just smirked, "Innovations not welcome here."<br>
            His code was clean, his intentions pure,<br>
            Yet against entrenched incompetence, he found no cure.<br>

            So from his cubicle, he plans his retreat,<br>
            A tale of a hero, who faced the system's defeat.<br>
            Yet, in his exit, a spark remains aglow,<br>
            For change comes not swiftly, and seeds need time to grow.
            {:else}
            Came to serve, code in hand,<br>
            To slay the forms, make the nation grand.<br>
            But met with systems, ancient and slow,<br>
            And colleagues who thought "API" meant "hello."<br><br>
            My Kanban dreams met paper chase woes,<br>
            Innovation lost, buried in red tape's nose.<br>
            So long, dear government, progress unknown,<br>
            My talents seek a fertile codebase, a digital throne.
            {/if}
          <svg xmlns="http://www.w3.org/2000/svg" class="inline ms-2 fill-white" width="40" height="40" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
        </p>
    </div>
</div>

<div class="flex flex-wrap gap-2 place-content-center">
    <div class="card w-40 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-5xl">{days}</h2>
            <p>days</p>
        </div>
    </div>
    <div class="card w-40 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-5xl countdown"><span style="--value:{hours};"></span></h2>
            <p>hours</p>
        </div>
    </div>
    <div class="card w-40 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-5xl countdown"><span style="--value:{minutes};"></span></h2>
            <p>minutes</p>
        </div>
    </div>
    <div class="card w-40 bg-base-100 hover:bg-red-500 hover:text-white shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-5xl countdown"><span style="--value:{seconds};"></span></h2>
            <p>seconds</p>
        </div>
    </div>
</div>

<div class="text-center mt-10"><button class="btn bg-red-600 text-white hover:bg-pink-500 text-2xl" on:click={() => {trigger = !trigger}}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-confetti me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h2" /><path d="M5 4v2" /><path d="M11.5 4l-.5 2" /><path d="M18 5h2" /><path d="M19 4v2" /><path d="M15 9l-1 1" /><path d="M18 13l2 -.5" /><path d="M18 19h2" /><path d="M19 18v2" /><path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" /></svg>Celebrate prematurely</button></div>
</section>

    <style>
:root {
    @media screen and (max-width: 767px) {
      overflow-y: none;
    }
    
    @media screen and (min-width: 768px) {
      overflow-y: clip;
    }
}

.bg-image {
    background-color: #FFCC00;
    background-image: url("../../lib/assets/amin-moshrefi-ebHg5_4CHL0-unsplash.webp");
    background-attachment: fixed;
    background-size: cover;
}

.pyro > .before, .pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.33333px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e, 226px -31.66667px #ff4000, 180px -351.66667px #ff00d0, -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00, -69px -27.66667px #ff0400, -111px -339.66667px #6200ff, 155px -237.66667px #00ddff, -152px -380.66667px #00ffd0, -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00, -88px 10.33333px #0d00ff, 112px -309.66667px #005eff, 69px -415.66667px #ff00a6, 168px -100.66667px #ff004c, -244px 24.33333px #ff6600, 97px -325.66667px #ff0066, -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff, 140px -196.66667px #9000ff, 125px -175.66667px #00bbff, 118px -381.66667px #ff002f, 144px -111.66667px #ffae00, 36px -78.66667px #f600ff, -63px -196.66667px #c800ff, -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff, -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2, 91px -278.66667px #000dff, -22px -191.66667px #9dff00, 139px -392.66667px #a6ff00, 56px -2.66667px #0099ff, -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb, -238px -346.66667px #00ff73, 62px -363.66667px #0088ff, 244px -170.66667px #0062ff, 224px -142.66667px #b300ff, 141px -208.66667px #9000ff, 211px -285.66667px #ff6600, 181px -128.66667px #1e00ff, 90px -123.66667px #c800ff, 189px 70.33333px #00ffc8, -18px -383.66667px #00ff33, 100px -6.66667px #ff008c;
  -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }

.pyro > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s; }

@-webkit-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-moz-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-o-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-ms-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0; } }
@-webkit-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-moz-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-o-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@-ms-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%; }

  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%; }

  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%; }

  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%; }

  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%; } }
    </style>


