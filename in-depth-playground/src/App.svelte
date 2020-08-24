<script>
import InDepthNav from "./components/InDepthNav.svelte";
import HelloWorld from "./components/HelloWorld.svelte";
import ComponentTwo from "./components/ComponentTwo.svelte";

let activeComponent = HelloWorld;
let links = [
  { label: "Hello World", component: HelloWorld },
  { label: "Component Two", component: ComponentTwo },
];

</script>

<style>
.in-depth-content {
  padding-top: 20px;
}
</style>

<div class="article-inner">
  <InDepthNav {links} on:select="{ ({detail:{component}}) => activeComponent = component }"></InDepthNav>
  <svelte:component this={activeComponent}></svelte:component>
</div>