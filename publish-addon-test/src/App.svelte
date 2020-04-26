<script>
  import { onMount } from "svelte";
  import { base } from "./utils/links.js";
  import * as analytics from "./utils/analytics.js";
  import MovieGrid from "./components/MovieGrid.svelte";

  export let title;
  export let description;

  const gettingMovies = getMovies();

  function getMovies() {
    const embedsURL = new URL("films.json", base().ASSET_PATH);
    embedsURL.searchParams.set("d", Date.now());
    return fetch(embedsURL).then(r => r.json())    
  }

  onMount(() => {
    analytics.fireEvent(`${process.env.PROJECT_SLUG}-loaded`);
  });
</script>

<style>
:global(html, body) {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
:global(article) {
  box-sizing: border-box;
  padding: 0 var(--article-horizontal-padding, 20px);
  width: 100%;
}
p {
  font-size: 16px;
  line-height: 1.35;
}
@media (min-width: 768px) {
  :global(article) {
    --article-horizontal-padding: 26vw;
  }
}
</style>

<h1>{title}!</h1>
<p>{description}</p>
{#await gettingMovies}
{:then movies}
<MovieGrid movies="{movies}" />
{/await}

