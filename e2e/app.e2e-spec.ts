import { PmtepimeAppPage } from './app.po';

describe('pmtepime-app App', () => {
  let page: PmtepimeAppPage;

  beforeEach(() => {
    page = new PmtepimeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
