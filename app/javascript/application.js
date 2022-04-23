// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function get_data() {
    const response = await fetch('/qqq');
    const data     = await response.json()  
    return data
}
const data = await get_data()
/////////////////////////////////////////////////////


const build_table = (data) => {    
    const table = document.querySelector('#table')
    for (const row of data) {
       const trEl = document.createElement('tr')
        const data_fields = [row.description,
                            row.unit,
                            row.price_retail,
                            row.price_wholesale,
                            row.amount_wholesale,
                            row.company,
                            row.phone]  
        for (const field of data_fields) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(field)
            cell.appendChild(cellText)
            cell.classList.add('td')
            trEl.appendChild(cell);
        }
        table.appendChild(trEl)
    }
}
build_table(data)



////////////////////////////////////////////
const click_but_name_top = (data_clone, rows) => {
    rows.forEach(el=>el.remove())
    data_clone.sort().reverse()
    build_table(data_clone)

    buttons_to_sort.forEach(but=>but.classList.remove("ban"))
    buttons_to_sort.forEach(but=>but.classList.remove("active"))

    button_name_top.classList.add("active")     
}
const click_but_name_bottom = (data_clone, rows) => {
    rows.forEach(el=>el.remove())
    data_clone.sort()
    build_table(data_clone)

    buttons_to_sort.forEach(but=>but.classList.remove("ban"))
    buttons_to_sort.forEach(but=>but.classList.remove("active"))

    button_name_bottom.classList.add("active")
}
const click_but_price_retail_top  = (data_clone, rows) => {
    if (!but_price_retail_bottom.classList.contains("ban")) {   
        rows.forEach(el=>el.remove())
        data_clone.sort().reverse()
        
//         const cur_arr = []

//         for (let i = 0; i > data_clone.length; i++ ) {
// // условия для одинаковых описаний
//             if (data_clone[i].description == data_clone[i+1].description) {
            
//             {

//                 cur_arr.push(data_clone[i])
//             } else {
//                 cur_arr.reverse()
//             }
//         }

        
        build_table(data_clone)

        but_price_retail_bottom.classList.remove("active")
        but_price_retail_top.classList.add("active")
        
        but_price_wholesale_top.classList.add("ban")
        but_price_wholesale_bottom.classList.add("ban")
    }
}
const click_but_price_retail_bottom  = (data_clone, rows) => {
    if (!but_price_retail_bottom.classList.contains("ban")) {    
        rows.forEach(el=>el.remove())
        data_clone.sort()
        
        
        build_table(data_clone)
        
        but_price_retail_top.classList.remove("active")
        but_price_retail_bottom.classList.add("active")

        but_price_wholesale_top.classList.add("ban")
        but_price_wholesale_bottom.classList.add("ban")

    }
}
const click_but_wholesale_top  = (data_clone, rows) => {
    if (!but_price_wholesale_bottom.classList.contains("ban")) {
        rows.forEach(el=>el.remove())
        data_clone.sort().reverse()
        
        
        build_table(data_clone)

        but_price_wholesale_bottom.classList.remove("active")
        but_price_wholesale_top.classList.add("active")

        but_price_retail_top.classList.add("ban")
        but_price_retail_bottom.classList.add("ban")
    }
}
const click_but_wholesale_bottom  = (data_clone, rows) => {
    if (!but_price_wholesale_bottom.classList.contains("ban")) {
        rows.forEach(el=>el.remove())
        data_clone.sort()
        
        
        build_table(data_clone)
       
        but_price_wholesale_top.classList.remove("active")
        but_price_wholesale_bottom.classList.add("active")
           
        but_price_retail_top.classList.add("ban")
        but_price_retail_bottom.classList.add("ban")
    }
}

///////////////////////////////////////////
const compare_fn_price_retail_top = (a, b) => b.price_retail - a.price_retail
const compare_fn_price_retail_bottom = (a, b) => a.price_retail - b.price_retail

const compare_fn_price_wholesale_top = (a, b) => b.price_wholesale - a.price_wholesale
const compare_fn_price_wholesale_bottom = (a, b) => a.price_wholesale - b.price_wholesale

/////////////// click
const fn = (e) => {
    const tr_nodes = document.querySelectorAll("#table tr")
    const [first, ...rows] = tr_nodes     

    const data_clone = JSON.parse(JSON.stringify(data));

    switch (e.target.id) {
        case button_name_top.id:
            click_but_name_top(data_clone, rows)
        break;
        case button_name_bottom.id:
            click_but_name_bottom(data_clone, rows)
        break;    
        case but_price_retail_top.id:   
            click_but_price_retail_top(data_clone, rows)       
        break;
        case but_price_retail_bottom.id:
            click_but_price_retail_bottom(data_clone, rows)
        break;
        case but_price_wholesale_top.id:
            click_but_wholesale_top(data_clone, rows)
        break;
        case but_price_wholesale_bottom.id:
            click_but_wholesale_bottom(data_clone, rows)
        break;
    }
}



const button_name_top            = document.querySelector("#but_name_top")
const button_name_bottom         = document.querySelector("#but_name_bottom")
const but_price_retail_top       = document.querySelector("#but_price_retail_top")
const but_price_retail_bottom    = document.querySelector("#but_price_retail_bottom")
const but_price_wholesale_top    = document.querySelector("#but_price_wholesale_top")
const but_price_wholesale_bottom = document.querySelector("#but_price_wholesale_bottom")
button_name_bottom.classList.add("active")


const buttons_to_sort            = document.querySelectorAll(".sort")
buttons_to_sort.forEach(but => but.addEventListener("click", fn))
// добавление на кнопки картинок
buttons_to_sort.forEach(but=>{
    if (but.id.match(/.*(top)/)) but.innerHTML = '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="11" x2="6" y2="0" stroke="black"/><line x1="0" y1="5" x2="6" y2="0" stroke="black"/><line x1="11" y1="5" x2="6" y2="0" stroke="black"/></svg>'
    if (but.id.match(/.*(bottom)/)) but.innerHTML = '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="11" x2="6" y2="0" stroke="black"/><line x1="0" y1="6" x2="6" y2="11" stroke="black"/><line x1="11" y1="6" x2="6" y2="11" stroke="black"/></svg>'
})


