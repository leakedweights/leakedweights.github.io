export function renderNav(): string {
    return `
        <nav>
            <a class="nav-item" href="/">Home</a>
            <span class="nav-separator">/</span>
            <a class="nav-item" href="/foundations">Map of Foundations</a>
            <span class="nav-separator">/</span>
            <a class="nav-item" href="/blog">Blog</a>
        </nav>
    `
}