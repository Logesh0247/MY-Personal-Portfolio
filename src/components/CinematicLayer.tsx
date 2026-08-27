const CinematicLayer = () => (
  <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden>
    <div className="film-grain" />
    <div className="vignette" />
    <div className="letterbox letterbox-top" />
    <div className="letterbox letterbox-bottom" />
  </div>
);

export default CinematicLayer;
