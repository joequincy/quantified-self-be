describe('index page', () => {
  it('loads successfully', async () => {
    let response = await get("/")
    expect(response.statusCode).toBe(200)
  });
})
