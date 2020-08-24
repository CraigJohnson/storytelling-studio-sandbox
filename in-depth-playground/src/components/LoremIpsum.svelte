<script>
import { onMount } from "svelte";

export let chapterHeader = "";
export let graphs = 0;

const pTags = [];

onMount(() => {
  for (let i = graphs; i < 15; i++) {
    pTags[i].remove();
  }
})

</script>

{#if chapterHeader === "true"}
<h2 class="chapter-marker">This is a chapter header</h2>
{:else if chapterHeader}
<h2 class="chapter-marker">{ chapterHeader }</h2>
{/if}
<p bind:this={ pTags[0] }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae quam neque. Morbi sodales nisi eu purus dictum, non sagittis quam fermentum. Quisque vitae semper justo. Praesent massa augue, blandit id fermentum non, auctor eu elit.</p>
<p bind:this={ pTags[1] }>Donec purus purus, dapibus vel ex eu, imperdiet tempor turpis. Curabitur gravida justo ut est convallis, sit amet convallis sapien aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce elementum dui non varius ultrices.</p>
<p bind:this={ pTags[2] }>Sed sagittis diam pellentesque lorem egestas, in pellentesque sapien imperdiet. Aenean aliquet elit purus, eu egestas elit placerat non. Aliquam at turpis felis. Donec ac orci in dui eleifend tincidunt. Sed ac ex sed ligula convallis vehicula.</p>
<p bind:this={ pTags[3] }>Praesent varius vitae tortor rutrum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p bind:this={ pTags[4] }>Sed tempus luctus est, at aliquet nulla mattis ac. Integer eu venenatis nibh. Sed diam purus, commodo eget mi eget, pellentesque tempor tellus. In hac habitasse platea dictumst. Suspendisse pharetra rhoncus mi dignissim vehicula. Proin molestie, lorem vitae porta tempus, nibh ipsum commodo tellus, a pharetra augue urna sed nulla. Nullam bibendum magna nec nisi vulputate porta. Praesent dignissim neque sed odio auctor tincidunt. Proin pulvinar commodo mi at aliquam.</p>
<p bind:this={ pTags[5] }>Mauris a nisi euismod, vestibulum quam at, aliquam odio. Integer auctor nulla efficitur elit dignissim elementum. Proin posuere luctus ante pellentesque ultricies. Donec gravida pellentesque velit ut volutpat. Duis feugiat orci sit amet dolor finibus, at imperdiet elit facilisis.</p>
<p bind:this={ pTags[6] }>Cras condimentum lorem quis augue tempus, non consectetur turpis malesuada. Nullam vulputate orci eget imperdiet ultrices. Proin felis eros, porttitor et nunc ac, placerat lobortis nisi. Donec in massa urna.</p>
<p bind:this={ pTags[7] }>Etiam volutpat velit at diam ornare pretium. Sed consequat hendrerit felis, in congue massa condimentum euismod. Curabitur ultrices eros magna, imperdiet venenatis massa congue sed. Vivamus eget massa ultrices, imperdiet est pretium, imperdiet ligula. Phasellus blandit, risus vitae iaculis semper, dui mauris tincidunt urna, eu mollis erat magna vitae velit.</p>
<p bind:this={ pTags[8] }>Phasellus tristique porttitor ipsum, vitae blandit nulla mollis quis. Suspendisse nec hendrerit arcu. Fusce feugiat fermentum metus id imperdiet.</p>
<p bind:this={ pTags[9] }>Curabitur lacinia nisi sem, sed pulvinar sapien faucibus non. Mauris molestie euismod suscipit. Nam eu risus ultrices, pretium urna vel, iaculis diam. Morbi et feugiat nibh, et semper turpis. Ut orci lectus, dictum at tellus eu, mattis tempor metus.</p>
<p bind:this={ pTags[10] }>Morbi sagittis, nisi a viverra venenatis, dui tellus laoreet mi, eget iaculis odio augue quis tortor. Sed sodales et lacus et laoreet. Quisque ut fermentum nibh, quis vestibulum ex. Ut fermentum arcu ut erat cursus, quis finibus arcu rhoncus. Etiam mattis, nisl eget dictum elementum, nisl nisi faucibus quam, sed varius ipsum dolor commodo turpis. In eget magna neque. In ligula purus, interdum id faucibus in, vestibulum vitae tellus.</p>
<p bind:this={ pTags[11] }>Donec molestie sapien ac ornare placerat. Nullam eget tincidunt est. Pellentesque dictum felis ultrices purus condimentum dapibus. Etiam tincidunt convallis nibh id viverra. Sed posuere tellus elit, ut ornare eros placerat at. Vestibulum semper libero quis orci aliquam mollis.</p>
<p bind:this={ pTags[12] }>Suspendisse imperdiet lobortis ipsum a blandit. Nunc tincidunt consequat convallis. Sed eget nisl tempor, euismod dui quis, bibendum lorem. Aliquam fermentum urna eget nisi ullamcorper, nec rutrum purus aliquam.</p>
<p bind:this={ pTags[13] }>In finibus fringilla ante nec sodales. In ut molestie mi, eu pulvinar erat.</p>
<p bind:this={ pTags[14] }>Pellentesque eget dolor sit amet dolor mollis mattis at vitae nunc. Ut metus metus, eleifend vitae sollicitudin et, sagittis nec velit. Etiam euismod est at sem tempor, et elementum diam porttitor.</p>