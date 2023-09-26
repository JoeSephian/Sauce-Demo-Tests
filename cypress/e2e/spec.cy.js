describe("My First Test", () => {
  it("Should log in successfully if matching username and password entered", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=user-name]").type("standard_user");
    cy.get("input[name=password").type("secret_sauce");
    cy.get("input[name=login-button]").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
  });
  it("Should error if no username and password entered", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=login-button]").click();
    cy.get("h3[data-test=error]")
      .should("be.visible")
      .contains("Epic sadface: Username is required");
      cy.url().should("eq", "https://www.saucedemo.com/")
  });
  it("Should error if only username entered", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=user-name]").type("standard_user");
    cy.get("input[name=login-button]").click();
    cy.get("h3[data-test=error]")
      .should("be.visible")
      .contains("Epic sadface: Password is required");
      cy.url().should("eq", "https://www.saucedemo.com/")
  });
  it("Should error if only password entered", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=password").type("secret_sauce");
    cy.get("input[name=login-button]").click();
    cy.get("h3[data-test=error]")
      .should("be.visible")
      .contains("Epic sadface: Username is required");
      cy.url().should("eq", "https://www.saucedemo.com/")
  });
  it("Should error if username is incorrect", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=user-name]").type("incorrect_username");
    cy.get("input[name=password").type("secret_sauce");
    cy.get("input[name=login-button]").click();
    cy.get("h3[data-test=error]")
      .should("be.visible")
      .contains("Username and password do not match any user in this service");
      cy.url().should("eq", "https://www.saucedemo.com/")
  });
  it("Should error if password is incorrect", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("input[name=user-name]").type("standard_user");
    cy.get("input[name=password").type("incorrect-password");
    cy.get("input[name=login-button]").click();
    cy.get("h3[data-test=error]")
      .should("be.visible")
      .contains("Username and password do not match any user in this service");
      cy.url().should("eq", "https://www.saucedemo.com/")
  });
});

