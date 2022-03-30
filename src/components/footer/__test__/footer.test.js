import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../index";

test("renders footer about", () => {
  render(<Footer />);

  const headerElement = screen.getByText(/About/i);
  const textElement = screen.getByText(
    /My Pokemon is a web application to collect pokemon from the list of available pokemon. Users can catch pokemon in the pokemon list and give the pokemon a nickname. Pokemon that have been caught will be saved and can be viewed on the "My Pokemon List" page./i
  );

  expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});

test("renders footer image", () => {
  render(<Footer />);

  const imageElement = screen.getByTestId("pokemon-image");
  expect(imageElement).toBeInTheDocument();
});

test("renders footer sub title", () => {
  render(<Footer />);

  const textElement = screen.getByText(
    /A place to collect your favorite pokemon/i
  );
  expect(textElement).toBeInTheDocument();
});

test("renders footer social", () => {
  render(<Footer />);

  const instagram = screen.getByTestId("instagram");
  const facebook = screen.getByTestId("facebook");
  const linkedin = screen.getByTestId("linkedin");
  const github = screen.getByTestId("github");

  expect(instagram).toBeInTheDocument();
  expect(facebook).toBeInTheDocument();
  expect(linkedin).toBeInTheDocument();
  expect(github).toBeInTheDocument();
});