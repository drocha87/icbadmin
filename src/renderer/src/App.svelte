<script lang="ts">
  let users = []

  async function fetchUrl() {
    users = await window.api.getUsers()
  }
</script>

<main class="text-3xl h-screen w-screen flex flex-col justify-center items-center">
  <form on:submit|preventDefault={fetchUrl}>
    <input type="text" placeholder="Type here" class="input w-full max-w-xs input-bordered" />
    <button class="btn btn-primary" type="submit">Save</button>
  </form>

  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Email</th>
          <th>Name</th>
          <th>Phone</th>
          <th>CPF</th>
          <th>English</th>
          <th>Spanish</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr>
            <th>{user.id}</th>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.cpf}</td>
            <td>{user.english}</td>
            <td>{user.spanish}</td>
            <td>{user.created_at}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>
