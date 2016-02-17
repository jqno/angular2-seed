Best practices:
---

* Use a dash in a component name (my-footer instead of footer) so you don't accidentally clash with existing html tags.

* Create a folder for each component, because every component is like its own mini application. Create everything at the lowest possible level, because that minimizes the complexity of the application. If you need it somewhere else, move it higher up.

* Why do you have to 'bootstrap' the HTTP_PROVIDERS at the top level instead of just importing it where you need it? It's a collection of providers that has a platform constraint. We want to push the platform stuff to the edges of the application. You don't import it, because there is a single instance of the service which you should inject. If you import it several times, you will have several instances of the thing.

* ...HTTP_PROVIDERS 'flattens' the collection of services that HTTP_PROVIDERS really is.

* The asterisk in front of ngFor converts the thing into a template and adds some behavior and does it more efficiently than if you type it out. So for performance, use the asterisk.

* It's [(...)], not ([...]). If you forget, think about: banana in the box!

* One time, I had a problem where there were no errors (runtime or compile time), but my components weren't updated when I entered data. Turns out, I had to remove a 'providers' somewhere. I don't quite understand why.

* The teacher had FORM_PROVIDERS in his code in several places. Mine still works fine without them. I don't quite understand why.

* If you want to refer to styles and templates using URLs, you can use require('./styles.css') to get relative paths instead of absolute.

* Je kunt pipes gebruiken om te pretty-printen: {{ data | json }} rendert `data` als json.

