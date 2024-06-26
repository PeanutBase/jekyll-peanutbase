---
layout: blank
---

// query a local instance of the LIS GraphQL server:
const uri = "{{ site.graphql_uri }}";

// A function that gets data from a GraphQL server via a POST request.
// Adapted from https://graphql.org/graphql-js/graphql-clients/
function graphqlQuery(uri, query, variables={}, abortSignal=undefined) {
    return fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        signal: abortSignal,
    })
    .then(r => r.json())
    .then((response) => {
      if (response.errors) {
        response.errors.forEach(console.error);
      }
      return response;
    });
}
// TODO: implement error handling

// Flatten GraphQL results that contain objects
const flatten = (obj, out={}, prefixes=[]) => {
    if (obj != null) {
        Object.keys(obj).forEach(key => {
            const key_prefixes = [...prefixes, key];
            if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
                out = flatten(obj[key], out, key_prefixes);
            } else {
                const prefix_key = key_prefixes.join('_');
                out[prefix_key] = obj[key];
            }
        });
    }
    return out;
};
