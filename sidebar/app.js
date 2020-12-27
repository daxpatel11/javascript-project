const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener("click",toggle);
function toggle(){
    //console.log('toggle');
    sidebar.classList.toggle("show-sidebar");
}

closeBtn.addEventListener("click",close);

function close(){
    sidebar.classList.remove("show-sidebar");
}