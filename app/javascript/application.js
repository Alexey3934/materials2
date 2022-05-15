// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
import "controllers"
////////////////////////////////////
import {build_catalog} from "./build_categories"
import {build_table}   from "./build_table"

import $ from "jQuery"



////////////////////////////////////
/////// получение данных

async function get_data() {
    const response_categories   = await fetch('/qqq/get_categories');
    const categories            = await response_categories.json()  
    return categories
}
const data = await get_data()
const [first_level_elements, second_level_elements, third_level_elements, categories] = data
//////////////////
////////////////////////////////////




// .replace(/\s+/g, '');

///////////////////////////////////
////////// каталог
let target_element = {}
let clicked_level = ''


$(".categories_for_materials").on('click', (el)=>{
    const target_name = el.target.innerHTML
   
    
    if ((target_name.length < 100) && (!el.target.classList.contains('add_category'))) {
/////////////////////////////////////////////////////////////////////////////////////////////////     
        sessionStorage.current_category = el.target.innerHTML
//  определение кликнутого элемента и его уровня 
        
        first_level_elements.forEach(el=> {
            if (el.name == target_name) {
                target_element = el
                clicked_level = 'level1'
            }
        })

        second_level_elements.forEach(el=> {
            if (el.name == target_name) {
                target_element = el
                clicked_level = 'level2'
            }
        })

        third_level_elements.forEach(el=> {
            if (el.name == target_name) {
                target_element = el
                clicked_level = 'level3'
            }
        })


/////////////////////////////////////////////////////////////////////////
        const id_s1 = []
        const id_s2 = []
        const id_s3 = []
        const not_id_s = []

        if (clicked_level == 'level1') {
            id_s1.push(target_element.id)
        
            second_level_elements.forEach(el=>{
                if (el.parent_id == target_element.id) id_s2.push(el.id)
            })
        
            third_level_elements.forEach(el=>{
                if (id_s2.includes(el.parent_id)) id_s3.push(el.id)
            })
        }

        if (clicked_level == 'level2') {
            id_s2.push(target_element.id)

            third_level_elements.forEach(el=>{
                if (el.parent_id == target_element.id) id_s3.push(el.id)
            })
        }

        if (clicked_level == "level3") {
            id_s3.push(target_element.id)
        }

        const sum_id_s = id_s1.concat(id_s2, id_s3)
        categories.forEach(el=> {
            if (!sum_id_s.includes(el.id))  not_id_s.push(el.id)
        })
///////////////////////////////////////////

        build_catalog(first_level_elements, second_level_elements, third_level_elements, target_element)
        build_table(not_id_s)
    }
}) 

if (sessionStorage.clicked_button_with_category == "true") {
    build_catalog(first_level_elements, second_level_elements, third_level_elements, sessionStorage.current_category)
} else {
    build_catalog(first_level_elements, second_level_elements, third_level_elements)
}

build_table()

$("#logo").on('click', ()=> window.location.href = "/")
$("#title_caterory").on('click', ()=> window.location.href = "/")
$("#add_material2").on('click', ()=> {
    window.location.href = '/materials/new'
    sessionStorage.clicked_button_with_category = "true"
})


