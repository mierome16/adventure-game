var playgame = confirm("Do you want to try to escape the Castle")

if(playgame == true) {
    var weapon = prompt("You wake up in a castle room, you hear fighting coming from outside,  will you choose the SWORD near the front of the door and sneak out the front or choose the BOW near the back door and sneak out the back. Type 'sword' or 'bow' ");
    if(weapon == "sword") {
        alert("you grabbed the sword and opened the front door. You see two titans fighting over who will kill the  prisoner in their cage. The titans notice you and they kill you… GAME OVER")
    } else { 
        alert("you grab the bow and sneak out the back unnoticed. You’re able to shoot both titans and defeat them. You walk over to the prisoner in the cage, he thanks you and tells you that he’ll reward you with gold giving you the exact location of where his chest is.");


        var cage = prompt("I see two options... LEAVE him and go get the gold or UNLOCK the cage and help him escape. Type 'leave' or 'unlock' ")
        if (cage == "leave") {
            alert("you find the chest and take all the gold. However, while you’re walking the gold is clanking in your bag which alerts another titan, he kills you. GAME OVER")
        } else {
            alert("you unlocked the cage, the two of you make it to the chest and get the gold. There’s one last titan in the way of escaping, the prisoner you saved helps you defeat the titan but gets injured and is unable to walk.");


            var finale =prompt("Do you CARRY him out with you or LEAVE him to die? Type 'carry' or 'leave' ")
            if (finale == "leave") {
                alert("you walk out the doors and are surrounded by titans, they kill you. GAME OVER. ")
            } else {
                alert("CONGRATULATIONS YOU WON! The both of you made it out alive! THE END");
            }
        }
    } 
} else {
    alert("you're lame... GAME OVER")
}