//1
let objectTime = {
    sec : new Date().getSeconds()
    ,mins : new Date().getMinutes()
    ,hours : new Date().getHours()
    ,showTime(hours = this.hours, mins = this.mins, sec = this.sec)
    {
        let formatstr = hours + ":" + mins + ":" + sec;
        //alert(formatstr);
        return formatstr;
    }
    ,incrementTime(hours = this.hours, mins = this.mins, sec = this.sec)
    {
        if (++sec > 59)
        {
            sec = 0;
            mins++;
            if (mins > 59)
            {
                mins = 0;
                hours++;
                if (hours > 23)
                    hours = 0;
            }
        }
        return this.showTime(hours, mins, sec);
    }
    ,decrementTime(hours, mins, sec)
    {
        if (--sec < 0)
        {
            sec = 59;
            if (--mins < 0)
            {
                mins = 59;
                if (--hours < 0)
                    hours = 23;
            }
        }
        return this.showTime(hours, mins, sec);
    }
    ,ShowTimeOnPage(hours = this.hours, mins = this.mins, sec = this.sec)
    {
        document.write(this.showTime(hours, mins, sec));
    }
}

//2
let objectCar = {
    company : "Ford"
    ,model : "Siera"
    ,year : "1979"
    ,averageSpeed : "90"
    ,showInfo()
    {
        alert(`Company : ${this.company} \n model : ${this.model} \n year : ${this.year} \n average speed : ${this.averageSpeed}`)
    }
    ,countTime(length)
    {
        let time = length / this.averageSpeed;
        time += time % 4;
        return time;
    }
}