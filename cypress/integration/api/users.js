/// <reference types="cypress" />

import Isemail from 'isemail'

describe('API Testing using GET and POST methods', () => {
 
  it('All users must have a name, username, and email. 2. Their Email must be valid. 3. Their Company catchphrase must have less than 50 characters.', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      if (expect(response.body).to.not.be.null) {
        const data = (response.body)
        for (var i = 0; i < 9; i++) {
          expect(data[i].name).to.not.be.null
          expect(data[i].username).to.not.be.null
          expect(Isemail.validate(data[i].email)).to.not.be.false
          expect(data[i].company.catchPhrase).lengthOf.is.lessThan(50)
        }
      }
    })
  })

  it('1. Save a new post using a userId got by "GET /users" API.', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      const data = (response.body)
      const userId = data[0].id
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          userId: userId,
          title: 'foo',
          body: 'bar'
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).its('status').should('eql', 201)
    })
  })

  /*NOTE: This API return fake data, so i couldn't validate return errors as requested on question 2*/
})
