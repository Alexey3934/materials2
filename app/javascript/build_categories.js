import $ from "jQuery"
const category_name = document.querySelector("#category_name")

const build_catalog = (first_level_elements, second_level_elements, third_level_elements, target_element = null, ) => {
    const div_catalog_for_materials = document.querySelector(".categories_for_materials")

    const build_button_add = (current_level) => {
        const div = document.createElement("div")
        div.classList.add(`${current_level}`)
        if (!category_name) div.classList.add("none")
        
        const button = document.createElement("button")
        button.innerHTML= "Добавить категорию"
        button.classList.add("add_category")

        const input = document.createElement("input")
        input.classList.add("add_category")
        input.classList.add("none")
        input.classList.add("to_block")
        input.id = current_level

        button.addEventListener('click', ()=> {
            $(".to_block").addClass('none')    
             $(`#${current_level}`).removeClass('none')
             $(`#${current_level}`).val('')
        })

        input.addEventListener('keyup', ()=>{
            $("#category_name").val($(`#${current_level}`).val())
            const first_element_name = div_catalog_for_materials.childNodes[0].innerHTML
            const second_element_name = div_catalog_for_materials.childNodes[1].innerHTML

            $("#hidden_input1").val(first_element_name)
            $("#hidden_input3").val(second_element_name)
            
            $("#hidden_input2").val(`${current_level}`)
        })
        div.appendChild(button)
        div.appendChild(input)
        return div      
    }
    
    const clicked_first_level = (target_name) => {
        $("#category_name").val(target_name)
        let target_element = {}
        first_level_elements.forEach((el)=>{if (el.name == target_name) target_element = el})

        first_level_elements.forEach(el=>{
            if (el.name != target_element.name){
                const p1 = document.createElement("p")
                p1.innerHTML = el.name
                p1.classList.add("level1", "border", "underline", "hover")
                div_catalog_for_materials.appendChild(p1)
            } else if (el.name == target_element.name) {
                const p1_active = document.createElement('p')
                p1_active.classList.add("level1", "bold", "border", "underline")
                p1_active.innerHTML = target_element.name
                div_catalog_for_materials.appendChild(p1_active)

                second_level_elements.forEach(el=>{
                    if (el.parent_id == target_element.id) {
                        const el_level2 = document.createElement("p")
                        el_level2.innerHTML = el.name
                        el_level2.classList.add("level2", "border", "underline", "hover")
                        div_catalog_for_materials.appendChild(el_level2)
                    }
                })
                div_catalog_for_materials.appendChild(build_button_add('level2'))
            }
        })
        div_catalog_for_materials.appendChild(build_button_add('level1'))
    }
    
    const clicked_second_level = (target_name) => {
        $("#category_name").val(target_name)
        let target_element = {}
        second_level_elements.forEach((el)=>{if (el.name == target_name) target_element = el})



        first_level_elements.forEach(el=>{
            if (el.id != target_element.parent_id){
                const p1 = document.createElement("p")
                p1.innerHTML = el.name
                p1.classList.add("level1", "border", "underline", "hover")
                div_catalog_for_materials.appendChild(p1)
            } else if (el.id == target_element.parent_id) {
                const p1_active = document.createElement('p')
                p1_active.classList.add("level1", "border", "underline", "hover")
                p1_active.innerHTML = el.name
                div_catalog_for_materials.appendChild(p1_active)

                second_level_elements.forEach(el=>{
                    if ((el.id != target_element.id) && (el.parent_id == target_element.parent_id))  {
                        const p2 = document.createElement("p")
                        p2.innerHTML = el.name
                        p2.classList.add("level2", "border", "underline", "hover")
                        div_catalog_for_materials.appendChild(p2)
                    } else if ((el.id == target_element.id) && (el.parent_id == target_element.parent_id)) {
                        const p2 = document.createElement("p")
                        p2.innerHTML = el.name
                        p2.classList.add("level2", "border", "underline", "bold")
                        div_catalog_for_materials.appendChild(p2)
                    
                        third_level_elements.forEach(el=>{
                            if (target_element.id == el.parent_id) {
                                const elP = document.createElement("p")
                                elP.classList.add("level3", "border", "underline", "hover")
                                elP.innerHTML = el.name
                                div_catalog_for_materials.appendChild(elP)
                            }
                        })
                        div_catalog_for_materials.appendChild(build_button_add('level3'))
                    }
                })
                div_catalog_for_materials.appendChild(build_button_add('level2'))
            }
        })
        div_catalog_for_materials.appendChild(build_button_add('level1'))
    }
    
    const clicked_third_level = (target_name) => {
        $("#category_name").val(target_name)
        let target_element = {}
        third_level_elements.forEach((el)=>{if (el.name == target_name) target_element = el})




        let active_element_level1_id = 0
        second_level_elements.forEach(el=>{
            if (target_element.parent_id == el.id) active_element_level1_id = el.parent_id
        })

        first_level_elements.forEach(el=>{
            if (el.id != active_element_level1_id){
                const p1 = document.createElement("p")
                p1.innerHTML = el.name
                p1.classList.add("level1", "border", "underline", "hover")
                div_catalog_for_materials.appendChild(p1)
            } else if (el.id == active_element_level1_id) {
                const p1_active = document.createElement('p')
                p1_active.classList.add("level1", "border", "underline", "hover")
                p1_active.innerHTML = el.name
                div_catalog_for_materials.appendChild(p1_active)

                second_level_elements.forEach(el=>{
                    if (el.id != target_element.parent_id) {
                        const p2 = document.createElement("p")
                        p2.innerHTML = el.name
                        p2.classList.add("level2", "border", "underline", "hover")
                        div_catalog_for_materials.appendChild(p2)
                    } else if (el.id == target_element.parent_id) {
                        const p2 = document.createElement("p")
                        p2.innerHTML = el.name
                        p2.classList.add("level2", "border", "underline", "hover")
                        div_catalog_for_materials.appendChild(p2)
                    
                        third_level_elements.forEach(el=>{
                            if (target_element.id != el.id) {
                                const elP = document.createElement("p")
                                elP.classList.add("level3", "border", "underline", "hover")
                                elP.innerHTML = el.name
                                div_catalog_for_materials.appendChild(elP)
                            } else if ((target_element.id == el.id)) {
                                const elP = document.createElement("p")
                                elP.classList.add("level3", "border", "underline", "bold")
                                elP.innerHTML = el.name
                                div_catalog_for_materials.appendChild(elP)
                            }
                        })
                        div_catalog_for_materials.appendChild(build_button_add('level3'))
                    }
                })
                div_catalog_for_materials.appendChild(build_button_add('level2'))
            }
        })
        div_catalog_for_materials.appendChild(build_button_add('level1'))
    }
    
 
 
    if (target_element == null){
////////////////////////////////////////////////////////////
//////////// первичный список при открытии страницы
        $("#hidden_input1").val("nil")
        first_level_elements.forEach(element => {
            const pEL = document.createElement("p")
            pEL.innerHTML = element.name
            pEL.classList.add("level1" ,"border", "underline", "hover")
            div_catalog_for_materials.appendChild(pEL)
        });

        div_catalog_for_materials.appendChild(build_button_add("level1"))
    } else {
// удаление предидущего каталога
        while (div_catalog_for_materials.firstChild) div_catalog_for_materials.removeChild(div_catalog_for_materials.firstChild);
 
        let target_name = target_element.name
        if ( sessionStorage.clicked_button_with_category == 'true') {
            sessionStorage.clicked_button_with_category = 'false'
            target_name = sessionStorage.current_category
        } 

// определении кликнутого элемента в        
        first_level_elements.forEach(el => {
            if (el.name == target_name) clicked_first_level(target_name)
        })
        second_level_elements.forEach(el => {
            if (el.name == target_name) clicked_second_level(target_name)            
        })
        third_level_elements.forEach(el =>  {
            if (el.name == target_name) clicked_third_level(target_name)  
        })
    }
}


export {build_catalog}