import { describe, it, expect } from 'test/lib/common';

import { getColorForValue } from '../module';

describe('grafanaSingleStat', function() {
  describe('legacy thresholds', () => {
    describe('positive thresholds', () => {
      var data: any = {
        colorMap: ['green', 'yellow', 'red', 'blue', 'cyan'],
        thresholds: [20, 30, 50, 90],
      };

      it('5 should return green', () => {
        expect(getColorForValue(data, 5)).to.be('green');
      });

      it('19.9 should return green', () => {
        expect(getColorForValue(data, 19.9)).to.be('green');
      });

      it('20 should return yellow', () => {
        expect(getColorForValue(data, 20)).to.be('yellow');
      });

      it('20.1 should return yellow', () => {
        expect(getColorForValue(data, 20.1)).to.be('yellow');
      });

      it('25 should return yellow', () => {
        expect(getColorForValue(data, 25)).to.be('yellow');
      });

      it('31 should return red', () => {
        expect(getColorForValue(data, 50)).to.be('red');
      });

      it('55 should return blue', () => {
        expect(getColorForValue(data, 55)).to.be('blue');
      });
      
      it('95 should return cyan', () => {
          expect(getColorForValue(data, 95)).to.be('cyan');
        });
    });
  });

  describe('negative thresholds', () => {
    var data: any = {
      colorMap: ['green', 'yellow', 'red', 'blue', 'cyan'],
      thresholds: [20, 30, 50, 95],
    };

    it('-30 should return green', () => {
      expect(getColorForValue(data, -30)).to.be('green');
    });

    it('1 should return green', () => {
      expect(getColorForValue(data, 1)).to.be('yellow');
    });

    it('22 should return green', () => {
      expect(getColorForValue(data, 22)).to.be('red');
    });
  });

  describe('negative thresholds', () => {
    var data: any = {
      colorMap: ['green', 'yellow', 'red', 'blue', 'cyan'],
      thresholds: [-27, 20, 30, 50],
    };

    it('-30 should return green', () => {
      expect(getColorForValue(data, -26)).to.be('yellow');
    });
  });
});
