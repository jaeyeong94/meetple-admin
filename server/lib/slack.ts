import axios from 'axios';
import { createError } from 'h3';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL 환경 변수가 설정되지 않았습니다.');
}

/**
 * @param message - 전송할 메시지 내용
 * @param channel - (선택 사항) 메시지를 전송할 채널
 * @returns Slack API 응답 데이터
 */
export async function sendSlackMessage(message: string, channel?: string) {
  if (!message) {
    throw createError({
      statusCode: 400,
      statusMessage: '메시지 내용이 비어 있습니다.',
    });
  }

  try {
    const payload: Record<string, any> = { text: message };
    if (channel) {
      payload.channel = channel;
    }

    const response = await axios.post(SLACK_WEBHOOK_URL!, payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  } catch (error: any) {
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.data || 'Slack 메시지 전송 중 오류가 발생했습니다.',
    });
  }
}
