import { body, ValidationChain } from 'express-validator';

export class UserValidators {
  public static createUserValidators(): ValidationChain[] {
    return [
      body('name').isString().isLength({ min: 2 }),
      body('email').isEmail(),
      // Add more validation rules as needed
    ];
  }

  public static updateUserValidators(): ValidationChain[] {
    return [
      body('name').isString().isLength({ min: 2 }),
      // Add more validation rules as needed
    ];
  }

  // Add more validator methods for other controller endpoints if needed
}
