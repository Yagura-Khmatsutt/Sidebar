let menuToggle = document.querySelector('.toggle');
let navegacao = document.querySelector('.navegacao')
menuToggle.onclick = function(){
   menuToggle.classList.toggle('active');
   navegacao.classList.toggle('active');
}
 
let list = document.querySelectorAll('.list');
 for (let i =0; i<list.length; i++){
  list[i].onclick = function(){
 let j = 0;
 while(j < list.length){
  list[j++].className = 'list';
 }
list[i].className = 'list active';
  }
}