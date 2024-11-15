---
title: Monads explained (maybe)
description: In this article, we'll try to understand what monads are thanks to some examples.
date: 2024-11-04
---

## Monads: The Burrito of Programming

![Monads meme](@/assets/blog/monads-explained/1.jpg)

As developers, we've all heard about monads here and there. You might have heard them described as <a href="https://blog.plover.com/prog/burritos.html" target="_blank">`burritos`</a> or `containers`.

For many of us, our first encounter with monads leaves us with more questions than answers. In this article we'll dive into the world of monads and we'll try to understand them through some examples.

But never forget the following <a href="https://youtu.be/dkZFtimgAcM?si=nbZMJ_AIF2sRfems&t=49" target="_blank">quote from Douglas Crockford</a>:

> Once you understand monads, you lose the ability to explain them to anybody else.

## What's a monad

Let's start with an "official" definition from <a href="https://en.wikipedia.org/wiki/Monad_(functional_programming)" target="_blank">wikipedia</a>:

> In functional programming, a monad is a structure that combines program fragments (functions) and wraps their return values in a type with additional computation. In addition to defining a wrapping monadic type, monads define two operators: one to wrap a value in the monad type, and another to compose together functions that output values of the monad type (these are known as monadic functions).\
> **General-purpose languages use monads to reduce boilerplate code needed for common operations**.

Let's try to simplify this: **a monad is a wrapper around a value that provides a standardized way to chain operations on that value**. Think of it as a container that not only holds a value but also knows how to:

1. **Wrap** a value inside itself (`return` or `unit` in monad terminology)
2. **Transform** the contained value using functions (`bind` or `flatMap` in monad terminology).

This might perhaps make you think of a `Functor`, and you're right, monads are functors!

## Functors vs Monads

Before diving deeper into monads, let's understand what a functor is. A functor is a simpler concept that serves as a foundation for understanding monads.

**A functor is any type that implements a `map` operation**, allowing us to apply a function to each item inside the container, producing a new container with the transformed values. For example, JavaScript’s Array is often seen as a functor because its `map` method applies a function to each element, returning a new array without altering the original:

```typescript /map/
const numbers = [1, 2, 3];
const doubled = numbers.map((x) => x * 2); // [2, 4, 6]
```

**A monad is a functor with superpowers**. While a functor lets you transform values with regular functions (`a -> b`), a monad lets you chain operations that themselves return monadic values (`a -> M<b>`). This is done through an additional operation called `flatMap` (or `bind`).

Here's a quick comparison:

```typescript showLineNumbers /map/ /flatMap/
// Functor: transforms a value
const maybeNumber = Maybe.of(5);
const doubled = maybeNumber.map((x) => x * 2); // Maybe(10)

// Monad: chains operations that return monadic values
const maybeUser = Maybe.of({ id: 1 });
const maybePosts = maybeUser.flatMap((user) => fetchPosts(user.id));
// fetchPosts returns Maybe<Post[]>
```

The key difference is that monads can handle nested structures of the same type and flatten them, which is particularly useful when dealing with sequences of operations that might fail or have side effects.

Notice that if we used `map` instead of `flatMap` (line 7), we would have ended up with a nested Maybe - `Maybe<Maybe<Post[]>>` instead of a `Maybe<Post[]>`.

## Why is this useful

Recently, I was writing a node.js app that needed to fetch data from a database. Here's what the code looked like:

```typescript
function getIncidentUpdatedView({ payload }): string | undefined {
  const workspaceId: string | undefined = getWorkspaceFromTeam(id);

  if (!workspaceId) {
    console.log("error getting workspace");
    return;
  }

  const incidents: Incident[] | undefined = getIncidents(workspaceId);

  if (!incidents) {
    console.log("error getting incidents");
    return;
  }

  return updateView(incidents);
}
```

Notice all those `if` statements checking for `undefined`? While this code works, it's not very elegant and the error handling makes it harder to follow the main logic flow.

### Introducing the Option monad

To improve this, we'll use the `Option` monad (that can be known as `Maybe`).\
The `Option` monad represents a value that may not be present, which is exactly what we need!

> Option represents an optional value: every Option is either Some and contains a value, or None, and does not.

Here's how the code looks like when using the `Option` monad (for this example, I used the <a href="https://github.com/thames-technology/monads" target="_blank">@thames/monads</a> library):

```typescript
function getIncidentUpdatedView({ payload }): Option<string> {
  const workspaceId = getWorkspaceFromTeam(id);
  const incidents = workspaceId.andThen(getIncidents);
  const updatedView = incidents.andThen(updateView);

  return updatedView;
}
```

Or even simpler:

```typescript
function getIncidentUpdatedView({ payload }): Option<string> {
  return getWorkspaceFromTeam(id).andThen(getIncidents).andThen(updateView);
}
```

Well, this is more readable, right? We're simply chaining operations using `andThen` - which is this library's name for the monadic `flatMap` operation.

We can remove the `if` statements because the `Option` monad will handle these edge cases for us. How? Let's see!

We modified our `getWorkspaceFromTeam` and `getIncidents` functions to return an `Option<string>` instead of `string | undefined`.\
The `Option` type can hold two possible values:

- `Some(value)`: the value is present
- `None`: the value is not present

Here's what `getIncidents` looks like:

```typescript
function getIncidents(workspaceId: string): Option<Incident[]> {
  const incidents = fetchIncidents(workspaceId);

  if (incidents) {
    return Some(incidents);
  }

  return None;
}
```

If `None` is returned in the chain of operations, the `andThen` method will return `None` without calling the next functions. Else, it will return `Some(value)` and the next function in the chain will be executed with the unwrapped value as its input.

Actually, the code above can be improved by using a `from` or `fromNullable` method that takes a value as input (which can be `undefined` or `null`) and returns an `Option<T>`:

```typescript
function getIncidents(workspaceId: string): Option<Incident[]> {
  return Option.fromNullable(fetchIncidents(workspaceId));
}
```

This pattern is commonly found in languages like Scala, where Option is a monad that simplifies handling potentially absent values.

I like this quote from this <a href="https://youtu.be/C2w45qRc3aU?si=7wA7mmqwnpS9aP74" target="_blank">YouTube video</a> (which I highly recommend watching):

> Monads are a design pattern that allows a user to chain operations while the monad manages secret work behind the scenes.

This is exactly what we did in the example above. The `Option` monad manages the secret work behind the scenes, enabling us to focus on the main logic flow.

## Other monads

### Either

`Either` is almost the same as `Option` but with two possible outcomes instead of one. `Either` is a monad that represents a value of two possible types: `Left` or `Right`. It's often used to represent computations that may fail and can return an error.

If we make a parallel with the `Option` monad, `Right` is typically used for success cases (like `Some`) and `Left` for failure cases (like `None`), but both `Left` and `Right` can contain values.

It is convenient to use the `Either` monad when you want to return an error message. If an exception is thrown, you can return an `Either.left(error)`. When using `flatMap`, if any operation in the chain returns a `Left`, the subsequent operations are skipped and the error value is preserved.

Let's see how we can rewrite the previous example using the `Either` monad. First, we have to modify our `getIncidents` and `getWorkspaceFromTeam` functions to return an `Either<Error, T>`.

Here's how `getIncidents` might look like:

```typescript {8}
function getIncidents(workspaceId: string): Either<Error, Incident[]> {
  const incidents = fetchIncidents(workspaceId);

  if (incidents) {
    return Either.Right(incidents);
  }

  return Either.Left(new Error("Error fetching incidents"));
}
```

You may have noticed that the code is very similar to the `Option` monad example. The only difference is that instead of returning `None`, we return `Left` containing an error message.

We can then modify our main function `getIncidentUpdatedView` to use the `Either` monad:

```typescript
function getIncidentUpdatedView(id: string): Either<Error, string> {
  const result = getWorkspaceFromTeam(id)
    .rightAndThen(getIncidents)
    .rightAndThen(updateView);

  result.match({
    left: (value) => console.error("error", value),
    right: (value) => console.log("success", value),
  });

  return result;
}
```

Notice how we used the `rightAndThen` method to chain the operations. This method enables us to chain operations on the unwrapped `Right` value of the previous operation. If an operation in this flow returns a `Left`, the subsequent `rightAndThen` operations are skipped and the `Left` value is preserved through the rest of the chain.

Finally, we used the `match` method to display a log message based on the result.

### Future

Future is a monad that represents a value that may be available in the future (yes, like **promises**). As before, we can chain operations with methods such as `andThen` or `flatMap` that will wait for the previous operation to resolve before applying the next one.

An example would be:

```typescript
const fetchUserById = (id: number): Future<User> =>
  Future.fromPromise(
    fetch(`/api/users/${id}`).then((response) => response.json()),
  );

const fetchUserPosts = (user: User): Future<Post[]> =>
  Future.fromPromise(
    fetch(`/api/users/${user.id}/posts`).then((response) => response.json()),
  );

const formatPosts = (posts: Post[]): string =>
  posts.map((post) => `${post.title}: ${post.content}`).join("\n");

// Chain the operations
const getUserPosts = (userId: number): Future<string> =>
  fetchUserById(userId).flatMap(fetchUserPosts).map(formatPosts);

// Execute the Future
getUserPosts(123).fork(
  (error) => console.error("Something went wrong:", error),
  (result) => console.log("User posts:", result),
);
```

`fork` is used to execute the `Future` and provide callbacks for handling the result and error.

The Future monad is particularly useful for handling asynchronous operations in a functional way. Unlike `Promises`, Futures are lazy - they don't start executing until `fork` is called. This gives us more control over when our asynchronous operations begin and allows for better composition of async logic.

## Conclusion

Of course, monads are much more than what we've seen in this article. This article is an introduction and we've only scratched the surface. I don't pretend myself to fully understand everything about monads, but I hope this article will help you understand them better.

Monads really are design patterns that help us handle common programming scenarios in a more elegant way. We've seen that:

- `Option/Maybe` helps us handle nullable values
- `Either` helps us handle errors with additional context
- `Future` helps us handle asynchronous operations

But of course, there are many other monads that can be used in different scenarios.

Remember: You don't have to use monads everywhere. Start small, perhaps with `Option/Maybe` for nullable values, and gradually incorporate other monadic patterns as you become comfortable with the concept.

### Resources I recommend to go further

- This <a href="https://www.youtube.com/watch?v=C2w45qRc3aU" target="_blank">YouTube video</a> is a great introduction to monads.
