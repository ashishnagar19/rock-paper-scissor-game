let user_points = 0
let computer_points = 0
for (let i=0; i<5; i++){
    user_input = prompt("Enter your Choice: ")
    user_selection = user_input.toLowerCase()
    const selection_items = ['rock', 'paper', 'scissor']
    function selection(arr){
        const random_index = Math.floor(Math.random() * arr.length);
        const item = arr[random_index];
        return item;
    }
    const computer_selection = selection(selection_items);
    console.log(`Computer Selection = ${computer_selection}\n`);
    if (computer_selection==="rock" && user_selection==="paper"){
        user_points++;
    }
    if (computer_selection==="rock" && user_selection==="scissor"){
        computer_points++;
    }
    if (computer_selection==="paper" && user_selection==="scissor"){
        user_points++;
    }
    if (computer_selection==="paper" && user_selection==="rock"){
        computer_points++;
    }
    if (computer_selection==="scissor" && user_selection==="paper"){
        computer_points++;
    }
    if (computer_selection==="scissor" && user_selection==="rock"){
        user_points++;
    }
    if (computer_points==user_points){
        user_points = user_points+0;
        computer_points = computer_points+0;
    }
};

if (user_points > computer_points){
    console.log(`You Won by ${user_points}-${computer_points}`);
}
if (user_points < computer_points){
    console.log(`You Lose by ${user_points}-${computer_points}`);
}
if (user_points == computer_points){
    console.log(`Match Draw by ${user_points}-${computer_points}`);
}
