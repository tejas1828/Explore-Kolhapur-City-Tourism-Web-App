//PRINTING METHOD

// const { createElement } = require("react");


// console.log("HELLO JS"); 

// document.write("javascript")
// document.write("javascript" + "<br>" +  "<hr>")

// //not recommended

// document.writeln("<h2>Hello h1</h2>")

// document.writeln("HTML")
// document.writeln("HTML")

// let welcometojs = ["vijay sir",123,false,70.34,"Q"]
// console.table(welcometojs)
// console.log(welcometojs)


//DECLARATiON

// var place="pune"
// console.log(place);
// place="mumbai"
// console.log(place);
 
// var place 

// place="satara"

// console.log(place);
// place="kop"
// console.log(place);


// let subject="webtech"
// console.log(subject);
// subject="java"
// console.log(subject);


// let subjectone

// subjectone="sql"
// console.log(subjectone);

// subjectone="python"
// console.log(subjectone);


// let actress
// console.log(actress);

// const actor="pankaj tripathi"
// console.log(actor);

// var subject="JavaScript"
// console.log(subject);
// var sub="SQL"
// {
//     console.log(sub)
//     var sub="react"
// }
// console.log(sub);
// function task () {
//     console.log("Im learning" + subject);
//     var place="pune"
    
// }
// task()
// // console.log(place);

// let age=21
// console.log(age);
// age=256
// console.log(age);

// let adhar="im adhar"
// {
//     console.log(age);
//     console.log(adhar);
//     let adhar="9273874872384"
       
// }
// console.log(adhar);


// let age2 = 21
// let age3 = 21
// console.log(age2 == age3);

// let person = {
//     Name:"Tejas",
//     age : 21,
//     isMarried:false,
//     salary:Symbol(1200)
// }
// let personTwo = {
//     Name:"Adarsh",
//     age:21,
//     isMarried:true,
//     salary:Symbol(1200)
// }
// console.log(person.age == personTwo.age);

// console.log(person.salary==personTwo.salary);
// console.log(typeof person.salary);
// let largeNum = BigInt(3564634679654)
// console.log(largeNum);


// let num = 5
// let num2 = '5'
// CHECKS THE VALUE ALONG WITH DATATYPE
// console.log(num == num2);

// TURNERY OPERATOR
// CONDITION ? "STATEMENT 1 ":"STATEMENT 2"

// let criteria = 14
// let result = criteria >=18 ? "elligible" : "not elligible"
// console.log(result);

// // IF BLOCK
// let gender ="female"
// if(gender == "female"){
//     ;console.log("welcome to india ! everything is free");
    
// }
// // IF ELSE
// if(gender == "male"){
//     console.log("everything is free!");
// }
// else{
//     console.log("maroo salo");
// }
// IF ELSE LADDER

// let genz = prompt("enter gender")
// let state = prompt("enter state")
// if(genz == "female" && state == "maharashtra"){
//     console.log("education is free!");
// }
// else if(genz == "female" && state =="karnataka"){
//     console.log("only bus ticket is free");
    
// }
// else if (genz == "male" && state == "maharashtra"){
//     console.log("responsibility is free");
    
// }
// else{
//     console.log("nothing is free");
    
// }

// SWITCH STATEMENT::
// let day = 5
// let dayName 
// switch(day){
//     case 1 : dayName ="Monday"
//     break;
//     case 2 :dayName="Tuesday"
//     break;
//     case 3 :dayName="wednesday"
//     break;
//     case 4 :dayName="Thursday"
//     break;
//     case 5 :dayName="friday"
//     break;
//     case 6 :dayName="saturday"
//     break;
//     case 7 :dayName="sunday"
//     break
//     default : dayName="no day"
// }
// console.log(dayName);



// let btn = document.getElementById("btn")
// function changeBtn(){
//     btn.style.backgroundColor = "green"
//     btn.style.color ="white"
//     btn.innerHTML = "Added !"
// }
// let head = document.getElementById("head")
// console.log(head);
// head.style.color = "red"

// let subHeading = document.getElementsByClassName("subHead")
// console.log(subHeading)
// subHeading[0].style.color ="green"
// subHeading[1].style.color ="green"
// subHeading[2].style.color ="green"

// let head = document.querySelector("#head")
// console.log(head);
// head.style.color="red"

// let subHead = document.querySelectorAll(".subHead")
// console.log(subHead);
// subHead.forEach((ele) => {
//     ele.style.color ="green"
// })

// let input = document.getElementById("input")

// input.addEventListener("input",()=>{

//     if(input.value.length >=10){
//     let Btn =document.getElementById("btn")
//     Btn.classList.add("anime")
//     }
// })

// INNER HTML METHOD

// let h1 = document.querySelector("#head")
// h1.innerHTML="Happy Monday"
// h1.innerHTML="Sad Monday"

// stylemethod

// h1.style.color="red"
// h1.style.backgroundColor="black"
// h1.style.fontSize="60px"

// let heading =document.createElement("h1")
// console.log(heading)
// heading.innerHTML ="Good morning"
// heading.style.color ="red"
// document.body.appendChild(heading)


// let ul =document.createElement("ul")
// document.body.appendChild(ul)
// console.log(ul);

// let li = document.createElement("li")
// li.textContent = "mango"
// ul.appendChild(li)

// let li2 = document.createElement("li")
// li2.textContent = "apple"
// ul.appendChild(li2)





















//HOISTINMG::
//WITH VAR::
//EXPLICITLY IN PROGRAM::
// console.log(place)
// var place="pune"
// console.log(place)

//IMPLICITELY IN PROGRAM::
// var place
// console.log(place)
// var place="satara"
// console.log(place)

//HOISTING IS NOT POSSIBLE WITH LET AND CONST::

// let number=23
// let number2='23'
// console.log(number==number2)
// console.log(number===number2) //it will compare by using datatype as well

//TERNARY OPERATOR
// let gender="female"
//syntax
//condition ? "statement1":"statement2"
// let result=gender !=="female" ? "ladki bahin" : "Hatt!!!"
// console.log(result)

// SCOPE
// GLOBAL SCOPE::

// {
//     var place="pune"
//     console.log
// }
// console.log(place);
// if(true){
//     var place="satara"
//     console.log(place);
// }

// // LOCAL SCOPE::-LET AND CONST
// let Name="Rohit"
// console.log(Name);
// {
//     console.log(Name)
//     let name="ravi"
//     console.log(name)
// }
// console.log(name);


// let age=34
// console.log(age);
// if(true){
//     console.log(age);
//     // With let we cant access 
//     let ageTwo=35
//     console.log(ageTwo);

//     // var varibale we can access outside the block scope::
//     var msg="Hello Hi"
//     console.log(msg)
// }

// console.log(msg);
// console.log(ageTwo);


// var subject="JS"
// let Name="Harsha"
// function task(){
//     console.log("IM Function");
//     console.log(Name);
//     let age =27
//     console.log(subject);
//     var library ="React"
// }
// task()
// console.log(library);
// console.log(age);
// console.log(Name);

//NAMED FUNCTION::
// function task(){
//     console.log("hello im function");
//     let age=18
//     if (age>=18){
//         console.log("elligible for voting");

//     }
//     else{
//         console.log("not elligible for voting");
//     }
// }
// task()
// //prompt
// // let value=prompt("enter")
// // console.log(value);

// let val=68
// console.log(val);

// function studentData(name,ratings){
//     if (name && ratings==1){
//         console.log(`my name is ${name} im good student`);
    
        
//     }
//     else {
//         console.log(`no student data found`);
        
//     }
// }
// studentData("prateek","1")


// function parent(){
//     console.log(`hello im parent`);
//     let a=10
//     let b=20
//     let add=a+b
//     console.log(add);
//     // console.log(x); :: we cant declare child properties inside paren but we declare parent properties inside child.
//     function child(){
//         console.log(`hello im child`)
//         let x=20
//         console.log(add*x);

//     }
    
//     child()
//     // parent() :IT WILL RUNS INFINITE TIMES
// }
// parent()

// WHAT IS ARRY?
// ARRAY IS A COLLECTION OF DATA AND MEMORY WHERE WE CAN STORE MULTIPLE DATAS BOTH HOMOGEMEOUS OR HETEROGENOUS VALUES::

// SYNTAX
// int [] numbers={10,20,30,40} in JAVA
// numbers=[10,20,30] in PYTHON
// let number=[10,20,30] in JAVASCRIPT

// let numbers=[10,20,30]
// console.log(numbers);

// let student=["tejas",7,false,78,undefined]
// console.log(student);

// // WITH THE HELP OF INDEX VALUE::
// console.log(student[0]); 
// //in above it will access the element of 0th position

// let arr=[10,20,30,40]

// // BY NEW CONSTRUCTOR MOSTLY USED IN OOPS-FLEXIBLE
// let arrays=new Array(10,20,30,40,"string")
// console.log(arrays)

// // BY CRRATING SIZE::
// let numbers=new Array(10,20)
// console.log(numbers)
// numbers[0]="Webtech"
// numbers[1]="React"
// console.log(numbers);

// // let movies=new Array(5) //it creates the size of 5 elements

// let subject=["html","CSS","JS"]
// console.log(subject);
// // push()::IT INSERT OR ADD THE NEW ARRAY ELEMENT IN THE EXISTING ARRAY  AT THE LAST INDEX
// subject.push("React")
// console.log(subject);

// // pop()::IT REMOVES ARRAY ELEMENT FROM THE EXISTING ARRAY FROM THE LAST INDEX

// subject.pop() // possible to remove last element from the array
// console.log(subject)
// subject.pop("Html") //not possible to remove specific element with pop method
// console.log(subject);






// let Trainers=["Rohit","harsha","Saiful","abhishek","mohit","sourav","suchit","girish","vijay","sachin","arpit","naveen","Rohith"]
// let sNamesTrainers=Trainers.filter(sNames)
// function sNames(ele){
//     console.log(`hello ${ele}`);
//     return ele.startswith('s')

// }
// console.log(sNamesTrainers);
// let aNames =Trainers.filter((ele) => {
//     return ele.startswith('a')
// })
// console.log(aNames)


// TO CHECK NUMBER IS EVEN OR ODD::

// let number=[1,2,3,4,5,6,98,7]
// let evennums=number.filter(ele => ele%2==0)
// console.log(evennums);
// OR::
// let evennums=number.filter((ele)=>{
//     return ele%2==0
// })
// console.log(evennums);




// JOINS IN ARRAY::

// let Trainers=["Rohit","harsha","Saiful","abhishek","mohit","sourav","suchit","girish","vijay","sachin","arpit","naveen","Rohith"]


// console.log(Trainers.join())
// let number=[1,2,3,4,5,6,98,7]
// let evennums=number.map((ele,index) => index+2)
// console.log(evennums);

// let arr=[10,20,30,40,100,43,89,2,1,200]
// let sorting=arr.sort((a,b)=>{
//     console.log(`${a}-${b}`);
//     return a-b
// })
// console.log(arr)
// console.log(sorting);

// let value =arr.reduce((ele,ele2) => ele +ele2)
// console.log(value);

// let names=['rohit','ravi','shubham','ram']
// let value2=names.reduce((ele,ele2)=> ele+ele2)
// console.log(value2);

// arr.forEach((ele)=>{
//     console.log(ele);
    
// })


// let person ={
//     name:"rohit",
//     place:"pune",
//     favnum:14,
//     // we can store array as well
//     hobbies:["trecking","riding","music"],
//     // we can create nested object too
//     address:{
//         place:"pune",
//         state:"maharashtra"



//     }

// }
// console.log(person);

// // WE CAN ACCESS THE PROPERTIES OF OBJECT WITH DOT NOTATION::
// console.log(person.name);
// console.log(person.hobbies);
// console.log(person.hobbies[2]);
// console.log(person.address.place);
// console.log(person.address.state);

// const Std ={
//     name:"snehal",
//     Ratings:1,
//     Branch:"computer science",
//     subjects:["sql","python","webtech","power bi"],
//     address:{
//         place:"pune",
//         dist:"pcmc"
//     },
//     IsActive:true
// }
// // console.log(Std);

// //UPDATING OBJECT PROPERTIES::
// Std.address.dist ="Pune"
// console.log(Std);

// // ADDING OBJECT PROPERTIES::
// Std.gender="female"
// console.log(Std);

// // DELETING OBJECT PROPERTIES::
// delete Std.address
// console.log(Std);

// // ADDING ANY VALUE INSIDE EXISTING OBJECTS::

// Std.subjects.push("java")
// console.log(Std);

// // ADDING OR UPDATING MULTIPLE KEYS::
// // SYNTAX::
// // Object.assign(Object,{object with multiple keys})
// Object.assign(Std,{
//     fav1:1,
//     fav2:2,
//     fav3:3
// })
// console.log(Std);


// ARRAY OF OBJECT::

// let e1 ={
//     name:"Rohit",
//     subject:"Java",
//     salary:1000
// }
// let e2 ={
//     name:"Mohith",
//     subject:"Python",
//     salary:2000
// }
// let e3 ={
//     name:"sourav",
//     subject:"Python",
//     salary:1000
// }   
// let employes=[e1,e2,e3]
// console.log(employes);

// let empsal1000 = employes.filter(function(ele){
//     return ele.salary==1000
// })
// console.log(empsal1000);

// let e1={
//     Name:"Rohit",
//     age:25,
//     designation:"WebTech Trainer",
//     salary:300000,
//     department:"IT",
//     hobbies:["trecking","riding","music"],
//     address:{
//     place:"pune",
//     state:"maharashtra"
// },
// isMarried:false,
// gender:"male",
// subjects:['HTML','CSS','JS','REACTJS']
// }
// console.log(e1);

// let e2={
//     Name:"Mohith",
//     age:26,
//     designation:"Python Trainer",
//     salary:225000,
//     department:"IT",
//     hobbies:["travelling","swimming","music"],
//     address:{
//     place:"bengaluru",
//     state:"karnataka"
// },
// isMarried:false,
// gender:"male",
// subjects:['Python','Programming','Data Science']
// }
// console.log(e2);

// let e3={
//     Name:"Sourav",
//     age:24,
//     designation:"Data Science Trainer",
//     salary:200000,
//     department:"IT",
//     hobbies:["gaming","reading","travelling"],
//     address:{
//     place:"delhi",
//     state:"delhi"
// },
// isMarried:false,
// gender:"male",
// subjects:['Python','Programming','Libraries']
// }
// console.log(e3);

// let e4={
//     Name:"Sachin",
//     age:24,
//     designation:"Power BI Trainer",
//     salary:70000,
//     department:"mechanical",
//     hobbies:["playing cricket","riding","watching movies"],
//     address:{
//     place:"UP",
//     state:"UP"
// },
// isMarried:false,
// gender:"male",
// subjects:['Python','Programming','EXCEL']
// }
// console.log(e4);

// let e5={
//     Name:"arpita",
//     age:22,
//     designation:"manual testing Trainer",
//     salary:65000,
//     department:"ENTC",
//     hobbies:["trecking","watching movies"],
//     address:{
//     place:"MP",
//     state:"MP"
// },
// isMarried:true,
// gender:"female",
// subjects:['Devops','Selenium','Manual Testing']
// }
// console.log(e5);

// let e6={
//     Name:"Abhishek",
//     age:29,
//     designation:"manual testing Trainer",
//     salary:500000,
//     department:"CSE",
//     hobbies:["trecking","watching movies","Travelling"],
//     address:{
//     place:"Hyderabad",
//     state:"Telangana"
// },
// isMarried:true,
// gender:"male",
// subjects:['Automation','Selenium','Manual Testing']
// }
// console.log(e6);

// let e7={
//     Name:"Rohith",
//     age:23,
//     designation:"Java Trainer",
//     salary:450000,
//     department:"mechanical",
//     hobbies:["reading","jogging","Travelling"],
//     address:{
//     place:"belgaum",
//     state:"karnataka"
// },
// isMarried:true,
// gender:"male",
// subjects:['Java','Spring','Hibernate']
// }
// console.log(e7);

// let e8={
//     Name:"Harsha",
//     age:29,
//     designation:"Java Trainer",
//     salary:500000,
//     department:"Civil",
//     hobbies:["yoga","boxing","arts"],
//     address:{
//     place:"mysore",
//     state:"karnataka"
// },
// isMarried:true,
// gender:"male",
// subjects:['Java','Core Java','Advance Java']
// }
// console.log(e8);

// let e9={
//     Name:"Hema",
//     age:25,
//     designation:"power bi Trainer",
//     salary:360000,
//     department:"AIML",
//     hobbies:["listening podcasts","sleeping","eating lots of food"],
//     address:{
//     place:"bengaluru",
//     state:"karnataka"
// },
// isMarried:true,
// gender:"female",
// subjects:['powerbi','Excel','DAX']
// }
// console.log(e9);

// let e10={
//     Name:"Vijay",
//     age:27,
//     designation:" SQL Trainer",
//     salary:420000,
//     department:"Mechanical",
//     hobbies:["listening podcasts","swimming","gym"],
//     address:{
//     place:"andhra pradesh",
//     state:"andhra pradesh"
// },
// isMarried:true,
// gender:"male",
// subjects:['SQL','MySQL','PostgreSQL']
// }
// console.log(e10 );

// let employees=[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10]
// console.log(employees);

// // 1]
// let empsalaregreater80000 = employees.filter(function(ele){
//     return ele.salary>=80000
// })
// console.log(empsalaregreater80000); 

// // 2]
// let salmore80000 = employees.filter((ele)=>{
//     if(ele.salary>=80000){
//         ele.salary=ele.salary+ele.salary*25/100
//         return ele
//     }}
// )
// console.log(salmore80000);


// // 3]
// let samegender = employees.filter((ele)=>{
//     if (ele.gender=="male"){
//         return ele
//     }
// }
// )
// console.log(samegender);

// // 4]
// let samedept = employees.filter((ele)=>{
//     if (ele.department==employees.department){
//         return ele
//     }}
// )
// console.log(samedept);


// // 5]
// employees.forEach((ele)=>{
//     ele.company="QSPIDERS"
// }
// )
// console.log(employees);
// // 6]
// let samestate = employees.filter((ele)=>{
//     if (ele.address.state=="karnataka"){
//         return ele
//     }
// })
// console.log(samestate);





// +
// // 7]
// let agebetween24to28 = employees.filter((ele)=>{
//     if (ele.age>=24 && ele.age<=28){
//         return ele
//     }})
// console.log(agebetween24to28);

// // 8]
// let status =employees.filter((ele)=>{
//     if (ele.isMarried==false){
//         return ele.status="happy"
//     }})
// console.log(status);

// // 10]
// employees.forEach((ele)=>{
//     if (ele.gender=="female"){
//         ele.hobbies.push("cooking")
//     }})
// console.log(employees);

// // 11]
// employees.forEach((ele)=>{
//     if (ele.salary<300000){
//         ele.experience="1 years"}
//     else if (ele.salary>=300000 && ele.salary<400000){
//         ele.experience="2 years"}
//     else if (ele.salary>=400000 && ele.salary<500000){
//         ele.experience="3 years"}
//     else if (ele.salary>=500000){
//         ele.experience="4 years"}
// })
// console.log(employees);

// // 12]
// employees.sort((a,b)=>{
//     if (a.experience < b.experience){
//         return -1   }  
//     else if (a.experience > b.experience){
//         return 1    }
//     else{
//         return 0
//     }      
// })
// console.log(employees);


// function user (Name,age,salary){
//     console.log("Hello Im User!!")
//     this.Name=Name,
//     this.age=age,
//     this.salary=salary
// }
// let Person=new user("tejas",22,20000)
// console.log(Person);

// let PersonTwo=new user(25,"sarthak",25000)
// console.log(PersonTwo);

// let std2={
//     Name:"karthik",
//     Age:27
// }

// let std3={
//     Name:"parvati",
//     Age:45
// }

// // BY LITERAL 
// let std ={
//     Name:"ganesh",
//     Age:28,
//     PrintMsg:function(Company,Place){
//         console.log(`Hi my name ${this.Name} and my age is ${this.Age} and i work in ${Company} which is located in ${Place}`);

        
//     }
// }

// // console.log(Name);
// std.PrintMsg()

// // syntax of call method in object 
// // originalobj.functioncall.callmethod(second obj)

// std.PrintMsg.call(std2)
// std.PrintMsg.call(std3)
// std.PrintMsg.call(std)

// // APPLY METHOD:WE WANT TO PASS MORE THAN ONE ARGUMENTS  THE WE CAN USE APPLY METHOD(IT WILL PASSED IN THE FROM OF ARRAY)
// std.PrintMsg.apply(std2,["qspiders","wakad"])

// console.log(document);

// let para =document.getElementById("text")
// para.innerHTML="bye dom"
// para.style.color="green"
// console.log(para);

// let content =document.getElementsByClassName("humans")
// console.log(content);

// // content[0].style.color="blue"
// // content[1].style.color="orange"
// // content[2].style.color="green"


// let content=document.querySelectorAll(".humans")
// console.log(content);


// document.getElementById("text").addEventListener("mouseover",()=>{
//     let h1=document.createElement("h1")
//     h1.innerHTML="hello world"
//     document.body.appendChild(h1)
//     h1.style.backgroundColor="orange"
//     console.log(h1);
//     h1.addEventListener("click",()=>
//     {
//         window.location.href="./Anchor.html"
//     })
    
// })

// let li=document.createElement("li")
// document.body.appendChild(li)
// li.innerHTML="Hello World!"
// li.style.backgroundColor="green"
// li.style.color="white"

// li.remove()

// let image=document.createElement("img")
// document.body.appendChild(image)
// image.setAttribute("src","https://cdn-s3.autocarindia.com/RoyalEnfield/Continental-GT-650/_AAB9339.JPG?w=640")
// image.style.height="200px"
// console.log(image.getAttribute("src"));
// console.log(image.hasAttribute("src"));


// let movies=["bahuballi","KGF","RRR","Kantara"]
// movies.map(ele=>{
//     console.log(ele);
//     let li= document.getElementById("listItem")
//     li.innerHTML+=`${ele} <br>`
//     li.style.listStyle="none"
// })

// CLASSLIST METHODS::

// let h1=document.createElement("h1")
// document.body.appendChild(h1)
// h1.innerHTML="Hello Students!!"

// h1.classList.add("text")

// // h1.classList.remove("text")
// console.log(h1.classList.contains("text"));
// h1.classList.replace("text", "textTwo")


// function print(){
//     alert("happy birthday!")
// }

// // MODERN EVENT:

// document.querySelector("#wish").addEventListener("mouseover",()=>{
//     alert("happy marriage!!")
// })


// let user =document.getElementById("user")
// let pass=document.getElementById("password")
// console.log(user.value);

// user.addEventListener("focus",()=>{
//     console.log("hi focus");
    
// })

// user.addEventListener("blur",()=>{
//     console.log("hi blur");
    
// })

// document.body.addEventListener("focus",()=>{
//     console.log("hi click");
    
// })
// let btn=document.getElementById("submit")
// btn.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     console.log(event);
//     console.log(user.value);
//     console.log(pass.value);
    
// })


// TO STORE IT IN OBJECT::
// let btn=document.getElementById("submit")
// btn.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     // console.log(event);
//     let obj={
//         Username:user.value,
//         Password:pass.value
//     }
//     console.log(obj);
    
// })

// let user = document.getElementById("user")
// user.addEventListener("click" , (event) => {
//    let field=document.getElementById("field")
//    field.style.borderColor="red"
//     let legend = document.getElementById("leg")
//     legend.innerHTML = "full name"
// })

// let parent=document.getElementById("parent")
// parent.addEventListener("change"-,()=>{
//     console.log("hi i am change");
//     document.body.style.backgroundColor=parent.value
    
// })


// TO-DO List ::

// let input=document.getElementById("input")
// let btn=document.getElementById("btn")
// let ul=document.getElementById("parent")
// let btn2=document.createElement("button")

// btn.addEventListener("click",()=>{
//     if(input.value !==""){
//         console.log(`hello ${input.value}`);
//         let li =document.createElement("li")
//         ul.appendChild(li)
//         li.innerHTML=`${input.value}  <button>delete</button>`
//         input.value=""
//         let deletebtn=li.querySelector("button")
//         deletebtn.addEventListener("click",()=>{
//             li.remove()
//         })
// }
        

        
//     else{
//         window.alert("Sorry,we can't add empty value");
        
//     }
// })

// let url = "https://api.github.com/users"

// async function getUsers(){
//     // let user=document.createElement("h2")
//     // document.body.appendChild(user)
//     // user.innerText="User data"
//     let data =await fetch(url)
//     console.log(data);

//     let dataFormat =await data.json()
//     console.log(dataFormat);

//     console.log(dataFormat[0].login);
//     dataFormat.forEach(ele =>{
//         document.getElementById("user").innerHTML += ` user : ${ele.login} <br>`
//     });
    
    
    
// }
// getUsers()




// async function getCars(){
//     let data =await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
//     console.log(data);

//     let dataFormat =await data.json()
//     console.log(dataFormat);

   
//     dataFormat.Results.forEach(element =>{
//         document.getElementById("user").innerHTML += ` cars: ${element.Mfr_CommonName} <br>`
//     });
    
    
    
// }
// getCars()



// async function getBooks(){
//     let data =await fetch("https://stephen-king-api.onrender.com/api/books")
//     console.log(data);

//     let dataFormat =await data.json()
//     console.log(dataFormat);

   
//     dataFormat.data.forEach(element =>{
//         document.getElementById("user").innerHTML += ` books: ${element.Title} <br>`
//     });
    
    
    
// }
// getBooks()


// async function getSports(){
//     let data =await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
//     console.log(data);

//     let dataFormat =await data.json()
//     console.log(dataFormat);

   
//     dataFormat.teams.forEach(element1 =>{
//         document.getElementById("user").innerHTML += ` sports: ${element1.strTeam} <br>`
//     });
    
    
    
// }
// getSports()

// async function getCurrency() {
//     let response = await fetch("https://open.er-api.com/v6/latest/USD");

//     let data = await response.json();
//     console.log(data);

//     Object.entries(data.rates).forEach(currency => {
//         document.getElementById("user").innerHTML += `currency: 
//             ${currency[0]}<br>
//         `;
//     });
// }

// getCurrency();


// async function getTVshows() {
//     let response = await fetch("https://api.tvmaze.com/shows");

//     let data = await response.json();
//     console.log(data);

//     data.slice(0,30).forEach(show => {
//         document.getElementById("user").innerHTML += ` TVShows: 
//             ${show.name}<br>
//         `;
//     });
// }

// getTVshows();

// async function getFoxImages() {
//     let button = document.createElement("button")
//     button.innerHTML = "Refresh Foxes"
//     button.style.width="40px"
    
//     let image = document.createElement("img")
//     image.style.height = "250px"
//     image.style.margin = "10px"

//     button.addEventListener("click", async () => {
//         let newData = await fetch("https://randomfox.ca/floof/")
//         let newDataFormat = await newData.json()
//         image.src = newDataFormat.image;
//     })

//     let data = await fetch("https://randomfox.ca/floof/")
//     let dataFormat = await data.json()
//     image.src = dataFormat.image

//     document.body.appendChild(button)
//     document.body.appendChild(image)
// }
// getFoxImages()

// async function getMovies() {
//     let response = await fetch("https://api.tvmaze.com/search/shows?q=india");

//     let data = await response.json();
//     console.log(data);

//     data.slice(0,30).forEach(show => {
//         document.getElementById("user").innerHTML += `movies: 
//             ${show.show.name}<br>
//         `;
//     });
// }

// getMovies();





// async function getDogImages() {
//     let button = document.createElement("button")
//     button.innerHTML = "Refresh Dogs"
    
//     let image = document.createElement("img")
//     image.style.height = "250px"
//     image.style.margin = "10px"

//     button.addEventListener("click", async () => {
//         let newData = await fetch("https://dog.ceo/api/breeds/image/random")
//         let newDataFormat = await newData.json()
//         image.src = newDataFormat.message;
//     })

//     let data = await fetch("https://dog.ceo/api/breeds/image/random")
//     let dataFormat = await data.json()
//     image.src = dataFormat.message

//     document.body.appendChild(button)
//     document.body.appendChild(image)
// }
// getDogImages()



// async function getCatImages() {
//     let button = document.createElement("button")
//     button.innerHTML = "Refresh Cats"
    
//     let image = document.createElement("img")
//     image.style.height = "250px"
//     image.style.margin = "10px"

//     button.addEventListener("click", async () => {
//         let newData = await fetch("https://api.thecatapi.com/v1/images/search")
//         let newDataFormat = await newData.json()
//         image.src = newDataFormat[0].url;
//     })

//     let data = await fetch("https://api.thecatapi.com/v1/images/search")
//     let dataFormat = await data.json()
//     image.src = dataFormat[0].url

//     document.body.appendChild(button)
//     document.body.appendChild(image)
// }
// getCatImages()



// let place = " Pune is Best City "
// console.log( place.substring(1,5));
// console.log(place.charAt(2));
// console.log(place.trim());
// console.log(place.trimEnd());
// console.log(place.trimStart());
// console.log(place.replace("Pune","Kolhapur"));
// let place1="I scream u scream for ice-cream"
// console.log(place1.replaceAll("scream","fight"));
// console.log(place1.repeat(10));



// // IT IS USED TO ROUNDOFF THE GIVEN VALUE::
// console.log(Math.round(4.7));
// // IT IS USED TO ROUNDOFF AND GIVE THE HIGHEST INTEGER::
// console.log(Math.ceil(4.1));
// // IT IS USED TO ROUNDOFF AND GIVE THE HIGHEST INTEGER::
// console.log(Math.floor(4.1));
// // IT IS RESTURNS ONLY INTEGER VALUE::
// console.log(Math.trunc(4.5));
// console.log(Math.sqrt(54));
// console.log(Math.cbrt(125));
// console.log(Math.max(50,41,23,1,0));
// console.log(Math.min(54,75,32,58,1));
// // IT IS USED TO RETURNS POSITIVE VALUES::
// console.log(Math.abs(-74));
// // IT IS USED TO PRINT ONLY RANDOM NUMBERS::
// console.log(Math.random(1,4,5,2,3));

// let h1 =document.getElementById("timer")
// function clock(){
//     let task = new Date()
//     let hours = task.getHours()
//     let mins=task.getMinutes()
//     let sec=task.getSeconds()
//     // let mlsec=task.getMilliseconds()
//     console.log(`${hours}:${mins}:${sec}`);
//     timer.textContent = `${hours}:${mins}:${sec}`
// }

// setInterval(clock,1000)

// let h1 =document.getElementById("timer")
// let birthyear = prompt("enter your birthyear")
// let tasktwo = new Date()
// let age = tasktwo.getFullYear()- birthyear
// console.log(age);
// console.log(`your age is ${age}`);
// timer.innerHTML=` your age is ${age}`


// let mydata = new Date("2025-02-15")
// console.log(mydata);



// EXCEPTION::


// function voting(age,citizen,id){
//     try{
//         if (typeof(age)!="number"){
//             throw new Error("not a number")
//         if 
//         }
//         if(age>=18 && citizen ==="indian" && id ===9090){
//             console.log("eligible for voting");
//         }
//         else{
//             throw new Error("not eligible for voting");
            
//         }
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
// }
// voting("24","indian",9090)

document.getElementById("parent").addEventListener("click",(event)=>{
    console.log("parent clicked");
    

})

document.getElementById("child").addEventListener("click",(event)=>{
    console.log("child clicked");
    event.stopPropagation(


        

})

document.getElementById("btn").addEventListener("click",(event)=>{
    console.log("button clicked");
    event.stopPropagation()

})