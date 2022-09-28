document.querySelector(".btn").addEventListener("click", handleClick);

function handleClick(){
    var  flag = true;
    flag = checkError(flag);
    
    if(flag){
        alert("You have successfully subscribed 7 day free trial. Thanks!");
        
        document.querySelector(".first-name-text").classList.remove("field-error-show");
        document.querySelector(".first-name-img").classList.remove("error-img-show");
        document.querySelector("#first-name").classList.remove("btn-error");
        
        document.querySelector(".last-name-text").classList.remove("field-error-show");
        document.querySelector(".last-name-img").classList.remove("error-img-show");
        document.querySelector("#last-name").classList.remove("btn-error");
        
        document.querySelector(".password-text").classList.remove("field-error-show");
        document.querySelector(".password-img").classList.remove("error-img-show");
        document.querySelector("#password").classList.remove("btn-error");
        
        document.querySelector(".email-text").classList.remove("field-error-show");
        document.querySelector(".email-img").classList.remove("error-img-show");
        document.querySelector("#email").classList.remove("btn-error");
    }

}

function checkError(flag){
    if(!document.querySelector("#first-name").value){
        flag = false;
        document.querySelector(".first-name-text").classList.add("field-error-show");
        document.querySelector(".first-name-img").classList.add("error-img-show");
        document.querySelector("#first-name").classList.add("btn-error");
    }
    if(!document.querySelector("#last-name").value){
        flag = false;
        document.querySelector(".last-name-text").classList.add("field-error-show");
        document.querySelector(".last-name-img").classList.add("error-img-show");
        document.querySelector("#last-name").classList.add("btn-error");
    }
    if(!document.querySelector("#password").value){
        flag = false;
        document.querySelector(".password-text").classList.add("field-error-show");
        document.querySelector(".password-img").classList.add("error-img-show");
        document.querySelector("#password").classList.add("btn-error");
    }
    let email = document.querySelector("#email").value ;
    if(!email || !email.includes("@") || !email.includes(".com")) {
        flag = false;
        document.querySelector(".email-text").classList.add("field-error-show");
        document.querySelector(".email-img").classList.add("error-img-show");
        document.querySelector("#email").classList.add("btn-error");
    }
    return flag;
}