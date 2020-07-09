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

Scenario: Make a purchase with a unregistered user with check
When i register
And i choose payment by check
Then my order must be completed successfully. 

Scenario: Make a purchase with a unregistered user with bank wire
When i register
And i choose payment by bank wire
Then my order must be completed successfully. 