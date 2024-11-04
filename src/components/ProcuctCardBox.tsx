import { useState } from "react";
import productsArr from "../../data/products.ts";
import ProdDemo from "./ProductCard.tsx";
import Filtering from "./Filtering.tsx";

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

  const [sortBy, setSortBy] = useState<string>("Popularność");
  if (sortBy === "Cena") products = products.sort((a, b) => a.price - b.price);
  if (sortBy === "Popularność")
    products = products.sort((a, b) => b.views - a.views);

  const [sortFunctions, setSortFunctions] = useState<string>("Pokaż wszystkie");
  if (sortFunctions === "Wszystkie funkcje")
    products = products.filter(
      (prod) => prod.functions.length === uniqueFunctions.length
    );
  if (
    sortFunctions !== "Wszystkie funkcje" &&
    sortFunctions !== "Pokaż wszystkie"
  )
    products = products.filter((prod) =>
      prod.functions.includes(sortFunctions)
    );

  const [sortEnergyClass, setSortEnergyClass] =
    useState<string>("Pokaż wszystkie");

  if (sortEnergyClass !== "Pokaż wszystkie")
    products = products.filter((prod) =>
      prod.energyClass.includes(sortEnergyClass)
    );

  const [sortCapacity, setSortCapcity] = useState<number | string>(
    "Pokaż wszystkie"
  );
  if (sortCapacity !== "Pokaż wszystkie")
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
          <Filtering title="Sortuj po:" current={sortBy}>
            <li value="Wszystkie" onClick={() => setSortBy("Wszystkie")}>
              Wszystkie
            </li>
            <li value="Popularność" onClick={() => setSortBy("Popularność")}>
              Popularność
            </li>
            <li value="Cena" onClick={() => setSortBy("Cena")}>
              Cena
            </li>
          </Filtering>
          <Filtering title="Funkcje:" current={sortFunctions}>
            <li
              value="Pokaż wszystkie"
              onClick={() => setSortFunctions("Pokaż wszystkie")}
            >
              Pokaż wszystkie
            </li>
            <li
              value="Wszystkie funkcje"
              onClick={() => setSortFunctions("Wszystkie funkcje")}
            >
              Wszystkie funkcje
            </li>
            {uniqueFunctions.map((uf) => (
              <li value={uf} key={uf} onClick={() => setSortFunctions(uf)}>
                {uf}
              </li>
            ))}
          </Filtering>
          <Filtering title="Klasa energetyczna" current={sortEnergyClass}>
            <li
              value="Pokaż wszystkie"
              onClick={() => setSortEnergyClass("Pokaż wszystkie")}
            >
              Pokaż wszystkie
            </li>

            {uniqueEnergyClass.map((ue) => (
              <li value={ue} key={ue} onClick={() => setSortEnergyClass(ue)}>
                {ue}
              </li>
            ))}
          </Filtering>
          <Filtering title="Pojemność" current={sortCapacity}>
            <li
              value="Pokaż wszystkie"
              onClick={() => setSortCapcity("Pokaż wszystkie")}
            >
              Pokaż szystkie
            </li>
            {uniqueCapacity.map((uc) => (
              <li value={uc} key={uc} onClick={() => setSortCapcity(uc)}>
                {uc} kg
              </li>
            ))}
          </Filtering>
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
