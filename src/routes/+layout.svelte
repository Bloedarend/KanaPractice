<script>
  import "../app.postcss";
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div>
  <Header />

  <main>
    <slot />
  </main>
</div>