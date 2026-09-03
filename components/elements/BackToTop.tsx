

type BackToTopProps = {
  scroll: boolean;
};

export default function BackToTop({ scroll }: BackToTopProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll && (
        <a
          className="scroll-to-top"
          href="#top"
          onClick={handleClick}
        >
          <i className="icon-arrow-down"></i>
        </a>
      )}
    </>
  );
}
