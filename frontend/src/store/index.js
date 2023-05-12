import { defineStore } from "pinia";
import axiosInstance from "../axiosInstance";

export const useCommandStore = defineStore("command", {
  state: () => ({
    commands: null,
    command: null,
    success: null,
  }),
  actions: {
    async getAllComands() {
      try {
        const { data } = await axiosInstance.get("/commands");
        this.commands = data.commands;
      } catch (err) {
        console.log(err);
      }
    },
    async getCommandById(id) {
      try {
        const { data } = await axiosInstance.get(`/commands/${id}`);
        this.command = data.command;
      } catch (err) {
        console.log(err);
      }
    },
    async editCommand(formData) {
      try {
        this.success = false;
        const { data } = await axiosInstance.put(
          `/commands/${formData.id}`,
          formData
        );
        this.success = true;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteCommand(id) {
      try {
        this.success = false;
        const { data } = await axiosInstance.delete(`/commands/${id}`);
        this.success = true;
      } catch (err) {
        console.log(err);
      }
    },
    async createCommand(formData) {
      try {
        this.success = false;
        const { data } = await axiosInstance.post(`/commands`, formData);
        this.success = true;
      } catch (err) {
        console.log(err);
      }
    },
    resetState() {
      this.success = false;
    },
  },
});
