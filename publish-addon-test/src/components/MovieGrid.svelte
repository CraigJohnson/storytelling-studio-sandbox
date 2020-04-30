<script>
  import { onMount } from "svelte";
  import { base } from "../utils/links.js";
  import { movies } from "../store";

  $: trilogies = ["Original", "Prequel", "Sequel", "Standalone"].filter(t => $movies.find(m => m.trilogy == t));

  function getTrilogy(trilogy) {
    return $movies.filter(f => f.trilogy == trilogy).sort((a, b) => a.year - b.year);
  }

  function moviePoster(filename) {
    return new URL(`images/${filename}`, base().ASSET_PATH);
  }

  onMount(() => {
    console.log($movies);
  })
</script>

<style>
.container {
  padding-bottom: 50px;
}
h2 {
  border-color: #999;
  border-style: solid;
  border-width: 2px 0px;
  font-size: 14px;
  margin-top: 30px;
  padding: 4px 0;
  text-align: center;
  text-transform: uppercase;
}
.trilogy-container {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}
.movie-container {
  text-align: center;
}
.movie-container img {
  width: 100%;
}
.movie-container h3 {
  font-size: 16px;
  margin: 6px 0;
}
.movie-container label {
  font-size: 11px;
}
@media (min-width: 768px) {
  .trilogy-container {
    grid-gap: 50px;
  }
}
</style>

<div class="container">
  {#each trilogies as trilogy}
  <h2>{trilogy} TRILOGY</h2>
  <div class="trilogy-container">
    {#each getTrilogy(trilogy) as movie}
    <div class="movie-container">
      <img class="movie-poster" src={moviePoster(movie.poster)} alt={movie.title} />
      <h3>{@html movie.title.replace(' – ', '<br/>')}</h3>
      <label>{movie.year}</label>
    </div>
    {/each}
  </div>
  {/each}
</div>