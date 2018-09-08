import { HashTabModule } from './hash-tab.module';

describe('HashTabModule', () => {
  let hashTabModule: HashTabModule;

  beforeEach(() => {
    hashTabModule = new HashTabModule();
  });

  it('should create an instance', () => {
    expect(hashTabModule).toBeTruthy();
  });
});
