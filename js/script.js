var nav=document.getElementById('he'),
    linksNav=document.getElementsByClassName('nav-link'),
    banner=document.getElementsByClassName('banner'),
    i;
window.onscroll=function()
{
    
    for(i=0;i<banner.length;i++)
    {
        if(scrollY > banner[i].offsetTop && scrollY < banner[i].offsetHeight + banner[i].offsetTop)
        {
            linksNav[i].classList.add('active1')
        }
        else{
            linksNav[i].classList.remove('active1')
        }
    }
  if(scrollY>=700){
    nav.classList.add('scroll_header');
    nav.classList.remove('area_header')
  }
  else{
    nav.classList.add('area_header');
    nav.classList.remove('scroll_header')
  }
}

