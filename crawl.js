function urlnormalizer(testurl){
    const URLcomp = new URL(testurl)
    const hostPath = ( `${URLcomp.hostname}${URLcomp.pathname}`)
    if(hostPath.length>0 && hostPath.slice(-1)==='/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}

module.exports ={
    urlnormalizer
}