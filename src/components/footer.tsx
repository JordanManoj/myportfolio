export const Footer = () => {
  return (
    <footer className="text-ink-faint my-2 flex w-full flex-wrap justify-between gap-2.5 py-8 text-[12.5px]">
      <div>
        © {new Date().getFullYear()} Jordan Manoj Cheruvathoor · Crafted with
        passion.
      </div>
      <div>Hannover, Germany</div>
    </footer>
  );
};
