//import React from "react";
import images from "../../../../shared/assets/images/";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { LoginContext } from "../../context/LoginContext";
import { useContext} from "react";
import 'semantic-ui-css/semantic.min.css';
import { Form, Grid, Header, Button, Segment, Divider, Image } from "semantic-ui-react"; 
import ProductBox from "./productBox"

const HomePage = () => {
  const { state } = useContext(LoginContext);
 
  const handleLogout = () => {
    alert ("Usuário deslogado com sucesso!");
    window.location.reload(); // Marcar que a página deve ser recarregada
  }

  
  
  return (
    <section className={styles.container}>
      <div className={styles.backGroudContainer}>
        <img src={images.logo} alt="Logo" className={styles.logoImage} />
      </div>
        <h1 className={styles.headerCustom}>Seja bem-vindo à</h1>
        <h1 className={styles.headerCustom3}>Livraria Júlio Verne</h1>
        <h1 className={styles.headerCustom2}>Seu universo de leitura!</h1>
      <div className={styles.buttonContainer}>
        {state.isLogged ? (
          <>            
            {(state.userId == '0') ? ( // Verifica se o ID do usuário é "01"
              <>
                <Link data-cy="promocoes-button" to={`/create-promocao`}>
                  <Button color='orange'>Cadastrar Promoções </Button> 
                </Link>
                <Link data-cy="promocoes-button" to={`/promocoes`}>
                  <Button color='orange'>Todas as Promoções </Button>
                </Link>
              </>
            ) : (
              <>
                <Link data-cy="promocoes-button" to={`/promocoes/user/${state.userId}`}>
                  <Button color='orange'>Minhas Promoções </Button>
                </Link>  
                <Link data-cy="profile-button" to={`/profile/${state.userId}`}>
                  <Button color='orange'>Perfil </Button>
                </Link>              
              </>
            )}
            <Link to={`/logout/${state.userId}`} onClick={handleLogout}>
              <Button color='orange'>Logout </Button>
            </Link>
          </>
        ) : (
          <>
            <Link data-cy="login-button" to="/login">
              <Button color='orange'>Login </Button>
            </Link>
            <Link data-cy="register-button" to="/create-user">
              <Button color='orange'>Cadastro </Button>
            </Link>
          </>
        )}
      <div>
    <Divider />
    <div className={styles.productSection}>
      <h2 className={styles.headerCustom2}>Produtos em destaque</h2>
      <div className={styles.productContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((productNumber) => (
          <ProductBox
            key={productNumber}
            imageSrc={images[`livro${productNumber}`]}
            altText={`Produto ${productNumber}`}
            productName={`Nome do Produto ${productNumber}`}
            productPrice={`R$ ${10 + productNumber * 2},00`}
            linkTo={`/product/${productNumber}`}
          />
        ))}
      </div>
    </div>
  </div>
    </section>
  );
};

export default HomePage;
