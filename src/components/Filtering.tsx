import { useEffect, useState } from "react";

type ListProps = {
  title: React.ReactNode;
  current: React.ReactNode;
  children: React.ReactNode;
};

function Filtering({ title, current, children }: ListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function filteringClose() {
      setIsOpen(false);
    }
    if (isOpen) document.body.addEventListener("click", filteringClose);
    return () => document.body.removeEventListener("click", filteringClose);
  }, [isOpen]);

  return (
    <div className="show_filters_box">
      <p className="show_filters_paragraph">{title}</p>
      <div
        className="show_filters"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <p className="show_paragraph">{current}</p>
        {!isOpen ? (
          <p className="polygon polygon_grey"></p>
        ) : (
          <p className="polygon_up polygon_grey"></p>
        )}
        {isOpen && (
          <ul className="showed_filters" onClick={() => setIsOpen(!isOpen)}>
            {children}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filtering;
