/*function togsubmit() {
    let chk = document.getElementById("terms");
    let btn = document.getElementById("submit");
    btn.disabled = !chk.checked;
}
function validatedti() {
    let dti = document.getElementById("dti");
    let sdti = new Date(dti.value);
    let now = new Date();
    if (sdti<=now) {
        alert("Please select a future date and time.");
        dti.value = "";
    }
}
function display(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("email").value;
    let c=document.getElementById("num").value;
    let d=document.getElementById("service").value;
    let f="";
    let g="";
    let n=Math.random();
    if(n>0.5){
        g="Pending";
    }
    else if(g==0.5){
        g="Failed";
    }
    else{
        g="Successfull"
    }
    if(d==1){
        f="Doctor Consultation";
    }
    else if(d==2){
        f="Saloon Booking";
    }
    else if(d==3){
        f="Car Service";
    }
    else{
        f="ETH Workshop";
    }
    let e=document.getElementById("dti").value;
    e=e.replace("T",", ");
    document.getElementById("x").innerHTML="<h1>Booking History<h1> <br><br>";
    document.getElementById("x").innerHTML+="<div style=text-align:left>Name : "+a+" <br><br>Email : "+b+"<br><br>Contact Number : "+c+"<br><br>Service : "+f+"<br><br>Preferred Date&Time : "+e+"<br><br>Status : "+g+"<br><br>";
}*/
function togsubmit() {
    let chk = document.getElementById("terms");
    let btn = document.getElementById("submit");
    btn.disabled = !chk.checked;
}

function validatedti() {
    let dti = document.getElementById("dti");
    let sdti = new Date(dti.value);
    let now = new Date();
    if (sdti <= now) {
        alert("Please select a future date and time.");
        dti.value = "";
    }
}
function popup(){
    let a = document.getElementById("name").value;
    let e = document.getElementById("dti").value;
    e = e.replace("T", ", ");
    let d = document.getElementById("service").value;
    switch (d) {
        case "1":
            f = "Doctor Consultation";
            break;
        case "2":
            f = "Saloon Booking";
            break;
        case "3":
            f = "Car Service";
            break;
        case "4":
            f = "ETH Workshop";
            break;
        default:
            f = "Unknown Service";
    }
    alert("Thank you, "+a+"! Your appointment for "+f+" on "+e+" is being processed.....");
    display();
}
function display() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("num").value;
    let d = document.getElementById("service").value;
    let f = "";
    let g = "";
    let n = Math.random();
    if (n > 0.5) {
        g = "Pending";
    } else if (n === 0.5) {
        g = "Failed";
    } else {
        g = "Successful";
    }
    switch (d) {
        case "1":
            f = "Doctor Consultation";
            break;
        case "2":
            f = "Saloon Booking";
            break;
        case "3":
            f = "Car Service";
            break;
        case "4":
            f = "ETH Workshop";
            break;
        default:
            f = "Unknown Service";
    }
    let e = document.getElementById("dti").value;
    e = e.replace("T", ", ");
    let bh = {
        name: a,
        email: b,
        contactNumber: c,
        service: f,
        dateTime: e,
        status: g
    };
    let bhistory = JSON.parse(localStorage.getItem("bookingsHistory")) || [];
    bhistory.push(bh);
    localStorage.setItem("bookingsHistory", JSON.stringify(bhistory));
    document.getElementById("x").innerHTML = `<h1>Booking History</h1><br><br>`;
    bookdisplay();
}

function bookdisplay() {
    let bhistory = JSON.parse(localStorage.getItem("bookingsHistory")) || [];
    let bhContent = "";
    bhistory.forEach((bh, index) => {
        bhContent += `
            <div style=text-align:left>
                <h4>Booking ${index + 1}</h4>
                Name: ${bh.name} <br>
                Email: ${bh.email} <br>
                Contact Number: ${bh.contactNumber} <br>
                Service: ${bh.service} <br>
                Date & Time: ${bh.dateTime} <br>
                Status: ${bh.status} <br><br>
            </div>
        `;
    });
    document.getElementById("x").innerHTML += bhContent;
}
