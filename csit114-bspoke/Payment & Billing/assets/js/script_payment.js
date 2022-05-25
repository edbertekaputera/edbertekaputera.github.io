const btn = document.querySelector("#btnTopUp");
const radioButtons = document.querySelectorAll('input[name="radioPayment"]');
btn.addEventListener("click", () => {
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    location.href = radioButton.value;
                    break;
                }
            }
        });