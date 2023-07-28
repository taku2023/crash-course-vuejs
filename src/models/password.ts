export class Password {
  private static validator(email: string) {
    return /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/.test(email);
  }

  public readonly isValid: boolean;

  constructor(public readonly email: string) {
    this.isValid = Password.validator(email);
  }
}
