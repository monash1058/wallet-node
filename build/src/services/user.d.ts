/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class UserService {
    register(payload: any): Promise<{
        message: string;
        success: boolean;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null;
    }>;
    verifyNumber(payload: any): Promise<{
        message: any;
    }>;
    login(payload: any): Promise<{
        message: string;
        success: boolean;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null;
    }>;
    getData(payload: any): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getDashboardData(payload: any): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getAmount(payload: any): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null;
    }>;
    editProfile(payload: any): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, any, {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        }> & {
            createdAt: Date;
            name: string;
            phone: number;
            password: string;
            amount?: number | undefined;
            goldRate?: number | undefined;
            jwt?: string | undefined;
            fcmToken?: string | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null;
    }>;
    transferMoney(payload: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, any, {
            senderID: import("mongoose").Types.ObjectId;
            reciverID: import("mongoose").Types.ObjectId;
            amount: number;
            sendBy: string;
            reciveBy: string;
            createdAt: string;
            message?: string | undefined;
            goldRate?: number | undefined;
        }> & {
            senderID: import("mongoose").Types.ObjectId;
            reciverID: import("mongoose").Types.ObjectId;
            amount: number;
            sendBy: string;
            reciveBy: string;
            createdAt: string;
            message?: string | undefined;
            goldRate?: number | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    getAllHistory(payload: any): Promise<{
        message: string;
        data: {
            sendHistory: (import("mongoose").Document<unknown, any, {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            }> & {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            } & {
                _id: import("mongoose").Types.ObjectId;
            })[];
            recivedHistory: (import("mongoose").Document<unknown, any, {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            }> & {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            } & {
                _id: import("mongoose").Types.ObjectId;
            })[];
            recentHistory: (import("mongoose").Document<unknown, any, {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            }> & {
                senderID: import("mongoose").Types.ObjectId;
                reciverID: import("mongoose").Types.ObjectId;
                amount: number;
                sendBy: string;
                reciveBy: string;
                createdAt: string;
                message?: string | undefined;
                goldRate?: number | undefined;
            } & {
                _id: import("mongoose").Types.ObjectId;
            })[];
        };
    }>;
}
