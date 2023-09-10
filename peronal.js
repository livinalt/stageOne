    
    // to get our day
    function dayOfWeek(){  // i created a function dayOfWeek
    let d = new Date();  // using the date method to return the current local time and I assigned that hat time value a variable name "d"
    let currentDay = d.getUTCDay(); // inorder to get convert to the date to a UTC standard I created another variable and assigned the UTC method

    /*  because the date method only returns the days of the week in numbers 0-6
        I am obliged to use the arrrays to proceed the computation */
    
        // writing the array statement
    let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (currentDay >= 0 && currentDay < weekArray.length){  // I introduced the if statement to help me check the truth value and return the Date
        console.log(weekArray[currentDay])
        return weekArray[currentDay];
    }

    else {
        console.log("Invalid Time");
    }
    }
     dayOfWeek();

    // now to using DOM to manipulate and reflect on HTML page
    document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML =  dayOfWeek();


    //to get the time
    function time(){
        let dispTime = new Date();
        let standardMilliSeconds = dispTime.getUTCMilliseconds();
        let newTime = (standardMilliSeconds + "ms");
        console.log(newTime);
        return newTime;
    }
    time();

    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = time();
    
    //clickable link to the github repo

    document.querySelector('[data-testId="githubURL"]').innerHTML = "Click here"