

const fetchUser = require('./http').fetchUser

const axios = require('axios');

jest.mock('axios');

axios.get.mockResolvedValue({ data: '111' })


it('axios1', async () => {
  return expect(fetchUser()).resolves.toEqual('111')
})