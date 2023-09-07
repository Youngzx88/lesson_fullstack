import { JwtCheckGuard } from './jwt-check.guard';

describe('JwtCheckGuard', () => {
  it('should be defined', () => {
    expect(new JwtCheckGuard()).toBeDefined();
  });
});
