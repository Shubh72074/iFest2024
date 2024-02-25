document.querySelector(".rulePopW").addEventListener("click", function (e) {
  e.preventDefault();
  e.currentTarget.classList.remove("active");
});

function popRule(rule) {
    if (rule === "codemonk"){
      document.querySelector(".rulePop").innerHTML = `<h3>Round 1</h3><br><p>Speed Code Round - Top 15 coders from this round will further proceed to the next round.</p><br><h3>Round 2</h3><br><p>Debug The Bug Round - Top 8 coders from this round will further proceed to the next round.</p><br><h3>Round 3</h3><br><p>Problem Solving Round - Top 3 Winners from this round will be selected.</p>` ;
    }
    else if (rule === "techhead"){
      document.querySelector(".rulePop").innerHTML = "<h3>Round 1</h3><br>"+
      "<p>4v4 Group Quiz - First to answer will get a point and at the end of quiz group having maximum points will qualify for next round. (TOTAL 10 MCQs)</p><br>" +
      "<h3>Round 2</h3><br>" + 
      "<p>Speed Quiz - Individual groups will be given 5 MCQs and a timer 0f 20sec to answer all. Group with lowest time taken to complete will be selected.</p>";
    }
    else if (rule === "cyberhero"){
      document.querySelector(".rulePop").innerHTML = "<p>Capture The Flag - Decode the cryptic messages, identify the hidden clues to get the flags.</p><br>"+
      "<p>Utilize the flag with proper format specified (e.g. FLAG{This_is_a_flag} ).</p>"+
      "<p>Top 3 Most Flag Collectors or in case of tie least attempt taken will be selected as winners.</p>";
    }
    else if (rule === "webdoodle"){
      document.querySelector(".rulePop").innerHTML = "<p>Theme Based Design - Participants will be given a theme to design a web page, using HTML,CSS and JS.</p>" +
      "<p>Most innovative and catchy design will be selected as winner.</p>";
    }
    else {
      document.querySelector(".rulePop").innerHTML = "No Data Availabel.";
    }
    document.querySelector(".rulePopW").classList.add("active");
}