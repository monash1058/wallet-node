import mongoose from 'mongoose';
export declare const userModel: mongoose.Model<{
    createdAt: Date;
    name: string;
    phone: number;
    password: string;
    amount?: number | undefined;
    jwt?: string | undefined;
    profileImage?: string | undefined;
    fcmToken?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    name: string;
    phone: number;
    password: string;
    amount?: number | undefined;
    jwt?: string | undefined;
    profileImage?: string | undefined;
    fcmToken?: string | undefined;
}>>;
