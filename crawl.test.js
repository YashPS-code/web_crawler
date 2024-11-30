const {urlnormalizer, getUrlFromHtml} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('urlnormalizer strip',()=>{
    const input = 'https://boot.bev.com/path/'
    actual = urlnormalizer(input)
    const expected = 'boot.bev.com/path'
    expect(actual).toEqual(expected)
})

test('urlnormalizer extruder',()=>{
    const input = 'https://boot.bev.com/path/'
    actual = urlnormalizer(input)
    const expected = 'boot.bev.com/path'
    expect(actual).toEqual(expected)
})

test('urlnormalizer capitalizer',()=>{
    const input = 'https://BOOT.bev.com/path/'
    actual = urlnormalizer(input)
    const expected = 'boot.bev.com/path'
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml',()=>{
    const inputHtmlBody =`
    <html>
        <body>
            <a href="https://blog.boot.dev/path/">
            Boot.dev Blog
            </a>
        </body>
    </html>`
    const inputBaseUrl= "https://blog.boot.dev"
    const actual = getUrlFromHtml(inputHtmlBody,inputBaseUrl)
    const expected =["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml relative',()=>{
    const inputHtmlBody =`
    <html>
        <body>
            <a href="/path/">
            Boot.dev Blog
            </a>
        </body>
    </html>`
    const inputBaseUrl= "https://blog.boot.dev"
    const actual = getUrlFromHtml(inputHtmlBody,inputBaseUrl)
    const expected =["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml multiple',()=>{
    const inputHtmlBody =`
    <html>
        <body>
            <a href="https://blog.boot.dev/path">
            Boot.dev Blog
            </a>
            <a href="/path/">
            Boot.dev Blog
            </a>
        </body>
    </html>`
    const inputBaseUrl= "https://blog.boot.dev"
    const actual = getUrlFromHtml(inputHtmlBody,inputBaseUrl)
    const expected =["https://blog.boot.dev/path","https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test('getUrlFromHtml invalid',()=>{
    const inputHtmlBody =`
    <html>
        <body>
            <a href="Invalid">
            Invalid
            </a>
        </body>
    </html>`
    const inputBaseUrl= "https://blog.boot.dev"
    const actual = getUrlFromHtml(inputHtmlBody,inputBaseUrl)
    const expected =[]
    expect(actual).toEqual(expected)
})