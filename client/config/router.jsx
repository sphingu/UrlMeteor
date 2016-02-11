FlowRouter.route('/',{
  name: 'home',
  action: (params) => {
    renderMainLayoutWith(<HomePage />);
    setTitle('Home');
  }
});

let renderMainLayoutWith = (component) =>{
  ReactLayout.render(MainLayout, {
    component: component
  });
};
