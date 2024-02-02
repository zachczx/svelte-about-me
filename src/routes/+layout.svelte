<script>
    import "../app.css";
</script>
<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>
<main>
<slot />
</main>
<footer class="footer footer-center p-4 text-base-content bg-neutral">
    <aside>
      <p>Copyright © 2023-24 Zixian Chen. All rights reserved.</p>
    </aside>
  </footer>