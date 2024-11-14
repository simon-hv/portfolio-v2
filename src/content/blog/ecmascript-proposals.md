---
title: Three Game-Changing JavaScript Proposals You Should Know About
description: A technical deep dive into three major JavaScript proposals currently in the TC39 pipeline, with practical examples and implementation details.
date: 2024-11-14
---

JavaScript is evolving, and the future looks exciting! While you're writing your everyday `if` statements and wrestling with Date objects, the TC39 members are cooking up some game-changing features that could revolutionize how we write JavaScript. From elegant pattern matching to intuitive date handling, let's dive into three proposals that might just make your developer life a whole lot better.

![JS meme](@/assets/blog/ecmascript-proposals/1.webp)

## ECMAScript

ECMAScript is the standardized specification for JavaScript - it's essentially the blueprint that defines how the language should work. While JavaScript is the implementation, ECMAScript is the standard that describes the rules and features of the language.

Every year - and more precisely every June - the ECMAScript committee publishes <a href="https://tc39.es/ecma262/" target="_blank">a specification document</a> that describes `the most recent yearly snapshot plus any finished proposals since the snapshot was taken`.

Today, we will focus on the TC39 (Technical Committee 39) - the committee responsible for evolving ECMAScript. It consists of various stakeholders including browser vendors, academics, and other <a href="https://ecma-international.org/tc39-royalty-free-technical-committee-members/" target="_blank">tech companies</a> (IBM, Meta, Shopify, etc.). They follow a specific process for adding new features to the standard through proposals.

### The proposal process

For a new feature to be added to the standard, it has to go through multiple stages. Indeed, JavaScript is used by millions (or billions) of people and it's important to make sure that new features are stable and well-thought-out.

Currently, **98.3%** of all websites worldwide use JavaScript, which emphasizes the importance of ensuring new features are stable before major browsers implement them.

To do so, the TC39 committee has established a 6 stages process.

#### Stage 0: Strawperson

This is where it all starts. Proposals can be submitted by anyone who's part of TC39 or by an external contributor who has <a href="https://tc39.es/agreements/contributor/" target="_blank">registered as a TC39 contributor</a>.

Then, the proposal has to be presented at a committee meeting. After that, it will officially become a Stage 0 proposal and <a href="https://github.com/tc39/proposals/blob/HEAD/stage-0-proposals.md" target="_blank">will be listed here</a>.

#### Stage 1: Proposal

This is where the proposal gets more serious. What they call a `champion` and/or a `co-champion` need to be identified. They are authors and editors of the proposal and are responsible for advancing it through the process.

Champions have to write down the problem solved by the proposal, a high-level overview of the solution (via examples), and a detailed specification of the new feature (API specification and semantics details). This is also where potential challenges are identified.

#### Stage 2: Draft

Here we go! A preferred solution has been chosen by the committee. Now, the committee expects the solution to be implemented. As it's still a draft, the specification is not final and can still be changed but there are good chances that the feature will be added to the standard.

At this stage, experimental implementations (such as polyfills) are encouraged to help validate the design, but they don't need to be production-ready implementations yet.

#### Stage 2.7 (new stage officially added in 2023)

As this is a relatively new stage, I'll let Rob Palmer (co-chair of TC39) explain it better:

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en" data-theme="dark"><p lang="en" dir="ltr">Stage 2.7 is equivalent to what we used to call Stage 3. It means that the design is considered complete, we have a full specification, and we need to write code (tests and non-polyfill implementations) to gain feedback and make progress. It&#39;s a strong signal 💪</p>&mdash; Rob Palmer (@robpalmer2) <a href="https://twitter.com/robpalmer2/status/1755362667416748266?ref_src=twsrc%5Etfw">February 7, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">🤔 Why did we do this?<br><br>We separated out the &quot;Approved in Principle: Spec Ready&quot; stage from the later &quot;Recommended for Implementation: Tests Ready&quot; stage to reduce wasted effort in writing tests before spec stability, whilst also clarifying the test readiness message to engines.</p>&mdash; Rob Palmer (@robpalmer2) <a href="https://twitter.com/robpalmer2/status/1755362670520504396?ref_src=twsrc%5Etfw">February 7, 2024</a></blockquote>

#### Stage 3: Candidate

At this point, the proposal is mostly finished. At the previous stage, some todos and placeholders could still be left in the specification. Now, the specification needs to be complete. There must be at least two implementations that comply with the specifications.

Being at this stage is a signal sent to JS engines that the proposal is ready to be implemented.

#### Stage 4: Finished

The specification will now be included in the annual ECMAScript specification document. Quite a journey, isn't it?

## Exploring some proposals

### Pattern matching (stage 1)

Pattern matching is likely something you know if you've already used languages like `Scala`, `Rust` or `Elixir` for example. Using pattern matching, we can apply custom logic based on the type of the value passed in.

For now, JavaScript's pattern matching capabilities are limited to string manipulation through regular expressions. The proposed feature would expand pattern matching to work with various data types and structures.

Let's take an example from the <a href="https://github.com/tc39/proposal-pattern-matching?tab=readme-ov-file#examples-8" target="_blank">proposal's documentation</a>:

```js
match (res) {
  when { status: 200, let body, ...let rest }: handleData(body, rest);
  when { const status, destination: let url } and if (300 <= status && status < 400):
    handleRedirect(url);
  when { status: 500 } and if (!this.hasRetried): do {
    retry(req);
    this.hasRetried = true;
  };
  default: throwSomething();
}
```

The code uses a `match` expression to inspect the `res` object, which represents the server's response. Each `when` clause defines a pattern that the `res` object is matched against, and the corresponding block of code is executed if the pattern is satisfied.

- The first pattern `{ status: 200, let body, ...let rest }` matches a successful response (status code 200). It extracts the body of the response and the remaining properties (rest) and passes them to the `handleData` function.
- The second pattern `{ const status, destination: let url } and if (300 <= status && status < 400)` matches a redirected response (status codes 300-399). It extracts the status code and the url destination (which is renamed to `url`), and then checks if the status is within the redirect range before calling the `handleRedirect` function.
- The third pattern `{ status: 500 } and if (!this.hasRetried)` matches a server error (status code 500). If the request hasn't been retried yet, it calls the `retry` function and sets a `hasRetried` flag to prevent infinite retries.
- If none of the previous patterns match, the default clause is executed, which calls the `throwSomething` function.

I find it more elegant to read than the old fashioned way, isn't it?

```js caption="The old fashioned way"
function handleResponse(res) {
  if (res.status === 200) {
    const { body, ...rest } = res;
    handleData(body, rest);
  } else if (300 <= res.status && res.status < 400 && res.destination) {
    handleRedirect(res.destination);
  } else if (res.status === 500 && !this.hasRetried) {
    retry(req);
    this.hasRetried = true;
  } else {
    throwSomething();
  }
}
```

Other than being more elegant, pattern matching also allows to write more concise code. Let's take another example from the proposal.

We have this code:

```js
var json = {
  user: ["Lily", 13],
};
var {
  user: [name, age],
} = json;
print(`User ${name} is ${age} years old.`);
```

This example is quite simple but we do zero checks here and we just hope that everything will work as expected. What if the `user` array has only one element? Or what if it's not an array at all?

So let's add some checks:

```js caption="The old fashioned way"
if (json.user !== undefined) {
  var user = json.user;
  if (
    Array.isArray(user) &&
    user.length == 2 &&
    typeof user[0] == "string" &&
    typeof user[1] == "number"
  ) {
    var [name, age] = user;
    print(`User ${name} is ${age} years old.`);
  }
}
```

We now are certain that everything is correct and of the expected shape. Nice, but it's a lot of code for something that should be simple, don't you think?

The exact same thing can be done using pattern matching:

```js caption="With pattern matching"
if (json is {user: [String and let name, Number and let age]}) {
  print(`User ${name} is ${age} years old.`);
}
```

Here, the if statement checks if the `json` object has a `user` property that is an array with two elements.

The pattern matching inside the array checks that the first element is a String and binds it to the name variable, and the second element is a Number and binds it to the age variable.

If the pattern matching succeeds, we then print the message.

If you're new to pattern matching, I hope you can see how powerful it can be.

### Pipeline operator (stage 2)

When dealing with JavaScript, we often find ourselves writing code that chains multiple function calls together to perform complex operations. This leads to code that is very hard to understand and maintain.

Let's take an example:

```js caption="Option 1"
const email = "john@example.com";
const extractedDomain = email.toUpperCase().split("@")[1].split(".")[0];
// Output: "EXAMPLE"
```

But we can also chain the operations using nested function calls:

```js caption="Option 2"
const email = "john@example.com";

const capitalize = (value) => value.toUpperCase();
const split = (value, separator) => value.split(separator);
const getDomain = (value) => value.split(".")[0];

const extractedDomain = getDomain(split(capitalize(email), "@")[1]);
// Output: "EXAMPLE"
```

This gives us two possible syntaxes: method chaining `value.one().two().three()` and nested function calls `three(two(one(value)))`.

The pipeline operator (`|>`) proposes a new syntax that makes the code more readable by allowing us to chain operations from left to right. Here's how our example would look:

```js caption="Using the pipeline operator"
const email = "john@example.com";

const capitalize = (value) => value.toUpperCase();
const split = (value, separator) => value.split(separator);
const getDomain = (value) => value.split(".")[0];

const extractedDomain =
  email |> capitalize(%) |> split(%, "@") |> %[1] |> getDomain(%);

// Output: "EXAMPLE"
```

The pipeline operator takes the value on the left and passes it to the function on the right. This creates a clear flow of data transformation that's much easier to read and understand.

You maybe noticed that we used `%` in the example. This is a placeholder for the value that is being passed through. Actually, as this proposal is still in stage 2, there are two approaches proposed to handle this placeholder.

#### Hack pipes

First one is what we did in the example above. It's called `Hack pipes`.

> In the Hack language’s pipe syntax, the righthand side of the pipe is an expression containing a special placeholder, which is evaluated with the placeholder bound to the result of evaluating the lefthand side's expression. That is, we write value |> one(%) |> two(%) |> three(%) to pipe value through the three functions.

The only downside of this approach is that piping though unary functions is not as straightforward as it could be. Indeed, we can't just write something like `value |> capitalize |> getDomain` for example.

#### F# pipes

> In the F# language’s pipe syntax, the righthand side of the pipe is an expression that must evaluate into a unary function, which is then tacitly called with the lefthand side’s value as its sole argument. That is, we write value |> one |> two |> three to pipe value through the three functions.

Let's just rewrite the above example using this approach to see how it works:

```js caption="Using F# pipes"
const email = "john@example.com";

const capitalize = (value) => value.toUpperCase();
const split = (separator) => (value) => value.split(separator);
const nth = (n) => (arr) => arr[n];
const getDomain = (value) => value.split(".")[0];

const extractedDomain =
  email |> capitalize |> split("@") |> nth(1) |> getDomain;

// Output: "EXAMPLE"
```

You can see we no longer need to use the `%` placeholder. And we also used curried functions which makes the code even more elegant. Take the `split` function:

```js
const split = (separator) => (value) => value.split(separator);
```

If you're not familiar with curried functions, let me give you a quick explanation. Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

This is useful here because it allows us to call `split('@')` and get a function that takes the value to split as an argument.

The only downside of this approach is that it can be a little bit more verbose in some cases. Imagine we want to call a function that takes more than one argument (so not a curried function). We would have to write it like this:

```js caption="F# pipes approach"
value |> (x) => foo(1, x);
```

Instead of:

```js caption="Hack pipes approach"
value |> foo(1, %);
```

For now, there is no consensus even though the TC39 committee has rejected the F# pipes approach multiple times because of a variety of reasons - memory performance concerns and so on.

If you want to know more about that, do not hesitate to read <a href="https://github.com/tc39/proposal-pipeline-operator?tab=readme-ov-file#tc39-has-rejected-f-pipes-multiple-times" target="_blank">the proposal's documentation</a>. And if you want to play with it, you can use the <a href="https://babeljs.io/docs/babel-plugin-proposal-pipeline-operator" target="_blank">Babel plugin</a>.

Without taking into account any technical concerns, I personally think the F# pipes approach is more elegant and would result in a less verbose code in the majority of cases.

### Temporal (stage 3)

Temporal's proposal provides standard objects and functions for working with dates and times. If you've ever worked with dates in JavaScript, you know that the current `Date` API has many limitations and quirks:

- It's mutable (dates can be modified in place)
- Month numbers are zero-based (January is 0)
- No support for different calendar systems
- Confusing parsing behavior

The Temporal API aims to solve these issues by providing a modern, more intuitive way to work with dates and times.

```js
// Current Date API
const date = new Date("2024-11-13");
date.setMonth(date.getMonth() + 1); // Mutates the date
console.log(date.getMonth()); // Returns 11 (December)

// Temporal API
const date = Temporal.PlainDate.from({ year: 2024, month: 11, day: 13 });
const nextMonth = date.add({ months: 1 }); // Returns new instance
console.log(nextMonth.toString()); // '2024-12-13'
```

Let's explore some key features.

#### Separate Types for Different Use Cases

```js
// Just a date (no time)
const date = Temporal.PlainDate.from({ year: 2024, month: 5, day: 10 });

// Just a time (no date)
const time = Temporal.PlainTime.from({
  hour: 9,
  minute: 30,
  second: 0,
  millisecond: 68,
  microsecond: 346,
  nanosecond: 205,
});

// Date and time without timezone
const dateTime = Temporal.PlainDateTime.from("2024-11-13T09:30:00");

// Exact moment in time (with timezone)
const zonedDateTime = Temporal.ZonedDateTime.from({
  timeZone: "America/Los_Angeles",
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500,
}); // => 1995-12-07T03:24:30.0000035-08:00[America/Los_Angeles]
```

#### Timezone Support

One of the most powerful features is the first-class support for timezones:

```js
// Create a zoned date time in Los Angeles
const la = Temporal.ZonedDateTime.from({
  timeZone: "America/Los_Angeles",
  year: 2024,
  month: 3,
  day: 15,
  hour: 9,
  minute: 30,
});

// Convert to Tokyo time
const tokyo = la.withTimeZone("Asia/Tokyo");
console.log(tokyo.toString());
// Output: 2024-03-16T01:30:00+09:00[Asia/Tokyo]
```

#### Duration Calculations

Temporal makes it easy to work with durations and perform date arithmetic:

```js
const duration = Temporal.Duration.from({
  hours: 2,
  minutes: 30,
});

const start = Temporal.Now.plainTimeISO();
const end = start.add(duration);

console.log(`Meeting will end at ${end.toString()}`);
```

#### Calendar Support

Unlike the current Date API, Temporal supports non-Gregorian calendars:

```js
// Create a date using the Hebrew calendar
Temporal.PlainDate.from({
  calendar: "hebrew",
  year: 5779,
  monthCode: "M05L",
  day: 23,
});

// Convert to Gregorian
const gregorianDate = hebrewDate.withCalendar("iso8601");
console.log(gregorianDate.toString());
```

As you can see, the Temporal API represents a significant improvement over the current Date API, offering a more intuitive and powerful way to work with dates and time. Its immutable design, first-class timezone support, and clear separation of concerns make it a welcome addition to the standard.

If you want to know more, you can read the <a href="https://tc39.es/proposal-temporal/docs/index.html" target="_blank">proposal's documentation</a>. And if you want to play with it, you can use <a href="https://github.com/fullcalendar/temporal-polyfill?tab=readme-ov-file" target="_blank">this polyfill</a>.

## Conclusion

While we've explored only three proposals, there are many more exciting ones in development! If you want to have a look, I recommend you <a href="https://www.proposals.es/" target="_blank">this website</a> that is not the official one but lists all the proposals and their status. Here is a <a href="https://tc39.es/#proposals" target="_blank">link</a> to the official one.

The JavaScript ecosystem continues to evolve with exciting new proposals that aim to make the language more powerful, expressive, and developer-friendly. From pattern matching that simplifies complex conditional logic, to the pipeline operator that makes function composition more readable, to the Temporal API that finally brings robust date/time handling to JavaScript - these proposals represent significant improvements to the language.

While the TC39 process may seem lengthy, it ensures that new features are thoroughly vetted and well-designed before becoming part of the language specification.

As these proposals progress through the various stages, developers can already start experimenting with many of them using polyfills or transpilers. This not only helps validate the proposals but also allows the community to provide valuable feedback that shapes the future of JavaScript.
