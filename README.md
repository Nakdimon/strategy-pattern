# Strategy Pattern

## What is the Strategy Pattern

In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.

# When to use?

The Strategy pattern is to be used where you want to choose the algorithm to use at runtime. A good use of the Strategy pattern would be saving files in different formats, running various sorting algorithms, or file compression.

The Strategy pattern provides a way to define a family of algorithms, encapsulate each one as an object, and make them interchangeable.

Another example would be a class that performs validation on incoming data may use the strategy pattern to select a validation algorithm depending on the type of data, the source of the data, user choice, or other discriminating factors.
For instance, These factors are not known until run-time and may require radically different validation to be performed.

## Examples

Within the `/src` dir you will find an examples of the adapter pattern.

## To run the tests

1. Clone repo
2. run npm install
3. run npm run test

These tests were created to verify instantiability and functionality of all classes.

### Resources

- [Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)
- [DZone](https://dzone.com/articles/design-patterns-strategy#:~:text=The%20Strategy%20pattern%20is%20to,sorting%20algorithms%2C%20or%20file%20compression.)
