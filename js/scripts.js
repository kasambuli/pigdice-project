console.log("yees")
$(document).ready(function() {
    // ------------------------------------------------------------------------------------
    //                 BUSINESS LOGIC
    // ------------------------------------------------------------------------------------
    console.log("yees")

    function rollDice(result, total) {

        this.result = result;
        this.total = total;
    };

    function switchPlayer(player1, player2) {
        this.playerOne = player1;
        this.playerTwo = player2;

    };

    function userName(userName) {
        this.userName = userName;
    };
    var roll = new rollDice(Math.floor(Math.random() * 6) + 1, 0);
    console.log(roll.result, "yesss")
    var result = roll.result
    console.log(roll.total += result)

    var user







    // ------------------------------------------------------------------------------------
    //                 USER INTERFACE
    // ------------------------------------------------------------------------------------

    $("form#playerOne").submit(function(event) {
        event.preventDefault();

        var inputtedUserName1 = $("input#firstPlayer").val();


        var newUserName1 = new userName(inputtedUserName1);


        $("ul#name").replaceWith("<li><span class='username'>" + newUserName1.userName + "</span></li>");

        $("input#firstPlayer").val("")
        $('form#playerOne').hide();
        // $('.username').fadeIn(3000);
        return false;
    });

    $("form#playerTwo").submit(function(event) {
        event.preventDefault();

        var inputtedUserName2 = $("input#secondPlayer").val();

        var newUserName2 = new userName(inputtedUserName2);


        $("ul#name2").replaceWith("<li><span class='username'>" + newUserName2.userName + "</span></li>");

        $("input#secondPlayer").val("");

        $('form#playerTwo').hide();

    });
    // });
    //   if (result != 1) {
    //     total = total + result;
    //   }
    //   return total;
    // }

    // function Player() {
    //   this.playerName = 0
    // }
    // var firstPlayer = new player();
    // $(document).ready(function() {
    //   $("#firstRoll").click(function(e) {
    //     e.preventDefault();
    //     console.log("firstRoll");
    //     $("#firstDie").text(rollDice());
    //   });


    //   $("#secondRoll").click(function(e) {
    //     e.preventDefault();
    //     console.log("secondRoll");
    //     $("#secondDie").text(rollDice());
    //   });

    //   $("#playerOne").submit(function() {
    //     event.preventDefault();
    //     firstPlayer.playerName = $(".player2").val().toUpperCase();
    //     $(".player2name").text(player2.playerName);
    //     $("#player2").hide();
    //   });
    // });
    // Math.floor(Math.random() * 6) + 1;

});