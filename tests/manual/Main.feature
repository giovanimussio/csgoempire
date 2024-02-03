
        /* When we talk about test gambling and igaming aplications, the most important think to do is validate all the money/coins transactions and validate the application math.
        Based on that i try to cover all the features related with those points. So I try to focus in the Bets, withdraw, deposit, round payments and other related things.
        Not desconsidarating the other things related as animations and user experience.
        Thinking on the roulette i will focus to test if the client side are respecting what the server side are sending to him.
        During the roulette spinning i will focus if is presented all the possible icons, a red marker it's presented, it's not possible to make any bet. In the end, the roulette should stop in the correct icon,
        highlith the winners table, add the winner icon in the previous roll carousel, update the last 100 items and highlith the winning bet. In the end the winner bet table should present how much was payed and the other ones how much was lost

        Something important to validade it's the way the roulete spin(left-right or right-left), because some places have especific roles for that.

        After the roulette stops should present the Rolling test with timeout, should be posible to make a bet(respecting what you have in the wallet), after you make a bet you need to see you user in the correct table.
        The tables should me sort respecting the bet value, putting the higher bets in the first positions.

        The viewpoint tests should be executed too because changing the viewpoints the app should respect the resolution.
        */



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


Feature: WITHDRAW

    Scenarios to Validate Withdraw page

    Scenario: User acces the withdraw page
        Given the User is logged in
        When the user access Withdraw page
        Then the app should present the Steam option
        And the app should present Cryptocurrencies options

    Scenario Outline: User makes a withdraw
        Given the User is logged in
        When the user access Withdraw page
        Then the user clicks on the <options> option
        And the app should uptade the user <options> wallet with the value.
        Examples:
            | options      |
            | Steam        |
            | Bitcoin      |
            | Bitcoin cash |
            | Ethereum     |
            | Litecoin     |
            | USDC         |
            | USDT         |

    Scenario Outline: Try to make a withdraw not logged In
        Given the User is not logged in
        And the user access Withdraw page
        When the user clicks on the <options> option
        Then the app should open the signin page
        Examples:
            | options      |
            | Steam        |
            | Bitcoin      |
            | Bitcoin cash |
            | Ethereum     |
            | Litecoin     |
            | USDC         |
            | USDT         |


Feature: DEPOSIT

    Scenarios to Validate Deposit page

    Scenario: User acces the deposit page
        Given the User is logged in
        When the user access Deposit page
        Then the app should present the Steam option
        And the app should present Real Money options
        And the app should present Cryptocurrencies options
        And the app should present Set your region combobox

    Scenario Outline: User makes a deposit
        Given the User is logged in
        When the user access Deposit page
        Then the user clicks on the <options> option
        And the app should uptade the user <options> wallet with the value.
        Examples:
            | options      |
            | Steam        |
            | VISA         |
            | Mastercard   |
            | Skrill       |
            | Gift Cards   |
            | Neteller     |
            | Jeton        |
            | JetonCash    |
            | Bitcoin      |
            | Bitcoin cash |
            | Ethereum     |
            | Litecoin     |
            | USDC         |
            | USDT         |

    Scenario Outline: Try to make a deposit not logged In
        Given the User is not logged in
        And the user access Deposit page
        When the user clicks on the <options> option
        Then the app should open the steam signin page
        Examples:
            | options      |
            | Steam        |
            | VISA         |
            | Mastercard   |
            | Skrill       |
            | Gift Cards   |
            | Neteller     |
            | Jeton        |
            | JetonCash    |
            | Bitcoin      |
            | Bitcoin cash |
            | Ethereum     |
            | Litecoin     |
            | USDC         |
            | USDT         |

Feature: Roulette
    Scenario: Roulette should have an animation
        Given the user is on the roulette game
        When  the roulette starts to roll
        Then  the user can see the roulette rolling to right to left
        And the user can see all the possible betting icons

    Scenario Outline: Roulette red marker behaviour
        Given the user is on the roulette game
        When the roulette <roulette_status>
        Then the roulette red marker <marker_status> in the middle of roulette

        Examples:
            | roulette_status | marker_status         |
            | is running      | should be visible     |
            | is not running  | should not be visible |

    Scenario: Roulette should have a timeout to accept bets
        Given the user is on the roulette game
        When  the roulette is waiting players bets
        Then  the user can see in the middle of the roulette
        And the roulette should decrease time
        And the roulette should present in the timeout background the coin-bonus image
        And the roulette should present a label "ROLLING"
        And the roulette should not roll

    Scenario: The roulette winner bet behaviour
        Given the user is on the roulette game
        When the roulette present the sorted icon winner
        Then the roulette should show the sorted icon in the middle of roulette
        And the roulette should show red marker in front of the sorted icon


