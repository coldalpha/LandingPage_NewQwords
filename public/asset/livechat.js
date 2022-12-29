const urlParams = new URLSearchParams(window.location.search);
const debug = urlParams.get('debug');


function loadLiveChatScript(){
    $el = $(`
        
    <!-- START chatstack.com Live Chat HTML Code -->
    <script type="text/javascript">
    	var Chatstack = { server: 'livechat.qwords.com',
            cookie: {
               expires: 3/24,
            }
        };
    	(function(d, undefined) {
    		// JavaScript
    		Chatstack.e = []; Chatstack.ready = function (c) { Chatstack.e.push(c); }
    		var b = d.createElement('script'); b.type = 'text/javascript'; b.async = true;
    		b.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + Chatstack.server + '/livehelp/scripts/js.min.js';
    		var s = d.getElementsByTagName('script')[0];
    		s.parentNode.insertBefore(b, s);
    	})(document);
    </script>
    <!-- END chatstack.com Live Chat HTML Code -->
        
    `).appendTo(document.body)
    
}

function createLiveChatIcon(){
    
    const html_style = `
    <style>
        .chatstack-custom {
            font-family: "Lato Regular",sans-serif;
            font-size: 100%;
            font-style: normal;
            letter-spacing: normal;
            font-stretch: normal;
            font-variant: normal;
            font-weight: 400;
            font: normal normal 100% "Lato Regular",sans-serif;
            text-align-last: auto;
            text-decoration: none;
            text-indent: 0;
            text-shadow: none;
            text-transform: none;
            box-shadow: none;
            clear: none;
            content: normal;
            direction: ltr;
            float: none;
            left: auto;
            line-height: inherit;
            max-height: none;
            max-width: none;
            opacity: 1;
            outline-offset: 0;
            resize: none;
            top: auto;
            vertical-align: baseline;
            white-space: normal;
            word-break: normal;
            word-spacing: normal;
            text-align: start;
            -webkit-font-smoothing: antialiased;
            position: fixed;
            right: 1em;
            bottom: 1em;
            padding: 0;
            margin: 0;
            border-radius: 50%;
            border: 1px solid rgba(102,102,102,.4);
            cursor: pointer;
            z-index: 9000000;
            background-position: center center;
            background-repeat: no-repeat;
            box-sizing: border-box;
            background-color: #f5ab41;
            width: 60px;
            height: 60px;
            min-height: 0;
            min-width: 0;
            display: block;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NS45IDg3LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg1LjkgODcuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzQuOSwwSDExLjFDNC45LDAsMCw0LjksMCwxMXY1NC4yYzAsNi4xLDQuOSwxMSwxMSwxMWg0NS44bDI1LjYsMTEuNGwzLjUtMS44VjY1LjNWMTFDODUuOSw0LjksODEsMCw3NC45LDB6CgkgTTQ5LjYsMTkuNGMwLTEuNiwxLjMtMi45LDIuOS0yLjlzMi45LDEuMywyLjksMi45djExLjVjMCwxLjYtMS4zLDIuOS0yLjksMi45cy0yLjktMS4zLTIuOS0yLjlWMTkuNHogTTMyLjQsMTkuNAoJYzAtMS42LDEuMy0yLjksMi45LTIuOXMyLjksMS4zLDIuOSwyLjl2MTEuNWMwLDEuNi0xLjMsMi45LTIuOSwyLjlzLTIuOS0xLjMtMi45LTIuOVYxOS40eiBNNjcuNCw0My4zYy02LjksOS42LTE1LjUsMTUtMjMuOCwxNQoJYy0wLjIsMC0wLjMsMC0wLjUsMEMzMC4yLDU4LDIxLjMsNDUuOSwxOS4yLDQyLjhsLTEuMywwLjdjLTAuNCwwLjMtMC45LDAuNC0xLjQsMC40Yy0xLDAtMi0wLjYtMi41LTEuNGMtMC44LTEuNC0wLjMtMy4xLDEuMS0zLjkKCWw4LjgtNS4xYzAuNy0wLjQsMS40LTAuNSwyLjItMC4zYzAuNywwLjIsMS40LDAuNywxLjcsMS4zYzAuOCwxLjQsMC4zLDMuMS0xLjEsMy45bC0yLjYsMS41YzEuOSwyLjcsOS40LDEyLjQsMTksMTIuN2wwLjMsMAoJYzYuNCwwLDEzLjQtNC42LDE5LjItMTIuNmMwLjktMS4zLDIuNy0xLjYsNC0wLjdDNjgsNDAuMiw2OC4zLDQyLDY3LjQsNDMuM3oiLz4KPC9zdmc+Cg==),none;
            background-size: 32px 32px;
        }
        
        .loader-ww,
        .loader-ww:before,
        .loader-ww:after {
          background: #ffffff;
          -webkit-animation: load1 1s infinite ease-in-out;
          animation: load1 1s infinite ease-in-out;
          width: 1em;
          height: 4em;
        }
        .loader-ww {
          color: #ffffff;
          text-indent: -9999em;
          margin: 22px auto;
          position: relative;
          font-size: 4px;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }
        .loader-ww:before,
        .loader-ww:after {
          position: absolute;
          top: 0;
          content: '';
        }
        .loader-ww:before {
          left: -1.5em;
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }
        .loader-ww:after {
          left: 1.5em;
        }
        @-webkit-keyframes load1 {
          0%,
          80%,
          100% {
            box-shadow: 0 0;
            height: 4em;
          }
          40% {
            box-shadow: 0 -2em;
            height: 5em;
          }
        }
        @keyframes load1 {
          0%,
          80%,
          100% {
            box-shadow: 0 0;
            height: 4em;
          }
          40% {
            box-shadow: 0 -2em;
            height: 5em;
          }
        }


        
    </style>
    `
    
    const html_div = `<div class="chatstack-custom" title="Live Chat"></div>`
    const html_loader = `<div class="loader-ww">Loading...</div>`
    
    $(html_style).appendTo(document.head)
    $div = $(html_div).appendTo(document.body)
    
    $div.click(function(){
        $div.css('background-image', 'none')
        const $loader = $('.loader-ww')
        
        if ($loader.length == 0) {
            $div.append(html_loader);
        }
        
        if ($('#chatstack-container').length == 0) {
            loadLiveChatScript();
        }
    })
}


function onLivechatLoaded(){
    const targetNode = document.querySelector("#chatstack-container");
    
    const observerOptions = {
      childList: false,
      attributes: true,
      subtree: false
    }
    
    const callback = function(){
        observer.disconnect()
        if  (false){  // [UBAH] ubah jadi FALSE
            console.log('live chat showed')
            $('.chatstack-custom').hide()
            $('#chatstack-launcher-frame').contents().find(".chatstack-launcher").click()
            
        } else {
            console.log('live chat not debug')
        }
    }
    
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);
    
}


if (false) { // [UBAH] ubah jadi FALSE
    
    if (location.pathname == "/"){
        createLiveChatIcon()
    } else {
        loadLiveChatScript();
    }
    
} else {

    if (location.pathname == "/"){
        loadLiveChatScript();
    } else {
        loadLiveChatScript();
    }
        

}
