$(function($) { 

    if(window.matchMedia("(max-width: 400px)").matches){
        $('.mainvidual').bgSwitcher(stop);
    }else{
        $('.mainvidual').bgSwitcher({
        images: ['../images/pc_mockup.png','../images/pc_mockup_selected.png'],
        interval: 5000,
        loop: false,
        });
    }
});

