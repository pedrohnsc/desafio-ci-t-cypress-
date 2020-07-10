#language: en

Feature: Visualize history orders

    As a user, I want to see the orders that i've had made

    Background: Log in
    Given I log in 
    And I access the page of orders

Scenario: see my orders
Then I should be able to see all the orders I've had made

Scenario: Reorder
Then I should be able to reorder a past order
