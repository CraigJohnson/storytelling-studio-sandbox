<script>
import { createEventDispatcher } from "svelte";

export let links = [];

const dispatch = createEventDispatcher();
let activeIndex = 0;
let open = false;

function select(evt) {
  activeIndex = evt.target.dataset.index;
  dispatch("select", { component: links[activeIndex].component });
  setTimeout(() => open = false, 100);
}

</script>

<style>
header {
  border-bottom: 1px solid #ddd;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10000;
}
#navContainer {
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 55px;
  overflow: hidden;
  width: 100%;
}
#fullNavToggle {
  cursor: pointer;
  height: 24px;
  padding-left: 20px;
}
#fullNavToggle svg {
  fill: #000;
  height: 100%;
  width: 24px;
}
#logoContainer {
  display: inline-block;
  height: 32px;
  margin-left: 12px;
}
#logoContainer img {
  height: 100%;
  width: auto;
}
#expandWrap {
  background-color: #fff;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: all .3s;
  width: 100vw;
  z-index: 101;
}
.hub-open #expandWrap {
  transform: translateX(0%);
}
#logoWrap {
  align-items: center;
  display: flex;
  height: 45px;
  justify-content: space-between;
  padding: 32px 30px;
}
#logoWrap img {
  height: 100%;
}
#hubToggle {
  cursor: pointer;
  font-size: 30px;
  padding: 6px;
}
#linksList {
  list-style: none;
  padding: 0;
}
#linksList li {
  background-color: transparent;
  font-family: var(--sans-serif, sans-serif);
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 10px 30px;
  position: relative;
  text-indent: 0px;
  transition: all .3s;
}
#linksList li:hover {
  background-color: #f2f2f2;
  cursor: pointer;
  text-indent: 20px;
}
#linksList .active {
  cursor: default;
  pointer-events: none;
}
#linksList .active:before {
  background-color: #009bff;
  content: "";
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0;
  width: 8px;
}
#expandWrapBackground {
  opacity: 0;
  transition: opacity .3s;
}
.hub-open #expandWrapBackground {
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, .53);
  height: 100%;
  left: 0;
  opacity: 1;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
@media (min-width: 480px) {
  #fullNavToggle {
    padding-left: 48px;
  }
  #expandWrap {
    width: 398px;
  }
}
@media (min-width: 960px) {
  #expandWrap {
    width: 41.66666667%;
  }
}
@media (min-width: 1200px) {
  #expandWrap {
    width: 33.3333333%;
  }
}
</style>

<header class="in-depth-nav" class:hub-open={ open }>
  <div id="navContainer">
    <div id="fullNavToggle" on:click="{ () => open = true }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3,13 L3,11 L21,11 L21,13 L3,13 Z M3,7 L3,5 L21,5 L21,7 L3,7 Z M3,19 L3,17 L21,17 L21,19 L3,19 Z"></path>
      </svg>
    </div>
    <span id="logoContainer">
      <img src="https://www.gannett-cdn.com/gannett-web/properties/usatoday/logos-and-branding/logo-default.svg">
    </span>
  </div>
  <div id="expandWrap" on:click:stopPropagation >
    <div id="logoWrap">
      <img src="https://www.gannett-cdn.com/gannett-web/properties/usatoday/logos-and-branding/logo-default.svg">
      <div id="hubToggle" on:click="{ () => open = false }">&times;</div>
    </div>
    <ul id="linksList">
    {#each links as link, i}
      <li class="nav-item" 
        class:active="{ i == activeIndex }"
        data-index="{ i }"
        on:click="{ select }">{ link.label }</li>
    {:else}
      <li>No links.</li>
    {/each}
    </ul>
  </div>
  <div id="expandWrapBackground" on:click="{ () => open = !open }"></div>
</header>
