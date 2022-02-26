import user from '../api/services/user'
import {env} from 'process'

describe('Users', () => {

  it('user response test', () => {
    const response =  user()
    expect(response).toEqual('hello word')
  })

 
})