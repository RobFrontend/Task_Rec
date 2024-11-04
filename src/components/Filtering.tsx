import { useState } from "react";

type ListProps = {
  title: React.ReactNode;
  current: React.ReactNode;
  children: React.ReactNode;
};

function Filtering({ title, current, children }: ListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="show_filters_box">
      <p className="show_filters_paragraph">{title}</p>
      <div className="show_filters" onClick={() => setIsOpen(!isOpen)}>
        <p className="show_paragraph">{current}</p>
        {!isOpen ? (
          <span className="polygon polygon_grey">x</span>
        ) : (
          <span className="polygon_up polygon_grey">x</span>
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
