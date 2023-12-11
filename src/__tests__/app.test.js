import showLife from '../app';

test.each([
  ['маг', 90, 'healthy'],
  ['мечник', 10, 'critical'],
  ['лучник', 50, 'wounded'],
])(
  ('showLife calculate for %s with %i health'),
  (_, health, expected) => {
    const result = showLife(health);
    expect(result).toEqual(expected);
  },
);
