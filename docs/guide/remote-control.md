---
title: WeCom agent remote control
---

# WeCom agent remote control

A WeCom remote channel allows approved users to converse with a selected agent over a long-lived connection. It is neither a legacy robot trigger nor a message-sending node.

## Prerequisites

- An available agent and model configuration.
- A supported Bot ID and long-connection Secret from the WeCom administration console.
- Network access for the required connection; the channel status determines connectivity.
- An understanding of the agent's tools, working directory and accessible data.

## Add a channel

1. Open remote channels from an agent card or the workspace entry.
2. Select **Add remote**, choose an agent and name the channel.
3. Enter the Bot ID and Secret. Never place real values in documentation, screenshots or public configuration.
4. Configure the user allowlist. Consider `*` only when you understand the exposure.
5. Select **Connect and save**, confirm the channel is usable, then send a no-side-effect message from an allowed account.

Enable or disable the channel to control remote access. Web access to its conversations does not grant the remote user web administration permissions.

## Distinct capabilities

- **WeCom remote control:** accepts user instructions, drives an agent and returns conversation results.
- **Legacy WeCom robot trigger:** an old workflow entry whose new-creation entry is hidden.
- **Send WeCom message node:** sends a message from a workflow; it does not establish agent remote control.

## Security and troubleshooting

An allowlist does not replace least-privilege tool authorization. On failure, disable the channel and inspect Bot settings, the allowlist, network and channel errors before examining agent sessions and tool results. Rotate an exposed Secret at its provider; deleting a screenshot is not sufficient.
