
    function handleClick() {
        a = document.getElementById('textinput').value 
        console.log(a)
        b = document.getElementById('list')
        item = document.createElement('p')
        item.innerText = a
        b.appendChild(item)
        console.log(b)
    }

    // add items - have borders
    // delete items or draw line through item
    // change background
    // change text color... basic styling
    // how listeners work

