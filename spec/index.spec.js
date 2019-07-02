describe('index page', () => {
  it('loads successfully', () => {
    return get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  });
})
