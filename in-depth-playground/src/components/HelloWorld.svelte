<script>
import LoremIpsum from "./LoremIpsum.svelte";
let clickedMessage = false;
function clickHandler() {
  clickedMessage = true;
  setTimeout(() => clickedMessage = false, 1500);
}
</script>
<style>
section {
  margin-top: 20px;
}

.hello-world {
  border: 8px solid #009bff;
  padding: 18px;
}
.hello-world h1 {
  font-size: 24px;
  margin-bottom: 9px;
}
.hello-world p {
  margin: 0;
}
.hello-world span {
  color: #009bff;
  font-family: var(--sans-serif, sans-serif);
  font-weight: bold;
  margin-left: 30px;
  opacity: 0;
  transition: opacity .5s;  
}
.hello-world span.show {
  opacity: 1;
}
.hello-world .btn {
  background-color: #009bff;
  border: none;
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
  padding: 9px 15px;
}
.hello-world .btn:focus {
  outline: 0;
}
.hello-world .btn:active {
  background-color: #008bee;
}

</style>

<section>
  <LoremIpsum graphs="2" chapterHeader="true" />
  <div class="center-well">
    <aside class="hello-world">
      <h1>Hello world</h1>
      <p>This is just a simple Svelte component for demonstration purposes.</p>
      <button class="btn" on:click={ clickHandler }>Click me</button>
      <span class:show={clickedMessage}>Hi, Mom!</span>
    </aside>
  </div>
  <LoremIpsum graphs="4" />
</section>