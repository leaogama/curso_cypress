it('sem testes ainda', () => { })

const getSomething = (callback) => {

setTimeout(() => {
    console.log('respondendo agora...')
    callback(12)
},10000)

}



const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`)
    console.log('end')
}

system()