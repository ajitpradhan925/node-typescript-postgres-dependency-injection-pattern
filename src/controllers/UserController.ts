// UserController.ts
import { injectable, inject } from 'inversify';
import { controller, httpGet, requestParam, BaseHttpController, httpPost, requestBody } from 'inversify-express-utils';
import { NextFunction, Response, Request } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../models/User';
import { UserValidators } from '../validators/UserValidators';
import { CreateUserDto } from '../dto/CreateUserDto';
import { sendResponse } from '../utils/response';
import { RESPONSE_MESSAGES } from '../constants/responseMessages';
import { validationResult } from 'express-validator';
import errorHandler from '../middlewares/errorHandler';

@controller('/users')
export default class UserController extends BaseHttpController {
  
  constructor(@inject(UserService) private userService: UserService) {
    super();
  }

  @httpGet('/')
  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      sendResponse(res, 200, users, RESPONSE_MESSAGES.FETCH_ALL);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  }

  @httpGet('/:id')
  public async getUser(@requestParam('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }

  @httpPost('/', ...UserValidators.createUserValidators())
  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
  
    // Handle the creation logic
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      // Handle other errors here
      // next(error);
      // return;
      let newError = error as Error;
      errorHandler(newError, req, res, next);

      // let newError = error as Error;
      // res.status(500).json({ error: 'Internal server error', stack: newError.stack });
    }
  }


  // @httpPut('/:id', ...UserValidators.updateUserValidators())
  // public async updateUser(@requestParam('id') id: number, @requestBody() body: UpdateUserDto): Promise<User | null> {
  //   // Handle the update logic
  // }

}
