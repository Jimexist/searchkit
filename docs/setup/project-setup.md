# Project Setup
Our recommended project setup is using webpack and typescript. We also support using searchkit with ES6 / Webpack and using normal library script file. Installing via NPM is recommended.

## Using Module
We recommend using webpack for module dependency management of Searchkit's src, css and static assets. requires scss, file loaders to properly resolve searchkit dependencies. See [searchkit boilerplate](www.github.com/searchkit/searchkit-boilerplate).

### Installing via NPM
Searchkit is available on [npm](http://npmjs.com/package/searchkit). Searchkit is written with typescript therefore typescript definition files are available.

```sh
  npm install searchkit --save
```

### Importing with webpack / ES6

```js

import {
	SearchBox,
	RefinementListFilter,
	Hits,
	HitsStats,
	Searcher,
	SearcherProvider,
	SearchkitComponent,
	SelectedFilters,
	MenuFilter,
	HierarchicalMenuFilter,
	Pagination,
	ResetFilters
	} from "searchkit";

```

## Using library script
Searchkit library script is available from bower or from [jsdelivr CDN](https://www.jsdelivr.com/?query=searchkit).

### Installing via bower
Requires React, ReactDOM to be included before searchkit. Within the release folder, the src `bundle.js`, the css `styles.css` and static file assets.

```sh
  bower install searchkit --save
```

### CDN Script include

```html
  <script type="text/javascript" src="//cdn.jsdelivr.net/react/0.14.5/react.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/react/0.14.5/react-dom.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/searchkit/latest/bundle.js"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/searchkit/latest/styles.css">
```

### Use

[](codepen://searchkit/vLgLOw?height=800&defaultTab=js)
