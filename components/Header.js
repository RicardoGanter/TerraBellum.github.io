import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import logoprincipal from "../public/img/logoprincipal.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button type="button" class="btn btn-light btn-lg">
          Token
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button type="button" class="btn btn-light btn-lg">
                Personajes
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light btn-lg">
                Ajioo
              </button>
            </li>
          </ul>
          <h2 className="d-flex gap -2 align-items-center">
            <Image
              id="terrabellumImg"
              src={logoprincipal}
              style={{
                width: "50%",
                height: "50%",
                marginTop: "2%",
                marginLeft: "7%",
                
              }}
            ></Image>
          </h2>
          <button type="button" class="btn btn-light btn-lg">
            Alooo
          </button>
          <button type="button" class="btn btn-light btn-lg">
            Marketplace
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
