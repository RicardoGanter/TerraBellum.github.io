import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import terrabellum from "../public/terrabellum.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button type="button" class="btn btn-light">
          Token
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                Personajes
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                Ajiooo
              </button>
            </li>
            <div className={styles.head}>
              <Image
                width={300}
                height={120}
                top={400}
                left={500}
                src={terrabellum}
                alt="lol"
              />
            </div>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <button type="button" class="btn btn-light">
            MMMMMM
          </button>
          <button type="button" class="btn btn-light">
            Marketplace
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
