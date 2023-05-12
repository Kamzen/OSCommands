<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useCommandStore } from "../store";
export default {
  data() {
    return {
      formData: {
        platform: "",
        operating_system: "",
        command: "",
        description: "",
      },
      operatingSystems: ["Windows", "Mac Book Air", "Linux"],
    };
  },
  computed: {
    ...mapStores(useCommandStore),
    ...mapState(useCommandStore, ["success"]),
  },
  methods: {
    selectedOS({ target }) {
      this.formData = {
        ...this.formData,
        operating_system: target.value,
      };
    },
    ...mapActions(useCommandStore, ["createCommand"]),
    add() {
      this.createCommand(this.formData);
    },
  },
  created() {},
};
</script>

<template>
  <div class="add-category p-5">
    <div class="card w-50 m-auto">
      <div class="card-body">
        <h5 class="card-title form-title text-center">Add Command</h5>

        <div v-show="success" class="alert alert-success" role="alert">
          Command updated successfully
        </div>

        <form>
          <div class="mb-3">
            <label class="form-label">Platform</label>
            <input
              type="text"
              class="form-control p-2"
              placeholder="Platform"
              v-model="formData.platform"
              autocomplete="true"
            />
          </div>
          <select class="form-select p-2 mb-3" @change="selectedOS">
            <option :selected="true">Select Operating System</option>
            <option v-for="os in operatingSystems" :key="os" :value="os">
              {{ os }}
            </option>
          </select>
          <div class="mb-3">
            <label class="form-label">Command</label>
            <input
              type="text"
              class="form-control p-2"
              placeholder="Command"
              v-model="formData.command"
              autocomplete="true"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <input
              type="text"
              class="form-control p-2"
              placeholder="Description"
              v-model="formData.description"
              autocomplete="true"
            />
          </div>

          <div class="text-center">
            <button type="button" class="btn btn-dark" @click="add()">
              Add Command
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
