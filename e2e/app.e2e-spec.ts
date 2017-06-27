import { TheBasicsPage } from './app.po';

describe('the-basics App', () => {
  let page: TheBasicsPage;

  beforeEach(() => {
    page = new TheBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
