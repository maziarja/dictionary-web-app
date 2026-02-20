function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="flex flex-col gap-12">
        <span className="text-6xl">😕</span>
        <span className="text-preset-3 text-foreground font-bold">
          No Definitions Found
        </span>
      </div>
      <p className="text-preset-4 text-secondary-foreground">
        Sorry pal, we could n&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}

export default NotFound;
