import { FileTabModule } from './file-tab.module';

describe('FileTabModule', () => {
  let fileTabModule: FileTabModule;

  beforeEach(() => {
    fileTabModule = new FileTabModule();
  });

  it('should create an instance', () => {
    expect(fileTabModule).toBeTruthy();
  });
});
