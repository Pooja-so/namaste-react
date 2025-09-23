/* Integration Testing - Testing the integration of multiple components working together..
Use case: 
- Testing the flow of the data between the multiple component.
- Simulating the user behaviour using the web-application.
*/

/* Note:
-> Test cases are run inside the JSDom which is browser like environement, not an actual browser..
-> JSDom does not have features of the browser like it does not understand the fetch APi, it won't even make an network call, we have fake the simulation of fetch API, event handling etc....
-> Whenever the component has state updates i.e. using useState()  or uses fetch API inside the rendered component, you must wrap the component inside the act() method.
-> jest.fn() is the correct method to create a mock function in Jest.
-> What is act ?
    - It takes callback async function which renders the component and returns a Promise.
    - Syntax:
    - It comes from "react-dom/test-utils".
-> Universal way to query(find) DOM element by test-id
    <input
        data-testid="search-input"
        type="text"
        value={searchText}
        placeholder="search by restaurant name"
        onChange={(event) => setSearchText(event.target.value)}
    />
-> fireEvent.eventname(element-variable, event_object_simulation)
 here: element-variable is the Queryed_component_to_fire_event_on
    - event object does not exist on jsDom, because it is provided by the Browser.
*/

import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockFoodAPI.json";
import { render, act, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});


test("Should render the Body Component with Search button and should search the restaurant list for the Search input.", async () => {
  // 1. Render the component
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // 2.a. Query: No. of Restaurant Cards to be present at the time of initial loading. Assumption : 20
  const resCards = screen.getByTestId("res-card");

  // 3.a Assertion:
  expect(resCards.length).toBe(20);

  // 2.b. Query (Find the search button)
  const searchButton = screen.getAllByRole("button", { name: "Search" });
  // 2.1 Writing inside the input box
  const searchInput = screen.getAllByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Burger" } });
  // 2.2 Click the search button
  fireEvent.click(searchButton);

  // 3. Assertion: What we are expecting to be on the screen: After the search button is clicked , we are expecting 4 restaurant cards for Burger to be loaded on the screen
  const burgerRestaurantCardsAfterSearch = screen.getAllByTestId("res-card");
  expect(burgerRestaurantCardsAfterSearch.length).toBe(4);
});

/* Integration Test 2: Testing the Top Rated Restaurant Feature */
test("Should filter the top-rated restaurant ?", async () => {
  // 1. render the component inside act as it is using fetch API
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // 2.a. cards before filteration
  const resCardsBeforeFilter = screen.getAllByTestId("res-card");

  //3.a Assertion
  expect(resCardsBeforeFilter.length).toBe(20);

  // 2.b. Query: Search for the Top rated button
  const topRatedFilterButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  // 2.b.1 Click the button
  fireEvent.click(topRatedFilterButton);

  // 3.b After filter, the number of cards must be 10 if there are 7 restuarant with the top-rating
  const resCardsAfterFilter = screen.getAllByTestId("res-card");
  expect(resCardsAfterFilter.length).toBe(7);
});
