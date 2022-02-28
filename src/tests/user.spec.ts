import UserModel from "../models/UserModel"

describe('Get Users', () => {

  const expected: string[] = [];
 
  it('Users response GetAll', async () => {
    const response = await new UserModel().GetUsersAll()
    expect(expected).not.toEqual(expect.arrayContaining(response));
  }) 
})
