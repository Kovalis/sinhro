
import ready from "../../js/utils/documentReady.js";
import IMask from "imask";
// import Inputmask from"inputmask";
// import { initPopup } from "../../js/common/popup.js";

ready(function () {

    const formPay = document.querySelector('.form-block');
    const jsRequired = formPay.querySelectorAll(".js-required");
    const formPaySubmit = formPay.querySelector('.js-form-pay-submit');
    const numberCard = formPay.querySelector('.js-card-number');
    let flagSentForm = true;

    // const formattedCreditCardInput = new CreditCardInputMask({
    //     element: numberCard,
    //     pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
    // });


    // phone input
    const phoneFields = document.querySelectorAll("input[type=tel]");

    if (phoneFields) {
        phoneFields.forEach((field) => {
            IMask(field, {
                mask: "+{7} (000) 000-00-00",
            });
        });
    }

    // email input
    // const emailFields = document.querySelectorAll(".js-mail");

    // if (emailFields) {
    //     emailFields.forEach((field) => {
    //         IMask(field, {
    //             mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    //         });
    //     });
    // }

    function checkedInputs(){
        flagSentForm = true;
        const itemsInput = formPay.querySelectorAll("input[required]");
        itemsInput.forEach((item)=>{
            if(item.type == "checkbox"){
                if(item.checked == false){
                    item.closest(".js-required").classList.add("required-error");
                    flagSentForm = false;
                } else{
                    item.closest(".js-required").classList.remove("required-error");
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
            console.log(formPaySubmit)
            formPaySubmit.submit();
        } else{
            return false;
        }
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
    // const choosePopup = document.querySelector(".popup");
    // const chooseBtn = document.querySelector(".js-popup");
    // if (choosePopup && chooseBtn) {
    //   const popupClass = ".popup";
    //   const triggerBtn = ".js-popup";
    //   initPopup(popupClass, triggerBtn);
    // }
});
