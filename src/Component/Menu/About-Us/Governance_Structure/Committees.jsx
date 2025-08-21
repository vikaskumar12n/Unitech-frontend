const Committees = () => {
  const openPdf = () => {
 
    window.open("/E Call Letter.pdf", "_blank");
  };

  return (
    <div className="p-6">
      <button
        onClick={openPdf}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Committees PDF
      </button>
    </div>
  );
};

export default Committees;
