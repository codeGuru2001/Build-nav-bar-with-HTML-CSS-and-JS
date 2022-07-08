let innerDiv = document.getElementById('inner-div');
let sideBar = document.getElementById('side-bar');

sideBar.style.width='0vw';
innerDiv.style.display='none';

function displayNav(){
  if(sideBar.style.display== '0vw'){
    sideBar.style.display='20vw',
    setTimeout(function callInnerDiv(){
      innerDiv.style.display='block';
    },1100)
  }
  else(innerDiv.style.display='none',sideBar.style.width='0vw')
}
