# Entry-based Execution Paths

These diagrams show individual execution paths starting from application entry points. Each path represents one possible flow through the system.

## Path 1 — `src/index.js`

```mermaid
flowchart LR
  src_index_js --> src_App_js
  src_App_js --> src_pages_blogs_AllExample_js
  src_pages_blogs_AllExample_js --> src_pages_blogs_blogRegistry_js
  src_pages_blogs_blogRegistry_js --> src_pages_blogs_tracing_TracingExample_js
  src_pages_blogs_tracing_TracingExample_js --> src_components_layout_CodeBlock_js
```

**Execution chain:** src/index.js → src/App.js → src/pages/blogs/AllExample.js → src/pages/blogs/blogRegistry.js → src/pages/blogs/tracing/TracingExample.js → src/components/layout/CodeBlock.js

## Path 2 — `src/index.js`

```mermaid
flowchart LR
  src_index_js --> src_App_js
  src_App_js --> src_pages_blogs_AllExample_js
  src_pages_blogs_AllExample_js --> src_pages_blogs_blogRegistry_js
  src_pages_blogs_blogRegistry_js --> src_pages_blogs_cryptosystem_CimagesCrypt_js
  src_pages_blogs_cryptosystem_CimagesCrypt_js --> src_pages_blogs_cryptosystem_Conclusion_js
```

**Execution chain:** src/index.js → src/App.js → src/pages/blogs/AllExample.js → src/pages/blogs/blogRegistry.js → src/pages/blogs/cryptosystem/CimagesCrypt.js → src/pages/blogs/cryptosystem/Conclusion.js

## Path 3 — `src/index.js`

```mermaid
flowchart LR
  src_index_js --> src_App_js
  src_App_js --> src_pages_blogs_AllExample_js
  src_pages_blogs_AllExample_js --> src_pages_blogs_blogRegistry_js
  src_pages_blogs_blogRegistry_js --> src_pages_blogs_cryptosystem_CimagesCrypt_js
  src_pages_blogs_cryptosystem_CimagesCrypt_js --> src_pages_blogs_cryptosystem_Encryption_js
```

**Execution chain:** src/index.js → src/App.js → src/pages/blogs/AllExample.js → src/pages/blogs/blogRegistry.js → src/pages/blogs/cryptosystem/CimagesCrypt.js → src/pages/blogs/cryptosystem/Encryption.js
