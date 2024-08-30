import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import Scrollbar, {ScrollbarPlugin} from "smooth-scrollbar";

const bar = document.querySelector(".loading__bar--inner")
const loadingPercent = document.querySelector(".loading__counter--number")
let counter = 0;

class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';
  
    static defaultOptions = {
      direction: '',
    };
  
    transformDelta(delta) {
      if (this.options.direction) {
        delta[this.options.direction] = 0;
      }
  
      return { ...delta };
    }
  }

  class AnchorPlugin extends ScrollbarPlugin {
    static pluginName = 'anchor';
  
    onHashChange = () => {
      this.jumpToHash(window.location.hash);
    };
  
    onClick = (event) => {
      const { target } = event;
  
      if (target.tagName !== 'A') {
        return;
      }
  
      const hash = target.getAttribute('href');
  
      if (!hash || hash.charAt(0) !== '#') {
        return;
      }
  
      this.jumpToHash(hash);
    };
  
    jumpToHash = (hash) => {
      const { scrollbar } = this;
  
      if (!hash) {
        return;
      }    
  
      // reset scrollTop
      scrollbar.containerEl.scrollTop = 0;
  
      scrollbar.scrollIntoView(document.querySelector(hash));
    };
  
    onInit() {
      this.jumpToHash(window.location.hash);
  
      window.addEventListener('hashchange', this.onHashChange);
  
      this.scrollbar.contentEl.addEventListener('click', this.onClick);
    }
  
    onDestory() {
      window.removeEventListener('hashchange', this.onHashChange);
  
      this.scrollbar.contentEl.removeEventListener('click', this.onClick);
    }
  }
  
  // usage
  Scrollbar.use(AnchorPlugin);
  
  // load the plugin
  Scrollbar.use(DisableScrollPlugin);

let barInterval = setInterval(()=>{
    bar.style.width = counter + "%";
    loadingPercent.innerText = `${counter}%`
    counter++
    if(counter == 101){
        clearInterval(barInterval)
        gsap.to('.loading__bar',{
            duration: 5,
            rotate: "90deg",
            left: "1000%",
            bottom: "250%"
        })
        gsap.to('.loading__text, .loading_counter',{
            duration: 1,
            opacity: 0
        })

        gsap.to('.loading__svg',{
            duration: 10,
            opacity: 1,
            rotate: "360 deg"
        })

        gsap.to('.loading__box',{
            duration: 2,
            border: "none"
        })
        imagesLoaded(document.querySelectorAll('img'),()=>{
            gsap.to('.loading',{
                delay: 2,
                duration: 2,
                zIndex: 1,
                background: "transparent",
                opacity: 0.0
            });
    
            gsap.to("header",{
                duration:1,
                delay:2,
                top:"0",
                zIndex:1
            })
            gsap.to(".socials",{
                duration:1,
                delay:2.5,
                bottom:"5rem",
                zIndex:"1"
            })
    
            gsap.to(".scrollDown",{
                duration:1,
                delay:3,
                bottom:"3rem",
                zIndex:"1"
            });
            
            setTimeout(()=>{
                let options = {
                    alwaysShowTracks : false,
                    damping:.5,
                    plugins: {
                        disableScroll: {
                          direction: 'x',
                        }
                    }
                }
                let pageSmoothScroll = Scrollbar.init(document.body,options);
                pageSmoothScroll.track.xAxis.element.remove()
            }, 2000);
        });
    }
}, 10);

