import { SkyVisualTest } from '../../../config/utils/visual-test-commands';

describe('Vertical tabSet', () => {

  it('should match previous vertical tabset screenshot', () => {
    return SkyVisualTest.setupTest('vertical-tabs')
    .then(() => {
      return SkyVisualTest.compareScreenshot({
        screenshotName: 'vertical-tabset',
        selector: '#screenshot-vertical-tabset'
      });
    });
  });
});