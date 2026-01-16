// src/emailValidator.ts

/**
 * Vérifie si une chaîne est un email valide
 * @param email La chaîne à vérifier
 * @returns true si l'email est valide, false sinon
 */
export function isValidEmail(email: string): boolean {
  // 1. Aucun espace
  if (email.includes(' ')) return false;

  // 2. Doit contenir exactement un '@'
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;

  // Il ne doit pas y avoir plusieurs '@'
  if (email.indexOf('@', atIndex + 1) !== -1) return false;

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);

  // 3. Doit y avoir du texte avant et après '@'
  if (localPart.length === 0 || domainPart.length === 0) return false;

  // 4. Domaine doit contenir au moins un '.' et pas en dernier caractère
  const dotIndex = domainPart.indexOf('.');
  if (dotIndex === -1 || dotIndex === domainPart.length - 1) return false;

  return true;
}
