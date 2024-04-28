const Spinner = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2 h-40">
      <span className="loading loading-bars loading-xs text-primary"></span>
      <span className="loading loading-bars loading-sm text-primary"></span>
      <span className="loading loading-bars loading-md text-primary"></span>
      <span className="loading loading-bars loading-lg text-primary"></span>
    </div>
  );
};

export default Spinner;
