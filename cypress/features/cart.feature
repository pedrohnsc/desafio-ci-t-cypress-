#language: en

Feature: Cart

    As a user, I want to have a cart to buy products

    Given I access the ecommerce
    When I choose a product
    Then I should be redirected to the cart 
    And see the summary