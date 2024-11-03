interface Product {
  prod: {
    id: number;
    name: string;
    capacity: number;
    dimensions: string;
    functions: string[];
    views: number;
    energyClass: string;
    priceValidDate: string;
    price: number;
    hirePurchase: number;
    image: string;
  };
}

const ProdDemo: React.FC<Product> = ({ prod }) => {
  return (
    <div className="product_outbox">
      <div className="product_box">
        <img src={prod.image} className="product_img" />

        <h3 className="product_title">{prod.name}</h3>
        <div className="product_specs_box font_grey">
          <p>
            Pojemność (kg): <span>{prod.capacity}</span>
          </p>
          <p>
            Wymiary (GxSxW): <span>{prod.dimensions}</span>
          </p>
          <p>
            Funckje: <span>{prod.functions.join(", ")}</span>
          </p>
        </div>
        <div className="class_box">
          <p className="font_grey">Klasa energetyczna</p>
          <span className="classClip">{prod.energyClass}</span>
        </div>
        <div>
          <p className="font_grey">Cena obowiązuje: {prod.priceValidDate}</p>
          <div className="product_price_box">
            <p className="product_price_primary">
              {prod.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
            <p className="product_price_secondary">
              {prod.price.toFixed(2).slice(-2)}
              <br></br> zł
            </p>
          </div>
          <p className="font_dark_grey">
            {Math.floor((prod.price / prod.hirePurchase) * 100) / 100} zł x{" "}
            {prod.hirePurchase} rat
          </p>
        </div>
      </div>
      <button className="btn btn_blue">Wybierz</button>
    </div>
  );
};

export default ProdDemo;
