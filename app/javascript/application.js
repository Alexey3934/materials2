// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function get_data() {
    const response = await fetch('/qqq');
    const data     = await response.json()  
    return data
}
let data = await get_data()

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

const sorting = (raw_data, sort_value) => {
    new_data = []
    // if (sort_value instanceof Number)
}

const fn = (sort_value) => {
    console.log('1')
    const values_of_sort = {but_name_top: "but_name_top", but_name_bottom: "but_name_bottom", but_price_retail_top: "but_price_retail_top", but_price_retail_bottom: "but_price_retail_bottom", but_price_wholesale_top: "but_price_wholesale_top", but_price_wholesale_bottom: "but_price_wholesale_bottom"}
    switch (sort_value) {
        case values_of_sort.but_name_top:
            console.log('1')
            data = data.sort()
            build_table(data)
        break;
        case values_of_sort.but_name_bottom:
            console.log('2')
            data = data.sort().reverse()
            build_table(data)
        break;
        // case values_of_sort.but_price_retail_top:
        //     data = sorting(data, values_of_sort.but_price_retail_top)
        // break;
        // case values_of_sort.but_price_retail_bottom:
        //     data = sorting(data, values_of_sort.but_price_retail_bottom)
        // break;
    }
}

const but_name_top               = document.querySelector("#but_name_top")
const but_name_bottom            = document.querySelector("#but_name_bottom")
const but_price_retail_top       = document.querySelector("#but_price_retail_top")
const but_price_retail_bottom    = document.querySelector("#but_price_retail_bottom")
const but_price_wholesale_top    = document.querySelector("#but_price_wholesale_top")
const but_price_wholesale_bottom = document.querySelector("#but_price_wholesale_bottom")

but_name_top.addEventListener("click", fn("but_name_top"))
but_name_bottom.addEventListener("click", fn("but_name_bottom"))
but_price_retail_top.addEventListener("click", fn("but_price_retail_top"))
but_price_retail_bottom.addEventListener("click", fn("but_price_retail_bottom"))
but_price_wholesale_top.addEventListener("click", fn("but_price_wholesale_top"))
but_price_wholesale_bottom.addEventListener("click", fn("but_price_wholesale_bottom"))








// build_table(sorted_data)

