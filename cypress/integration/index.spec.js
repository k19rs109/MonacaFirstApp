import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('MonacaFirstApp', function () {
        var name = ''
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
            name = generate_random_string(5)
        })
    
        it('Handling UI home screen', function () {
            cy.get('input[name="ranking"]').should('have.value', 'ランキングを見る')
            cy.get('h1').contains('連打アプリ').should('be.visible')
            cy.contains('0').should('be.text', '0')
            cy.get('img[src="mato.png"]').should('have.visible')
            cy.get('#list-page').find('p').should('be.text', '↓スタートボタンを押してゲームスタート↓')
            cy.get('input[name="start"]').should('have.value', 'Start')
        })
    
        it('Handling save score - Click Start, count timer', function () {
            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns(name)
                cy.get('input[name="start"]').click()
            })  
            cy.get('#list-page').find('p', { timeout: 15000}).should('be.text', name + 'さんのスコアは0連打でした')
        })
    
        it('Handling display ranking - Click ランキングを見る, click 戻る', function () {
            cy.get('input[name="ranking"]').click()
            cy.get('h1').contains('ランキング').should('be.visible')
            cy.get('div').find('a[href="#list-page"]').should('be.visible')
            cy.get('#name_1').should('be.text', 'no data')
    
            // click 戻る
            cy.get('div').find('a[href="#list-page"]').click()
        })
    
        function generate_random_string(string_length) {
            let random_string = '';
            let random_ascii;
            for(let i = 0; i < string_length; i++) {
                random_ascii = Math.floor((Math.random() * 25) + 97);
                random_string += String.fromCharCode(random_ascii)
            }
            return random_string
        }
    })
})