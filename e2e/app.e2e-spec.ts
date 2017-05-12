import { MeanCrudTutorialPage } from './app.po';

describe('mean-crud-tutorial App', () => {
  let page: MeanCrudTutorialPage;

  beforeEach(() => {
    page = new MeanCrudTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
