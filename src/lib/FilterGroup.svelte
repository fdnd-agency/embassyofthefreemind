<script>
    export let summary;        // For the <summary>
    export let optionsList;
    import OptionsList from "./OptionsList.svelte";
  </script>
  
  <li>
    <details>
      <summary>{summary}</summary>
      <OptionsList
      list={optionsList}
      />
    </details>
  </li>

  <style>
    summary{
      background-color: aqua;
    }
  </style>
  