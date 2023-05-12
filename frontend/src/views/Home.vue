<script>
import { mapActions } from "pinia";
import { useCommandStore } from "../store";

export default {
  methods: {
    ...mapActions(useCommandStore, { getAllCommands: "getAllCommands" }),
  },
  created() {
    this.getAllCommands();
  },
};
</script>

<template>
  <div class="p-5">
    <h4 class="text-center">List of commands</h4>
    <div class="card p-5">
      <table class="table">
        <thead class="table-dark">
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
