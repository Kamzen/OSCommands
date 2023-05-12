// lazy loads components
// const page = (component) => {
//   return () => import(`/@/views/${component}`);
// };

import Home from "../views/Home.vue";
import CreateCommand from "../views/CreateCommand.vue";

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
];

export default routes;
