$(document).ready(()=>{
    var stripeHandler = StripeCheckout.configure({
        key: stripePublicKey,
        locale: auto,
        token: function(token){
            // Calls this after Stripe API call is done
        }
    })
    
    function donateClickedFiveDollar(){
        var donate = 5000
        stripeHandler.open({
            amount: donate
        })
    }

    $('.button-donate-five').on('click', ()=>{
        donateClickedFiveDollar()
    })
})