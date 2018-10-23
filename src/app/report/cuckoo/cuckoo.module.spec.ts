import { CuckooModule } from './cuckoo.module';

describe('CuckooModule', () => {
  let cuckooModule: CuckooModule;

  beforeEach(() => {
    cuckooModule = new CuckooModule();
  });

  it('should create an instance', () => {
    expect(cuckooModule).toBeTruthy();
  });
});
