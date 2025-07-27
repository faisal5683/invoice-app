//Mock data file
import { generateInvoices } from "../utils/invoice";

export const fetchReconciledInvoices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "SUCCESS",
        response: { reconciledInvoices: generateInvoices() },
      });
    }, 1000);
  });
};
