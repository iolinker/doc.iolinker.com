---
title: Event Gateway
description: When the workflow reaches an event gateway node, the gateway enters a waiting state. Upon receiving an event-driven trigger, it will select and execute the branch event that occurs first among the subsequent branches, while canceling the events of other branches.
meta:
  - name: keywords
    content: Event Gateway, Exclusive Gateway, Event-Driven, Event Capture, XOR Gateway, XOR Gateway, Low-code, AI Workflow, Process Engine
---

## Event Gateway

Select the branch with the shortest path (the one that finishes execution first) and cancel the other branches. For example, in the event gateway with three branches: a 20-second delay, approval, and callback interface invocation (providing a callback interface for third-party systems). As soon as any one of them finishes execution, the other two will be canceled.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/KzndyA9TIwI"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## Input

None


## Output

None
