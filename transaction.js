class bank{
    static getAccountDetails(){
         var accountDetails={

            1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
            1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3000},
            1003:{name:"user3",acno:1003,pin:4567,password:"userthree",balance:3000},
            1004:{name:"user4",acno:1004,pin:5678,password:"userfour",balance:3000},
            1005:{name:"user5",acno:1005,pin:6789,password:"userfive",balance:3000}
        
        }
        return accountDetails;
    }

      static  login(){
            var acno=document.querySelector("#accno").value;
            var  pwd=document.querySelector("#pint").value;
            alert(acno+","+pwd);
            let data=bank.getAccountDetails();
            console.log(acno in data);
            if(acno in data){
                let pd=data[acno].password
                console.log(pd);
                if(pd==pwd){
                    alert("login successfull");
                    window.location.href="userhome.html";
                    
                }
                 else{
                     alert("incorrect credentials");
                 }
            }
            else{
                alert("userdoesnot exist");
            }
           


        }

        static deposit(){
            //alert("deposit sucks");

            var acc=document.querySelector("#acn").value
            var pp=document.querySelector("#pin").value
            var amd=Number(document.querySelector("#amt").value)

            let details=bank.getAccountDetails();

            if(acc in details){
               
                console.log(acc);
              let mpin=details[acc].pin;
                console.log(mpin);

                if(pp==mpin){
                    details[acc].balance+=amd;
                    alert("amount has been credited");
                    alert(details[acc].balance)
                }
            }
        }

        static withdraw(){

            var acnt=document.querySelector("#acnt").value
            var pi=document.querySelector("#pint").value
            var amt=Number(document.querySelector("#amtt").value)

            let db=bank.getAccountDetails();

            if(acnt in db){
                console.log(acnt);

                let wpin=db[acnt].pin;

                if(pi==wpin){

                    db[acnt].balance-=amt;
                    alert("amount withdrawn successfully");
                    alert(db[acnt].balance);
                }
            }







        }

         
        
        


} 
