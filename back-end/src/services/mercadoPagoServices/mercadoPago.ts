import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import * as dotenv from "dotenv";
import { PreferenceRequest } from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
dotenv.config();

/* estrutura de la interface Items que viene del modulo mercado pago:  "
     title": "Dummy Item",
      "description": "Multicolor Item",
      "currency_id": "$",
      "quantity": 1,
      "unit_price": 10 */

//se importan las credenciales de mercado pago
const { MERCADO_ACCESS_TOKEN }: any = process.env;

const MercadoObjectConfig: MercadoPagoConfig = {
  accessToken: MERCADO_ACCESS_TOKEN,
};

// se configura el objeto Api  de mercado libre y verificacion de credenciales
const client = new MercadoPagoConfig(MercadoObjectConfig);
const pyment = new Payment(client);
const preference = new Preference(client);

export const paymentActivities = (items: Items[]) => {
  try {
    const body: PreferenceRequest = {
      items,
    };
    preference.create({ body });
  } catch (error) {}
};
