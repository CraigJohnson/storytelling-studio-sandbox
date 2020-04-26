<script>
  import { onMount } from "svelte";
  import { base } from "./utils/links";
  import { movies } from "./store";
  import * as analytics from "./utils/analytics";
  import MovieGrid from "./components/MovieGrid.svelte";

  export let title;
  export let description;

  onMount(() => {
    analytics.fireEvent(`${process.env.PROJECT_SLUG}-loaded`);

    const moviesUrl = new URL("films.json", base().ASSET_PATH);
    moviesUrl.searchParams.set("d", Date.now());
    fetch(moviesUrl)
      .then(r => r.json())
      .then(d => $movies = d);
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
:global(main) {

}
h1 {
  margin: 9px 0;
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

<h1>{title}</h1>
<p>{description}</p>
<MovieGrid />

