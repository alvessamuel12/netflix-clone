import { MyTymePipe } from './my-tyme.pipe';

describe('MyTymePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTymePipe();
    expect(pipe).toBeTruthy();
  });
});
