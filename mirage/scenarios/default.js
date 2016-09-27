export default function (server) {
    const libraries = [];

    for (let i = 0; i < 5; i += 1) {
        const books = server.createList('book', 3);

        // Get duplicate number of books attached to library, I think because of
        // https://github.com/samselikoff/ember-cli-mirage/issues/855
        libraries.push(server.create('library', { books }));
    }

    server.create('county', { libraries });
}
