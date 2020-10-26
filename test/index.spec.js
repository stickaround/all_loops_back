const expect = require('expect.js');
const allLoopsBack = require('../index');

describe('allLoopsBack', () => {
  const simpleGraph = [ [1, 2], [2, 3], [1, 3], [3, 4], [4, 2], [5, 6] ];
  const complexGraph = [ [1, 2], [2, 3], [1, 3], [3, 4], [4, 2], [5, 6], [2, 1] ];

  it('should return an empty list if no looping paths exist', () => {
    expect(allLoopsBack(1, simpleGraph)).to.eql([]);
  });

  it('should return a list off all existing looping paths', () => {
    expect(allLoopsBack(2, simpleGraph)).to.eql([[ 2, 3, 4, 2 ]]);
  });

  it('should return multiple paths sorted form shortest to longest', () => {
    const result = allLoopsBack(2, complexGraph);
    expect(result.length).to.be(3);
    expect(result[0]).to.eql([ 2, 1, 2 ]);
    expect(result[1]).to.eql([ 2, 3, 4, 2 ]);
    expect(result[2]).to.eql([ 2, 1, 3, 4, 2 ]);
  });
});
