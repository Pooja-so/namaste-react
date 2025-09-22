/* Imp note: When we are render a component using React-Redux and React-Router-Dom compoenent inside jsDOM, it will fail 
because jsDom only understand React (jsx) , it won't understand anything else.
-> To make this work, wrap the rendered component within (Redux Store)Provider and (React-Router-Dom)BrowserRouter  */
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";

/* Test Case 1: Searching for the login button */
test("Should load Header Component with a login button", () => {
  // Step 1: render the component
  render(
    <BrowserRouter>
      {/* <Provider store={appStore}> */}
      <Header />
      {/* </Provider> */}
    </BrowserRouter>
  );

  // Step 2: Query (Find the login button)
  // Note: If there are multiple buttons on the screen, and you are searching for a specific button,
  // then add additional info like button text while using getByRole()
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Step 3: Assertion
  expect(loginButton).toBeInTheDocument();
});

/* Test Case 2: Searching for About Us*/
// Checking for the About:
// Note: When we don't know the specific text, we can use regex for partially known text..
test("Should load Header Compoenent with the About us link?", () => {
  // 1. Render the component
  render(
    <BrowserRouter>
      {/* <Provider store={appStore}> */}
      <Header />
      {/* </Provider> */}
    </BrowserRouter>
  );

  // 2. Query: Find the cart items on the screen
  // Note: Here palinText: "About" will fail but regex: /About/ will pass.
  const about = screen.getByText(/About/);

  // 3. Assertion : Expected to be
  expect(about).toBeInTheDocument();
});

/* Test Case 3: Testing the toggling function login-logout */
test("Should change login button to the logout button on click", () => {
  // 1. Render the component
  render(
    <BrowserRouter>
      {/* <Provider store={appStore}> */}
      <Header />
      {/* </Provider> */}
    </BrowserRouter>
  );

  // 2. Querying: Find the login button
  const loginButton = screen.getByRole("button", { name: "Login" });
  // 2.1 Fire the click event on the login button
  fireEvent.click(loginButton);
  // 2.4 Find the logout button
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // 3. Assertion: Now we expect the logout button to be on the Document
  expect(logoutButton).toBeInTheDocument();
});
