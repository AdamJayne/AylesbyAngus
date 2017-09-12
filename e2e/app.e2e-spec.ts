import { AylesbyAngusPage } from './app.po';

describe('aylesby-angus App', () => {
  let page: AylesbyAngusPage;

  beforeEach(() => {
    page = new AylesbyAngusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
