import { Router } from "express";
import { postPaymentItems } from "../../controllers/mercadoPago/postMercadoPago/postPaymentItems";
import { getWebHooks } from "../../controllers/mercadoPago/getWebHooks/getWebHooks";
import { getSucces } from "../../controllers/mercadoPago/getSuccess/getSuccess";
import { getFailure } from "../../controllers/mercadoPago/getFailure/getFailure";
import { getPending } from "../../controllers/mercadoPago/getPending/getPending";

const mercadoPagoRouter = Router();

//------ front -------
mercadoPagoRouter.get("/success", getSucces);
mercadoPagoRouter.get("/failure", getFailure);
mercadoPagoRouter.get("/pending", getPending);

mercadoPagoRouter.post("/payment", postPaymentItems);
mercadoPagoRouter.post("/webhooks", getWebHooks);
export default mercadoPagoRouter;
