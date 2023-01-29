<script>
  import Hero from '$lib/Hero.svelte'
</script>

<Hero title="Planner" subtitle="" />

<main class="content section">

  <h1>Project Name</h1>

  <h2>Phase Name 1</h2>

  <table>
    <tr>
      <th>Task Name</th>
      <th>Task Status</th>
      <th>Start Date</th>
      <th>End Date</th>
    </tr>
    <tr>
      <td>Start the thing</td>
      <td class="notification is-warning">
        <div class="select is-warning">
          <select name="status">
            <option value="started">Started</option>
            <option value="sone">Done</option>
            <option value="pending"></option>
          </select>
        </div>
      </td>
      <td>
        <input class="input" type="date" name="start-date">
      </td>
      <td>
        <input class="input" type="date" name="end-date">
      </td>
    </tr>
    <tr>
      <td>Continue the thing</td>
      <td class="notification is-warning">Pending</td>
    </tr>
  </table>

</main>

<style>
  .started {
    color: white;
    background-color: green;
  }

  .pending {
    background-color: yellow;
  }
</style>