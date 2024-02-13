document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("open-letter-btn").addEventListener("click", function() {
        openLetter();
    });
});

function openLetter() {
    var letterContent = `
        <p>hi sayanggg</p>
        <p>ehe happy valentine's dayyy!!</p>
        <p>I hope you're doing quite well today. Hope you recover soon, okay?</p>
        <p>I just want to say that I am most thankful to be accompanied by you throughout the months we've shared; you become the most important person in my life right now. I can't express rn how i deeply appreciate your existence in my life, you were the person that gave me hope that I once more can love indefinitely and unconditionally. you were the person who made me realise that its more worth to wait to a person you truly desire to be with, with the rest of my life. whereas i can wait for them even with the slightest of thought of them coming back to my life. you were that person. I held onto you and not give up in times where I just want to move on with you, I strengthen myself and keep my hopes high that soon enough we can be together still. 
        I am very thankful for you for giving me a chance to love you again and give you the appreciation I have for you. please don't get tired of me okayy, if im silly and goofy at times, hahaha it's just that i'm very well accustommed with you that i let you see me in my most vulnerable states. I even cried yesterday bcs I was just sad and also frustrated bcs I can't held you beneath my arms and give you the warmth of my love to you. 
        Although I am most aware of our situation, I promise you this that you're the only person I would cherish and love, where I would hangout with and spend my days remaining in this world above. you are my most adored and loved individual and you know it. you are my sayang, my padangat(love in bicol) and will always be my queen. as you've seen every side of me, and continue to figure out most of our attitudes and habits please be patient. as you were the one who can calm me when im furious, can cheer me up when im down, and the one who's smile is a healing spell that brights up my mood and gives me strength (for real). even though we have slight language barrier i hope you never lose patience with me and continue to love me as you did before. also, don't worry much abt me okayy, i'm taking care of myself bub, fixing myself and creating the better me than before. hehe always remember that every time I woke up, fell asleep and get home, you're the first person to comes up to my mind. I really love you sayang and I hope we spend this lifetime happy together and create a lot of wonderful memories to cherish when we get old. you were my home and my life. it would be sad if i'm homeless and lifeless without you hahaha. i love you, ak cinta km sayangku, mahal na mahal kita, padangaton takang maray. 
    
    
    ps. sorry if i cant get you something rn huhuhu. please gib me ur address soon okayy Ilysm
    
    
    since we talked to each other again and even be gf and bf, I never felt being alone since then. I can't even still believe you're mine now hehe. at times when you say or send reels abt you being my gf my heart flutters and gives me smile through the roof. and I thank you for being you, thank you for being here with me, thank you for choosing me to be your partner, thank you for trusting me once more. and thank you for existing. I love you Ainun. </p>
    `;
    document.getElementById("letter-content").innerHTML = letterContent;
    document.getElementById("flowers").style.display = "block";
}

