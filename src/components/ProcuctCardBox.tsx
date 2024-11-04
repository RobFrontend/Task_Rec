import { useState } from "react";
import productsArr from "../../data/products.ts";
import ProdDemo from "./ProductCard.tsx";

function ProductCardBox() {
  let products = productsArr;
  const [isMore, setIsMore] = useState<number>(6);

  const uniqueCapacity: number[] = [
    ...new Set(productsArr.map((prod) => prod.capacity)),
  ];
  const uniqueEnergyClass: string[] = [
    ...new Set(productsArr.map((prod) => prod.energyClass)),
  ];
  const uniqueFunctions: string[] = [
    ...new Set(...productsArr.map((prod) => [...new Set(prod.functions)])),
  ];

  const [isSearch, setIsSearch] = useState("");
  products = products.filter((prod) =>
    prod.name.toLocaleLowerCase().includes(isSearch)
  );

  const [sortBy, setSortBy] = useState<string>("Wszystkie");
  if (sortBy === "Cena") products = products.sort((a, b) => a.price - b.price);
  if (sortBy === "Popularność")
    products = products.sort((a, b) => b.views - a.views);

  const [sortFunctions, setSortFunctions] = useState<string>("Pokaż wszystko");
  if (sortFunctions === "Wszystkie")
    products = products.filter(
      (prod) => prod.functions.length === uniqueFunctions.length
    );
  if (sortFunctions !== "Wszystkie" && sortFunctions !== "Pokaż wszystko")
    products = products.filter((prod) =>
      prod.functions.includes(sortFunctions)
    );

  const [sortEnergyClass, setSortEnergyClass] = useState<string>("Wszystkie");

  if (sortEnergyClass !== "Wszystkie")
    products = products.filter((prod) =>
      prod.energyClass.includes(sortEnergyClass)
    );

  const [sortCapacity, setSortCapcity] = useState<number>(0);
  if (sortCapacity !== 0)
    products = products.filter((prod) => prod.capacity === sortCapacity);

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
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortBy(e.target.value)
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
              value={sortFunctions}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortFunctions(e.target.value)
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
              value={sortEnergyClass}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortEnergyClass(e.target.value)
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
              value={sortCapacity}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortCapcity(+e.target.value)
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

export default ProductCardBox;
