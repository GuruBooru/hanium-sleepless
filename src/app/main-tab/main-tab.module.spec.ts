import { MainTabModule } from './main-tab.module';

describe('MainTabModule', () => {
  let mainTabModule: MainTabModule;

  beforeEach(() => {
    mainTabModule = new MainTabModule();
  });

  it('should create an instance', () => {
    expect(mainTabModule).toBeTruthy();
  });
});
