const FCM = require('fcm-node');
const config = require('../../config');
const serverKey = config.FIREBASE_SERVER_KEY;
const fcm = new FCM('AAAAgfIvx_U:APA91bGgxz9wHWiEzAzmWrA9Bq1igNYuY5wAbiU340kS_UbB0jf7dVo02GqSbcovz7wxFASNg5WZZ7XxvpznwhcI9INv9ns1jXBZpxbJIfTDZjgRYIzcgVGerQO_xpaxvD2AqpWW0ldZ');

export const sentMessage = (token:any, title:any, message:any)=>{
    const messageConfig = {
        to:token,
        notification:{
            title,
            body:message
        }
    }
    fcm.send(messageConfig, (error:any, response:any) =>{
        if(error){
            throw new Error(error);
        } else{
            return response;
        }
    })

}