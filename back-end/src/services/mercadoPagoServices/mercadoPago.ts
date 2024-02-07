import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import * as dotenv from "dotenv";
import {
  PreferenceRequest,
  PreferenceResponse,
} from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
dotenv.config();

/* estrutura de la interface Items que viene del modulo mercado pago:  "
     title": "Dummy Item",
      "description": "Multicolor Item",
      "currency_id": "$",
      "quantity": 1,
      "unit_price": 10 
*/

//se importan las credenciales de mercado pago
const { MERCADO_ACCESS_TOKEN }: any = process.env;

const MercadoObjectConfig: MercadoPagoConfig = {
  accessToken: MERCADO_ACCESS_TOKEN,
};

// se configura el objeto Api  de mercado libre y verificacion de credenciales
const client = new MercadoPagoConfig(MercadoObjectConfig);
const pyment = new Payment(client);
const preference = new Preference(client);

export const paymentActivities = async (
  items: Items[]
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
      notification_url:
        "https://9f5f-2800-e6-4000-6a4f-67-1c12-9639-f54e.ngrok-free.app/paymentActivities/webhooks",
    };
    const PaymentResponse: PreferenceResponse = await preference.create({ body });
    return PaymentResponse;
  } catch (error: any) {
    console.log(error.message);
  }
};
