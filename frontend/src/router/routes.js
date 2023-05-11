// lazy loads components
const page = (component) => {
  return () => import(`./views/${component}`).then((m) => m.default || m);
};

const routes = [
  {
    path: "/",
    component: page("Home.vue")
  },
  {
    path: "/windows-commands",
    component: page("WPCommands.vue")
  }
];

export default routes;
