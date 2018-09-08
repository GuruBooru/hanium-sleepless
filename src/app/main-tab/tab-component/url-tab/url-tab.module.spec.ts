import { UrlTabModule } from './url-tab.module';

describe('UrlTabModule', () => {
  let urlTabModule: UrlTabModule;

  beforeEach(() => {
    urlTabModule = new UrlTabModule();
  });

  it('should create an instance', () => {
    expect(urlTabModule).toBeTruthy();
  });
});
