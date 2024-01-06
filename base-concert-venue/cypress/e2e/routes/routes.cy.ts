
import { generateNewBand } from "../../../__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "../../../lib/features/reservations/utils";

it("displays correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});