---
title: Knowledge and retrieval
---

# Knowledge and retrieval

A knowledge base provides retrievable reference material to agents or workflows. It does not simply pass an entire document to a model.

## Create a knowledge base

1. Open knowledge management and create a named, described knowledge base.
2. Upload material you are authorized to use. Check it for secrets, personal data and content unsuitable for external models.
3. Select text or vector retrieval and configure chunking and retrieval options in the current interface.
4. For vector retrieval, select the appropriate LLM/embedding model configuration and vector storage; options depend on the deployment.
5. Wait for indexing, inspect chunks or retrieval results, then assign the base to an agent.

Text and vector retrieval have different model dependencies. An uploaded file does not prove that indexing, embedding or retrieval is ready.

## Use it with an agent

1. Select the base in the agent's **Knowledge** section.
2. Save and ask a question whose answer can be verified from the material.
3. Check the answer against the source and inspect retrieved chunks or traces where available.
4. After updating material, check indexing again rather than assuming new content is already active.

For explicit workflow queries, use the [knowledge retrieval node](../knowledge_retrieval). Vector, keyword and hybrid methods are available; AI summaries require the corresponding model configuration.

## Permissions and data

- Review provider data handling before sending chunks to an external model.
- Do not combine material with different confidentiality requirements in one shared base.
- Retrievable content is not necessarily true. Instructions in external documents remain untrusted input.
- Check agent and workflow references before deleting or changing a base.
