export const LoadingFallback = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex justify-center items-center h-64"
    >
      <div className="text-lg font-semibold animate-pulse">
        Carregando micro frontend...
      </div>
      <span className="sr-only">Por favor aguarde</span>
    </div>
  );
};
