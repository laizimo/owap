import { OwapPage } from './app.po';

describe('owap App', () => {
  let page: OwapPage;

  beforeEach(() => {
    page = new OwapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
