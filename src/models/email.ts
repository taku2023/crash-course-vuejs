export class EmailAddress {
  private static validator(email: string) {
    return /^[a-zA-Z]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  public readonly isValid: boolean;

  constructor(public readonly email: string) {
    this.isValid = EmailAddress.validator(email);
  }
}
