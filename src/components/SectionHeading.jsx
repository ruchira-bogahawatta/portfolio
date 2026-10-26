const SectionHeading = ({ title, note }) => (
  <div data-reveal className="mb-10">
    <h2 className="text-3xl md:text-4xl">{title}</h2>
    {note && <p className="mt-2 text-ink-soft">{note}</p>}
  </div>
);

export default SectionHeading;
