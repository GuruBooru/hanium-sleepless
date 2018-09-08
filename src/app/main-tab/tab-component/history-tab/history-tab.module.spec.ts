import { HistoryTabModule } from './history-tab.module';

describe('HistoryTabModule', () => {
  let historyTabModule: HistoryTabModule;

  beforeEach(() => {
    historyTabModule = new HistoryTabModule();
  });

  it('should create an instance', () => {
    expect(historyTabModule).toBeTruthy();
  });
});
