import { defineStore } from "pinia";
import axiosInstance from "../axiosInstance";

export const useCommandStore = defineStore("command", () => {
  state: () => ({
    commands: null,
    command: null,
    loading: null,
    error: null,
    message: null,
  });
  actions: {
    getAllComands: async () => {
      const { data } = await axiosInstance.get("/commands");

      console.log(data)

      try {
      } catch (err) {
        console.log(err);
      }
    };
  }
});
