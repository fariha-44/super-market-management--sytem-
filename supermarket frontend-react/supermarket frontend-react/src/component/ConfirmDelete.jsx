function ConfirmDelete({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-lg w-[420px]">

        <div className="border-b p-5">

          <h2 className="text-xl font-bold text-red-600">
            {title}
          </h2>

        </div>

        <div className="p-6">

          <p className="text-gray-600">
            {message}
          </p>

        </div>

        <div className="flex justify-end gap-3 p-5 border-t">

          <button
            onClick={onCancel}
            className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmDelete;