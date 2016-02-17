Best practices:
---

* Use a dash in a component name (my-footer instead of footer) so you don't accidentally clash with existing html tags.

* Create a folder for each component, because every component is like its own mini application. Create everything at the lowest possible level, because that minimizes the complexity of the application. If you need it somewhere else, move it higher up.

* Why do you have to 'bootstrap' the HTTP_PROVIDERS at the top level instead of just importing it where you need it? It's a collection of providers that has a platform constraint. We want to push the platform stuff to the edges of the application. You don't import it, because there is a single instance of the service which you should inject. If you import it several times, you will have several instances of the thing.

* ...HTTP_PROVIDERS 'flattens' the collection of services that HTTP_PROVIDERS really is.

* The asterisk in front of ngFor converts the thing into a template and adds some behavior and does it more efficiently than if you type it out. So for performance, use *.
