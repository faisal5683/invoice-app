export const generateInvoices = () => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: `inv_${i + 1}`,
    selected: false,
    ctin: `33ASBPG2343M1Z${i < 10 ? "0" + i : i}`,
    ddn: `DDC${i + 100}`,
    claimMonth: "072024",
    category: i % 3 === 0 ? "MATCHED" : "PARTIALLY MATCHED",
    invoiceDate2b: "31-07-2024",
    invoiceDate2p: "01-08-2024",
    invoiceVal2b: 500000,
    invoiceVal2p: 500000,
    taxableVal2b: 400000,
    taxableVal2p: 400000,
    taxAmt2b: 72000,
    taxAmt2p: 72000,
    itcAvl2b: i % 2 === 0 ? "Yes" : "No",
    itcAvl2p: i % 2 === 0 ? "Yes" : "No",
  }));
};
