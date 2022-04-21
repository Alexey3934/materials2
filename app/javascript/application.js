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

const compare_fn = (a, b) => a.but_price_retail_top - b.but_price_retail_top

const fn = (e) => {
    console.log("click")
    const new_data = data
    const button_id = e.target.id
    const values_of_sort = {but_name_top: "but_name_top", but_name_bottom: "but_name_bottom", but_price_retail_top: "but_price_retail_top", but_price_retail_bottom: "but_price_retail_bottom", but_price_wholesale_top: "but_price_wholesale_top", but_price_wholesale_bottom: "but_price_wholesale_bottom"}
    
    switch (button_id) {
        // case values_of_sort.but_name_top:
        //     data = data.sort(sorting)
        //     build_table(data)
        // break;
        // case values_of_sort.but_name_bottom:
        //     data = data.sort().reverse()
        //     build_table(data)
        // break;
        case values_of_sort.but_price_retail_top:
            console.log("1")
            // const new_data1 = new_data.sort(compare_fn)
            // console.log(new_data1[0].id)
            // build_table(data.sort(compare_fn))
            build_table(data.reverse())
            break;
        case values_of_sort.but_price_retail_bottom:
            console.log("2")

            // const new_data2 = new_data.sort(compare_fn).reverse()
            // console.log(new_data2[0].id)
            build_table(data.reverse())
        break;
    }
}

const but_name_top               = document.querySelector("#but_name_top")
const but_name_bottom            = document.querySelector("#but_name_bottom")
const but_price_retail_top       = document.querySelector("#but_price_retail_top")
const but_price_retail_bottom    = document.querySelector("#but_price_retail_bottom")
const but_price_wholesale_top    = document.querySelector("#but_price_wholesale_top")
const but_price_wholesale_bottom = document.querySelector("#but_price_wholesale_bottom")

// but_name_top.addEventListener("click", fn)
// but_name_bottom.addEventListener("click", fn)
// but_price_retail_top.addEventListener("click", fn)
// but_price_retail_bottom.addEventListener("click", fn)
// but_price_wholesale_top.addEventListener("click", fn)
// but_price_wholesale_bottom.addEventListener("click", fn)








build_table(data)

// const test = [1, 4, 6, 9, 5, 4, 3]

// function comp(a, b) {
//     return a - b 
// }


// console.log(` test = ${test.sort(comp)}`)