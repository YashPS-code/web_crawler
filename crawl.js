const {JSDOM} = require("jsdom")

async function webcrawl(baseURL){
    try{
        const webpage = await fetch(baseURL)
        if(webpage.status>399){
            console.log("Error: status code improper ")
            return
        }

        if(!webpage.headers.get('content-type').includes("text/html")){
            console.log("Error: HTML not provided")
            return
        }
        console.log(await webpage.text())
    } catch(err){
        console.log(`error:${err}`)
    }
}

function getUrlFromHtml(htmlBody,baseUrl){
    const urls=[]
    const dom = new JSDOM(htmlBody)
    const listElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of listElements){
        if(linkElement.href.slice(0,1)==='/'){
            try{
                const urlObj = new URL(baseUrl+linkElement.href)
                urls.push(urlObj.href)
            }catch(err){
                console.log(`Error:${err.message}`)
            }
        }else{
            try{
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href)
            }catch(err){
                console.log(`Error:${err.message}`)
            }
        }
    }
    return urls
}

function urlnormalizer(testurl){
    const URLcomp = new URL(testurl)
    const hostPath = ( `${URLcomp.hostname}${URLcomp.pathname}`)
    if(hostPath.length>0 && hostPath.slice(-1)==='/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports ={
    urlnormalizer,
    getUrlFromHtml,
    webcrawl
}