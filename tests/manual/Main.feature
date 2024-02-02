    Scenario: Update the user wallet when a bet was made
        Given the User is logged in
        When the User makes a bet
        Then the app should witrawn the amount from the user wallet

    Scenario: Bet greater than the what the user has in wallet
        Given the User is logged in
        When the User tries a bet greater than what the user has in the wallet
        Then the app should present a message to the client
        And the user wallet should not be updated.

    Scenario: User wins a bet
        Given the User is logged in
        When the User makes a bet
        And the user won the round
        Then the user wallet should be updated with the amount received


    Scenario: User loose a bet
        Given the User is logged in
        When the User makes a bet
        And the user loose the round
        Then the user wallet should not change.

    Scenario: User bets everything
        Given the User is logged in
        When the User makes a bet, betting everything what he has in his wallet
        Then the app should allow this action
        And the user wallet should have 0.00 coins

    Scenario Outline: Bets section when the rolling message is presented
        Given the app is presenting the rolling message in the roulette
        When the user tries to <betsAction> on the bets section.
        Then the app should allow this action

        Examples:
            | betsAction                          |
            | clicks in any button                |
            | Types in the Enter bet amount field |

    Scenario Outline: Bets section when the rolling message is not presented
        Given the app is presenting the rolling message in the roulette
        When the user tries to <betsAction> on the bets section.
        Then the app should not allow this action

        Examples:
            | betsAction                          |
            | clicks in any button                |
            | Types in the Enter bet amount field |
    Scenario Outline: App winner behaviour
        Given The app roulette select the <BetsPosibilities>
        When the app roulette animations ends
        Then the app should present in the center of roulette the <BetsPosibilities> icon
        And the app should highlith the <BetsPosibilities> bet round table
        And the app should update the previous rolls carousel adding in the end the <BetsPosibilities> icon
        And the app should update the last 100 summary
        Examples:
            | BetsPosibilities |
            | CT               |
            | Terrorist        |
            | Bonus            |


    Scenario Outline: Access the <Page>
        Given the User is on main page
        When the User clicks on the <Button> button
        Then the app should present the <Page> screen

        Examples:
            | Button   | Page     |
            | Deposit  | Deposit  |
            | Withdraw | Withdraw |
            | Sign In  | Steam    |

    Scenario: Daily Roulette Race table presentation
        Given the user is on main page
        When the user rolls down to the end of the page
        Then the app should always present the Daily Roulette Race table

    Scenario: Daily Roulette Race components
        Given the user is on main page
        When the user rolls down to the end of the page
        And the user looks at the Daily Roulette Race
        Then the user will see #, Name, Wagered and Prize as the name of the collumns
        And the app should present in the top left corner the "Daily Roulette Race" label
        And the app should present in the top right corner when the race ends
        And the app shoudl present the first 10 users in the Race
        And the app should present a gold medal icon in the first position
        And the app should present a silver medal icon in the second position
        And the app should present a bronze medal icon in the third position
        And the app should present in the bottom left corner the Race Rules link
        And the app should present in the bottom right corner a pagination option with First, 1,2 and Last options.