/*
This key word regular function inside an Object AKA mehtod and arrow function method shortcoming to
this keyword context demo! => functions don't get their own this. In regular function this gets set
to the object. 
*/

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase(){
        const {phrases} = this;
        const indx = Math.floor(Math.random() * phrases.length)
        return phrases[indx]
    },
    start(){
        this.timerId = setInterval(() =>{
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop(){
        clearInterval(this.timerId)
    }
}
