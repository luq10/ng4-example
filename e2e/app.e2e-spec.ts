import { Angular4TestAppPage } from './app.po';

describe('angular4-test-app App', () => {
  let page: Angular4TestAppPage;

  beforeEach(() => {
    page = new Angular4TestAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
