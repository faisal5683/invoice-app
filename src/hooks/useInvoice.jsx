import { useEffect, useState } from "react";
import { fetchReconciledInvoices } from "../services/dashBoardServices";

export function useInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchReconciledInvoices();
        const processed = res.response.reconciledInvoices.map((inv) => ({
          ...inv,
          selected: false,
        }));
        setInvoices(processed);
      } catch (err) {
        console.error("Failed to fetch invoices:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return { invoices, loading, error, setInvoices };
}
