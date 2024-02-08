import { Items } from "mercadopago/dist/clients/commonTypes";
import { IntemsWithOutId } from "../mercadopagoConfig/mercadoPago";

const htmlfacture = ``;

export const facture = (items: IntemsWithOutId[]) => {
  const itemsHTML = items
    .map(
      (item) => `
     <tr>
       <td>${item.title}</td>
       <td>${item.quantity}</td>
       <td>${item.unit_price}</td>
       <td>${item.quantity * item.unit_price}</td>
     </tr>
   `
    )
    .join("");

  const total: number = items.reduce(
    (acumulator: number, currentvalue: IntemsWithOutId) => {
      return acumulator + currentvalue.quantity * currentvalue.unit_price;
    },
    0
  );

  const factureHTML = `
  <html>
  <head>
    <style>
      /* Estilos CSS para la factura */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f0f0f0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h2 {
        text-align: center;
        color: #333;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      th, td {
        border-bottom: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }

      .total {
        margin-top: 20px;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Factura de compra</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHTML}
        </tbody>
      </table>
      <p class="total">Total: $${total.toFixed(2)}</p>
    </div>
  </body>
</html>

  `;

  return factureHTML;
};
