// test/emailValidator.test.ts
import { isValidEmail } from '../src/emailValidator';

describe('isValidEmail', () => {
  test('valide un email correct', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('prenom.nom@domain.fr')).toBe(true);
  });

  test('rejette un email sans @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('rejette un email sans texte avant @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  test('rejette un email sans texte après @', () => {
    expect(isValidEmail('test@')).toBe(false);
  });

  test('rejette un email sans point dans le domaine', () => {
    expect(isValidEmail('test@examplecom')).toBe(false);
  });

  test('rejette un email avec un point à la fin du domaine', () => {
    expect(isValidEmail('test@example.com.')).toBe(false);
  });

  test('rejette un email avec des espaces', () => {
    expect(isValidEmail('test @example.com')).toBe(false);
    expect(isValidEmail('test@ example.com')).toBe(false);
  });

  test('rejette un email avec plusieurs @', () => {
    expect(isValidEmail('test@@example.com')).toBe(false);
  });
});

