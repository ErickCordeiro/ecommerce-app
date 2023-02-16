import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../../assets/images/compare.svg";
import wishlist from "../../assets/images/wishlist.svg";
import user from "../../assets/images/user.svg";
import cart from "../../assets/images/cart.svg";
import menu from "../../assets/images/menu.svg";

import "./header.modules.css";
import SuggestList from "../SuggestList/SuggestList";
import Nav from "../Nav/Nav";

export default function Header() {
  const [search, setSearch] = useState();

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white mb-0 text-center">
                Frete Grátis para todo Brasil em compras acima de R$ 100,00
              </p>
            </div>
          </div>
        </div>
      </div>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            {/* Logo  */}
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  E-Shop
                </Link>
              </h2>
            </div>
            {/* Input Search  */}
            <div className="col-5 header-upper-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Pesquise pelo seu produto..."
                  aria-label="Pesquise pelo seu produto..."
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>

              {search && <SuggestList search={search}/>}
            </div>

            {/* Actions  */}
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Produtos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Lista de <br /> Favoritos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Entrar ou <br /> Cadastre-se
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <div className="floating">
                      <span className="badge bg-white text-dark">0</span>
                      <img src={cart} alt="cart" />
                    </div>

                    <div className="d-flex flex-column gap-10">
                      <p className="mb-0">R$ 500,00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Nav />
    </>
  );
}
