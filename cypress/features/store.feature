#language: en

Feature: Make an e-commerce purchase
As a user, I want to register in e-commerce to buy clothes with success

Background: Insert items in the shopping cart
Given I've inserted items in the shopping cart

Scenario: Make a purchase with a registered user with check
When I log in
And I choose payment by check
Then my order must be completed successfully. 

Scenario: Make a purchase with a registered user with bank wire
When I log in
And I choose payment by bank wire
Then my order must be completed successfully. 

Scenario: Try to make a purchase with a registered user and the user try to log with invalid credentials
When I log in with invalid credentials
Then I  should see a message "Authentication failed." 

Scenario: Make a purchase with a unregistered user with check
When I register
And I choose payment by check
Then my order must be completed successfully. 

Scenario: Make a purchase with a unregistered user with bank wire
When I register
And I choose payment by bank wire
Then my order must be completed successfully. 

Scenario: Try to register with invalid data
When I try to register with invalid data
Then I should not be able to proceed to checkout


Feature: Search Products

    As a user, I want to filter what kind of products I want so see

Background: Search for a T-Shirt
Given I search for a T-shirt

Scenario: Search for a T-shirt
Then I should see all products that looks like a T-shirt
