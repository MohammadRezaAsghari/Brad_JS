console.log('Hello to Ajax');


const btnCustomer = document.getElementById('btn-customer');
const btnCustomers = document.getElementById('btn-customers');
btnCustomer.addEventListener('click' , loadData);
btnCustomers.addEventListener('click' , loadCustomersData);

function loadData() {
    const xhr = new XMLHttpRequest();

    console.log('started');
    xhr.open('GET' , 'customer.json');
    console.log('end of open()');
    xhr.onload = function() {
        if(this.status === 200){
            
            const customer = document.getElementById('customer');
            const userInfo = JSON.parse(this.responseText);
            const output = `
                <ul class="list-group">
                    <li class="list-group-item my-1">${userInfo.id}</li>
                    <li class="list-group-item my-1">${userInfo.name}</li>
                    <li class="list-group-item my-1">${userInfo.company}</li>
                    <li class="list-group-item my-1">${userInfo.phone}</li>
                    
                </ul>
            `
            customer.innerHTML = output;
            
        }
    };
    console.log('end of onload()');

    xhr.send();
    console.log('end of send');
    
}

function loadCustomersData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'customers.json' , true);

    xhr.onload = function() {
        const customers = document.getElementById('customers');
        const data = JSON.parse(this.responseText);
        const ul = document.createElement('ul');
        ul.className = 'list-group';
        data.forEach(function (item) {
            ul.innerHTML += `
            <li class="list-group-item">${item.id}</li>
            <li class="list-group-item">${item.name}</li>
            <li class="list-group-item">${item.company}</li>
            <li class="list-group-item">${item.phone}</li>
            `
        });
        customers.appendChild(ul);
    };

    xhr.send();
}

