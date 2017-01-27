import { HackTeamPage } from './app.po';

describe('hack-team App', function() {
  let page: HackTeamPage;

  beforeEach(() => {
    page = new HackTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
