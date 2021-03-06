import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  LeftContent,
  RightContent,
} from "./style";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <LeftContent>
            <h1 className="left-title">About</h1>

            <p className="left-text">
              My Pokemon is a web application to collect pokemon from the list
              of available pokemon. Users can catch pokemon in the pokemon list
              and give the pokemon a nickname. Pokemon that have been caught
              will be saved and can be viewed on the "My Pokemon List" page.
            </p>
          </LeftContent>

          <RightContent>
            <div className="header">
              <img
                data-testid="pokemon-image"
                src={require("../../images/pokemon-130.webp")}
                alt="logo"
              />
            </div>

            <div className="body">
              <p>A place to collect your favorite pokemon</p>

              <div className="icon">
                <a
                  className="instagram"
                  data-testid="instagram"
                  href="https://www.instagram.com/bhakti_buana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  className="facebook"
                  data-testid="facebook"
                  href="https://www.facebook.com/bhakti.buana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>

                <a
                  className="linkedin"
                  data-testid="linkedin"
                  href="https://www.linkedin.com/in/bhaktibuana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>

                <a
                  className="github"
                  data-testid="github"
                  href="https://github.com/bhaktibuana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </RightContent>
        </FooterContent>

        <FooterCopyright>
          <p>
            Copyright ?? 2022 My Pokemon, Designed by{" "}
            <a
              href="https://github.com/bhaktibuana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhakti Mega Buana
            </a>
          </p>
        </FooterCopyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
