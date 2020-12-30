import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const { pathname } = useRouter();

  return (
    <>
      <style jsx>{`
        #app-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
        }

        #app-header,
        #app-header * {
          z-index: 20;
        }

        #app-header img {
          object-fit: contain;
          height: 56px;
          max-width: 50vw;
        }

        #nav-brand-logo {
          cursor: pointer;
        }

        #pageview-nav .navbar-nav .nav-item {
          display: flex;
          align-items: center;
        }

        .header-icon {
          font-size: 2rem;
        }

        .navbar-brand {
          max-height: 60px;
        }

        .collapse.show {
          padding: 4rem;
        }

        .navbar-dark .navbar-nav {
          align-items: center;
        }

        @media screen and (max-width: 992px) {
          .nav-item {
            font-size: 1.5rem;
          }
        }
      `}</style>
      <div id="app-header">
        <Navbar
          style={{ backgroundColor: "black", minHeight: "70px" }}
          variant="dark"
          expand="lg"
          className="py-0"
          collapseOnSelect="true"
        >
          <Navbar.Brand
            className="d-flex align-items-center p-1"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link href="/" passHref={true}>
              <a
                style={{
                  visibility: pathname !== "/" ? "visible" : "hidden",
                  marginRight: ".5rem",
                }}
              >
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faArrowAltCircleLeft}
                  size="lg"
                />
              </a>
            </Link>

            <h4 style={{ fontFamily: "bungee", margin: 0 }}>Meet Rapha</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="pageview-nav" />
          <Navbar.Collapse className="justify-content-end" id="pageview-nav">
            <Nav style={{ display: "flex", alignItems: "center" }}>
              <Nav.Item className="py-2" style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/apps" passHref={true}>
                  <Nav.Link
                    style={{
                      fontFamily: "Bungee",
                      fontSize: "1.25rem",
                      color: "white",
                      padding: "0 4rem",
                    }}
                  >
                    Portfolio
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Link href="https://github.com/rbolet" passHref={true}>
                  <Nav.Link target="_blank" style={{ padding: "0 1.5rem" }}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </Nav.Link>
                </Link>
                <Link href="https://linkedin.com/in/rbolet/" passHref={true}>
                  <Nav.Link target="_blank" style={{ padding: "0 1.5rem" }}>
                    <FontAwesomeIcon icon={faLinkedin} className="header-icon" size="2x" />
                  </Nav.Link>
                </Link>
                <Link href="mailto:this.rapha.dev@gmail.com" passHref={true}>
                  <Nav.Link style={{ padding: "0 1.5rem" }}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="header-icon" />
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
