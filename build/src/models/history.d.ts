import mongoose from 'mongoose';
export declare const historyModel: mongoose.Model<{
    senderID: mongoose.Types.ObjectId;
    reciverID: mongoose.Types.ObjectId;
    amount: number;
    sendBy: string;
    reciveBy: string;
    createdAt: string;
    message?: string | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    senderID: mongoose.Types.ObjectId;
    reciverID: mongoose.Types.ObjectId;
    amount: number;
    sendBy: string;
    reciveBy: string;
    createdAt: string;
    message?: string | undefined;
}>>;
