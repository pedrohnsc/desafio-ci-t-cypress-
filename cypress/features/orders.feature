#language: en

Feature: Visualize history orders

    As a user, i want to see the orders that i've had made

    Background: Log in
    Given i log in 
    And i access the page of orders

Scenario: see my orders
Then i should be able to see all the orders i've had made

Scenario: Reorder
Then i should be able to reorder a past order
