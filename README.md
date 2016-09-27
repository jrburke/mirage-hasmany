# Mirage-hasmany

A test of an ember-cli-mirage setup where the `library` model hasMany `book`s, but the `book` model does not belongTo `library`.

The issue is how to save a new book such that it is seen as attached to the library.

## Setup

Assumes ember-cli 2.8.x.

```
npm install && bower install
ember serve
```

To try out the issue, go to:

http://localhost:4200/counties/library/1/book/new

and try to add a book.

When clicking the `Add book` button, the book is seen temporarily on the page, but once the `library.save()` method finishes, it disappears.

This seems to happen because the PATCH for the `library` does not update the `books` relationship to account for the new `book`.

## Issue tracking

https://github.com/samselikoff/ember-cli-mirage/issues/904
