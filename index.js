let addToDo = document.getElementById('click')
let toDoCont = document.getElementById('todos')
let input = document.getElementById('txt')

let don = document.getElementsByClassName('done');
let dele = document.getElementsByClassName('delete');

addToDo.addEventListener('click', function(){
    if (input.value != ""){
        var para = document.createElement('p');
        var done = document.createElement('button');
        var del = document.createElement('button');
        var con = document.createElement('div');
        con.classList.add('todobtns');
        done.innerText = "✓";
        del.innerText = "✖";
        done.classList.add('done');
        del.classList.add('delete');
        para.innerText = input.value;
        para.classList.add('textstodo');
        con.appendChild(para);
        con.appendChild(done);
        con.appendChild(del);
        toDoCont.insertBefore(con, toDoCont.firstChild);
        input.value = "";
        done.addEventListener('click', function(){
            if(para.style.textDecoration === "line-through"){
                para.style.textDecoration = "none";
                para.style.opacity = "100%";
            } else{
                para.style.textDecoration = "line-through";
                para.style.opacity = "50%";
            }
        
        })
        del.addEventListener('click', function(){
            toDoCont.removeChild(con);
        })
    } else {
        window.alert("Please enter a todo");
    }
    
})
