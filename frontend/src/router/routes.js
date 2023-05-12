// lazy loads components
// const page = (component) => {
//   return () => import(`/@/views/${component}`);
// };

import Home from "../views/Home.vue";
import CreateCommand from "../views/CreateCommand.vue";
import EditCommand from "../views/EditCommand.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/create-command",
    name: "create-command",
    component: CreateCommand,
  },
  {
    path: "/edit-command/:id",
    name: "edit-command",
    component: EditCommand,
  },
];

export default routes;
