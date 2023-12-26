var myElements= Array.from(document.querySelectorAll('.item img')) ;
var lightboxcontainer= document.getElementById('lightboxcontainer');
var currentSlisdeIndex=0;
var closeBtn= document.getElementById('closeBtn');
for(var i=0; i<myElements.length; i++)
{
    myElements[i].addEventListener('click', function(eventInfo){
        lightboxcontainer.style.display="flex";
        currentSlisdeIndex=myElements.indexOf(eventInfo.target);
        console.log(currentSlisdeIndex);
        var imgSrc= eventInfo.target.getAttribute('src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    }) 
}

    function nextSlide() {
        currentSlisdeIndex++;
        console.log(currentSlisdeIndex);
        if(currentSlisdeIndex== myElements.length)
        {
            currentSlisdeIndex=0;
        }
        var imgSrc= myElements[currentSlisdeIndex].getAttribute('Src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    } 
     
    function previousSlide() {
        currentSlisdeIndex--;
        console.log(currentSlisdeIndex);
        if(currentSlisdeIndex< 0)
        {
            currentSlisdeIndex=myElements.length-1;
        }
        var imgSrc= myElements[currentSlisdeIndex].getAttribute('Src');
        lightboxcontainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
    } 

     document.getElementById("closeBtn").addEventListener( 'click' ,
     function(){
        lightboxcontainer.style.display="none";
     })
    
    closeBtn.nextElementSibling.addEventListener('click', nextSlide)
    closeBtn.previousElementSibling.addEventListener('click',previousSlide )
    


    
    
        