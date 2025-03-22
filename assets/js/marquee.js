document.addEventListener("DOMContentLoaded", (event) =>{
    
    let m4rquee = (selector, speed) => {
        const parentSelector = document.querySelector(selector);
        const list = parentSelector.children[0];

        let movement = 0;

        setInterval(() => {
            list.style.marginLeft = `-${movement}px`;

            if(movement > list.clientWidth){
                movement = 0;
            }
            movement = movement + speed;
        }, 0);
    }
    m4rquee(".marquee__container", 0.2);
});