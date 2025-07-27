import { useEffect, useState, useCallback, useMemo, memo } from "react";
import Loading from "../../components/Loader/Loading";
import InvoiceTable from "./component/InvoiceTable";
import Pagination from "./component/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { useInvoices } from "../../hooks/useInvoice";

const ITEMS_PER_PAGE = 10;

const Dashboard = () => {
  const [selectedAll, setSelectedAll] = useState(false);

  const { invoices, error, loading, setInvoices } = useInvoices();
  const {
    currentPage,
    totalPages,
    currentData: currentInvoices,
    goToNext: handleNext,
    goToPrev: handlePrev,
  } = usePagination(invoices, ITEMS_PER_PAGE);
  const invoiceLength = invoices.length;

  const currentIds = useMemo(
    () => new Set(currentInvoices.map((inv) => inv.id)),
    [currentInvoices]
  );

  const handleSelectAll = useCallback(() => {
    const updated = invoices.map((inv) =>
      currentIds.has(inv.id) ? { ...inv, selected: !selectedAll } : inv
    );
    setInvoices(updated);
    setSelectedAll((prev) => !prev);
  }, [invoices, selectedAll, currentIds]);

  const handleSelectRow = useCallback(
    (id) => {
      const updated = invoices.map((inv) =>
        inv.id === id ? { ...inv, selected: !inv.selected } : inv
      );
      setInvoices(updated);
    },
    [invoices]
  );

  useEffect(() => {
    const allSelected =
      currentInvoices.length > 0 &&
      currentInvoices.every((inv) => inv.selected);
    setSelectedAll(allSelected);
  }, [currentInvoices]);

  if (loading) return <Loading />;

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow rounded overflow-x-auto">
        <InvoiceTable
          selectedAll={selectedAll}
          handleSelectAll={handleSelectAll}
          currentInvoices={currentInvoices}
          handleSelectRow={handleSelectRow}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrev={handlePrev}
          handleNext={handleNext}
          totalItems={invoiceLength}
        />
      </div>
    </div>
  );
};

export default memo(Dashboard);
