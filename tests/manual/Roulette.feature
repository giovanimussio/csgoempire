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


