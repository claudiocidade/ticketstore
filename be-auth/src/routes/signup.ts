import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation';

const router = express.Router();
const min = 4;
const max = 20;
const emailMessage = 'Email must be valid.';
const passwordMessage = `Password must be between ${min} and ${max} characters`;

router.post(
  '/api/users/signup',
  [
    body('email')
    .isEmail()
    .withMessage(emailMessage), 
    body('password')
    .trim()
    .isLength({ min: min, max: max })
    .withMessage(passwordMessage)
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    };

    console.log('Creating a user...');
    res.send({});
});

export { router as signUpRouter };