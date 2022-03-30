import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import DeleteModal from "../index";

test("renders delete modal title", () => {
  render(<DeleteModal />);

  const textElement = screen.getByText(
    "Are you sure you want to delete all of your pokemon?"
  );
  expect(textElement).toBeInTheDocument();
});

test("renders cancel delete modal button", () => {
  const setVisibleMock = jest.fn();
  const useStateMock = (useState) => [useState, setVisibleMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const visibleMock = jest.fn();
  const useStateMock2 = (useState) => [useState, visibleMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock2);

  render(
    <DeleteModal
      visible={visibleMock}
      setVisible={setVisibleMock}
      pageName="test-page"
    />
  );

  const cancelButton = screen.getByTestId("cancel-delete-modal");
  expect(cancelButton).toBeInTheDocument();
  userEvent.click(cancelButton);
});

test("renders confirm delete modal button", () => {
  const setVisibleMock = jest.fn();
  const useStateMock = (useState) => [useState, setVisibleMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const setClearOwnedMock = jest.fn();
  const useStateMock2 = (useState) => [useState, setClearOwnedMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock2);

  const visibleMock = jest.fn();
  const useStateMock3 = (useState) => [useState, visibleMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock3);

  render(
    <DeleteModal
      visible={visibleMock}
      setVisible={setVisibleMock}
      setClearOwned={setClearOwnedMock}
      pageName="test-page"
    />
  );

  const confirmButton = screen.getByTestId("confirm-delete-modal");
  expect(confirmButton).toBeInTheDocument();
  userEvent.click(confirmButton);

  const newTitleElement = screen.getByText(
    /All your pokemon have been deleted/i
  );
  const newOkButton = screen.getByTestId("ok-delete-modal");
  expect(newTitleElement).toBeInTheDocument();
  expect(newOkButton).toBeInTheDocument();
  userEvent.click(newOkButton);
});
