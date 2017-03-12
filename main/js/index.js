const getScreenshot=(data)=>new Promise((resolve, reject)=>{
    let delay = data.delay||5000;
    let webView=document.createElement('webview');
    webView.addEventListener('dom-ready', ()=>{
        webView.getWebContents().enableDeviceEmulation({
            screenPosition: 'mobile',
            fitToView: true
        });    
        setTimeout(()=>{
            webView.executeJavaScript(`
                (()=>({
                    width: document.documentElement.scrollWidth,
                    height: document.documentElement.scrollHeight,
                }))();
            `, true, (r)=>{
                webView.style.width='1920px';
                webView.style.height=r.height+'px';
                setTimeout(()=>{                
                    webView.capturePage((d)=>{
                        webView.remove();
                        resolve(d.toDataURL());
                    });
                }, delay);
            });
        }, 100);    
    }); 
    document.querySelector('#container').appendChild(webView);
    webView.src=data.url;
});