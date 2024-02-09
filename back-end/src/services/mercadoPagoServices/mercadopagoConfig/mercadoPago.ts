import { MercadoPagoConfig, MerchantOrder, Payment, Preference } from "mercadopago";
import * as dotenv from "dotenv";
import {
  PreferenceRequest,
  PreferenceResponse,
} from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";
import { MerchantOrderSearchResultsPage } from "mercadopago/dist/clients/merchantOrder/search/types";
dotenv.config();

/* estrutura de la interface Items que viene del modulo mercado pago:  "
     title": "Dummy Item",
      "description": "Multicolor Item",
      "currency_id": "$",
      "quantity": 1,
      "unit_price": 10 
*/

export interface IntemsWithOutId {
  quantity: number;
  title: string;
  unit_price: number;
  description?: string;
  currency_id: string;
}

//se importan las credenciales de mercado pago
const { MERCADO_ACCESS_TOKEN, NOTIFICATION_URL }: any = process.env;

const MercadoObjectConfig: MercadoPagoConfig = {
  accessToken: MERCADO_ACCESS_TOKEN,
};

// se configura el objeto Api  de mercado libre y verificacion de credenciales
const client = new MercadoPagoConfig(MercadoObjectConfig);
const payment = new Payment(client);
const preference = new Preference(client);
const merchantOder = new MerchantOrder(client);

export const paymentActivities = async (
  items: Items[],
  UserId: Number
): Promise<PreferenceResponse | undefined> => {
  try {
    // el objeto de configuracion de un preference de mercado libre
    const body: PreferenceRequest = {
      items,
      back_urls: {
        success: "http://localhost:3001/paymentActivities/success",
        failure: "http://localhost:3001/paymentActivities/failure",
        pending: "http://localhost:3001/paymentActivities/pending",
      },
      notification_url: `${NOTIFICATION_URL}/paymentActivities/webhooks`,
      external_reference: `AppGuard,${UserId}`,
    };
    const PaymentResponse: PreferenceResponse = await preference.create({ body });
    return PaymentResponse;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const requirePayInfo = async (payment_id: string): Promise<any> => {
  try {
    const paymentData = await payment.get({ id: payment_id });
    return paymentData;
  } catch (error) {
    return error;
  }
};

export const merchantOders = async (payer_id: string) => {
  try {
    const merchnatOderSearchFilter = {
      payer: {
        id: payer_id,
      },
    };
    const PayerMerchant_Orders = await merchantOder.search();
    return PayerMerchant_Orders;
  } catch (error) {}
};
