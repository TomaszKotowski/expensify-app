const add = (a,b) => a+b;

const generateGreeting = (name) => `Hello ${name}!`

test('should add two number', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should greet', () => {
    const result = generateGreeting('Andrew');
    expect(result).toBe(`Hello Andrew!`)
});