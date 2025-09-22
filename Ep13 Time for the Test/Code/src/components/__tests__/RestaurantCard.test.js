import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantData.json";
import { isOpened } from "../RestaurantCard";
import "@testing-library/jest-dom";

/* Test Case 1: With props */
// it("Should render Restaurant card component with the mock data ", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);

//   const name = screen.getByText("Amdavadi Naylon Khaman- Bhatar");

//   expect(name).toBeInTheDocument();
// });

// /* Test Case 2: With Promoted Label */
// it("should render RestaurantCard Component with Open Label", () => {
//   // 1. Render the component
//   const OpenedRestaurantCard = isOpened(RestaurantCard);
//   render(<OpenedRestaurantCard/>);

//   // 2. Query
//   const open = screen.getByText("Open");

//   // 3. Assertion
//   expect(open).toBeInTheDocument();
// });
