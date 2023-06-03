<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useCommandStore } from "../store";

export default {
  computed: {
    ...mapStores(useCommandStore),
    ...mapState(useCommandStore, ["commands", "success"]),
  },
  methods: {
    ...mapActions(useCommandStore, ["getAllComands", "deleteCommand"]),
    async detele(id) {
      await this.deleteCommand(id);
      //not ideal just for time
      await this.getAllComands();
    },
  },
  created() {
    this.getAllComands();
    // this.$watch(
    //   () => this.$forceUpdate.params,
    //   (toParams, previousParams) => {
    //     this.getAllComands();
    //   }
    // );
  },
};
</script>

<template>
  <div class="p-5">
    <h4 class="text-center">List of commands</h4>
    <input
      type="search"
      class="form-control p-2 mb-3"
      placeholder="Search..."
      autocomplete="true"
    />
    <div class="card p-5">
      <div v-if="success" class="alert alert-success" role="alert">
        Command deleted successfully
      </div>
      <table v-if="commands.length > 0" class="table">
        <thead class="table-dark">
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">Platform</th>
            <th scope="col">Operating System</th>
            <th scope="col">Command</th>
            <th scope="col">Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="command in commands" :key="command.id">
            <th scope="row">{{ command.id }}</th>
            <td>{{ command.platform }}</td>
            <td>{{ command.operating_system }}</td>
            <td>{{ command.command }}</td>
            <td>{{ command.description }}</td>
            <td>
              <router-link :to="`/edit-command/${command.id}`">
                <button class="btn btn-secondary">
                  <i class="bi bi-pencil-square"></i>
                </button>
              </router-link>
              <button class="btn btn-light ms-2" @click="detele(command.id)">
                <i class="bi bi-trash3-fill text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="alert alert-info" role="alert">
        No commands available
      </div>
    </div>
  </div>
</template>

<style scoped></style>
