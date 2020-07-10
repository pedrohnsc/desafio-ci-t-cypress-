#language: en

Feature: Make an e-commerce purchase
As a user, I want to register in e-commerce to buy clothes with success

Background: Insert items in the shopping cart
Given i've inserted items in the shopping cart

Scenario: Make a purchase with a registered user with check
When i log in
And i choose payment by check
Then my order must be completed successfully. 

Scenario: Make a purchase with a registered user with bank wire
When i log in
And i choose payment by bank wire
Then my order must be completed successfully. 

Scenario: Try to make a purchase with a registered user and the user try to log with invalid credentials
When i log in with invalid credentials
Then i  should see a message "Authentication failed." 

Scenario: Make a purchase with a unregistered user with check
When i register
And i choose payment by check
Then my order must be completed successfully. 

Scenario: Make a purchase with a unregistered user with bank wire
When i register
And i choose payment by bank wire
Then my order must be completed successfully. 

Scenario: Try to register with invalid data
When i try to register with invalid data
Then i should not be able to proceed to checkout


Feature: Search Products

    As a user, i want to filter what kind of products i want so see

Background: Search for a T-Shirt
Given i search for a T-shirt

Scenario: Search for a T-shirt
Then i should see all products that looks like a T-shirt
