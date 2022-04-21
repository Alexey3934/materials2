// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function get_data() {
    const response = await fetch('/qqq');
    const data     = await response.json()  
    return data
}
let data = await get_data()
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
            console.log("3")
            rows.forEach(el=>el.remove())
            build_table(data.sort(compare_fn1))
        break;
        case values_of_sort.but_price_retail_bottom:
            console.log("4")
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



// const but_name_top               = document.querySelector("#but_name_top")
// const but_name_bottom            = document.querySelector("#but_name_bottom")
// const but_price_retail_top       = document.querySelector("#but_price_retail_top")
// const but_price_retail_bottom    = document.querySelector("#but_price_retail_bottom")
// const but_price_wholesale_top    = document.querySelector("#but_price_wholesale_top")
// const but_price_wholesale_bottom = document.querySelector("#but_price_wholesale_bottom")

// but_name_top.addEventListener("click", fn)
// but_name_bottom.addEventListener("click", fn)
// but_price_retail_top.addEventListener("click", fn)
// but_price_retail_bottom.addEventListener("click", fn)
// but_price_wholesale_top.addEventListener("click", fn)
// but_price_wholesale_bottom.addEventListener("click", fn)









// const test = [1, 4, 6, 9, 5, 4, 3]

// function comp(a, b) {
//     return a - b 
// }


// console.log(` test = ${test.sort(comp)}`)