const list = document.querySelector('.middle ul');

list.addEventListener('click',function(e){
    if(e.target.className = 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


//add books

const addForm = document.forms['addbook'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    
    //creating elements
    
    const li = document.createElement('li');
    const bookname = document.createElement('span');
    const btn = document.createElement('span');
    
    btn.textContent = 'Delete' ;
    bookname.textContent = value;
    
    btn.className = "delete" ;
    bookname.className = "name" ;
    li.className = "listyle" ;
    
    
    li.appendChild(bookname);
    li.appendChild(btn);
    list.appendChild(li);
    
    })


    //hide books

 const hidebox = document.querySelector('#hide');
  hidebox.addEventListener('change',function(e){
      if(hidebox.checked){
          list.style.display = "none" ;
      }
      else{
          list.style.display = "block" ;
      }
  })

 //search filter

const searchbar = document.forms['search-books'].querySelector('input');
searchbar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    var arr = Array.from(books);
    for(i=0;i<arr.length;i++)
   {
       const title = arr[i].firstElementChild.textContent ;
       if(title.toLowerCase().indexOf(term) != -1){
           books[i].style.display = "block";
       }
       else{              
        books[i].style.display = "none";
       }
   }
})


