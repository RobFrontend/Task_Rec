import { useState } from "react";
import productsArr from "../../data/products.ts";
import ProdDemo from "./ProdDemo.tsx";

function Demo() {
  let products = productsArr; // Interface included in data/product.ts file
  const [isMore, setIsMore] = useState<number>(6); // This one is for button to show all products - 6 by default due to Figma project

  // maping data for filters
  const uniqueCapacity: number[] = [
    ...new Set(productsArr.map((prod) => prod.capacity)),
  ];
  const uniqueEnergyClass: string[] = [
    ...new Set(productsArr.map((prod) => prod.energyClass)),
  ];
  const uniqueFunctions: string[] = [
    ...new Set(...productsArr.map((prod) => [...new Set(prod.functions)])),
  ];
  //

  // Search
  const [isSearch, setIsSearch] = useState("");
  products = products.filter((prod) =>
    prod.name.toLocaleLowerCase().includes(isSearch)
  );

  // Filters *************************************
  // Sortuj po
  const [sortujPo, setSortujPo] = useState<string>("Wszystkie");
  if (sortujPo === "Cena")
    products = products.sort((a, b) => a.price - b.price);
  if (sortujPo === "Popularność")
    products = products.sort((a, b) => b.views - a.views);
  // Funkcje:
  const [sortujFunckje, setSortujFunkcje] = useState<string>("Pokaż wszystko");
  if (sortujFunckje === "Wszystkie")
    products = products.filter(
      (prod) => prod.functions.length === uniqueFunctions.length
    );
  if (sortujFunckje !== "Wszystkie" && sortujFunckje !== "Pokaż wszystko")
    products = products.filter((prod) =>
      prod.functions.includes(sortujFunckje)
    );

  // Klasa energetyczna
  const [sortujEnergia, setSortujEnergia] = useState<string>("Wszystkie");

  if (sortujEnergia !== "Wszystkie")
    products = products.filter((prod) =>
      prod.energyClass.includes(sortujEnergia)
    );

  // Pojemnosc Sort
  const [sortujPojemnosc, setSortujPojemnosc] = useState<number>(0);
  if (sortujPojemnosc !== 0)
    products = products.filter((prod) => prod.capacity === sortujPojemnosc);

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
            <select
              value={sortujPo}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortujPo(e.target.value)
              }
            >
              <option value="Wszystkie">Wszystkie</option>
              <option>Cena</option>
              <option value="Popularność">Popularność</option>
            </select>
          </span>
          <span>
            Funkcje:
            <select
              value={sortujFunckje}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortujFunkcje(e.target.value)
              }
            >
              <option value="Pokaż wszystko">Pokaż wszystko</option>
              <option value="Wszystkie">Wszystkie funkcje</option>
              {uniqueFunctions.map((uf) => (
                <option value={uf} key={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </span>
          <span>
            Klasa energetyczna:
            <select
              value={sortujEnergia}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortujEnergia(e.target.value)
              }
            >
              <option value="Wszystkie">Wszystkie</option>
              {uniqueEnergyClass.map((ue) => (
                <option value={ue} key={ue}>
                  {ue}
                </option>
              ))}
            </select>
          </span>
          <span>
            Pojemność:
            <select
              value={sortujPojemnosc}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortujPojemnosc(+e.target.value)
              }
            >
              <option value={0}>Wszystkie</option>
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
      {isMore > products.length ? null : (
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
            <button
              onClick={() => {
                setIsMore(6);
              }}
              className="show_more"
            >
              <p>Pokaż mniej</p>
              <span className="polygon_up polygon_blue">x</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Demo;
