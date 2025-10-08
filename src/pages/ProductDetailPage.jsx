import { useState, useEffect } from "react";
//import dell'hook per il parametro
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  //recupero id (il parametro dinamico)
  const { id } = useParams();

  //stato dove salverò i dati del prodotto selezionato
  const [prodotto, setProdotto] = useState({});

  //AXIOS
  //quando il componente si carica, parte la chiamata all'API per prendere i dati
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProdotto(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductDetailPage-main-container">
      {/* <h2>ID prodotto: {id}</h2> */}
      {/* card  */}
      <div className="ONE_card">
        {/* img */}
        <img
          src={prodotto.image}
          className="ONE_card-img"
          alt={prodotto.title}
        />

        {/* txt */}
        <div className="ONE_card-txt">
          {/* nome prodotto */}
          <h3 className="ONE_card-title">{prodotto.title}</h3>

          {/* descrizione */}
          <p className="ONE_card-description">{prodotto.description}</p>

          {/* prezzo */}
          <div className="ONE_card-btn">${prodotto.price}</div>

          {/* categoria */}
          <p>
            <strong>Category: </strong>
            {prodotto.category}
          </p>

          {/* voto */}
          <p>
            <strong>Rate: </strong>
            {prodotto.rating?.rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
