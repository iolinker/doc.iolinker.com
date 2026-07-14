---
title: Knowledge Retrieval
description: Retrieve relevant knowledge from a knowledge base using vector search, keyword search, or hybrid search. Supports AI summarization of retrieved results.
meta:
  - name: keywords
    content: Knowledge Retrieval, RAG, Vector Search, Keyword Search, Hybrid Search, Embedding, AI Summarization, Low-code, AI Workflow, Process Engine
---

## Knowledge Retrieval

Retrieve relevant knowledge segments from a knowledge base. Supports three search methods: **vector search** (semantic similarity), **keyword search** (full-text matching), and **hybrid search** (combining both). Optionally, AI summarization can be enabled to generate a concise answer from the retrieved documents.

## Input

- **Knowledge** (Required): Select the knowledge base to search from. Knowledge bases are created and managed in the **Knowledge** section, where you can upload documents and configure chunking settings.

- **Input** (Required): The query text to search for in the knowledge base. You can use variable expressions to integrate outputs from other app nodes.

- **Search Method**: The search algorithm to use. Default is `vector`.

  | Method  | Description                                                                                         |
  | ------- | --------------------------------------------------------------------------------------------------- |
  | vector  | Semantic vector search — finds documents with similar meaning using embedding models. Best for natural language queries. |
  | keyword | Full-text keyword search — finds documents containing the query keywords. Best for exact term matching.                |
  | hybrid  | Combines vector and keyword search with weighted scoring (vector: 0.7, keyword: 0.3). Best for comprehensive results.  |

- **Top K**: The maximum number of knowledge segments to return. Default is based on knowledge base settings.

- **LLM Model**: Select an LLM model for AI summarization. When AI summarization is enabled, the retrieved documents will be summarized by this model into a concise answer.

- **AI Summarize**: Whether to enable AI summarization. When enabled, the LLM model will generate a summary answer based on the retrieved knowledge segments.

## Output

Returns an object containing the AI-generated answer (if summarization is enabled) and the list of retrieved document segments:

```json
{
  "answer": "The capital of France is Paris, which is known for the Eiffel Tower.",
  "docs": [
    {
      "segmentId": 1,
      "score": 0.95,
      "pageContent": "Paris is the capital of France. It is famous for the Eiffel Tower..."
    },
    {
      "segmentId": 5,
      "score": 0.82,
      "pageContent": "France is a country in Western Europe. Its capital Paris..."
    }
  ]
}
```

| Field       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| answer      | AI-generated summary answer (empty if AI summarization is disabled) |
| docs        | Array of retrieved knowledge segments                        |
| docs[].segmentId   | The segment ID within the knowledge base              |
| docs[].score       | The relevance score (0–1, higher is more relevant)    |
| docs[].pageContent | The text content of the knowledge segment              |

## How It Works

### Vector Search
1. The input query is converted into an embedding vector using the configured LLM provider's embedding model.
2. The vector is compared against pre-indexed document vectors in the knowledge base.
3. The top K most similar segments are returned ranked by cosine similarity score.

### Keyword Search
1. The input query is tokenized using a Unicode-aware tokenizer (supports Chinese and English).
2. Full-text search is performed against the indexed document segments.
3. The top K matching segments are returned ranked by relevance score.

### Hybrid Search
1. Both vector search and keyword search are executed in parallel (each retrieves 2×TopK results).
2. Results are merged by segment ID.
3. A weighted final score is calculated: `0.7 × vectorScore + 0.3 × keywordScore`.
4. Results are sorted by final score and the top K segments are returned.
