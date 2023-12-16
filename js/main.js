
// navbar-toggler
var menuButton = document.getElementById("navbar-btn")
var menuButtonClose = document.getElementById("navbar-btn-close")
var menuButtonIcon = document.getElementById("navbar-btn-icon")
var navbarMenu = document.getElementById("navbar-list")
var toggle = false;
menuButton.addEventListener("click",function() {
    if(toggle==false){
        menuButtonIcon.innerHTML='close'
        navbarMenu.className='z-[999] flex flex-col lg:flex-row items-center lg:pb-0 pb-18 absolute lg:static bg-gradient-to-t from-[#eee] via-[#efeeee] to-[#eee] lg:bg-gradient-to-t lg:from-[#0000] lg:z-auto z-[-1] w-full lg:w-auto lg:p-0 px-16 pt-8 pb-8 transition-all duration-500 ease-out top-0  right-0 gap-2 lg:gap-8 '
    }else{
        menuButtonIcon.innerHTML='menu'
        navbarMenu.className='z-[999] flex flex-col lg:flex-row items-center lg:pb-0 pb-18 absolute lg:static bg-[#00000000] lg:z-auto z-[-1] w-full lg:w-auto lg:p-0 px-16 pt-8 pb-8 transition-all duration-500 ease-out top-[-1920px] right-0 gap-2 lg:gap-8 '
    }
    toggle=!toggle;
});
menuButtonClose.addEventListener("click",function() {
    if(toggle==false){
        menuButtonIcon.innerHTML='close'
        navbarMenu.className='z-[999] flex flex-col lg:flex-row items-center lg:pb-0 pb-18 absolute lg:static bg-gradient-to-t from-[#eee] via-[#efeeee] to-[#eee] lg:bg-gradient-to-t lg:from-[#0000] lg:z-auto z-[-1] w-full lg:w-auto lg:p-0 px-16 pt-8 pb-8 transition-all duration-500 ease-out top-0  right-0 gap-2 lg:gap-8 '
    }else{
        menuButtonIcon.innerHTML='menu'
        navbarMenu.className='z-[999] flex flex-col lg:flex-row items-center lg:pb-0 pb-18 absolute lg:static bg-[#00000000] lg:z-auto z-[-1] w-full lg:w-auto lg:p-0 px-16 pt-8 pb-8 transition-all duration-500 ease-out  top-[-1920px] right-0 gap-2 lg:gap-8 '
    }
    toggle=!toggle;
});
