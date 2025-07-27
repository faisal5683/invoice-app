import React from "react";

const CURRENCY_PREFIX = "₹";

const formatCurrency = (val) =>
  typeof val === "number" ? `${CURRENCY_PREFIX}${val.toLocaleString()}` : "-";

// Config for header titles and keys
const columnGroups = [
  {
    label: "DDC No.",
    cols: ["ddn", "ddc"],
  },
  {
    label: "Claim Month",
    cols: ["claimMonth"],
  },
  {
    label: "Reconciliation Category",
    cols: ["category"],
  },
  {
    label: "ITC Unavailability",
    cols: ["itcUnavailability"],
  },
  {
    label: "Invoice Date",
    cols: ["invoiceDate2b", "invoiceDate2p"],
  },
  {
    label: "Invoice Value",
    cols: ["invoiceVal2b", "invoiceVal2p"],
    isCurrency: true,
  },
  {
    label: "Taxable Value",
    cols: ["taxableVal2b", "taxableVal2p"],
    isCurrency: true,
  },
  {
    label: "Tax Amount",
    cols: ["taxAmt2b", "taxAmt2p"],
    isCurrency: true,
  },
  {
    label: "Difference Tax Amount (2P - 2B)",
    cols: ["diffTaxAmount"],
    isCurrency: true,
  },
  {
    label: "ITC Availability",
    cols: ["itcAvl2b", "itcAvl2p"],
  },
];

const InvoiceTable = ({
  selectedAll,
  handleSelectAll,
  currentInvoices,
  handleSelectRow,
}) => {
  return (
    <table className="min-w-full border border-gray-300 text-sm text-gray-700">
      <thead>
        <tr className="bg-gray-100">
          <th rowSpan="2" className="px-2 py-2 border text-center">
            <input
              type="checkbox"
              checked={selectedAll}
              onChange={handleSelectAll}
            />
          </th>
          <th rowSpan="2" className="px-2 py-2 border">
            CTIN
          </th>
          {columnGroups.map((group, idx) => (
            <th
              key={idx}
              colSpan={group.cols.length}
              className="px-2 py-2 border text-center"
            >
              {group.label}
            </th>
          ))}
        </tr>
        <tr className="bg-gray-50">
          {columnGroups.flatMap((group, groupIdx) =>
            group.cols.map((_, colIdx) => (
              <th
                key={`${groupIdx}-${colIdx}`}
                className="px-2 py-2 border text-center"
              >
                {group.cols.length === 1 ? "" : colIdx === 0 ? "2B" : "2P"}
              </th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {currentInvoices.map((inv) => (
          <tr key={inv.id} className="hover:bg-gray-50">
            <td className="px-2 py-1 border text-center">
              <input
                type="checkbox"
                checked={inv.selected}
                onChange={() => handleSelectRow(inv.id)}
              />
            </td>
            <td className="px-2 py-1 border">{inv.ctin}</td>
            {columnGroups.map((group) =>
              group.cols.map((key) => (
                <td key={`col-${key}`} className="px-2 py-1 border text-center">
                  <span
                    className={
                      inv[key] === "MATCHED" || inv[key] === "Yes"
                        ? "bg-green-100 text-green-800 px-2 py-1 rounded inline-block"
                        : ""
                    }
                  >
                    {group.isCurrency
                      ? formatCurrency(inv[key])
                      : inv[key] || "-"}
                  </span>
                </td>
              ))
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(InvoiceTable);
