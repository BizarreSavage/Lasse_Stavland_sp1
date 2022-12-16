
//API call to get 5 random users to populate the staff table
//Here we can easily edit the URL to get as many random users populated as we want. 
//This function will create all the class objects and push them in to an array. 
function staffUserGet(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        dataType: 'json',
        success: function(data) {
            random = data;
            console.log(data);
            console.log(random);
        }
    });
    window.addEventListener('load', () => {for(i = 0; i < random.results.length; i++) {
        var roww2 = new StaffMember(random.results[i].name.first, random.results[i].name.last, random.results[i].picture, random.results[i].email, "In", "", "", "");
        roww.push(roww2);
        }})
};

staffUserGet();


class Employee{
    name;
    surname;

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

}

class StaffMember extends Employee {
    picture;
    email;
    status;
    outTime;
    duration;
    expectedReturnTime;
    
    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime){
        super(name, surname);
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    }

    staffMemberIsLate = function (){
        var minutes = duration;
        var seconds = minutes * 60;
        var milliseconds = seconds * 1000;

        {
            toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "300000",
            "hideDuration": "100000",
            "timeOut": "0",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "tapToDismiss": true
        }};
    
        let workz = rowa;

        staff.splice(workz, 1, setTimeout(function(){
            toastr["info"]("This employee is not back yet! <br>" + roww[workz].name + " has been away for: " + roww[workz].duration + " and should been back at: " + roww[workz].expectedReturnTime + 
                            ".  <br /><button type='button' class='btn btn-primary'>Ok</button>",'<img src="' + roww[workz].picture.thumbnail + '"' +
                            'id="toastPhoto" alt="randomMan">  ' + roww[workz].name + " " + roww[workz].surname)    
            },milliseconds));}
        
}

class DeliveryDriver extends Employee {
    vehicle;
    telephone;
    deliveryAddress;

    constructor(name, surname, vehicle, telephone, deliveryAddress, returnTime){
        super(name, surname);
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliveryAddress = deliveryAddress;
        this.returnTime = returnTime;
    }
    deliveryDriverIsLate = function (){
                    toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": true,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "preventDuplicates": false,
                    "showDuration": "300000",
                    "hideDuration": "100000",
                    "timeOut": "0",
                    "extendedTimeOut": "0",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut",
                    "tapToDismiss": true
            }
            var times = this.returnTime;
            var indexed = this.name;
            var hhours = times.split(":")[0];
            var hminutes = times.split(":")[1];
            var date4 = new Date();
            var date3 = new Date();
            date4.setHours(hhours);
            date4.setMinutes(hminutes);
            var millisecondss = (date4.getTime() - date3.getTime());  
            console.log(millisecondss);
        
        //Here we can edit the toast text/info/data 
            
            yo.push(setTimeout(()=>{
            const index = deliveryDrivers.map(e => e.name).indexOf(indexed);
            toastr["info"]("Driver: " + "<strong>" + deliveryDrivers[index].name + " " + deliveryDrivers[index].surname + "</strong>" + "<br>" + 
                            "Expected return time was: " + "<strong>" + deliveryDrivers[index].returnTime + "</strong>" + "<br>" + "Here is the drivers contact details!" + "<br>" +  "<br>" +
                            "Phone: " + deliveryDrivers[index].telephone + "<br>" + "Delivery address: " + deliveryDrivers[index].deliveryAddress, "Late driver notification")
            },millisecondss));
        }; 
}

/*Function to delete rows in DeliveryBoard.  
  Asking confirmation to delete row, deleting active toast for that row,
  deleting the deliveryDrivers object and removing/filtering the empty object/index. */
  function deleteRow(){



    askForConfirmation = confirm("Are you sure you want to delete " + deliveryDrivers[row_id].name + "?");
    if(askForConfirmation === true){
        clearTimeout(yo[row_id]);
        yo.splice(row_id, 1);
        document.getElementById('deliveryRows').rows[row_id].remove();
        delete deliveryDrivers[row_id];
        row_id = "";
        deliveryDrivers = deliveryDrivers.filter(value => JSON.stringify(value) !== '{}');
        //deliveryDrivers.forEach((e, i) => e.index = i + 1)
        console.log(deliveryDrivers)

        
        }else{return console.log("Returned")}}
        
        
    //Function to get the row index for DeliveryDrivers table
    
    $(document).ready ( function () {
        $(document).on ("click", "#deliveryRows tr", function () {      
    
            row_id = $(this).index();
            console.log("Row is: " + $(this).index());
        });
    });


window.addEventListener('load', () => {


function loadAPI(){
    for (i=0; i < roww.length; i++){
        var table = document.getElementById("tableRows");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        

        var img = document.createElement('img');
        img.src = roww[i].picture.thumbnail;
        cell1.appendChild(img);
        cell2.innerHTML = roww[i].name
        cell3.innerHTML = roww[i].surname
        cell4.innerHTML = roww[i].email
        cell5.innerHTML = roww[i].status
        cell6.innerHTML = ""
        cell7.innerHTML = ""
        cell8.innerHTML = ""


        
    }

//This function selects the clicked row on the Staff table.
    $('#tableRows td').click(function(){
        cola = $(this).parent().children().index($(this));
        rowa = $(this).parent().parent().children().index($(this).parent());
        console.log(rowa)
      });

// This function edits the staffmembers status to "Inn" and clears the Timeout for that object.
    function staffInn(){
        $("#in").click(function(){
                   roww[rowa].status = "In";
                   roww[rowa].outTime = "";
                   roww[rowa].duration = "";
                   roww[rowa].expectedReturnTime = "";
                 
                   document.getElementById("tableRows").rows[rowa].cells[4].innerHTML = roww[rowa].status;
                   document.getElementById("tableRows").rows[rowa].cells[5].innerHTML = roww[rowa].outTime;
                   document.getElementById("tableRows").rows[rowa].cells[6].innerHTML = roww[rowa].duration;
                   document.getElementById("tableRows").rows[rowa].cells[7].innerHTML = roww[rowa].expectedReturnTime;
                      
                    clearTimeout(staff[rowa]);
                    
            })};
            staffInn();
        

//This function changes the objects status to "Out", calculates the expected return time, and starts the setTimeout for the toast.
            
    function staffOut() {
        $("#out").click(function(){
                
                duration = parseInt(prompt("Estimated absence of " + roww[rowa].name + " " + roww[rowa].surname + " in minutes?"));
                check();
                    function check(){ if (!isNaN(duration)){ 
                    absense = timeConvert(duration);
                    currentTime = new Date();
                    checkOut = currentTime.toLocaleTimeString([], {timeStyle: 'short'});
                    status = "Out";
                
                   
                    dt = new Date();
                    dt.setMinutes(dt.getMinutes() + duration);
                    dt.setHours(dt.getHours());


                roww[rowa].expectedReturnTime = dt.toLocaleTimeString([], {timeStyle: 'short'});
                roww[rowa].status = status;
                roww[rowa].duration = absense;
                roww[rowa].outTime = checkOut;
                roww[rowa].staffMemberIsLate();
        

                document.getElementById("tableRows").rows[rowa].cells[5].innerHTML = roww[rowa].outTime;
                document.getElementById("tableRows").rows[rowa].cells[4].innerHTML = roww[rowa].status;
                document.getElementById("tableRows").rows[rowa].cells[6].innerHTML = roww[rowa].duration;
                document.getElementById("tableRows").rows[rowa].cells[7].innerHTML = roww[rowa].expectedReturnTime;

                        } else {return alert("Absense has to be specified in numbers. Please try again.")}
                    }}
            )}
            staffOut();  
        }


function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutess = (hours - rhours) * 60;
    var rminutes = Math.round(minutess);
    return rhours + "h " + rminutes + "m.";
}
                   
  


loadAPI();

})

//Declaring some global variables 

let staff = Array.from(Array(50), (_,x) => x);
let yo = [];
let row_id = 0;
let rowData = ""
let cellData = ""
let roww = [];
let status = ""
let checkOut = ""
let expectedReturnTime = ""
let rowa = ""
let cola = ""
let duration = ""
let absense = ""
let currentTime = ""
let hours = ""
let minutes = ""
let dt = ""
let ut = ""
let deliveryDrivers = []


//This function will take all the data in the input fields (if validated and approved), create a new class object and populate the "Delivery Board".

function addDelivery() {
    var nameField = document.getElementById('nameField').value;
    var surnameField = document.getElementById('surnameField').value;
    var telField = document.getElementById('telField').value;
    var addressField = document.getElementById('addressField').value;
    var timeField = document.getElementById('timeField').value;
    var vehicleField = document.getElementById('vehicleField').value;
    var vehicleField = vehicleField.toLowerCase();

    function vehicleChoice() {
        if (vehicleField == "car"){
            vehicleField = '<i class="fa fa-car"></i>'; 
            return vehicleField;
        } else if (vehicleField == "motorcycle"){
            vehicleField = '<i class="fa fa-motorcycle" aria-hidden="true"></i>'   
            return vehicleField;
        } else {
        vehicleField = "No vehicle";
        return vehicleField;
        }
    }
    
    vehicleChoice();


    
    function newRow(){
        submit = new DeliveryDriver(nameField, surnameField, vehicleField, telField, addressField, timeField);
        
        deliveryDrivers.push (submit);
        indeeeex = deliveryDrivers.indexOf(submit)
        console.log(indeeeex);
        var table = document.getElementById("deliveryRows");

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);


        cell1.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].vehicle
        cell2.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].name
        cell3.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].surname
        cell4.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].telephone
        cell5.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].deliveryAddress
        cell6.innerHTML = deliveryDrivers[deliveryDrivers.length - 1].returnTime

        deliveryDrivers[deliveryDrivers.length - 1].deliveryDriverIsLate();
        
    }

    function validateDelivery(){
        if (nameField.length == 0 || vehicleField == 0 || surnameField == 0 || telField == 0 || addressField == 0 || timeField == 0){
            alert("You need to fill all the form fields.");
            return}
        else if (telField.length < 7) {alert("Telephone number must be atleast 7 numbers long!"); return;
        }
        else if (isNaN(telField)) {alert("Telephone number must contain 'numbers' only!"); return;
        } 
        else if(vehicleField !== '<i class="fa fa-car"></i>' && vehicleField !== '<i class="fa fa-motorcycle" aria-hidden="true"></i>') {
            alert("Must be a car or a motorcycle.");
            return;
        }
        else {
            newRow();
            return
    }}
   
    validateDelivery();
    
}




//This is the function that creates the digital clock on the bottom of the dashboard.

function digitalClock(){
    var dt = new Date();
    document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ 
    (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2))
     +":"+ (("0"+dt.getMinutes()).slice(-2)) + ":" + (("0"+dt.getSeconds()).slice(-2));}    

setInterval(digitalClock, 1000);