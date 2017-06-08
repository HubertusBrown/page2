import { PagePage } from './app.po';

describe('page App', () => {
  let page: PagePage;

  beforeEach(() => {
    page = new PagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
