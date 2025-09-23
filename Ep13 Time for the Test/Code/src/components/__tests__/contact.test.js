import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/* Objective: Testing whether ContactUs Page got loaded or not
-> How to test: Simple, whenever a component is loaded you'll see the content of the component on the browser screeen. Use it
-> We can use describe() fro grouping the related test cases together
-> Within describe(), If we want to run something before all test-cases then, jest provide us with a function beforeAll(callbackfun), here the callback Function will run before all the test-cases inside the describe
*/

describe("Contact Us Page Test Cases ", () => {
  beforeAll(() => {
    console.log("Before running all the test cases");
  });

  beforeEach(() => {
    console.log("Before running each test case.");
  });
  afterAll(() => {
    console.log("After complete running all the test cases");
    // clean up operation
  });

  afterEach(() => {
    console.log("After running each test case.");
  });

  test("Should Does Contact us Page get loaded or not?", () => {
    // Step 1: Render the component onto the jsDom for testing
    render(<ContactUs />);

    // Step 2: Find the any piece of content of the compoenent that can be used for checking purpose
    const heading = screen.getByRole("heading"); // This will find all heading like h1, h2, h3, h4 etc. from the ContactUs Component.

    // Step 3: Check if the Component is rendered on the actual browser screen or not
    expect(heading).toBeInTheDocument(); // Check if the heading is in the screen or not
  });

  // Testing whetehr button is there or not
  test("should Is button present", () => {
    // Step 1: Render the component
    render(<ContactUs />);

    // Step 2: Find the button
    const button = screen.getByRole("button");

    // Step 3: Check whether it is there or not
    expect(button).toBeInTheDocument();
  });

  // Other sample test cases
  test("Is input present? ", () => {
    render(<ContactUs />);
    const inputPlaceHolderText = screen.getByPlaceholderText("name");
    expect(inputPlaceHolderText).toBeInTheDocument();
  });

  /* Example: Testing whetehr button is there or not */
  test("Whether the component contains 2 Input elements", () => {
    // Step 1: Rendering: Render the component onto the jsDom for testing
    render(<ContactUs />);

    // Step 2: Querying: Find the intended piece of content of the compoenent used for checking purpose
    const inputElements = screen.getAllByRole("textbox");

    // Step 3: Assertion: Check whether it is there or not on the document Tree
    //   expect(inputElements.length).toBe(2);
    expect(inputElements.length).not.toBe(3);
  });
});
