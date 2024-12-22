import { createHash } from 'crypto';
import Message from '~/server/lib/message';
import { query } from "~/server/lib/pg";

interface RechargeCurrencyEvent {
  customerPhoneNumber: string;
  currency: number;
}

export default defineEventHandler(async (event) => {
  const body: RechargeCurrencyEvent = await readBody(event);
  const account = await query('SELECT * FROM account WHERE phone_number = $1', [body.customerPhoneNumber], { single: true });
  if (!account) {
    throw new Error('Account not found');
  }

  const rechargeAccount = account.rows;
  if(rechargeAccount && !Array.isArray(rechargeAccount)) {
    await query('UPDATE account SET currency = currency + $1 WHERE phone_number = $2', [body.currency, body.customerPhoneNumber]);

    if(body.currency > 0) {
      await Message.send(body.customerPhoneNumber, `캔디 ${body.currency}개 충전이 완료되었습니다.`);
      await query('INSERT INTO payment_manual_history (account_id, recharge_currency) VALUES ($1, $2)', [rechargeAccount.id, body.currency]);
    }

    return 'Recharge currency success';
  }
});
