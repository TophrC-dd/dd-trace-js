const { expect } = require('chai')

describe('ci visibility', () => {
  it('can report tests', () => {
    expect(1 + 2).to.equal(3)
  })
  it.todo('todo will not be retried')
  it.skip('skip will not be retried', () => {
    expect(1 + 2).to.equal(4)
  })
})
