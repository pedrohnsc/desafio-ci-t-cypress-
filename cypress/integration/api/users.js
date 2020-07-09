/// <reference types="cypress" />

import Isemail from 'isemail'

describe('Test on get users', () => {

    it('Get user', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
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

    it('Post', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
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
                    "Content-type": "application/json; charset=UTF-8"
                }

            }).its('status').should('eql', 201)
        })
    })
})