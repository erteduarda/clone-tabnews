test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  expect(responseBody.dependences.database.version).toEqual("16.0");
  expect(responseBody.dependences.database.max_connections).toEqual(100);
  expect(responseBody.dependences.database.open_connections).toEqual(1);
});
