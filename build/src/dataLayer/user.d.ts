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
export declare class UserDataLayer {
    insert(payload: any): Promise<import("mongoose").Document<unknown, any, {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    }> & {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    find(payload: any): Promise<(import("mongoose").Document<unknown, any, {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    }> & {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(payload: any): Promise<(import("mongoose").Document<unknown, any, {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    }> & {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    updateProfile(query: any, vary: any, payload: any): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, any, {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    }> & {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(query: any, payload: any): Promise<(import("mongoose").Document<unknown, any, {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    }> & {
        createdAt: Date;
        name: string;
        phone: number;
        password: string;
        amount?: number | undefined;
        jwt?: string | undefined;
        profileImage?: string | undefined;
        fcmToken?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
