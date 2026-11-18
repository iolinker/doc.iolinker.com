---
title: Conditional Judgment
description: Conditional branching in workflows, also known as decision logic, implements IF-ELSE functionality that enables workflows to automatically select different execution paths based on specified conditions. This feature supports dynamic decision-making using variable expressions.
meta:
  - name: keywords
    content: Conditional Judgment, IF-ELSE, Branch Logic, Exclusive Gateway, Low-code, AI Workflow, Process Engine
---

## Conditional Judgment

Determine the output as true or false based on the input and select the corresponding branch for execution. Supports the use of "and" and "or" to combine conditions, and allows for the use of variable expressions to make dynamic decisions at runtime.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


## Input

### Conditional Relationships

Complex conditional combinations can be formed using "and" and "or" relationships. If both "and" and "or" appear in a combination, the relationship is as follows: `CondX and CondY or CondZ...`

- **And**

  Returns true only if all conditions (Condition 1, Condition 2, ... Condition N) are true; otherwise, it returns false.

- **Or**

  Returns true if any one of the conditions is true; otherwise, it returns false if all conditions are false.


### Conditional Value Types

Currently, the following four types of value comparisons are supported: boolean, date and time, numeric, and string.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


Values 1 and 2 can be constants or variable expressions (dynamically retrieved at runtime).

#### Boolean Value

Determine whether Value 1 is true or false (Value 2 is not applicable here).

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


#### Date and Time

Compare the relationship between Value 1 and Value 2 in terms of dates. You can compare strings in the format `yyyy-mm-dd hh:mm:ss` as well as Unix timestamp formats.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


#### Numeric

Compare the relationship between Value 1 and Value 2 in terms of size, including:

- Greater than
- Greater than or equal to
- Less than
- Less than or equal to
- Equal to
- Not equal to

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

#### String

Compare the relationship between Value 1 and Value 2 in terms of strings, including:

- Contains
- Does not contain
- Starts with...
- Does not start with...
- Ends with...
- Does not end with...
- Equal to
- Not equal to


> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

## Output

```
[true/false]
```

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.
