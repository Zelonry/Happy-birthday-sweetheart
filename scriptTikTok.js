var videosBlock = document.querySelector('.videosBlock')
var VideoInTikTok = document.querySelector('.VideoInTikTok')
var news = document.querySelector('.news')


IMG = videosBlock.style.backgroundImage
VID = VideoInTikTok.src

setTimeout(function() {
    news.classList.add('newsOpas0');
}, 400)




var packs = 1
var imger = 1
videosBlock.addEventListener('click', function() {
    console.log('packs', packs)
    console.log('imager', imger)
    if (packs == 1) {
        videosBlock.style.backgroundImage = 'url(img/TikTok/1/photo_192@17-09-2024_13-20-56.jpg)'
        packs = 2
    }
    else if (packs == 2) {
        news.classList.remove('newsOpas0')

        videosBlock.style.backgroundImage = 'url(img/TikTok/2/photo_101@16-09-2024_10-20-43.jpg)'
        packs = 3
        
        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)
    }
    else if (packs == 3) {
        news.classList.remove('newsOpas0')

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/3/IMG_9091.MP4'
        packs = 4

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)
    } else if (packs == 4) {
        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/4/photo_10@13-09-2024_14-47-07.jpg)'
            VideoInTikTok.src = ''
            imger = 2

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/4/photo_11@13-09-2024_14-47-07.jpg)'
            imger = 3
        } else if (imger == 3) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/4/photo_12@13-09-2024_14-47-07.jpg)'
            imger = 4
        } else if (imger == 4) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/4/photo_13@13-09-2024_14-47-07.jpg)'
            imger = 1
            packs = 5
        }
    }
    else if (packs == 5) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/5/IMG_9008.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 6
    }
    else if (packs == 6) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/6/IMG_9034.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 7
    }
    else if (packs == 7) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/7/IMG_9023.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)
        packs = 8
    }
    else if (packs == 8) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/8/IMG_9299.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)
        packs = 9
    }
    else if (packs == 9) {
        

        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/9/photo_92@16-09-2024_01-44-08.jpg)'
            VideoInTikTok.src = ''
            imger = 2

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/9/photo_93@16-09-2024_01-44-08.jpg)'
            imger = 3
        }
        else if (imger == 3) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/9/photo_94@16-09-2024_01-44-08.jpg)'
            imger = 1
            packs = 10
        }

        
    }
    else if (packs == 10) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/10/IMG_9130.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 11
    }
    else if (packs == 11) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url(img/TikTok/11/photo_40@13-09-2024_21-22-14.jpg)'
        VideoInTikTok.src = ''

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 12
    }
    else if (packs == 12) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/12/IMG_9178.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)
        packs = 13
    }
    else if (packs == 13) {
        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/13/photo_23@13-09-2024_14-50-39_thumb.jpg)'
            VideoInTikTok.src = ''

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)
            imger = 2
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/13/photo_24@13-09-2024_14-50-39.jpg)'
            imger = 1
            packs = 14
        }
    }
    else if (packs == 14) {
        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/14/photo_95@16-09-2024_01-59-21_thumb.jpg)'
            VideoInTikTok.src = ''

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)
            imger = 2
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/14/photo_96@16-09-2024_01-59-21_thumb.jpg)'
            imger = 3
        }
        else if (imger == 3) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/14/photo_97@16-09-2024_01-59-21.jpg)'
            imger = 1
            packs = 15
        }
    }
    else if (packs == 15) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/15/IMG_9241.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 16
    }
    else if (packs == 16) {
        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/16/photo_181@17-09-2024_03-25-23_thumb.jpg)'
            VideoInTikTok.src = ''

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)
            imger = 2
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/16/photo_182@17-09-2024_03-25-23_thumb.jpg)'
            imger = 3
        }
        else if (imger == 3) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/16/photo_183@17-09-2024_03-25-23_thumb.jpg)'
            imger = 1
            packs = 17
        }
    }
    else if (packs == 17) {
        news.classList.remove('newsOpas0') 

        videosBlock.style.backgroundImage = 'url()'
        VideoInTikTok.src = 'img/TikTok/17/IMG_9140.MP4'

        setTimeout(function() {
            news.classList.add('newsOpas0');
        }, 600)

        packs = 18
    }
    else if (packs == 18) {
        if (imger == 1) {
            news.classList.remove('newsOpas0') 

            videosBlock.style.backgroundImage = 'url(img/TikTok/18/photo_193@17-09-2024_22-32-31.jpg)'
            VideoInTikTok.src = ''

            setTimeout(function() {
                news.classList.add('newsOpas0');
            }, 600)

            imger = 2
        }
        else if (imger == 2) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/18/photo_194@17-09-2024_22-32-31.jpg)'
            imger = 3
        }
        else if (imger == 3) {
            videosBlock.style.backgroundImage = 'url(img/TikTok/18/photo_195@17-09-2024_22-32-31.jpg)'
            imger = 1
            packs = 19
        }
    }
})