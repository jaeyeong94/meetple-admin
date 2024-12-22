import axios from 'axios';

const config = useRuntimeConfig();
const request = axios.create({
  baseURL: config.MESSAGE_HOST
});

class MessageService {
  public async send(phoneNumber: string, message: string) {
    const body = {
      key: config.MESSAGE_API_KEY,
      user_id: config.MESSAGE_USER_ID,
      sender: config.MESSAGE_SENDER,
      receiver: phoneNumber,
      msg: message,
    };

    const response = await request.post('/send/', body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  }
}

export default new MessageService;
