const {webcrawl} = require("./crawl.js")

function main(){
    if(process.argv.length<3 && process.argv.length>3){
        console.log("Invalid inputs")
        process.exit(1)
    }
    baseURL = process.argv[2]
    console.log(`Starting crawl of ${baseURL}`)

    webcrawl(baseURL)
}

main()