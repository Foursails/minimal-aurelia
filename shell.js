const { useView } = au;
export class ShellViewModel {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      { route: '', redirect: 'one' },
      { route: 'one', name: 'one', moduleId: './one.js', title: 'First', nav: true },
      { route: 'two', name: 'two', moduleId: './two.js', title: 'Second', nav: true },
    ]);
  }
};
useView('./shell.html')(ShellViewModel);
