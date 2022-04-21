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
                            '89891112233']  
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








 
const compare_fn1 = (a, b) => a.price_retail - b.price_retail
const compare_fn2 = (a, b) => b.price_retail - a.price_retail

const fn = (e) => {

    const tr_nodes = document.querySelectorAll("#table tr")
    const [first, ...rows] = tr_nodes     

    const values_of_sort = {but_name_top: "but_name_top", but_name_bottom: "but_name_bottom", but_price_retail_top: "but_price_retail_top", but_price_retail_bottom: "but_price_retail_bottom", but_price_wholesale_top: "but_price_wholesale_top", but_price_wholesale_bottom: "but_price_wholesale_bottom"} 
    switch (e.target.id) {
        // case values_of_sort.but_name_top:
        //     console.log("1")
        //     // data = data.sort(sorting)
        //     // build_table(data)
        // break;
        // case values_of_sort.but_name_bottom:
        //     console.log("2")
        //     // data = data.sort().reverse()
        //     // build_table(data)
        // break;
        case values_of_sort.but_price_retail_top:
            rows.forEach(el=>el.remove())
            build_table(data.sort(compare_fn1))
        break;
        case values_of_sort.but_price_retail_bottom:
            rows.forEach(el=>el.remove())
            build_table(data.sort(compare_fn2))
        break;
        // case values_of_sort.but_price_wholesale_top:
        //     console.log("5")
        //     new_rows.sort(compare_fn)
        //     build_table(new_rows)
        // break;
        // case values_of_sort.but_price_wholesale_bottom:
        //     console.log("6")
        //     new_rows.sort(compare_fn)
        //     build_table(new_rows)
        // break;
    }
}

const buttons_to_sort = document.querySelectorAll(".sort")
buttons_to_sort.forEach(but => but.addEventListener("click", fn))

buttons_to_sort.forEach(but=>{
    if (but.id.match(/.*(top)/)) but.innerHTML = '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="11" x2="6" y2="0" stroke="black"/><line x1="0" y1="5" x2="6" y2="0" stroke="black"/><line x1="11" y1="5" x2="6" y2="0" stroke="black"/></svg>'
    if (but.id.match(/.*(bottom)/)) but.innerHTML = '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="11" x2="6" y2="0" stroke="black"/><line x1="0" y1="6" x2="6" y2="11" stroke="black"/><line x1="11" y1="6" x2="6" y2="11" stroke="black"/></svg>'
})
