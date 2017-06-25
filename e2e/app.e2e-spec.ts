import { AngularBBPage } from './app.po';

describe('angular-bb App', () => {
  let page: AngularBBPage;

  beforeEach(() => {
    page = new AngularBBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
