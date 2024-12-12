import { createHash } from 'crypto';
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
  if(rechargeAccount) {
    await query('UPDATE account SET currency = currency + $1 WHERE phone_number = $2', [body.currency, body.customerPhoneNumber]);
    return 'Recharge currency success';
  }
});
