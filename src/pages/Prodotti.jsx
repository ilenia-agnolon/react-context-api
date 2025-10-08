import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);
  const { budgetMode } = useContext(BudgetContext);
  // console.log("Budget mode attivo:", budgetMode);

  //   AXIOS
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProdotti(response.data);
      })
      .catch((error) => {
        console.error("errore recupero dati prodotti", error);
      });
  }, []);

  //   LISTA PRODOTTI
  return (
    <>
      <div className="main-container-products">
        <h2>Products</h2>

        {/* contenitore  */}
        <div className="container">
          <div className="row">
            {/* - MAP PRODOTTO - */}
            {prodotti.map((prodotto) => (
              <div className="product-card" key={prodotto.id}>
                {/* --LINK TO-- */}
                <Link to={`/products/${prodotto.id}`}>
                  {/* card  */}
                  <div className="card">
                    {/* img */}
                    <img
                      src={prodotto.image}
                      className="card-img"
                      alt={prodotto.title}
                    />

                    {/* txt */}
                    <div className="card-txt">
                      {/* nome prodotto */}
                      <h3 className="card-title">{prodotto.title}</h3>

                      {/* prezzo */}
                      <div className="card-btn">${prodotto.price}</div>

                      {/* categoria */}
                      <p>
                        <strong>Category: </strong>
                        {prodotto.category}
                      </p>

                      {/* voto */}
                      <p>
                        <strong>Rate: </strong>
                        {prodotto.rating.rate}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodotti;
