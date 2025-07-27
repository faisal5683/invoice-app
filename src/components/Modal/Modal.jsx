import { useModal } from "../../contexts/ModalContext";

const ConfirmModal = () => {
  const { isOpen, modalProps = {}, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">
          {modalProps.title || "Are you sure?"}
        </h2>
        <p className="mb-6">
          {modalProps.message || "Do you really want to proceed?"}
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              modalProps.onConfirm?.();
              closeModal();
            }}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
