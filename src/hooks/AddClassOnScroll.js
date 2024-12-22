
const onScrollAnimation = ()=>{

    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('.header');
    
    const nav_items = document.querySelectorAll('#header-nav li a');
  


    const nav_height = nav.offsetHeight;
    let cur_pos = window.pageYOffset;

    sections.forEach((el)=>{
      let rect = el.getBoundingClientRect();
  

      let offset ={
        top:rect.top + window.pageYOffset,
        left:rect.left + window.pageXOffset
       
      };


      let top = offset.top  - nav_height;
      let bottom = top + el.offsetHeight;

      if (cur_pos >= top && cur_pos <= bottom){
        
        sections.forEach((section =>{

          nav_items.forEach(item =>{
            item.classList.add('text-white');
            let cur_sectionId = el.getAttribute('id');
           
            nav_items.forEach(item =>{
              if(item.textContent== cur_sectionId){
                item.classList.remove('text-white')
                item.classList.add('text-gold');
              }else{
              }
            })
          })
        }));

      }
    })
  }

  export default onScrollAnimation;