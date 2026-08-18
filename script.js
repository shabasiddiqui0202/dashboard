const line = document.getElementById("line")
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const revenue = [50000, 60000, 55000, 70000, 75000, 80000];

const expenses = [30000, 35000, 32000, 40000, 42000, 45000];

const profit = [20000, 25000, 23000, 30000, 33000, 35000];

new Chart(line,{
    type: "line",
    data:{

        labels:months,

        datasets: [
            {
            label: "Revenue",
            data: revenue,
            borderColor: 'blue',
            fill: false
        },
        {
            label: "Expenses",
            data: expenses,
            borderColor: 'green',
            fill: false
        },
        {
         label: "Profit",
            data: profit,
            borderColor: 'red',
            fill: false


        }
    ]
        

    
    
    
    },
    options: {
        responsive: false
    }
    
    

});

const bar = document.getElementById("bar");

new Chart(bar, {
    type: "bar",

    data: {
        labels: months,

        datasets: [{
            label: "Revenue",
            data: revenue,
            backgroundColor: [
                "blue",
                "green",
                "yellow",
                "pink",
                "orange",
                "purple"
            ]
        }]
    },
    options: {
        responsive: false
    }
});

let pie = document.getElementById("pie")
new Chart(pie,{
    type:"pie",
    data:{
        labels:[
            "reinvestmnet 40%", 
            "salaries 35%",
            "misc 60%"
        ],
        datasets:[{
            label: "profit distribution",
            data:[
                40,
                35,
                60
            ],
            backgroundColor: [
                "blue",
                "green",
                "purple"
            ]    
            

        }]
    },
        
            options:{
            responsive:false
        
    }
});