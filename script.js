const manageOrder = () => {
   let orderId = document.getElementById('order-id-input').value;
   document.getElementById('order-no-display').innerText = `Status for order No. ${orderId}`;
   document.getElementById('order-no-display').style.display = 'block';    //display none to block

   // document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light','btn-success'); //selects multiple classes with same name and classList returns list of classes. [0] is used to access the first element of the class i.e Order placed in this example


   console.log("Order placed");
   document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light','btn-success');
    setTimeout(() => {
        console.log("Chef received order and preparing");
        document.getElementsByClassName('order-status-block')[1].classList.replace('btn-light','btn-success');
            setTimeout(()=>{
                console.log('Pizza Sauce added');
                document.getElementsByClassName('order-status-block')[2].classList.replace('btn-light','btn-success');
                setTimeout(()=>{
                    console.log('First layer of cheese added');
                    document.getElementsByClassName('order-status-block')[3].classList.replace('btn-light','btn-success');
                    setTimeout(() => {
                        console.log("toppings added");
                        document.getElementsByClassName('order-status-block')[4].classList.replace('btn-light','btn-success');
                        setTimeout(() => {
                            console.log('Second layer of cheese added');
                            document.getElementsByClassName('order-status-block')[5].classList.replace('btn-light','btn-success');
                            setTimeout(() => {
                                console.log('Pizza baked!');
                                document.getElementsByClassName('order-status-block')[6].classList.replace('btn-light','btn-success');
                                setTimeout(() => {
                                    console.log('Oregano added and packed');
                                    document.getElementsByClassName('order-status-block')[7].classList.replace('btn-light','btn-success');
                                    setTimeout(() => {
                                        console.log('Package received at counter');
                                        document.getElementsByClassName('order-status-block')[8].classList.replace('btn-light','btn-success');
                                        document.getElementsByClassName('order-status-block')[9].classList.replace('btn-light','btn-success');
                                    }, 2000);
                                }, 8000);
                            }, 15000);
                        }, 5000);
                    }, 12000);
                },5000);
            },10000);
    }, 2000);
}


document.getElementById('order-id-input').value = '';    //to empty the input
