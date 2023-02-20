import { Request, Response } from 'express';
export declare class UserController {
    register(req: Request, res: Response, next: any): Promise<void>;
    verifyNumber(req: Request, res: Response, next: any): Promise<void>;
    login(req: Request, res: Response, next: any): Promise<void>;
    getData(req: Request, res: Response, next: any): Promise<void>;
    getDashboardData(req: Request, res: Response, next: any): Promise<void>;
    addAmount(req: Request, res: Response, next: any): Promise<void>;
    editProfile(req: Request, res: Response, next: any): Promise<void>;
    transferMoney(req: Request, res: Response, next: any): Promise<void>;
    getAllHistory(req: Request, res: Response, next: any): Promise<void>;
}
