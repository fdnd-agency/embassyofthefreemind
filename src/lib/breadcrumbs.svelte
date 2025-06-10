<script>
  import { onMount } from "svelte"; 

  let current_url = []; // make an empty array

  onMount(() => { // function that is executed when the component is loaded on the page
    const pathParts = window.location.pathname.split("/").filter(Boolean); // window.location.pathname gets the path of the current url, split divides the path into pieces at each / , boolean removes empty strings
    current_url = ["Home", ...pathParts]; // put home at the front and then add url pieces
  });

  function getHref(index) { // calculates the link for each crumb
    if (index === 0) return "/"; // if it is the first crumb (home) then you give / back
    return "/" + current_url.slice(1, index + 1).join("/"); // slice takes the crumbs after home up to the current crumb , join sticks them back together with /
  }
</script>

<div class="breadcrumbs text-sm">
  <ul>
    {#each current_url as crumb, index} 
    <!-- crumb is the part, index is the number in the array -->
      <li>
        <a href="{getHref(index)}">{crumb}</a>
        <!-- the correct link is determined with getHref , visible text is crumb -->
      </li>
    {/each}
  </ul>
</div>