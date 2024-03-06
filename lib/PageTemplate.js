class PageTemplate {
    constructor() {
        this.title = 'Cepelinai';
    }

    head() {
        return `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.title}</title>
            LINK:CSS
        </head>`;
    }

    header() {
        return `
        <header>
            HEADER: LOGO + NAV
        </header>`;
    }

    main() {
        return `<main>MAIN CONTENT</main>`;
    }

    footer() {
        return `<footer>Copyright & copy; 2024</footer>`;
    }


    scripts() {
        return`<script src="#" type="module" defer></script>`;
    }

    render() {
        return `<!DOCTYPE html>
            <html lang="en">
                ${this.head()}
            <body>
                ${this.header()}
                ${this.main()}
                ${this.footer()}
                ${this.scripts()}
            </body>
            </html>`;
    }
}

export { PageTemplate }