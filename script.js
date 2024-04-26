const x = document.querySelectorAll('.nextprev-btn');
const y = document.querySelectorAll('.nextprev-back-btn');
const pageTurnBtns = [...x, ...y];

pageTurnBtns.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        
            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex=20+index;
                },500);
            } 
            else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex=20-index;
                },500);
            }
       
    };
});

const p1=document.querySelectorAll('.book-page.page-right');
const pages=Array.from(p1).reverse();
// console.log(pages);

const ContactMe=document.getElementById('ContactMe');
ContactMe.onclick=()=>{
    pages.forEach((page,index)=>
    {
     setTimeout(() => {
        page.classList.add('turn');
        setTimeout(() => {
            page.style.zIndex=20+index;
        },500);
     }, (index+1)*300+100);
    }
)
};


const Profile=document.getElementById('Profile');
Profile.onclick=()=>{
    p1.forEach((page,index)=>
    {
     setTimeout(() => {
        page.classList.remove('turn');
        setTimeout(() => {
            page.style.zIndex=20+index;
        },500);
     }, (index+1)*300+100);
    }
)
};