---
title: Exploring the Qdrant vector search engine and vector database built with Rust
description: Qdrant is an open-source vector search engine and vector database engine built with Rust. We interviewed Andrey Vasnetsov to learn more about vector search and Qdrant.
authors:
  - name: Justin Dorfman
    url: https://twitter.com/jdorfman
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2023-04-01T00:00
tags: [blog]
slug: exploring-qdrant-vector-search
heroImage: 
socialImage: 
published: false
---

[Qdrant](https://qdrant.tech/) is an open-source vector search engine and vector database engine built with Rust. We recently caught up with [Andrey Vasnetsov](https://github.com/generall), the Co-Founder and CTO of Qdrant, to discuss the applications of vector databases and how Qdrant enables scalable filtering for vector search.

Since its start in May 2020, the Qdrant project has grown into a mature open-source project with nearly 5,000 stars on GitHub and 34 contributors. 

At Sourcegraph, we're evaluating open-source vector databases to help us scale our semantic search backend and unlock the value of machine learning in code search.

We'll highlight key moments from our interview with Andrey and take a detailed look at the Qdrant source. If you're thinking of adding vector search to your application, follow along.

<YouTube
  id="ZIzO6K81RLo"
  showTitle={true}
/>

## Scratching a developer's itch

Naming things is hard.

Even in the most strict convention-following teams, functions, variables, and classes typically have arbitrary names that barely capture their exact meaning. We've seen how the rapid incremental changes that result from agile development can lead to a gradual drift in code semantics, increasing the mismatch between names and meaning over time.

Add to this another truism: Remembering names is hard. We sometimes can't remember the names of classes and functions we created a week ago.

With a search tool that captures the semantics of our code, we can more easily find code based on meaning.

Suppose we have a function that calculates the area of a rectangle. Instead of racking our brains trying to remember whether we named it `calculate_rectangle_area`, `rect_area`, or `area_of_rectangle`, we could use a vector search engine to look for the code based on the function's purpose, such as "function to compute the area of a rectangle".

As with most of our favorite open-source development tools, Qdrant started to scratch a developer's own itch. Andrey worked on projects that required search based on unstructured data, where he had already experimented with vector search. "We had very dirty data sets," Andrey says. "A small number of keywords. So you can imagine that keywords are not good for this type of purpose."

Most text search engines today are based on _lexical search_, which matches words or phrases in a search query to documents in an index based on the exact words or phrases. Results are often ranked based on how frequently the searched phrase appears in each retrieved document.

<img src="https://i.ritzastatic.com/images/33fe0ec9b02740d2820d5613a0ecc49e/bat.jpg" alt="The 'they're the same picture' meme, where Pam from The Office can't tell the difference between a picture of a bat (the flying mammal) and a baseball bat." style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

To see how lexical search sometimes fails, consider this example:

Imagine you're at work, waiting for your Scala app to compile, and you can't stop thinking about the Italian beef sandwich you had in Chicago years ago. It was so long ago, and you visited so many cities in the Midwest, that your memory of the event is limited. You know the sandwich had a European country for a name, and you saw it recently on your favorite food blog.

Naively, you think this is something anyone can make at home, so you open the food blog's search page and enter "Mid-west European beef sandwich".

A lexical search engine would likely try to find articles that contain any of the words in your search query, and in this case, you might find something like _"Beef Up Your Prego: A Mid-Summer European Sandwich Feast"_. While Prego is a perfectly delicious sandwich, this was not the result you had in mind.

<img src="https://i.ritzastatic.com/images/28b6c0622df04f1dbe4852995d89e997/keywords.png" alt="Illustration showing keywords matched" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

To resolve this mismatch, search engines often try to extract meaning from indexed documents and search queries, then return results based on the meaning of a user's search query. This is known as _semantic search_. Big search engines like Google and Bing employ semantic search and often find relevant results based on tangentially related search queries. In our example above, Google will most likely show results for Italian beef on the first page.

Until recently, semantic search was beyond reach for most search engines because of the complexity involved in extracting, indexing, and searching over representations of meaning from text.

## How vector search enables semantic search

To search using the semantic meaning of words, we need some kind of representation of meaning. Building a vector search index starts with extracting meaning from unstructured data.

For text data, you can use word embeddings, for example, Word2Vec, or transformer-based models, such as BERT or GPT, to map words, phrases, or entire documents to vectors in a vector space. The distance between vectors in this space represents semantic similarity.

<img src="https://i.ritzastatic.com/images/6b59b7bd6b674ab38f97a670777249a0/extracting-vectors.png" alt="Extracting vectors from text documents" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

These vectors are then saved in a vector database, such as Qdrant, which enables us to find the distance between a vector representation of our search query and the vectors in the database.

In our example above, a vector representation of "European" would be close to "Italian" and "Mid-west" would be close to "Chicago". If our favorite food blog used a well-trained language model to index embeddings, we would most likely have found a recipe for an Italian beef sandwich.

Vector search is especially useful when dealing with idioms. Consider a user searching for the term "break a leg". A lexical search engine would likely return results about athletes with broken legs, maybe about chicken legs or legs of lamb. A vector representation of the meaning of the phrase "break a leg" would be closer to "theater" or "good luck" than "broken leg" (which, ironically, might be much closer to "bad luck").

Describing the real world in code can be seen as creating idioms. The words and code we use to describe the world are related to the objects described, but often in ways that are not immediately apparent. Pretrained language models can extract the relationships between code and semantics and represent them as vectors.

Vector search already solved many of Andrey's search problems, but he found he needed to combine filters with vector search. Filtering was not implemented well by any existing solutions at the time. As Andrey puts it: "I basically built Qdrant to solve my problems at work."

## Introducing Qdrant

Qdrant is a combination of two systems: A scalable vector storage engine and an efficient vector similarity engine with flexible filtering capabilities.

For the similarity engine, Qdrant employs a custom implementation of the Hierarchical Navigable Small World (HNSW) algorithm built in Rust, which makes navigating a graph of vectors extremely fast and accurate. What distinguishes Qdrant is that it stores metadata, such as filter criteria, as part of the HNSW graph. 

## How Hierarchical Navigable Small World graphs are used in vector search

HNSW (Hierarchical Navigable Small World) is an algorithm used for approximate nearest neighbor (ANN) search.

To understand how HNSW works, let's look at its predecessor, NSW (Navigable Small World). In this algorithm, vectors are organized as interconnected nodes on a graph at index time.

<img src="https://i.ritzastatic.com/images/153f6105d4374103b4873f4057dc31e0/nsw.png" alt="NSW points on a graph" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

When a user enters a search query, the query is converted to a vector called the _query vector_.

<img src="https://i.ritzastatic.com/images/7e9bb6381b92481aa435343ea0e72028/nsw-query-vector.png" alt="NSW query vector" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

The NSW search algorithm then starts at one of the nodes, called the _entry point_, then walks the graph until it finds a node that is likely to be the nearest neighbor of the query vector.

<img src="https://i.ritzastatic.com/images/ee3e75de18154f7996c3670f200eafb5/nsw-nearest.png" alt="NSW search and nearest neighbor" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

This works well for small graphs, but on graphs with millions or billions of nodes, this search algorithm is too slow.

HNSW solves the performance issue in NSW by organizing nodes into multiple layers.

To visualize the layers, imagine a new graph directly above our graph, with slightly fewer nodes and vertices than our bottom layer. Above this, another new graph has even fewer nodes.

<img src="https://i.ritzastatic.com/images/37d3a739e02a441d9c6a5ef1bc14de9e/hnsw.png" alt="HNSW layers" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

Each node is connected to its counterpart in adjacent layers.

If we visualize search as traveling along vertices between connected nodes, the long-range connections between nodes in sparse layers act as shortcuts to navigate between distant clusters of nodes.

To search this hierarchical index, the algorithm starts with one of the entry nodes in the top layer.

It searches for the approximate nearest neighbor of the search vector, then moves on to the same node on the next level down. This is repeated layer by layer until the last.

As the search algorithm moves further down the layers, the graph becomes more concentrated and compact, with vertices representing increasingly smaller regions of the data space. As a result, clusters or groups of related data points begin to emerge in lower layers. By following the paths within these clusters, the algorithm returns more precise search results.

## Filtered HNSW without disconnecting nodes

Often, when we're searching for something, we know that the result we're looking for has certain characteristics that we can filter search results by.

For instance, on a property website, we may want to filter by suburb. On a code search platform, we'll filter results by programming language.

When filtering an HNSW graph, two naive approaches would be to either perform a vector search before filtering results or to filter the nodes in the graph and then perform a vector search.

The first solution typically leads to enormous search result pre-selection, especially if filters correlate strongly with the semantic search you're performing.

The second solution, filtering out nodes, would lead to a disconnected graph.

<img src="https://i.ritzastatic.com/images/13e92153f8e34b1cb6a95c1b2f083a5c/filtered.png" alt="Illustration of a disconnected graph due to filtering" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

This highlights a common problem with vector search: Filtering out nodes decreases the probability of finding good results in vector search due to disconnected graphs.

Qdrant adds new connections to nodes on the graph based on metadata such as tags or geolocations to create subgraphs that are not disconnected by filtering.

Solving this issue was one of the main reasons Andrey started working on Qdrant. "This was our original idea – why we started to build Qdrant in the first place." 

## How to learn more about HNSW

"If you want to learn about HNSW," Andrey says, "I guess the best source is the original paper."

The original 2016 paper _Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs_ by Yury Malkov and Dmitry Yashunin is available online as [arXiv:1603.09320](https://arxiv.org/abs/1603.09320).

At only 13 pages, this dense but clear description of the HNSW algorithm is an essential read to understand this novel approach to nearest-neighbor search.

To learn more about the way Qdrant adds filtering to HNSW, Andrey recommends starting with the articles on [Qdrant's website](https://qdrant.tech/articles/).

Andrey concedes that the more-technical details of Qdrant's index are undocumented. "But yeah, we are not yet able to make everything into an article."

Since Qdrant is open source, we can learn about its HNSW implementation by reading the source.

## Integrating Qdrant with other databases

Some traditional databases have started offering solutions for vector search. In our interview, we mentioned how the [pg_vector](https://sourcegraph.com/github.com/pgvector/pgvector) extension brings vector search to PostgreSQL.

As Andrey says, "Of course, it's possible to integrate vector search into basically any database."

Clickhouse, for instance, offers tools for vector search, including [distance functions](https://clickhouse.com/docs/en/sql-reference/functions/distance-functions). These are not the central focus of Clickhouse, though.

"If you are building something the main function of which is vector search," Andrey says, "then you should probably consider alternatives where vector search is the number one citizen."

Would Qdrant consider integrating with other databases? "This is a question for other databases," Andrey says. His preferred solution would be to have Qdrant run as a service alongside traditional databases.

"Usually in a production environment, you have a single source of truth, which could be Postgres or MongoDB, a proper transactional database. And then you have a bunch of services like indexers, which consume updates from some queue provider. And then you kind of split this into different services. So, from my perspective, this approach is preferable."

## Which models yield the best embeddings?

While not strictly part of the database, creating a high-quality semantic vector space is an essential first step in building vector search solutions.

Andrey mentions that at Qdrant, they often use BERT to extract semantics from text documents.

[BERT](https://www.tensorflow.org/text/tutorials/classify_text_with_bert), or Bidirectional Encoder Representations from Transformers, is a pretrained natural language processing model developed by Google in 2018.

For multimodal encodings, where text and images are included in the vector space, Andrey recommends [CLIP](https://openai.com/research/clip) (Contrastive Language-Image Pretraining), an AI model developed by OpenAI that combines text and image understanding in a single system.

## To boost accuracy, fine-tune your model

"If you want to boost your accuracy in some specific domain," Andrey tells us, "we usually recommend doing a fine-tuning, like collecting some amount of data."

Qdrant has released a second open-source project, called [Quaterion](https://sourcegraph.com/github.com/qdrant/quaterion), to reduce the complexity and cost of fine-tuning pretrained models.

Quaterion optimizes training so that you don't need to infer the whole model in the training loop, "the training loop itself will use a cache of vectors and only update a small portion of parameters."

This optimization enables fine-tuning on commodity hardware, "And you can even fine-tune BERT models on a laptop without a GPU," Andrey adds.

## Using the right tool for the job: Why Qdrant was built in Rust

When Andrey started building Qdrant, he considered Go and Scala as candidates, but ultimately settled on Rust, even though he was not a Rust user at that point: "It was actually my first project in Rust."

"I was considering Scala, because I had some experience with Scala. But apparently, it's not really great because you have this JVM dependency."

"I decided in favor of Rust," Andrey says, "because it is advertised as a system programming language. And by system, it means that it's used to create tools used by other programs. And that's exactly the definition of the search engine. It's something which is used by other backends."

The compiler, Andrey says, has been useful in finding bugs that may have slipped by in other languages. "If I were using any other language, I would still catch them every second run."

"Rust is one of the best architectural decisions I made."

## Building a code search example app with Qdrant

Before our interview, Andrey built a code search demo application using Qdrant. To build the demo, he indexed the Qdrant source code in Qdrant and added a search UI.

<img src="https://i.ritzastatic.com/images/ff33bb3140834750acb36f72a2e42fe2/qdrant-code-search.png" alt="Qdrant code search demo application" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} /> 

The main challenge of building this demo, Andrey says, was finding a good encoder for Rust source code. "Initially, we thought it would be a problem. But it turns out that actually most of the meaning in the code is lying within names of variables or names of functions".

He found that even models optimized for text work well to index Rust source code.

The demo application uses two indexes. The first index is function names encoded with a general-purpose model. The second index is for blocks of code encoded using a model trained on source code.

When searching, the demo application uses the first index to sort results, so that a good semantic match based on function names takes priority.

Then, the app highlights code snippets only if there is an overlap in the results from the two indexes.

Because the algorithm yields approximate results and there is always a measure of similarity between all vectors in a vector space, you will find a result for any query.

This is why we found results in Qdrant's code base when we searched for "rainbow ponies".

<img src="https://i.ritzastatic.com/images/436e855edc9045678039eb5556de3e14/rainbow-ponies.png" alt="Searching a code base for Rainbow Ponies" style={{marginTop:"1rem",marginBottom:"1rem",maxWidth:550,marginLeft:0}} />

Using two indexes and highlighting only overlapping results indicates the quality of a result to end users, which is hard to estimate based on vector search in one index alone.

## How to try out Qdrant

Andrey recommends three ways of trying out Qdrant, from the easiest to the most complex.

The easiest option is to use [Qdrant cloud](https://cloud.qdrant.io/), which includes a free 1GB cluster.

The second option is to use Docker. The Qdrant team maintains a Docker image, ready to run locally or on Kubernetes using their published Helm charts.

Finally, of course, "If you are a Rust enthusiast, then you can build it from source."

## Recommended tutorial for building semantic search apps

Andrey recommends a tutorial called [Neural Search Tutorial: How to build a neural search service with BERT + Qdrant + FastAPI](https://qdrant.tech/articles/neural-search-tutorial/) on Qdrant's website: "It's basically how to build a very simple application using Quadrant, some Python FastAPI and BERT embeddings."

## Tour de Source: How Qdrant builds an HNSW index

<div id="lg" className="relative w-full overflow-visible pt-10 py-8 min-h-screen hidden lg:block" style={{minHeight: 11500, height: 11500}}>
  <iframe className="absolute w-full h-full top-0 left-0"  src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MjIzNQ==" frameborder="0" scrolling="off" loading="lazy" allowfullscreen></iframe>
</div>

<div id="sm" className="relative w-full overflow-visible pt-10 py-8 min-h-screen block lg:hidden" style={{minWidth: "300px", height: "16000px"}}>
  <iframe className="absolute w-full h-full top-0 left-0"  src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MjIzNQ==" frameborder="0" scrolling="off" loading="lazy" allowfullscreen></iframe>
</div>

## Tour de Source: The Qdrant API

<div id="lg" className="relative w-full overflow-visible pt-10 py-8 min-h-screen hidden lg:block" style={{minHeight: 11500, height: 11500}}>
  <iframe className="absolute w-full h-full top-0 left-0"  src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MjIzNg==" frameborder="0" scrolling="off" loading="lazy" allowfullscreen></iframe>
</div>

<div id="sm" className="relative w-full overflow-visible pt-10 py-8 min-h-screen block lg:hidden" style={{minWidth: "300px", height: "16000px"}}>
  <iframe className="absolute w-full h-full top-0 left-0"  src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MjIzNg==" frameborder="0" scrolling="off" loading="lazy" allowfullscreen></iframe>
</div>

## Join us to help build the next generation of developer tools

If extracting semantics from code is something you're interested in, join us as our new [Head of AI](https://boards.greenhouse.io/sourcegraph91/jobs/4803652004). Extracting vectors doesn't even scratch the surface – you'll help us shape the future of code intelligence.

## Further reading

- [Qdrant.tech](https://qdrant.tech/): The Qdrant website
- [Qdrant on GitHub](https://github.com/qdrant/qdrant): The main Qdrant repository
- [Vector Search Demos](https://qdrant.tech/demo/): A collection of vector search demos by the Qdrant team
