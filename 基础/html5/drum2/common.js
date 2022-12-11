//方式二:data-key
function playSound(event){
    let keyCode = event.keyCode;
    const audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    //console.log(audio);
    if(audio) audio.play();
    const key = document.querySelector('.key[data-key="'+keyCode+'"]');
    //console.log(key);
    if(key) key.classList.add('playing');  
    // setTimeout(function(){
    //     key.classList.remove('playing');
    // },500)  
}
window.addEventListener('keydown',playSound);

const keys = document.querySelectorAll('.key');
for (const key of keys) {
    //event一个个加
    key.addEventListener('transitionend',function(event){
        event.target.classList.remove('playing')
    })
}