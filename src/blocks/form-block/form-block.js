
import ready from "../../js/utils/documentReady.js";
import IMask from "imask";
import { initPopup } from "../../js/common/popup.js";

ready(function () {

    const formPay = document.querySelector('.form-block');
    const jsRequired = formPay.querySelectorAll(".js-required");
    const formPaySubmit = formPay.querySelector('.js-form-submit');
    let flagSentForm = true;

    // phone input
    const phoneFields = document.querySelectorAll("input[type=tel]");

    if (phoneFields) {
        phoneFields.forEach((field) => {
            IMask(field, {
                mask: "+{7} (000) 000-00-00",
            });
        });
    }

    function checkedInputs(){
        flagSentForm = true;
        const itemsInput = formPay.querySelectorAll("input[required]");
        itemsInput.forEach((item)=>{
            if(item.type == "checkbox" || item.type == "radio"){
                const groupInput = item.closest(".js-required");
                if(groupInput.classList.contains("js-group-input")){
                    item.closest(".js-required").classList.add("required-error");
                    flagSentForm = false;
                } else{
                    if(item.checked == false){
                        item.closest(".js-required").classList.add("required-error");
                        flagSentForm = false;
                    } else{
                        item.closest(".js-required").classList.remove("required-error");
                    }
                }
            } else{
                if(item.value == ""){
                    item.closest(".js-required").classList.add("required-error");
                    flagSentForm = false;
                } else{
                    item.closest(".js-required").classList.remove("required-error");
                }
            }
        });

        if(flagSentForm){
            let requestInfo = new Promise(function(resolve, reject){
                setTimeout(() => {
                    resolve(true);
                  }, 1000);
            });

            requestInfo
                .then((result)=>{
                    //formPaySubmit.submit();
                    const btnPopup = document.querySelector(".js-popup");
                    btnPopup.click();
                })
                .catch((result)=>{
                    console.log(result);
                    return false;
                })
        } else{
            return false;
        }
    }

    const groupInputs = formPay.querySelectorAll(".js-group-input");

    if(groupInputs){
        groupInputs.forEach((item)=>{
            const radioInputs = item.querySelectorAll("input");

            radioInputs.forEach((element)=>{
                //сбрасывает required при первом изменении radio кнопки
                element.addEventListener("change", ()=>{
                    const radioInput = item.querySelector("input[required]");
                    radioInput.required = false;
                    flagSentForm = true;
                    item.closest(".js-required").classList.remove("required-error");
                })
            });
        });
    }


    jsRequired.forEach((element)=>{
        element.addEventListener("focus", ()=>{
            element.classList.remove("required-error");
        });
    });


    formPaySubmit.addEventListener("submit", (event)=>{
        event.preventDefault();
        checkedInputs();
    });

    //popup
    const choosePopup = document.querySelector(".popup");
    const chooseBtn = document.querySelector(".js-popup");
    if (choosePopup && chooseBtn) {
      const popupClass = ".popup";
      const triggerBtn = ".js-popup";
      initPopup(popupClass, triggerBtn);
    }
});
