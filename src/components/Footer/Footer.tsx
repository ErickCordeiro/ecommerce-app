import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../assets/images/newsletter.png";
import './footer.modules.css';

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Entre em Contato</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  erickcordeiroa@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informações</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blogs
                </Link>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Política de Privacidade
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Termos e Condições
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Contatos</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/sobre" className="text-white py-2 mb-1">
                  Sobre nós
                </Link>
                <Link to="/faq" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="/contato" className="text-white py-2 mb-1">
                  Contato
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Outros Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/blog" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; Copyright {new Date().getFullYear()} - Powered by EWD Desenvolvimento de Softwares
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
