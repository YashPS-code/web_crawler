const {urlnormalizer}= require('./crawl.js')
const {test, expect}= require('@jest/globals')

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