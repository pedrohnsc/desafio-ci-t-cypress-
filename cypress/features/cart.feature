#language: en

Feature: Cart

    As a user, i want to have a cart to buy products

    Given i access the ecommerce
    When i choose a product
    Then i should be redirected to the cart 
    And see the summary