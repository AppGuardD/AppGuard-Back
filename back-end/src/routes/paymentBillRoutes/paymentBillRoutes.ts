import { Router } from "express";
import { getPaymentBill } from "../../controllers/paymentBill/getPaymentBill/getPaymentBill";
import { postPaymentBill } from "../../controllers/paymentBill/postPaymentBill/postPaymentBill";
import { putPaymentBill } from "../../controllers/paymentBill/putPaymentBill/putPaymentBill";

import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";

const paymentBillRoutes = Router();
//-----------con webtokens-------------
// paymentBillRoutes.get("/search", adminMiddleware, getPaymentBill);
// paymentBillRoutes.post("/create", adminMiddleware, postPaymentBill);
// paymentBillRoutes.put("/update/:id", adminMiddleware, putPaymentBill);

//----------Desarollo------------------
paymentBillRoutes.get("/search", getPaymentBill);
paymentBillRoutes.post("/create", postPaymentBill);
paymentBillRoutes.put("/update/:id", putPaymentBill);



export default paymentBillRoutes;