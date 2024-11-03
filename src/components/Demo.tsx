import { useState } from "react";
import productsArr from "../../data/products.ts";
import ProdDemo from "./ProdDemo.tsx";

function Demo() {
  let products = productsArr; // Interface included in data file
  const [isMore, setIsMore] = useState<number>(6); // This one is for button to show all products - 6 by default due to Figma project

  // maping data for filters
  const uniqueCapacity: number[] = [
    ...new Set(products.map((prod) => prod.capacity)),
  ];
  const uniqueEnergyClass: string[] = [
    ...new Set(products.map((prod) => prod.energyClass)),
  ];
  const uniqueFunctions: string[] = [
    ...new Set(...products.map((prod) => [...new Set(prod.functions)])),
  ];
  //

  // Search
  const [isSearch, setIsSearch] = useState("");
  products = products.filter((prod) =>
    prod.name.toLocaleLowerCase().includes(isSearch)
  );

  return (
    <div className="products_section">
      <div className="grid_item__center">
        <input
          type="text"
          placeholder="Search..."
          value={isSearch}
          className="input input_search"
          onChange={(e) => setIsSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="input_filter_boxes">
        <div className="input_filters-box">
          <span>
            Sortuj po:
            <select>
              <option>Wszystkie</option>
              <option>Cena</option>
              <option>Popularność</option>
            </select>
          </span>
          <span>
            Funkcje:
            <select>
              <option>Wszystkie</option>
              {uniqueFunctions.map((uf) => (
                <option value={uf} key={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </span>
          <span>
            Klasa energetyczna:
            <select>
              <option>Wszystkie</option>
              {uniqueEnergyClass.map((ue) => (
                <option value={ue} key={ue}>
                  {ue}
                </option>
              ))}
            </select>
          </span>
          <span>
            Pojemność:
            <select>
              <option>Wszystkie</option>
              {uniqueCapacity.map((uc) => (
                <option value={uc} key={uc}>
                  {uc} kg
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <p className="results">Liczba wyników: {products.length}</p>
      <div className="products_box">
        {products.slice(0, isMore).map((prod) => (
          <ProdDemo prod={prod} key={prod.id} />
        ))}
      </div>
      <div>
        {isMore <= 6 ? (
          <button
            onClick={() => setIsMore(products.length)}
            className="show_more"
          >
            <p>Pokaż więcej</p>
            <span className="polygon polygon_blue">x</span>
          </button>
        ) : (
          <button onClick={() => setIsMore(6)} className="show_more">
            <p>Pokaż mniej</p>
            <span className="polygon_up polygon_blue">x</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Demo;
