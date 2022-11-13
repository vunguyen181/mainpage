/*---- AUDIO ----*/
var mySong = document.querySelector('.my-song');
var musicButton = document.querySelector('.audio-button');
var textMusicCursor = document.querySelector('.text-music-cursor');
var audioButton = document.querySelector('.audio-button');

musicButton.addEventListener('click',function(){
    if(mySong.paused){
        mySong.play();
        textMusicCursor.innerText = 'turn off';
        audioButton.classList.add('color-active');
    }else{
        mySong.pause();
        textMusicCursor.innerText = 'turn on';
        audioButton.classList.remove('color-active');
    }
});

musicButton.addEventListener('mouseover',function(){
    innerCursor.classList.add('width-height-scale-up');
    outerCursor.classList.add('border-scale-up');
    if(mySong.paused){
        textMusicCursor.innerText = 'turn on';
    }else{
        textMusicCursor.innerText = 'turn off';
    };
});

musicButton.addEventListener('mouseleave',function(){
    innerCursor.classList.remove('width-height-scale-up');
    outerCursor.classList.remove('border-scale-up');
    textMusicCursor.innerText = '';
});

//loop music
mySong.addEventListener('ended',function(){
    this.currentTime = 0;
    this.play();
}, false);
/*---- END OF AUDIO ----*/


/*--- PRELOADER ---*/
var preLoader = document.querySelector('.pre-loader');
window.addEventListener('load',function(){
    this.setTimeout(function(){
        preLoader.style.display = 'none';
    },3000)
})
/*--- END OF PRELOADER ---*/


/*---- CURSOR ----*/
var innerCursor = document.querySelector('.inner-cursor');
var outerCursor = document.querySelector('.outer-cursor');
var textDesignCursor = document.querySelector('.text-design-cursor');
var textDeveloperCursor = document.querySelector('.text-developer-cursor');


document.addEventListener('mousemove', function(event){
    var x = event.clientX;
    var y = event.clientY;
    
    innerCursor.style.left = x + 'px';
    innerCursor.style.top = y + 'px';
    
    outerCursor.style.left = x + 'px';
    outerCursor.style.top = y + 'px';
    
    textDesignCursor.style.left = x + 140 + 'px';
    textDesignCursor.style.top = y + 'px';
    
    textDeveloperCursor.style.left = x - 140 + 'px';
    textDeveloperCursor.style.top = y + 'px';
    
    textMusicCursor.style.left = x + 'px';
    textMusicCursor.style.top = y + 50 + 'px';
});

function addCursorScaleUpEffect(){
    innerCursor.classList.add('width-height-scale-up');
    outerCursor.classList.add('border-scale-up');
}
function removeCursorScaleUpEffect(){
    innerCursor.classList.remove('width-height-scale-up');
    outerCursor.classList.remove('border-scale-up');
}

var designText = document.querySelector('.design-text');
designText.addEventListener('mouseover', function(){
    innerCursor.classList.add('left-active');
    outerCursor.classList.add('green-active');
    textDesignCursor.innerText = 'see my private projects';
});
designText.addEventListener('mouseleave', function(){
    innerCursor.classList.remove('left-active');
    outerCursor.classList.remove('green-active');
    textDesignCursor.innerText = '';
});


var developerText = document.querySelector('.developer-text');
developerText.addEventListener('mouseover', function(){
    innerCursor.classList.add('right-active');
    outerCursor.classList.add('green-active');
    textDeveloperCursor.innerText = 'see my private projects';
});
developerText.addEventListener('mouseleave', function(){
    innerCursor.classList.remove('right-active');
    outerCursor.classList.remove('green-active');
    textDeveloperCursor.innerText = '';
});


var cloud = document.querySelector('.cloud');
cloud.addEventListener('mouseover',function(){
    addCursorScaleUpEffect();
})
cloud.addEventListener('mouseleave',function(){
    removeCursorScaleUpEffect();
})
/*---- END OF CURSOR ----*/


/*---- SPACESHIP PARALLAX ----*/
var spaceShip = document.querySelector('.spaceship-img');

//----input setup
var input = {
    mouseX:{
        start:0,
        end:window.innerWidth,
        current:0
    },
    mouseY:{
        start:0,
        end:window.innerHeight,
        current:0
    }
}

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//----output setup
var output = {
    X:{
        start:-18,
        end:18,
        current:0
    },
    Y:{
        start:-18,
        end:18,
        current:0
    }
}

output.X.range = output.X.end - output.X.start;
output.Y.range = output.Y.end - output.Y.start;

var handleMouseMove = function(event){
    /* mouseX input */
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    
    /* mouseY input*/
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    output.X.current = output.X.end - (input.mouseX.fraction * output.X.range);
    output.X.opposite = output.X.start + (input.mouseX.fraction * output.X.range);

    output.Y.current = output.Y.end - (input.mouseY.fraction * output.Y.range);
    output.Y.opposite = output.Y.start + (input.mouseY.fraction * output.Y.range);


    spaceShip.style.transform = 'translate(' + output.X.opposite + 'px,' + output.Y.opposite + 'px)'
}

window.addEventListener('mousemove', handleMouseMove);
/*---- END OF SPACESHIP PARALLAX ----*/


/* DESIGNING PROJECTS */

// appear and disappear
var allItemsArray = document.querySelectorAll('.item');
var homepageButton = document.querySelector('.homepage-button');
var imageCollection = document.querySelector('.image-collection');
var myResume = document.querySelector('.my-resume');
var greenshopProject = document.querySelector('.greenshop-project');

designText.addEventListener('click',function(){
    allItemsArray.forEach(function(singleItem){
        setTimeout(function(){
            singleItem.classList.add('push-down-active');
            myResume.classList.add('push-up-active');
        },1100);

        setTimeout(function(){
            imageCollection.classList.add('appear'); // for desktop
            imageCollection.classList.add('show'); // for mobile
        },2000);
        
        developerText.classList.remove('hide');
        designText.classList.add('hide');
        greenshopProject.classList.remove('appear'); 
        greenshopProject.classList.remove('show');
    })
    greenshopProject.classList.remove('appear');
});

homepageButton.addEventListener('click',function(){
    allItemsArray.forEach(function(singleItem){
        setTimeout(function(){
            singleItem.classList.remove('push-down-active');
            myResume.classList.remove('push-up-active');
        },1400);
        imageCollection.classList.remove('appear'); // for desktop
        imageCollection.classList.remove('show'); // for mobile
        designText.classList.remove('hide');
        developerText.classList.remove('hide');
        greenshopProject.classList.remove('appear'); 
        greenshopProject.classList.remove('show');
    })
});

// gallery close and open
var closeBtn = document.querySelector('.close');
var gallery = document.querySelector('.gallery');
var images = document.querySelectorAll('.gallery-image img');
var galleryImg = document.querySelector('.gallery__inner img');

function showGallery () {
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach(function(image,index){
    image.onclick = function(){    
    currentIndex = index;
    showGallery();
    }
})

// for mouse
closeBtn.onclick = function(){
    gallery.classList.remove('show');
}

gallery.onclick = function(e){
    if(e.target === e.currentTarget){
        gallery.classList.remove('show');
    }
}

// for keyboard
document.onkeydown = function(e){
    if(e.which == 27){
        gallery.classList.remove('show');
    }
}

// cursor effect
var galleryImagesArray = document.querySelectorAll('.i');
galleryImagesArray.forEach(function(galleryImage){
    galleryImage.addEventListener('mousemove',function(){
        addCursorScaleUpEffect();
        galleryImage.classList.add('shadow');
    })
    galleryImage.addEventListener('mouseleave',function(){
        removeCursorScaleUpEffect();
        galleryImage.classList.remove('shadow');
    })
})

/*--- END OF DESIGNING PROJECTS ---*/


/*---CODING PROJECTS ---*/
developerText.addEventListener('click',function(){
    allItemsArray.forEach(function(singleItem){
        singleItem.classList.add('push-down-active');
        myResume.classList.add('push-up-active');
        designText.classList.remove('hide');
        developerText.classList.add('hide');
    });
    imageCollection.classList.remove('appear'); // for desktop
    imageCollection.classList.remove('show'); // for mobile
    setTimeout(function(){
        greenshopProject.classList.add('appear'); // for desktop
        greenshopProject.classList.add('show'); // for mobile
    },1400);
});

greenshopProject.addEventListener('mousemove',function(){
    var greenshopPic = document.querySelector('.greenshop-pic');
    greenshopPic.classList.add('shadow');
    addCursorScaleUpEffect();
});
greenshopProject.addEventListener('mouseleave',function(){
    var greenshopPic = document.querySelector('.greenshop-pic');
    greenshopPic.classList.remove('shadow');
    removeCursorScaleUpEffect();
});
/*--- END OF CODING PROJECTS ---*/


/*--- DETECTING TOUCH SUPPORT ---*/
var isTouchSupported = "ontouchstart" in window || window.navigator.maxTouchPoints;
var customCursor = document.querySelector('.cursors');
var homepageFooter = document.querySelector('.homepage-footer');

if(isTouchSupported){
    homepageFooter.style.bottom = '80px';
    customCursor.style.display = 'none';
} else {
    customCursor.style.display = 'block';
}
/*--- END OF DETECTING TOUCH SUPPORT ---*/