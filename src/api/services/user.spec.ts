import user from './user'

describe('Users', () => {

  it('user response test', () => {
    const response =  user()
    console.log(response)
    expect(response).toEqual('hello word')
  })

 
})